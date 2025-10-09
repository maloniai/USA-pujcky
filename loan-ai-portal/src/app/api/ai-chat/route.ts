import { NextRequest, NextResponse } from 'next/server'
import { DefaultAzureCredential } from '@azure/identity'
import { AzureKeyCredential } from '@azure/core-auth'
import {
  OpenAIClient,
  type AzureExtensionsOptions,
  type ChatCompletions,
} from '@azure/openai'

const endpoint = process.env.AZURE_OPENAI_ENDPOINT
const deployment =
  process.env.AZURE_OPENAI_CHAT_DEPLOYMENT ??
  process.env.AZURE_OPENAI_DEPLOYMENT_NAME
const searchEndpoint = process.env.AZURE_AI_SEARCH_ENDPOINT
const searchIndex = process.env.AZURE_AI_SEARCH_INDEX
const searchApiKey = process.env.AZURE_AI_SEARCH_KEY
const apiKey = process.env.AZURE_OPENAI_API_KEY
const apiVersion = process.env.AZURE_OPENAI_API_VERSION ?? '2025-01-01-preview'

let openAIClient: OpenAIClient | undefined

if (endpoint) {
  if (apiKey && apiKey.trim().length > 0) {
    openAIClient = new OpenAIClient(
      endpoint,
      new AzureKeyCredential(apiKey),
      { apiVersion },
    )
  } else {
    openAIClient = new OpenAIClient(
      endpoint,
      new DefaultAzureCredential(),
      { apiVersion },
    )
  }
}

const MISSING_CONFIG_MESSAGE =
  'Azure OpenAI environment variables are not fully configured. Please set AZURE_OPENAI_ENDPOINT, AZURE_OPENAI_CHAT_DEPLOYMENT, and AZURE_OPENAI_API_KEY (or enable managed identity). Azure AI Search settings are optional but recommended.'

interface IncomingMessage {
  role: 'user' | 'assistant'
  content: string
}

interface ChatRequestBody {
  messages?: IncomingMessage[]
  question?: string
}

type LoanChatMessage = {
  role: 'system' | 'user' | 'assistant'
  content: string
}

function sanitizeMessages(messages: IncomingMessage[] = []): LoanChatMessage[] {
  const trimmed = messages
    .filter((message) =>
      message &&
      (message.role === 'user' || message.role === 'assistant') &&
      typeof message.content === 'string' &&
      message.content.trim().length > 0,
    )
    .map((message) => ({
      role: message.role,
      content: message.content.trim(),
    }))
    .slice(-12)

  return trimmed
}

async function withRetry<T>(action: () => Promise<T>, retries = 2): Promise<T> {
  let attempt = 0
  let lastError: unknown

  while (attempt <= retries) {
    try {
      return await action()
    } catch (error) {
      lastError = error
      if (attempt === retries) {
        break
      }

      const backoff = Math.pow(2, attempt) * 250
      await new Promise((resolve) => setTimeout(resolve, backoff))
      attempt += 1
    }
  }

  throw lastError
}

export async function POST(request: NextRequest) {
  if (!openAIClient || !deployment) {
    return NextResponse.json(
      { error: MISSING_CONFIG_MESSAGE },
      { status: 500 },
    )
  }

  let body: ChatRequestBody

  try {
    body = await request.json()
  } catch (error) {
    return NextResponse.json(
      { error: 'Invalid JSON payload.' },
      { status: 400 },
    )
  }

  const history = sanitizeMessages(body.messages)

  if (body.question && typeof body.question === 'string') {
    history.push({ role: 'user', content: body.question.trim() })
  }

  if (!history.length) {
    return NextResponse.json(
      { error: 'Missing conversation messages.' },
      { status: 400 },
    )
  }

  const systemMessage: LoanChatMessage = {
    role: 'system',
    content:
      'You are the Loan AI Portal assistant. Provide concise, professional guidance on USA personal loans, cite retrieved documents when possible, and include a short compliance reminder about consulting licensed professionals.',
  }

  const messages: LoanChatMessage[] = [systemMessage, ...history]

  try {
    const trimmedSearchEndpoint = searchEndpoint?.trim()
    const trimmedSearchIndex = searchIndex?.trim()
    const hasSearchConfig = Boolean(trimmedSearchEndpoint && trimmedSearchIndex)
    const searchExtension = hasSearchConfig
      ? {
          type: 'azure_search',
          parameters: {
            endpoint: trimmedSearchEndpoint,
            indexName: trimmedSearchIndex,
            topNDocuments: 5,
            strictness: 3,
            inScope: true,
            roleInformation:
              'Use only the knowledge base content curated for Loan AI Portal. Highlight USA-specific lending rules and reference the source title when responding.',
            authentication: searchApiKey && searchApiKey.trim().length > 0
              ? {
                  type: 'api_key',
                  key: searchApiKey,
                }
              : {
                  type: 'system_assigned_managed_identity',
                },
          },
        }
      : undefined

    const extensionOptions: AzureExtensionsOptions | undefined = searchExtension
      ? {
          extensions: [searchExtension as unknown as never],
        }
      : undefined

    const completion: ChatCompletions = await withRetry(() =>
      openAIClient.getChatCompletions(deployment, messages as unknown as any[], {
        maxTokens: 800,
        temperature: 0.2,
        ...(extensionOptions ? { azureExtensionOptions: extensionOptions } : {}),
      }),
    )

    const choice = completion.choices[0]
    const content = choice?.message?.content?.trim() ?? ''
    const citations = choice?.message?.context?.citations ?? []

    return NextResponse.json({
      message: content,
      citations,
      usage: completion.usage,
    })
  } catch (error) {
    console.error('Azure OpenAI chat error', error)
    return NextResponse.json(
      {
        error: 'Unable to generate a response at this time. Please try again shortly.',
      },
      { status: 502 },
    )
  }
}

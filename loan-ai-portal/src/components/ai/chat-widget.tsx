"use client"

import { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { MessageCircle, X, Loader2, ShieldCheck } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

type ChatRole = 'user' | 'assistant'

type Citation = {
  content: string
  title?: string
  url?: string
  filepath?: string
  chunkId?: string
}

type ChatMessage = {
  id: string
  role: ChatRole
  content: string
  citations?: Citation[]
}

const GREETING: ChatMessage = {
  id: 'intro',
  role: 'assistant',
  content:
    'Hi there! I can answer questions about personal loans across the USA, highlight state-specific insights, and share compliance reminders. How can I help you today?',
}

export function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<ChatMessage[]>([GREETING])
  const [input, setInput] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const listRef = useRef<HTMLDivElement | null>(null)
  const textareaRef = useRef<HTMLTextAreaElement | null>(null)

  const toggleOpen = useCallback(() => {
    setIsOpen((prev) => !prev)
    setError(null)
  }, [])

  useEffect(() => {
    if (isOpen) {
      textareaRef.current?.focus()
    }
  }, [isOpen])

  useEffect(() => {
    if (!isOpen) return

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsOpen(false)
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [isOpen])

  useEffect(() => {
    if (!listRef.current) return
    listRef.current.scrollTop = listRef.current.scrollHeight
  }, [messages, isLoading])

  const canSend = useMemo(() => input.trim().length > 0 && !isLoading, [input, isLoading])

  const handleSubmit = useCallback(async () => {
    const question = input.trim()
    if (!question || isLoading) return

    const userMessage: ChatMessage = {
      id: `user-${Date.now()}`,
      role: 'user',
      content: question,
    }

    const conversation = [...messages.filter((msg) => msg.id !== 'intro'), userMessage]

    setMessages((prev) => [...prev, userMessage])
    setInput('')
    setIsLoading(true)
    setError(null)

    try {
      const response = await fetch('/api/ai-chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          messages: conversation.map(({ role, content }) => ({ role, content })),
          question,
        }),
      })

      if (!response.ok) {
        throw new Error(
          'Unable to reach the AI assistant. Please try again in a few moments.',
        )
      }

      const data = await response.json()

      const assistantMessage: ChatMessage = {
        id: `assistant-${Date.now()}`,
        role: 'assistant',
        content:
          (data?.message as string | undefined)?.trim() ||
          'I ran into an issue retrieving an answer. Please try asking again.',
        citations: Array.isArray(data?.citations) ? data.citations : undefined,
      }

      setMessages((prev) => [...prev, assistantMessage])
    } catch (err) {
      console.error('ChatWidget error', err)
      setError(
        err instanceof Error
          ? err.message
          : 'Something went wrong. Please try again later.',
      )
    } finally {
      setIsLoading(false)
    }
  }, [input, isLoading, messages])

  const handleFormSubmit = useCallback(
    async (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault()
      await handleSubmit()
    },
    [handleSubmit],
  )

  const handleTextareaKeyDown = useCallback(
    async (event: React.KeyboardEvent<HTMLTextAreaElement>) => {
      if (event.key === 'Enter' && !event.shiftKey) {
        event.preventDefault()
        await handleSubmit()
      }
    },
    [handleSubmit],
  )

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      {isOpen && (
        <div
          id="loan-ai-assistant"
          className="w-[320px] sm:w-[380px] rounded-2xl border border-slate-200 bg-white shadow-2xl"
        >
          <header className="flex items-start justify-between gap-2 border-b border-slate-100 px-4 py-3">
            <div>
              <p className="text-sm font-semibold text-slate-900">Loan AI Assistant</p>
              <p className="text-xs text-slate-500">
                Grounded in our USA knowledge base and Azure AI Foundry
              </p>
            </div>
            <button
              type="button"
              onClick={toggleOpen}
              className="rounded-full p-1 text-slate-500 transition hover:bg-slate-100 hover:text-slate-700"
              aria-label="Close chat assistant"
            >
              <X className="h-4 w-4" />
            </button>
          </header>

          <div className="flex h-[440px] flex-col">
            <div
              ref={listRef}
              className="flex-1 space-y-4 overflow-y-auto bg-slate-50 px-4 py-4"
            >
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={cn('flex w-full', {
                    'justify-end': message.role === 'user',
                    'justify-start': message.role === 'assistant',
                  })}
                >
                  <div
                    className={cn(
                      'max-w-[80%] rounded-2xl px-3 py-2 text-sm shadow-sm',
                      message.role === 'user'
                        ? 'bg-blue-600 text-white'
                        : 'bg-white text-slate-900',
                    )}
                  >
                    <p className="whitespace-pre-line leading-relaxed">
                      {message.content}
                    </p>
                    {message.role === 'assistant' && message.citations && (
                      <div className="mt-2 space-y-1 border-t border-slate-100 pt-2 text-xs text-slate-500">
                        <p className="font-medium text-slate-600">Sources</p>
                        <ul className="space-y-1">
                          {message.citations.map((citation, index) => (
                            <li key={`${message.id}-citation-${index}`}>
                              {citation.url ? (
                                <a
                                  href={citation.url}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="break-words text-blue-600 hover:underline"
                                >
                                  {citation.title || citation.url}
                                </a>
                              ) : (
                                <span className="break-words">
                                  {citation.title || citation.content || 'Knowledge base excerpt'}
                                </span>
                              )}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                </div>
              ))}

              {isLoading && (
                <div className="flex w-full justify-start">
                  <div className="flex items-center gap-2 rounded-2xl bg-white px-3 py-2 text-sm text-slate-600 shadow-sm">
                    <Loader2 className="h-4 w-4 animate-spin" />
                    Thinking through the latest regulations…
                  </div>
                </div>
              )}
            </div>

            <div className="border-t border-slate-200 bg-white px-4 py-3">
              {error && (
                <div className="mb-2 rounded-md border border-red-200 bg-red-50 px-3 py-2 text-xs text-red-700">
                  {error}
                </div>
              )}

              <form className="space-y-2" onSubmit={handleFormSubmit}>
                <textarea
                  ref={textareaRef}
                  value={input}
                  onChange={(event) => setInput(event.target.value)}
                  onKeyDown={handleTextareaKeyDown}
                  rows={3}
                  placeholder="Ask about APRs, state rules, lender comparisons, or compliance guidance…"
                  className="w-full resize-none rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm text-slate-900 shadow-sm outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
                />

                <div className="flex items-center justify-between gap-2 text-[11px] text-slate-500">
                  <div className="flex items-center gap-1">
                    <ShieldCheck className="h-3.5 w-3.5 text-blue-600" />
                    <span>Educational guidance only—consult licensed experts before acting.</span>
                  </div>
                  <Button type="submit" size="sm" disabled={!canSend}>
                    {isLoading ? (
                      <span className="flex items-center gap-2">
                        <Loader2 className="h-4 w-4 animate-spin" />
                        Sending
                      </span>
                    ) : (
                      'Send'
                    )}
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}

      <Button
        type="button"
        size="lg"
        onClick={toggleOpen}
        className="shadow-xl"
        aria-expanded={isOpen}
        aria-controls="loan-ai-assistant"
      >
        <span className="flex items-center gap-2">
          <MessageCircle className="h-5 w-5" />
          {isOpen ? 'Hide AI assistant' : 'Chat with AI' }
        </span>
      </Button>
    </div>
  )
}

export default ChatWidget

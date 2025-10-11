import { buildOrganizationSchema } from '@/lib/organization-schema'
import {
  defaultSEO,
  defaultSEOEs,
  homeSEO,
  homeSEOEs,
  applySEO,
  applySEOEs,
  type SEOData,
} from '@/lib/seo'

interface ValidationResult {
  name: string
  errors: string[]
  warnings: string[]
}

const urlKeys = new Set(['url', '@id', 'logo', 'image'])

function ensureHttpsUrl(value: unknown, keyPath: string): string | null {
  if (typeof value !== 'string') {
    return `Expected ${keyPath} to be a string URL, received ${typeof value}`
  }

  try {
    const parsed = new URL(value)
    if (parsed.protocol !== 'https:') {
      return `${keyPath} must use https:// protocol`
    }
  } catch (error) {
    return `${keyPath} is not a valid URL (${(error as Error).message})`
  }

  return null
}

function walkForUrlIssues(value: unknown, path: string): string[] {
  if (Array.isArray(value)) {
    return value.flatMap((item, index) => walkForUrlIssues(item, `${path}[${index}]`))
  }

  if (value && typeof value === 'object') {
    const issues: string[] = []
    for (const [key, nestedValue] of Object.entries(value)) {
      const nextPath = path ? `${path}.${key}` : key

      if (urlKeys.has(key) && typeof nestedValue === 'string') {
        const issue = ensureHttpsUrl(nestedValue, nextPath)
        if (issue) issues.push(issue)
      }

      issues.push(...walkForUrlIssues(nestedValue, nextPath))
    }
    return issues
  }

  return []
}

function validateSchemaObject(schema: any, name: string): ValidationResult {
  const errors: string[] = []
  const warnings: string[] = []

  if (!schema || typeof schema !== 'object') {
    errors.push('Schema is missing or not an object')
    return { name, errors, warnings }
  }

  if (typeof schema['@context'] !== 'string' || !schema['@context'].includes('schema.org')) {
    errors.push('Missing or invalid @context (expected string containing "schema.org")')
  }

  const typeValue = schema['@type']
  if (!typeValue || (typeof typeValue !== 'string' && !Array.isArray(typeValue))) {
    errors.push('Missing @type declaration')
  }

  if (!schema.name || typeof schema.name !== 'string') {
    warnings.push('Missing recommended "name" property')
  }

  if (!schema.description || typeof schema.description !== 'string') {
    warnings.push('Missing recommended "description" property')
  }

  const urlIssues = walkForUrlIssues(schema, '')
  warnings.push(...urlIssues)

  return { name, errors, warnings }
}

function collectSeoSchemas(seo: SEOData, label: string): { name: string; schema: any }[] {
  const schemas: { name: string; schema: any }[] = []
  if (seo.structuredData) {
    schemas.push({ name: `${label} structuredData`, schema: seo.structuredData })
  }
  return schemas
}

async function main() {
  const checks: { name: string; schema: any }[] = [
    { name: 'Organization schema (en)', schema: buildOrganizationSchema('en') },
    { name: 'Organization schema (es)', schema: buildOrganizationSchema('es') },
    ...collectSeoSchemas(defaultSEO, 'defaultSEO (en)'),
    ...collectSeoSchemas(defaultSEOEs, 'defaultSEO (es)'),
    ...collectSeoSchemas(homeSEO, 'homeSEO (en)'),
    ...collectSeoSchemas(homeSEOEs, 'homeSEO (es)'),
    ...collectSeoSchemas(applySEO, 'applySEO (en)'),
    ...collectSeoSchemas(applySEOEs, 'applySEO (es)')
  ]

  const results = checks.map(({ name, schema }) => validateSchemaObject(schema, name))

  let hasErrors = false

  console.log('\nSchema Validation Report')
  console.log('========================\n')

  for (const result of results) {
    const status = result.errors.length === 0 ? 'PASS' : 'FAIL'
    console.log(`${status} - ${result.name}`)

    if (result.errors.length > 0) {
      hasErrors = true
      for (const error of result.errors) {
        console.log(`  ✖ ${error}`)
      }
    }

    for (const warning of result.warnings) {
      console.log(`  ⚠ ${warning}`)
    }

    console.log('')
  }

  if (hasErrors) {
    console.error('Schema validation failed. Please address the issues above.')
    process.exitCode = 1
  } else {
    console.log('All schemas passed validation checks.')
  }
}

main().catch((error) => {
  console.error('Unexpected error during schema validation:', error)
  process.exitCode = 1
})

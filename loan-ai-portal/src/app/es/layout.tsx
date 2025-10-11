import HtmlLang from '@/components/language/html-lang'

export default function SpanishLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <HtmlLang locale="es" />
      {children}
    </>
  )
}

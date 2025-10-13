import HtmlLang from '@/components/language/html-lang'

export default function PolishLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <HtmlLang locale="pl" />
      {children}
    </>
  )
}

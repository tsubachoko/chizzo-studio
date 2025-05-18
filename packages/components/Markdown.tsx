import ReactMarkdown from 'markdown-to-jsx'

export const Markdown = ({ children }: { children: string }) => {
  return <ReactMarkdown>{children}</ReactMarkdown>
}

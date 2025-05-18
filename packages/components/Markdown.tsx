import ReactMarkdown, { type MarkdownToJSX } from 'markdown-to-jsx'

const overrides: MarkdownToJSX.Overrides = {
  h1: {
    component: ({ children }) => (
      <h1 className="text-xl font-bold">{children}</h1>
    ),
  },
}

export const Markdown = ({ children }: { children: string }) => {
  return <ReactMarkdown options={{ overrides }}>{children}</ReactMarkdown>
}

import ReactMarkdown, { type MarkdownToJSX } from 'markdown-to-jsx'

const overrides: MarkdownToJSX.Overrides = {
  h1: {
    component: ({ children }) => (
      <div className="mt-4 mb-2">
        <h1 className="text-2xl font-bold">{children}</h1>
      </div>
    ),
  },
  h2: {
    component: ({ children }) => (
      <div className="mt-2 mb-1">
        <h2 className="text-lg font-bold">{children}</h2>
      </div>
    ),
  },
  h3: {
    component: ({ children }) => (
      <div className="mt-2">
        <h3 className="text-md font-bold">{children}</h3>
      </div>
    ),
  },
  p: {
    component: ({ children }) => <p className="text-md">{children}</p>,
  },
  a: {
    component: ({ children, href }) => (
      <a
        className="text-md text-blue-600"
        href={href}
        target="_blank"
        rel="noopener noreferrer"
      >
        {children}
      </a>
    ),
  },
  hr: { component: () => <hr className="mt-4 mb-4" /> },
  ul: {
    component: ({ children }) => (
      <div className="my-2">
        <ul className="m-0">{children}</ul>
      </div>
    ),
  },
  ol: {
    component: ({ children }) => (
      <div className="mt-2">
        <ol className="m-0">{children}</ol>
      </div>
    ),
  },
  li: {
    component: ({ children }) => (
      <li>
        <p className="text-md">{children}</p>
      </li>
    ),
  },
}

export const Markdown = ({ children }: { children: string }) => {
  return <ReactMarkdown options={{ overrides }}>{children}</ReactMarkdown>
}

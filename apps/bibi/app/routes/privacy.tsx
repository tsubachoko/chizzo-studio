import { Markdown } from '@common/components'

import content from './privacy_content.md?raw'

export function meta() {
  return [{ title: 'プライバシーポリシー | 1+1' }]
}

export default function Privacy() {
  return (
    <div className="text-slate-800">
      <Markdown>{content}</Markdown>
    </div>
  )
}

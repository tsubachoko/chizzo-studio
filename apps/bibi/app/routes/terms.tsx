import { Markdown } from '@common/components'

import content from './terms_content.md?raw'

export function meta() {
  return [{ title: '利用規約 | 1+1' }]
}

export default function Terms() {
  return (
    <div className="text-slate-800">
      <Markdown>{content}</Markdown>
    </div>
  )
}

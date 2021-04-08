import { useState } from 'react'
import { Nav } from '../components/nav'
import { SectionsColumn } from '../components/SectionsColumn'
import { EditorColumn } from '../components/EditorColumn'
import { PreviewColumn } from '../components/PreviewColumn'

export default function Editor() {
  const [markdown, setMarkdown] = useState('')
  return (
    <>
      <Nav />
      <div className="flex p-6">
        <SectionsColumn />
        <div className="flex flex-1">
          <EditorColumn setMarkdown={setMarkdown} />
          <PreviewColumn markdown={markdown} />
        </div>
      </div>
    </>
  )
}

import ReactMarkdown from 'react-markdown'
import { useState } from 'react'
import { Nav } from '../components/nav'
import { SectionsColumn } from '../components/SectionsColumn'
import { EditorColumn } from '../components/EditorColumn'
const gfm = require('remark-gfm')

export default function Editor() {
  const [markdown, setMarkdown] = useState('')
  return (
    <>
      <Nav />
      <div className="flex p-6">
        <SectionsColumn />
        <div className="flex flex-1">
          <EditorColumn setMarkdown={setMarkdown} />
          <div className="px-3 w-1/2 flex-1">
            <h3 className="text-lg leading-6 font-medium text-gray-900 mb-3">Preview</h3>
            <div className="h-full border border-gray-500 rounded-md p-6">
              <ReactMarkdown plugins={[gfm]}>{markdown}</ReactMarkdown>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

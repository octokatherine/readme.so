import { useState } from 'react'
import { Nav } from '../components/nav'
import { SectionsColumn } from '../components/SectionsColumn'
import { EditorColumn } from '../components/EditorColumn'
import { PreviewColumn } from '../components/PreviewColumn'
import { templates } from '../data/section-templates'

export default function Editor() {
  const [markdown, setMarkdown] = useState('')
  const [selectedSections, setSelectedSections] = useState([])
  const [sections, setSections] = useState(templates)

  return (
    <>
      <Nav />
      <div className="flex p-6">
        <SectionsColumn
          selectedSections={selectedSections}
          setSelectedSections={setSelectedSections}
          sections={sections}
          setSections={setSections}
        />
        <div className="flex flex-1">
          <EditorColumn setMarkdown={setMarkdown} />
          <PreviewColumn markdown={markdown} />
        </div>
      </div>
    </>
  )
}

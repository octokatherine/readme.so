import { useState } from 'react'
import { Nav } from '../components/nav'
import { SectionsColumn } from '../components/SectionsColumn'
import { EditorColumn } from '../components/EditorColumn'
import { PreviewColumn } from '../components/PreviewColumn'
import { templates } from '../data/section-templates'

export default function Editor() {
  const [selectedSections, setSelectedSections] = useState([])
  const [sections, setSections] = useState(templates)
  const [focusedSectionSlug, setFocusedSectionSlug] = useState(null)

  return (
    <>
      <Nav selectedSections={selectedSections} />
      <div className="flex p-6">
        <SectionsColumn
          selectedSections={selectedSections}
          setSelectedSections={setSelectedSections}
          sections={sections}
          setSections={setSections}
          setFocusedSectionSlug={setFocusedSectionSlug}
          focusedSectionSlug={focusedSectionSlug}
        />
        <div className="flex flex-1">
          <EditorColumn
            focusedSectionSlug={focusedSectionSlug}
            selectedSections={selectedSections}
            setSelectedSections={setSelectedSections}
          />
          <PreviewColumn selectedSections={selectedSections} />
        </div>
      </div>
    </>
  )
}

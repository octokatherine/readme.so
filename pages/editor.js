import { useState } from 'react'
import { Nav } from '../components/nav'
import { SectionsColumn } from '../components/SectionsColumn'
import { EditorColumn } from '../components/EditorColumn'
import { PreviewColumn } from '../components/PreviewColumn'
import { templates } from '../data/section-templates'
import { DownloadModal } from '../components/DownloadModal'
import Head from 'next/head'

export default function Editor() {
  const [selectedSections, setSelectedSections] = useState([])
  const [sections, setSections] = useState(templates)
  const [focusedSectionSlug, setFocusedSectionSlug] = useState(null)
  const [showModal, setShowModal] = useState(false)

  return (
    <>
      <Head>
        <script
          data-name="BMC-Widget"
          data-cfasync="false"
          src="https://cdnjs.buymeacoffee.com/1.0.0/widget.prod.min.js"
          data-id="katherinecodes"
          data-description="Support me on Buy me a coffee!"
          data-message=""
          data-color="#FFDD00"
          data-position="Right"
          data-x_margin="18"
          data-y_margin="18"
        ></script>
      </Head>
      <Nav selectedSections={selectedSections} setShowModal={setShowModal} />
      {showModal && <DownloadModal setShowModal={setShowModal} />}
      <div className="flex p-6">
        <SectionsColumn
          selectedSections={selectedSections}
          setSelectedSections={setSelectedSections}
          sections={sections}
          setSections={setSections}
          setFocusedSectionSlug={setFocusedSectionSlug}
          focusedSectionSlug={focusedSectionSlug}
        />
        <div className="flex flex-col flex-1 lg:flex-row">
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

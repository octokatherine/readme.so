import Head from 'next/head'
import { useEffect, useState } from 'react'

import { DownloadModal } from '../components/DownloadModal'
import { EditorColumn } from '../components/EditorColumn'
import { Nav } from '../components/Nav'
import { PreviewColumn } from '../components/PreviewColumn'
import { SectionsColumn } from '../components/SectionsColumn'
import { sectionTemplates } from '../data/section-templates'
import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

export default function Editor() {
  const { t } = useTranslation("editor")

  const [selectedSectionSlugs, setSelectedSectionSlugs] = useState([])
  const [sectionSlugs, setSectionSlugs] = useState(sectionTemplates.map((t) => t.slug))
  const [focusedSectionSlug, setFocusedSectionSlug] = useState(null)
  const [showModal, setShowModal] = useState(false)
  const [templates, setTemplates] = useState(sectionTemplates)
  const [isMobile, setIsMobile] = useState(false)
  const [showDrawer, toggleDrawer] = useState(false)

  const getTemplate = (slug) => {
    return templates.find((t) => t.slug === slug)
  }

  useEffect(() => {
    const section = 'title-and-description'
    setSectionSlugs((prev) => prev.filter((s) => s !== section))
    setSelectedSectionSlugs((prev) => [...prev, section])
    setFocusedSectionSlug(section)
  }, [])

  useEffect(() => {
    setIsMobile(/Mobi|Android/i.test(navigator.userAgent))
  }, [])

  const drawerClass = showDrawer ? '' : '-translate-x-full md:transform-none'

  return (
    <div className="w-full h-full">
      <Head>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Mali&display=swap"
          rel="stylesheet"
        />
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

      <Nav
        selectedSectionSlugs={selectedSectionSlugs}
        setShowModal={setShowModal}
        getTemplate={getTemplate}
        onMenuClick={() => toggleDrawer(!showDrawer)}
        isDrawerOpen={showDrawer}
      />
      {showModal && <DownloadModal setShowModal={setShowModal} />}
      <div className="flex md:px-6 md:pt-6 ">
        <div className={`flex flex-0 drawer-height absolute md:static p-6 md:p-0 bg-white md:bg-transparent shadow md:shadow-none z-10
        transform  transition-transform duration-500 ease-in-out ${drawerClass}`}>
          <SectionsColumn
            selectedSectionSlugs={selectedSectionSlugs}
            setSelectedSectionSlugs={setSelectedSectionSlugs}
            sectionSlugs={sectionSlugs}
            setSectionSlugs={setSectionSlugs}
            setFocusedSectionSlug={setFocusedSectionSlug}
            focusedSectionSlug={focusedSectionSlug}
            getTemplate={getTemplate}
          />
        </div>
        <div className="flex flex-1 pt-6 px-6 md:p-0">
          <EditorColumn
            focusedSectionSlug={focusedSectionSlug}
            selectedSectionSlugs={selectedSectionSlugs}
            setSelectedSectionSlugs={setSelectedSectionSlugs}
            templates={templates}
            setTemplates={setTemplates}
            renderColumnHeader={() => null}
          />
          <PreviewColumn
            selectedSectionSlugs={selectedSectionSlugs}
            getTemplate={getTemplate}
            renderColumnHeader={() => null}
          />
        </div>
      </div>

    </div>
  )
}

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...await serverSideTranslations(locale, ['editor']),
  }
})

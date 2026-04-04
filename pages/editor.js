import Head from 'next/head'
import { useEffect, useState } from 'react'
import { DownloadModal } from '../components/DownloadModal'
import EditPreviewContainer from '../components/EditPreviewContainer'
import { Nav } from '../components/Nav'
import { SectionsColumn } from '../components/SectionsColumn'
import { en_EN } from '../data/section-templates-en_EN'
import useLocalStorage from '../hooks/useLocalStorage'

export default function Editor() {
  const sectionTemplates = en_EN
  const [selectedSectionSlugs, setSelectedSectionSlugs] = useState([])
  const [sectionSlugs, setSectionSlugs] = useState(sectionTemplates.map((t) => t.slug))
  const [focusedSectionSlug, setFocusedSectionSlug] = useState(null)
  const [showModal, setShowModal] = useState(false)
  const [templates, setTemplates] = useState(sectionTemplates)
  const [showDrawer, toggleDrawer] = useState(false)
  const { backup } = useLocalStorage()

  useEffect(() => {
    if (backup) {
      setTemplates(backup)
    }
  }, [backup])

  const getTemplate = (slug) => {
    return templates.find((t) => t.slug === slug)
  }

  useEffect(() => {
    setFocusedSectionSlug(null)
  }, [])

  const drawerClass = showDrawer ? '' : '-translate-x-full md:transform-none'

  return (
    <div className="w-full h-full">
      <Head>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Mali&display=swap" rel="stylesheet" />
      </Head>

      <Nav
        selectedSectionSlugs={selectedSectionSlugs}
        setShowModal={setShowModal}
        getTemplate={getTemplate}
        onMenuClick={() => toggleDrawer(!showDrawer)}
        isDrawerOpen={showDrawer}
        focusedSectionSlug={focusedSectionSlug}
      />
      <DownloadModal showModal={showModal} setShowModal={setShowModal} />
      <div className="flex md:px-6 md:pt-6">
        <div
          className={`flex flex-0 drawer-height absolute md:static p-6 md:p-0 bg-white md:bg-transparent shadow md:shadow-none z-10 md:z-0
        transform transition-transform duration-300 ease-out ${drawerClass}`}
        >
          <SectionsColumn
            selectedSectionSlugs={selectedSectionSlugs}
            setSelectedSectionSlugs={setSelectedSectionSlugs}
            sectionSlugs={sectionSlugs}
            setSectionSlugs={setSectionSlugs}
            setFocusedSectionSlug={setFocusedSectionSlug}
            focusedSectionSlug={focusedSectionSlug}
            templates={templates}
            originalTemplate={sectionTemplates}
            setTemplates={setTemplates}
            getTemplate={getTemplate}
          />
        </div>

        <EditPreviewContainer
          templates={templates}
          setTemplates={setTemplates}
          getTemplate={getTemplate}
          focusedSectionSlug={focusedSectionSlug}
          selectedSectionSlugs={selectedSectionSlugs}
        />
      </div>
    </div>
  )
}

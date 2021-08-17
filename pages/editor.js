import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import Head from 'next/head'
import { useEffect, useState } from 'react'
import { DownloadModal } from '../components/DownloadModal'
import EditPreviewContainer from '../components/EditPreviewContainer'
import { Nav } from '../components/Nav'
import { SectionsColumn } from '../components/SectionsColumn'
import sectionTemplates from '../data/index'
import useLocalStorage from '../hooks/useLocalStorage'

export default function Editor({ sectionTemplate }) {
  const [selectedSectionSlugs, setSelectedSectionSlugs] = useState([])
  const [sectionSlugs, setSectionSlugs] = useState(sectionTemplate.map((t) => t.slug))
  const [focusedSectionSlug, setFocusedSectionSlug] = useState(null)
  const [showModal, setShowModal] = useState(false)
  const [templates, setTemplates] = useState(sectionTemplate)
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

  useEffect(() => {
    let currentSlugList = localStorage.getItem('current-slug-list')
    if (
      currentSlugList.indexOf('title-and-description') == -1 &&
      selectedSectionSlugs.indexOf('title-and-description') > -1
    ) {
      selectedSectionSlugs.splice(selectedSectionSlugs.indexOf('title-and-description'), 1)
    }
    setFocusedSectionSlug(localStorage.getItem('current-slug-list').split(',')[0])
    localStorage.setItem('current-slug-list', selectedSectionSlugs)
  }, [selectedSectionSlugs])

  const drawerClass = showDrawer ? '' : '-translate-x-full md:transform-none'

  return (
    <div className="w-full h-full">
      <Head>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Mali&display=swap" rel="stylesheet" />
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
        <div
          className={`flex flex-0 drawer-height absolute md:static p-6 md:p-0 bg-white md:bg-transparent shadow md:shadow-none z-10 md:z-0
        transform  transition-transform duration-500 ease-in-out ${drawerClass}`}
        >
          <SectionsColumn
            selectedSectionSlugs={selectedSectionSlugs}
            setSelectedSectionSlugs={setSelectedSectionSlugs}
            sectionSlugs={sectionSlugs}
            setSectionSlugs={setSectionSlugs}
            setFocusedSectionSlug={setFocusedSectionSlug}
            focusedSectionSlug={focusedSectionSlug}
            originalTemplate={sectionTemplate}
            setTemplates={setTemplates}
            getTemplate={getTemplate}
          />
        </div>

        <EditPreviewContainer
          templates={templates}
          setTemplates={setTemplates}
          getTemplate={getTemplate}
          focusedSectionSlug={focusedSectionSlug}
          setFocusedSectionSlug={setFocusedSectionSlug}
          selectedSectionSlugs={selectedSectionSlugs}
          setSelectedSectionSlugs={setSelectedSectionSlugs}
        />
      </div>
    </div>
  )
}

export const getStaticProps = async ({ locale }) => {
  const sectionTemplate = sectionTemplates[locale]
    ? sectionTemplates[locale]
    : sectionTemplates['en']
  const i18n = await serverSideTranslations(locale, ['editor'])
  return {
    props: {
      sectionTemplate,
      ...i18n,
    },
  }
}

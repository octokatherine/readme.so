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

  return (
    <>
      {isMobile ? (
        <div data-testid="mobile-screen" className="p-3">
          <div className="bg-white shadow rounded-lg mt-2.5">
            <div className="px-4 py-5 sm:p-6">
              <h3 className="max-w-full text-lg text-center font-medium leading-6 text-gray-900">
                {t('editor-desktop-optimized')}
              </h3>
              <div className="max-w-full mt-2 text-sm text-center text-gray-500">
                <p>{t('editor-visit-desktop')}</p>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="min-w-[1440px]">
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
          />
          {showModal && <DownloadModal setShowModal={setShowModal} />}
          <div className="flex p-6">
            <SectionsColumn
              selectedSectionSlugs={selectedSectionSlugs}
              setSelectedSectionSlugs={setSelectedSectionSlugs}
              sectionSlugs={sectionSlugs}
              setSectionSlugs={setSectionSlugs}
              setFocusedSectionSlug={setFocusedSectionSlug}
              focusedSectionSlug={focusedSectionSlug}
              getTemplate={getTemplate}
            />
            <div className="flex flex-1">
              <EditorColumn
                focusedSectionSlug={focusedSectionSlug}
                selectedSectionSlugs={selectedSectionSlugs}
                setSelectedSectionSlugs={setSelectedSectionSlugs}
                templates={templates}
                setTemplates={setTemplates}
              />
              <PreviewColumn
                selectedSectionSlugs={selectedSectionSlugs}
                getTemplate={getTemplate}
              />
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...await serverSideTranslations(locale, ['editor']),
  }
})

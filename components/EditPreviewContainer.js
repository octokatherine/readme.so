import { useState, useEffect } from 'react'
import { PreviewColumn } from '../components/PreviewColumn'
import { EditorColumn } from '../components/EditorColumn'
import ColumnHeader from '../components/ColumnHeader'
import { useTranslation } from 'next-i18next'
import { TAB } from '../utils/constants'
import Tabs from './Tabs'
import useDeviceDetect from '../hooks/useDeviceDetect'

const EditPreviewContainer = ({
  templates,
  setTemplates,
  getTemplate,
  focusedSectionSlug,
  selectedSectionSlugs,
  setSelectedSectionSlugs,
}) => {
  const { t } = useTranslation('editor')
  const [toggleState, setToggleState] = useState({ theme: 'vs-dark', img: 'toggle_sun.svg' })
  const [selectedTab, setSelectedTab] = useState(TAB.PREVIEW)
  const { isMobile } = useDeviceDetect()

  const toggleTheme = () => {
    toggleDarkMode(toggleState, setToggleState)
  }

  useEffect(() => {
    setSelectedTab(isMobile ? TAB.EDITOR : TAB.PREVIEW)
  }, [isMobile])

  const showEditorColumn = !isMobile || selectedTab === TAB.EDITOR
  const showPreviewColumn = !isMobile || selectedTab === TAB.PREVIEW || selectedTab === TAB.RAW
  return (
    <div className="flex flex-1 pt-6 px-6 md:p-0 flex-col md:flex-row">
      {isMobile ? (
        <Tabs
          selectedTab={selectedTab}
          setSelectedTab={setSelectedTab}
          focusedSectionSlug={focusedSectionSlug}
          toggleState={toggleState}
          toggleTheme={toggleTheme}
        />
      ) : null}

      {showEditorColumn ? (
        <div className="w-full md:w-1/2 px-3 full-screen">
          {!isMobile ? (
            <ColumnHeader.Heading>
              {t('editor-column-editor')}
              {focusedSectionSlug != 'noEdit' ? (
                <button
                  onClick={toggleTheme}
                  aria-label="Color Mode"
                  className="toggle-dark-mode focus:outline-none transition transform hover:-translate-y-1 motion-reduce:transition-none motion-reduce:transform-none"
                >
                  <img className="w-auto h-8 mr-2" alt={toggleState.theme} src={toggleState.img} />
                </button>
              ) : (
                <button />
              )}
            </ColumnHeader.Heading>
          ) : null}
          <EditorColumn
            focusedSectionSlug={focusedSectionSlug}
            selectedSectionSlugs={selectedSectionSlugs}
            setSelectedSectionSlugs={setSelectedSectionSlugs}
            templates={templates}
            setTemplates={setTemplates}
            theme={toggleState.theme}
            setToggleState={setToggleState}
          />
        </div>
      ) : null}

      {showPreviewColumn ? (
        <div className="px-3 flex-1">
          {!isMobile ? (
            <div className="border-b border-gray-200">
              <nav className="-mb-px flex space-x-8" aria-label="Tabs">
                <ColumnHeader.Tab
                  isActive={selectedTab === TAB.PREVIEW}
                  className="pb-3"
                  onClick={() => setSelectedTab(TAB.PREVIEW)}
                >
                  {t('preview-column-preview')}
                </ColumnHeader.Tab>
                <ColumnHeader.Tab
                  isActive={selectedTab === TAB.RAW}
                  className="pb-3"
                  onClick={() => setSelectedTab(TAB.RAW)}
                >
                  {t('preview-column-raw')}
                </ColumnHeader.Tab>
              </nav>
            </div>
          ) : null}
          <PreviewColumn
            selectedSectionSlugs={selectedSectionSlugs}
            getTemplate={getTemplate}
            selectedTab={selectedTab}
          />
        </div>
      ) : null}
    </div>
  )
}

const toggleDarkMode = (toggleState, setToggleState) => {
  if (toggleState.theme == 'vs-dark') {
    setToggleState({ theme: 'light', img: 'toggle_moon.svg' })
    localStorage.setItem('editor-color-theme', 'light')
  } else {
    setToggleState({ theme: 'vs-dark', img: 'toggle_sun.svg' })
    localStorage.setItem('editor-color-theme', 'vs-dark')
  }
}

export default EditPreviewContainer

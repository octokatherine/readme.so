import { useState } from 'react'
import { PreviewColumn } from '../components/PreviewColumn'
import { EditorColumn } from '../components/EditorColumn'
import ColumnHeader from '../components/ColumnHeader'
import { useTranslation } from 'next-i18next'

const TAB = {
  EDITOR: 'editor',
  PREVIEW: 'preview',
  RAW: 'raw',
}

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
  const [selectedTab, setSelectedTab] = useState('rendered')
  const handleToggle = (tabName) => {
    setSelectedTab(tabName)
  }

  const toggleTheme = () => {
    toggleDarkMode(toggleState, setToggleState)
  }

  return (
    <div className="flex flex-1 pt-6 px-6 md:p-0">
      <div className="w-1/2 px-3 full-screen">
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

        <EditorColumn
          focusedSectionSlug={focusedSectionSlug}
          selectedSectionSlugs={selectedSectionSlugs}
          setSelectedSectionSlugs={setSelectedSectionSlugs}
          templates={templates}
          setTemplates={setTemplates}
          theme={toggleState.theme}
        />
      </div>

      <div className="px-3 flex-1">
        <div className="border-b border-gray-200">
          <nav className="-mb-px flex space-x-8" aria-label="Tabs">
            <ColumnHeader.Tab
              isActive={selectedTab === 'rendered'}
              className="pb-3"
              onClick={() => handleToggle('rendered')}
            >
              {t('preview-column-preview')}
            </ColumnHeader.Tab>
            <ColumnHeader.Tab
              isActive={selectedTab !== 'rendered'}
              className="pb-3"
              onClick={() => handleToggle('raw')}
            >
              {t('preview-column-raw')}
            </ColumnHeader.Tab>
          </nav>
        </div>

        <PreviewColumn
          selectedSectionSlugs={selectedSectionSlugs}
          getTemplate={getTemplate}
          selectedTab={selectedTab}
        />
      </div>
    </div>
  )
}

const toggleDarkMode = (toggleState, setToggleState) => {
  toggleState.theme == 'vs-dark'
    ? setToggleState({ theme: 'light', img: 'toggle_moon.svg' })
    : setToggleState({ theme: 'vs-dark', img: 'toggle_sun.svg' })
}

export default EditPreviewContainer

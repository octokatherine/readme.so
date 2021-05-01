import { useState } from 'react'
import ReactMarkdown from 'react-markdown'
import RawPreview from './RawPreview'
import { useTranslation } from 'next-i18next'
import ColumnHeader from '../components/ColumnHeader'

const gfm = require('remark-gfm')
export const PreviewColumn = ({ selectedSectionSlugs, getTemplate }) => {
  const [selectedTab, setSelectedTab] = useState('rendered')
  const markdown = selectedSectionSlugs.reduce((acc, section) => {
    const template = getTemplate(section)
    return `${acc}${template.markdown}`
  }, ``)
  const handleToggle = (tabName) => {
    setSelectedTab(tabName)
  }

  const isRendered = selectedTab === 'rendered'

  const { t } = useTranslation("editor")

  return (
    <div className="px-3 flex-1">
      <div>
        <div className="border-b border-gray-200">
          <nav className="-mb-px flex space-x-8" aria-label="Tabs">
            <ColumnHeader.Tab
              className="pb-3"
              onClick={() => handleToggle('rendered')}
            >
              {t('preview-column-preview')}
            </ColumnHeader.Tab>
            <ColumnHeader.Tab
              className="pb-3"
              onClick={() => handleToggle('raw')}
            >
              {t('preview-column-raw')}
            </ColumnHeader.Tab>
          </nav>
        </div>
      </div>
      <div
        className={`h-full border border-gray-500 rounded-md p-6 preview bg-white full-screen ${isRendered ? 'overflow-y-scroll' : 'overflow-hidden'
          }`}
      >
        {isRendered ? (
          <ReactMarkdown plugins={[gfm]} children={markdown} />
        ) : (
          <RawPreview text={markdown} />
        )}
      </div>
    </div>
  )
}

import ColumnHeader from './ColumnHeader'
import { useTranslation } from 'next-i18next'
import { TAB } from '../utils/constants'

const Tabs = ({ selectedTab, setSelectedTab, focusedSectionSlug, toggleTheme, toggleState }) => {
  const { t } = useTranslation('editor')
  return (
    <div className="flex">
      <div className="flex flex-0 pb-3">
        <ColumnHeader.Tab
          isActive={selectedTab === TAB.EDITOR}
          className="flex-1"
          onClick={() => setSelectedTab(TAB.EDITOR)}
        >
          {t('editor-column-editor')}
        </ColumnHeader.Tab>
      </div>

      <div className="flex flex-1 justify-end border-b border-gray-200 dark:border-b-0">
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
    </div>
  )
}

export default Tabs

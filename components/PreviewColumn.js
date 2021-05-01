import ReactMarkdown from 'react-markdown'
import RawPreview from './RawPreview'

const gfm = require('remark-gfm')
export const PreviewColumn = ({ selectedSectionSlugs, getTemplate, selectedTab }) => {
  selectedSectionSlugs = [...new Set(selectedSectionSlugs)]
  const markdown = selectedSectionSlugs.reduce((acc, section) => {
    const template = getTemplate(section)
    return `${acc}${template.markdown}`
  }, ``)

  const isRendered = selectedTab === 'rendered'

  return (
    <div
      className={`h-full border border-gray-500 rounded-md p-6 preview bg-white full-screen ${
        isRendered ? 'overflow-y-scroll' : 'overflow-hidden'
      }`}
    >
      {isRendered ? (
        <ReactMarkdown plugins={[gfm]} children={markdown} />
      ) : (
        <RawPreview text={markdown} />
      )}
    </div>
  )
}

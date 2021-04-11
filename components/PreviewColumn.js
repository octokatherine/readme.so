import ReactMarkdown from 'react-markdown'
const gfm = require('remark-gfm')

export const PreviewColumn = ({ selectedSectionSlugs, getTemplate }) => {
  const markdown = selectedSectionSlugs.reduce((acc, section) => {
    const template = getTemplate(section)
    return `${acc}${template.markdown}`
  }, ``)

  return (
    <div className="px-3 flex-1 mt-6 lg:mt-0">
      <h3 className="text-lg leading-6 font-medium text-gray-900 mb-3 ">Preview</h3>
      <div className="h-full border border-gray-500 rounded-md p-6 preview bg-white max-h-screen overflow-y-scroll">
        <ReactMarkdown plugins={[gfm]} children={markdown} />
      </div>
    </div>
  )
}

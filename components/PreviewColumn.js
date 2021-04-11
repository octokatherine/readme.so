import ReactMarkdown from 'react-markdown'

const gfm = require('remark-gfm')

export const PreviewColumn = ({ selectedSectionSlugs, getTemplate }) => {
  const markdown = selectedSectionSlugs.reduce((acc, section) => {
    const template = getTemplate(section)
    return `${acc}${template.markdown}`
  }, ``)

  return (
    <div className="flex-1 px-3 mt-6 lg:mt-0">
      <h3 className="mb-3 text-lg font-medium leading-6 text-gray-900 ">Preview</h3>
      <div className="h-full max-h-screen p-6 overflow-y-scroll bg-white border border-gray-500 rounded-md preview">
        <ReactMarkdown plugins={[gfm]} children={markdown} />
      </div>
    </div>
  )
}

import { useState } from 'react'
import ReactMarkdown from 'react-markdown'

const gfm = require('remark-gfm')

export const PreviewColumn = ({ selectedSectionSlugs, getTemplate }) => {
  const [selectedTab, setSelectedTab] = useState('rendered')

  const markdown = selectedSectionSlugs.reduce((acc, section) => {
    const template = getTemplate(section)
    return `${acc}${template.markdown}`
  }, ``)

  return (
    <div className="px-3 flex-1 mt-6 lg:mt-0">
      {/* <h3 className="text-lg leading-6 font-medium text-gray-900 mb-3 ">Preview</h3>
      <h3 className="text-lg leading-6 font-medium text-gray-900 mb-3 ">RAW</h3> */}
      <div>
        <div className="sm:hidden">
          <label for="tabs" className="sr-only">
            Select a tab
          </label>
          <select
            id="tabs"
            name="tabs"
            className="block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-emerald-500 focus:border-emerald-500 sm:text-sm rounded-md"
          >
            <option>Preview</option>
            <option>Raw</option>
          </select>
        </div>
        <div className="hidden sm:block">
          <div className="border-b border-gray-200">
            <nav className="-mb-px flex space-x-8" aria-label="Tabs">
              <a
                href="#"
                className="border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 whitespace-nowrap pb-3 px-1 border-b-2 font-medium text-sm"
              >
                Preview
              </a>
              <a
                href="#"
                className="border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 whitespace-nowrap pb-3 px-1 border-b-2 font-medium text-sm"
              >
                Raw
              </a>
            </nav>
          </div>
        </div>
      </div>
      <div className="h-full border border-gray-500 rounded-md p-6 preview bg-white full-screen overflow-y-scroll">
        {/* {selectedTab === 'rendered' ? (
          <ReactMarkdown plugins={[gfm]} children={markdown} />
        ) : (
          <RawPreview children={markdown} />
        )} */}
        <ReactMarkdown plugins={[gfm]} children={markdown} />
      </div>
    </div>
  )
}

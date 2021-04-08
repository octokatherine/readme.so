import ReactMarkdown from 'react-markdown'
import { useState } from 'react'
import { Nav } from '../components/nav'
const gfm = require('remark-gfm')

export default function Editor() {
  const [markdown, setMarkdown] = useState('')
  return (
    <>
      <Nav />
      <div className="flex p-6">
        <div className="sections px-3">
          <h3 className="text-lg leading-6 font-medium text-gray-900 mb-3">Sections</h3>
          <ul className="space-y-3 mb-12">
            <li className="bg-white shadow rounded-md pl-3 pr-6 py-2 flex items-center">
              <img className="h-5 w-5 mr-2" src="drag.svg" alt />
              <p>Title</p>
            </li>
            <li className="bg-white shadow rounded-md pl-3 pr-6 py-2 flex items-center">
              <img className="h-5 w-5 mr-2" src="drag.svg" alt />
              <p>Installation</p>
            </li>
            <li className="bg-white shadow rounded-md pl-3 pr-6 py-2 flex items-center">
              <img className="h-5 w-5 mr-2" src="drag.svg" alt />
              <p>Contributors</p>
            </li>
          </ul>
          <h4 className="text-xs leading-6 text-gray-900 mb-3">
            Click on a section below to add it to your readme
          </h4>
          <ul className="space-y-3 mb-12">
            <li className="bg-white shadow rounded-md pl-3 pr-6 py-2 flex items-center">
              <p>Deployment</p>
            </li>
            <li className="bg-white shadow rounded-md pl-3 pr-6 py-2 flex items-center">
              <p>Lessons Learned</p>
            </li>
            <li className="bg-white shadow rounded-md pl-3 pr-6 py-2 flex items-center">
              <p>Tech Stack</p>
            </li>
          </ul>
        </div>
        <div className="flex flex-1">
          <div className="px-3 w-1/2 flex-1">
            <h3 className="text-lg leading-6 font-medium text-gray-900 mb-3">Editor</h3>
            <textarea
              id="markdown"
              name="markdown"
              rows="12"
              class="shadow-sm block w-full focus:ring-green-500 focus:border-green-500 sm:text-sm border-gray-800 rounded-md p-6 bg-gray-700 text-white"
              onChange={(e) => setMarkdown(e.target.value)}
            ></textarea>
          </div>
          <div className="px-3 w-1/2 flex-1">
            <h3 className="text-lg leading-6 font-medium text-gray-900 mb-3">Preview</h3>
            <div className="h-full border border-gray-500 rounded-md p-6">
              <ReactMarkdown plugins={[gfm]}>{markdown}</ReactMarkdown>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

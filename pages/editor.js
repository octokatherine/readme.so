import Link from 'next/link'

export default function Editor() {
  return (
    <>
      <nav className="bg-gray-800 flex justify-between p-4">
        <Link href="/">
          <a href="#">
            <span className="sr-only">Readme</span>
            <img className="h-8 w-auto sm:h-10" src="readme.svg" alt />
          </a>
        </Link>
        <button
          type="button"
          className="relative inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-green-700 hover:bg-green-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-green-500"
        >
          <span>Export</span>
        </button>
      </nav>
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
              rows="6"
              class="shadow-sm block w-full focus:ring-green-500 focus:border-green-500 sm:text-sm border-gray-800 rounded-md p-6"
            ></textarea>
          </div>
          <div className="px-3 w-1/2 flex-1">
            <h3 className="text-lg leading-6 font-medium text-gray-900 mb-3">Preview</h3>
          </div>
        </div>
      </div>
    </>
  )
}

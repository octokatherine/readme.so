export const SectionsColumn = () => {
  return (
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
  )
}

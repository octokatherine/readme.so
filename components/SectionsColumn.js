export const SectionsColumn = ({
  selectedSections,
  setSelectedSections,
  sections,
  setSections,
}) => {
  const onAddSection = (e, section) => {
    setSections((prev) => prev.filter((s) => s.slug !== section.slug))
    setSelectedSections((prev) => [...prev, section])
  }

  return (
    <div className="sections px-3">
      <h3 className="text-lg leading-6 font-medium text-gray-900 mb-3">Sections</h3>
      <ul className="space-y-3 mb-12">
        {selectedSections.map((s) => (
          <li key={s.slug} className="bg-white shadow rounded-md pl-3 pr-6 py-2 flex items-center">
            <img className="h-5 w-5 mr-2" src="drag.svg" alt />
            <p>{s.name}</p>
          </li>
        ))}
      </ul>
      <h4 className="text-xs leading-6 text-gray-900 mb-3">
        Click on a section below to add it to your readme
      </h4>
      <ul className="space-y-3 mb-12">
        {sections.map((s) => (
          <li
            onClick={(e) => onAddSection(e, s)}
            key={s.name}
            className="bg-white shadow rounded-md pl-3 pr-6 py-2 flex items-center cursor-pointer"
          >
            <p>{s.name}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}

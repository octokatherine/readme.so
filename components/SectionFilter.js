const SectionFilter = ({ searchFilter, setSearchFilter }) => {
  return (
    <input
      type="text"
      placeholder="Search for a section"
      className="mb-3 space-y-3 w-full py-2 pl-3 pr-6 bg-white dark:bg-gray-200 rounded-md shadow cursor-pointer focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-400"
      data-testid="slugs-filter"
      value={searchFilter}
      onChange={(e) => setSearchFilter(e.target.value)}
    />
  )
}

export default SectionFilter

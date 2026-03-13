const SectionFilter = ({ searchFilter, setSearchFilter }) => {
  return (
    <input
      type="text"
      placeholder="Search for a section"
      aria-label="Search for a section"
      className="mb-3 w-full py-2 pl-3 pr-6 bg-white rounded-md shadow focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-400"
      data-testid="slugs-filter"
      value={searchFilter}
      onChange={(e) => setSearchFilter(e.target.value)}
    />
  )
}

export default SectionFilter

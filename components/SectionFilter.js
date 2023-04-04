import { useEffect, useState } from 'react'

const SectionFilter = ({ sectionSlugs, getTemplate, filterSections }) => {
  const [section, setSection] = useState('')

  const getAutoCompleteResults = (section) => {
    const suggestedSlugs = sectionSlugs.filter((slug) => {
      return getTemplate(slug).name.toLowerCase().includes(section.toLowerCase())
    })

    return suggestedSlugs.length ? suggestedSlugs : [undefined]
  }

  useEffect(() => {
    if (!section) {
      filterSections([])
      return
    }

    const suggestedSlugs = getAutoCompleteResults(section)

    filterSections(suggestedSlugs)
  }, [section])

  return (
    <input
      type="text"
      placeholder="Search for a section"
      className="mb-3 space-y-3 w-full py-2 pl-3 pr-6 bg-white dark:bg-gray-200 rounded-md shadow cursor-pointer focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-400"
      data-testid="slugs-filter"
      value={section}
      onChange={(e) => setSection(e.target.value)}
    />
  )
}

export default SectionFilter

import { useMemo } from 'react'

export const EditorColumn = ({ focusedSectionSlug, selectedSections, setSelectedSections }) => {
  const getMarkdown = () => {
    const section = selectedSections.find((s) => s.slug === focusedSectionSlug)
    return section ? section.markdown : ''
  }
  const markdown = useMemo(getMarkdown, [focusedSectionSlug, selectedSections])

  const onEdit = () => {}

  return (
    <div className="px-3 w-1/2 flex-1">
      <h3 className="text-lg leading-6 font-medium text-gray-900 mb-3">Editor</h3>
      {focusedSectionSlug ? (
        <textarea
          id="markdown"
          name="markdown"
          rows="12"
          className="shadow-sm block w-full focus:ring-orange-500 focus:border-orange-500 sm:text-sm border-gray-800 rounded-md p-6 bg-gray-700 text-white"
          value={markdown}
          onChange={() => {}}
        ></textarea>
      ) : (
        <p className="font-sm text-orange-500 max-w-[16rem] mx-auto mt-10">
          Select a section from the left sidebar to edit the contents
        </p>
      )}
    </div>
  )
}

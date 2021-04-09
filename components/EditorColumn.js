import { useState, useEffect } from 'react'

export const EditorColumn = ({ focusedSectionSlug, selectedSections, setSelectedSections }) => {
  const getMarkdown = () => {
    const section = selectedSections.find((s) => s.slug === focusedSectionSlug)
    return section ? section.markdown : ''
  }
  const [markdown, setMarkdown] = useState(getMarkdown())

  useEffect(() => {
    const markdown = getMarkdown()
    setMarkdown(markdown)
  }, [focusedSectionSlug, selectedSections])

  const onEdit = (e) => {
    setMarkdown(e.target.value)
    setSelectedSections((prev) => {
      return prev.map((section) => {
        if (section.slug === focusedSectionSlug) {
          return { ...section, markdown: e.target.value }
        }
        return section
      })
    })
  }

  const handleTabs = (e) => {
    if (e.key == 'Tab') {
      e.preventDefault()
      var start = e.target.selectionStart
      var end = e.target.selectionEnd

      // set textarea value to: text before caret + tab + text after caret
      e.target.value = e.target.value.substring(0, start) + ' ' + e.target.value.substring(end)

      // put caret at right position again
      e.target.selectionStart = e.target.selectionEnd = start + 1
    }
  }

  return (
    <div className="px-3 flex-1">
      <h3 className="text-lg leading-6 font-medium text-gray-900 mb-3">Editor</h3>
      {focusedSectionSlug ? (
        <textarea
          id="markdown"
          name="markdown"
          rows="12"
          className="shadow-sm block w-full focus:ring-emerald-500 focus:border-emerald-500 sm:text-sm border-gray-800 rounded-md p-6 bg-gray-700 text-white"
          value={markdown}
          onChange={onEdit}
          onKeyDown={handleTabs}
        ></textarea>
      ) : (
        <p className="font-sm text-emerald-500 max-w-[16rem] mx-auto mt-10">
          Select a section from the left sidebar to edit the contents
        </p>
      )}
    </div>
  )
}

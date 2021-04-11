import { useState, useEffect } from 'react'
import Editor from '@monaco-editor/react'

export const EditorColumn = ({ focusedSectionSlug, templates, setTemplates }) => {
  const getMarkdown = () => {
    const section = templates.find((s) => s.slug === focusedSectionSlug)
    return section ? section.markdown : ''
  }
  const [markdown, setMarkdown] = useState(getMarkdown())

  useEffect(() => {
    const markdown = getMarkdown()
    setMarkdown(markdown)
  }, [focusedSectionSlug])

  const onEdit = (val) => {
    setMarkdown(val)
    setTemplates((prev) => {
      return prev.map((template) => {
        if (template.slug === focusedSectionSlug) {
          return { ...template, markdown: val }
        }
        return template
      })
    })
  }

  return (
    <div className="px-3 flex-1">
      <h3 className="text-lg leading-6 font-medium text-gray-900 mb-3">Editor</h3>
      {focusedSectionSlug ? (
        <Editor
          wrapperClassName="rounded-sm border border-gray-500"
          height="100vh" // By default, it fully fits with its parent
          theme="vs-dark"
          language="markdown"
          value={markdown}
          onChange={onEdit}
          loading={'Loading...'}
        />
      ) : (
        <p className="font-sm text-emerald-500 max-w-[16rem] mx-auto mt-10">
          Select a section from the left sidebar to edit the contents
        </p>
      )}
    </div>
  )
}

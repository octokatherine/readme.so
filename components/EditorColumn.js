import Editor from '@monaco-editor/react'
import { useEffect, useState } from 'react'

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
    <div className="flex-1 px-3">
      <h3 className="mb-3 text-lg font-medium leading-6 text-gray-900">Editor</h3>
      {focusedSectionSlug ? (
        <Editor
          wrapperClassName="rounded-sm border border-gray-500"
          height="100vh" // By default, it fully fits with its parent
          theme="vs-dark"
          language="markdown"
          value={markdown}
          onChange={onEdit}
          loading={'Loading...'}
          options={{
            minimap: {
              enabled: false,
            },
            lineNumbers: false,
          }}
        />
      ) : (
        <p className="font-sm text-emerald-500 max-w-[16rem] mx-auto mt-10">
          Select a section from the left sidebar to edit the contents
        </p>
      )}
    </div>
  )
}

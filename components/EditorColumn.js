import Editor from '@monaco-editor/react'
import { useTranslation } from 'next-i18next'
import { useEffect, useState, useRef } from 'react'

export const EditorColumn = ({ focusedSectionSlug, templates, setTemplates, theme }) => {
  const getMarkdown = () => {
    const section = templates.find((s) => s.slug === focusedSectionSlug)
    return section ? section.markdown : ''
  }
  const [markdown, setMarkdown] = useState(getMarkdown())

  const editorRef = useRef(null)

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

  const handleHotkey = (event) => {
    const { code, ctrlKey, repeat } = event

    if (code === 'KeyE' && repeat == false && ctrlKey === false) {
      if (!editorRef.current.hasWidgetFocus()) event.preventDefault()
      editorRef.current.focus()
    }
  }

  const handleEditorDidMount = (editor) => {
    editorRef.current = editor
  }

  useEffect(() => {
    window.addEventListener('keydown', handleHotkey)

    return () => {
      window.removeEventListener('keydown', handleHotkey)
    }
  }, [handleHotkey])

  const { t } = useTranslation('editor')

  return (
    <>
      {focusedSectionSlug == 'noEdit' ? (
        <p className="font-sm text-emerald-500 max-w-[28rem] text-center mx-auto mt-10">
          {t('editor-select')}
        </p>
      ) : (
        <Editor
          onMount={handleEditorDidMount}
          wrapperClassName="rounded-sm border border-gray-500"
          className="full-screen" // By default, it fully fits with its parent
          theme={theme}
          language="markdown"
          value={markdown}
          onChange={onEdit}
          loading={'Loading...'}
          aria-label="Markdown Editor"
          options={{
            minimap: {
              enabled: false,
            },
            lineNumbers: false,
          }}
        />
      )}
    </>
  )
}

import { useEffect, useRef, useState } from 'react'

import useDeviceDetect from '../hooks/useDeviceDetect'
import useLocalStorage from '../hooks/useLocalStorage'
import { useTranslation } from 'next-i18next'

export const EditorColumn = ({ focusedSectionSlug, templates, setTemplates, theme }) => {
  const getMarkdown = () => {
    const section = templates.find((s) => s.slug === focusedSectionSlug)
    return section ? section.markdown : ''
  }

  const [markdown, setMarkdown] = useState(getMarkdown())
  const [isFocused, setFocus] = useState(false)
  const { isMobile } = useDeviceDetect()
  const [MonacoEditor, setMonacoEditor] = useState(null)
  const { saveBackup } = useLocalStorage()

  const monacoEditorRef = useRef(null)
  const textEditorRef = useRef(null)

  useEffect(() => {
    const markdown = getMarkdown()
    setMarkdown(markdown)
  }, [focusedSectionSlug, templates])

  const onEdit = (val) => {
    setMarkdown(val)
    const newTemplates = templates.map((template) => {
      if (template.slug === focusedSectionSlug) {
        return { ...template, markdown: val }
      }
      return template
    })
    setTemplates(newTemplates)
    saveBackup(newTemplates)
  }

  const handleEditorDidMount = (editor) => {
    monacoEditorRef.current = editor
  }

  useEffect(() => {
    if (!isMobile && !MonacoEditor) {
      import('@monaco-editor/react').then((EditorComp) => {
        setMonacoEditor(EditorComp.default)
      })
    }
  }, [MonacoEditor, isMobile, setMonacoEditor])

  const { t } = useTranslation('editor')

  if (focusedSectionSlug == 'noEdit') {
    return (
      <p className="font-sm text-emerald-500 max-w-[28rem] text-center mx-auto mt-10">
        {t('editor-select')}
      </p>
    )
  }

  return (
    <>
      {isMobile ? (
        <textarea
          onFocus={() => setFocus(true)}
          onBlur={() => setFocus(false)}
          ref={textEditorRef}
          type="text"
          onChange={(e) => onEdit(e.target.value)}
          value={markdown}
          className={`full-screen rounded-sm border border-gray-500 w-full p-6 resize-none ${
            theme === 'dark' ? 'bg-gray-800 text-white' : ''
          }`}
        />
      ) : (
        MonacoEditor && (
          <MonacoEditor
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
              wordWrap: true,
            }}
          />
        )
      )}
    </>
  )
}

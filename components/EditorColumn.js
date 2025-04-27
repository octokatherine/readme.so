import { useEffect, useRef, useState } from 'react'

import useDeviceDetect from '../hooks/useDeviceDetect'
import useLocalStorage from '../hooks/useLocalStorage'
import { useTranslation } from 'next-i18next'
import { useVimMode } from '../hooks/useVimMode'

export const EditorColumn = ({ focusedSectionSlug, templates, setTemplates, theme }) => {
  const getMarkdown = () => {
    const section = templates.find((s) => s.slug === focusedSectionSlug)
    return section ? section.markdown : ''
  }

  const [markdown, setMarkdown] = useState(getMarkdown())
  const [isFocused, setFocus] = useState(false)
  const { isMobile } = useDeviceDetect()
  const [MonacoEditor, setMonacoEditor] = useState(null)
  const [editorError, setEditorError] = useState(null)
  const { saveBackup } = useLocalStorage()
  const { isVimMode } = useVimMode()

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
    if (!isMobile && !MonacoEditor && !editorError) {
      import('@monaco-editor/react')
        .then((EditorComp) => {
          setMonacoEditor(EditorComp.default)
          setEditorError(null)
        })
        .catch((error) => {
          console.error('Failed to load Monaco Editor:', error)
          setEditorError('Failed to load editor')
        })
    }
  }, [MonacoEditor, isMobile, editorError])

  const { t } = useTranslation('editor')

  if (focusedSectionSlug == 'noEdit') {
    return (
      <p className="font-sm text-emerald-500 max-w-[28rem] text-center mx-auto mt-10">
        {t('editor-select')}
      </p>
    )
  }

  if (editorError) {
    return (
      <div className="p-4 bg-red-100 border border-red-400 text-red-700 rounded">
        {t('editor-load-error')}
      </div>
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
            className="full-screen"
            theme={theme === 'dark' ? 'vs-dark' : 'vs'}
            language="markdown"
            value={markdown}
            onChange={onEdit}
            loading={<div>Loading Editor...</div>}
            aria-label="Markdown Editor"
            options={{
              minimap: {
                enabled: false,
              },
              lineNumbers: isVimMode ? 'on' : 'off',
              wordWrap: 'on',
              lineNumbersMinChars: 3,
              fontSize: 14,
              scrollBeyondLastLine: false,
              automaticLayout: true,
              fontFamily: 'Monaco, Menlo, "Ubuntu Mono", monospace',
              cursorStyle: isVimMode ? 'block' : 'line',
              cursorBlinking: isVimMode ? 'solid' : 'blink',
            }}
          />
        )
      )}
    </>
  )
}

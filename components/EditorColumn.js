import { useTranslation } from 'next-i18next'
import { useEffect, useRef, useState } from 'react'
import useDeviceDetect from '../hooks/useDeviceDetect'
import useLocalStorage from '../hooks/useLocalStorage'

export const EditorColumn = ({
  focusedSectionSlug,
  templates,
  setTemplates,
  theme,
  setToggleState,
}) => {
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

  const handleImagePaste = (e) => {
    const theEditor = monacoEditorRef.current

    if (theEditor.hasTextFocus()) {
      let selection = theEditor.getSelection()

      // get clipboard data
      const pasteData = e.clipboardData || window.clipboardData
      // get/parse HTML content
      const html = pasteData.getData('text/html') || ''
      const parsed = new DOMParser().parseFromString(html, 'text/html')
      // get image from DOM
      const img = parsed.querySelector('img')
      if (!img) {
        console.warn('no image here')
        return
      }
      const url = img.src

      theEditor.executeEdits('', [
        {
          range: new monaco.Range(
            selection.endLineNumber,
            selection.endColumn,
            selection.endLineNumber,
            selection.endColumn
          ),
          text: `![Image](${url})`,
        },
      ])

      const { endLineNumber, endColumn } = theEditor.getSelection()
      theEditor.setPosition({ lineNumber: endLineNumber, column: endColumn })
    }
  }

  useEffect(() => {
    window.addEventListener('paste', handleImagePaste)

    return () => {
      window.removeEventListener('paste', handleImagePaste)
    }
  }, [])

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

  const editorHasFocus = () => {
    let hasFocus = false
    if (isMobile) {
      hasFocus = isFocused
    } else {
      hasFocus = monacoEditorRef.current.hasWidgetFocus()
    }
    return hasFocus
  }

  const setEditorInFocus = () => {
    if (isMobile) {
      textEditorRef.current.focus()
    } else {
      monacoEditorRef.current.focus()
    }
  }

  const handleEditorDidMount = (editor) => {
    monacoEditorRef.current = editor
    setEditorColorThemeFromLocalStorage()
  }

  const setEditorColorThemeFromLocalStorage = () => {
    if (localStorage.getItem('editor-color-theme') == 'light') {
      setToggleState({ theme: 'light', img: 'toggle_moon.svg' })
    }
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
            theme === 'vs-dark' ? 'bg-gray-800 text-white' : ''
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
            }}
          />
        )
      )}
    </>
  )
}

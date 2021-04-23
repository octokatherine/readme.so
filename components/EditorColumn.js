import Editor from '@monaco-editor/react'
import { useEffect, useState, useRef } from 'react'

export const EditorColumn = ({ focusedSectionSlug, templates, setTemplates }) => {
  const getMarkdown = () => {
    const section = templates.find((s) => s.slug === focusedSectionSlug)
    return section ? section.markdown : ''
  }
  const [markdown, setMarkdown] = useState(getMarkdown())
  const [toggleState, setToggleState] = useState({ theme: 'vs-dark', img: 'toggle_sun.svg' })
  const editorRef = useRef(null);

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

  const toggleTheme = () => {
    toggleDarkMode(toggleState, setToggleState)
  }

  const handleHotkey = ((event) => {
    const { code, ctrlKey, repeat } = event;

    if(code === "KeyE" && repeat == false && ctrlKey === false) {
      if(!editorRef.current.hasWidgetFocus())
        event.preventDefault();
      editorRef.current.focus();
    }
  })

  const handleEditorDidMount = ((editor) => {
    editorRef.current = editor;
  })

  useEffect(() => {
    window.addEventListener("keydown", handleHotkey);

    return () => {
      window.removeEventListener("keydown", handleHotkey);
    }
  }, [handleHotkey]);

  return (
    <div className="w-1/2 px-3 full-screen">
      <h3 className="border-transparent text-emerald-500 whitespace-nowrap px-1 border-b-2 font-medium text-sm focus:outline-none">
        Editor
        <button
          onClick={toggleTheme}
          aria-label="Color Mode"
          className="toggle-dark-mode focus:outline-none transition transform hover:-translate-y-1 motion-reduce:transition-none motion-reduce:transform-none"
        >
          <img className="w-auto h-8 mr-2" src={toggleState.img} />
        </button>
      </h3>
      {focusedSectionSlug ? (
        <Editor
        onMount={handleEditorDidMount}
        wrapperClassName="rounded-sm border border-gray-500"
        className="full-screen" // By default, it fully fits with its parent
        theme={toggleState.theme}
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

const toggleDarkMode = (toggleState, setToggleState) => {
  toggleState.theme == 'vs-dark'
    ? setToggleState({ theme: 'light', img: 'toggle_moon.svg' })
    : setToggleState({ theme: 'vs-dark', img: 'toggle_sun.svg' })
}

import React from 'react'
import hljs from 'highlight.js'
import 'highlight.js/styles/github-dark.css'

function CodeBlock({ language, value }) {
  value = value || ''
  hljs.getLanguage(language) ? (language = language) : (language = 'plaintext')
  const highlightedCode = hljs.highlight(value, { language }).value
  return (
    <pre>
      <code className={`hljs ${language}`} dangerouslySetInnerHTML={{ __html: highlightedCode }} />
    </pre>
  )
}

export default CodeBlock

import ReactMarkdown from 'react-markdown'
import hljs from 'highlight.js'
import 'highlight.js/styles/github-dark.css'
import { TAB } from '../utils/constants'
import RawPreview from './RawPreview'

const gfm = require('remark-gfm')

export const PreviewColumn = ({ selectedSectionSlugs, getTemplate, selectedTab }) => {
  selectedSectionSlugs = [...new Set(selectedSectionSlugs)]
  const markdown = selectedSectionSlugs.reduce((acc, section) => {
    const template = getTemplate(section)
    if (template) {
      return `${acc}${template.markdown}`
    } else {
      return acc
    }
  }, ``)

  const CodeBlock = ({ language, value }) => {
    const highlightedCode = hljs.highlight(value, { language }).value

    return (
      <pre>
        <code
          className={`hljs ${language}`}
          dangerouslySetInnerHTML={{ __html: highlightedCode }}
        />
      </pre>
    )
  }

  const showPreview = selectedTab === TAB.PREVIEW
  return (
    <div
      className={`h-full preview-width md:w-auto border border-gray-500 rounded-md p-6 preview bg-white dark:bg-black full-screen 
      overflow-x-scroll md:overflow-x-auto ${
        showPreview ? 'overflow-y-scroll' : 'overflow-hidden'
      }`}
    >
      {showPreview ? (
        <ReactMarkdown
          plugins={[gfm]}
          children={markdown}
          renderers={{
            link: (props) => (
              <a href={props.href} target="_blank">
                {props.children}
              </a>
            ),
            code: CodeBlock,
          }}
        />
      ) : (
        <RawPreview text={markdown} />
      )}
    </div>
  )
}

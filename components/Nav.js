import Link from 'next/link'
import Menu from './icons/Menu'
import Close from './icons/Close'
import useDeviceDetect from '../hooks/useDeviceDetect'
import { ShareDropDown } from './ShareDropDown'

export const Nav = ({
  selectedSectionSlugs,
  setShowModal,
  getTemplate,
  onMenuClick,
  isDrawerOpen,
  focusedSectionSlug,
}) => {
  const markdown = selectedSectionSlugs.reduce((acc, section) => {
    const template = getTemplate(section)
    if (template) {
      return `${acc}${template.markdown}`
    } else {
      return acc
    }
  }, ``)

  const { isMobile } = useDeviceDetect()

  const downloadMarkdownFile = () => {
    const a = document.createElement('a')
    const blob = new Blob([markdown])
    a.href = URL.createObjectURL(blob)
    a.download = 'README.md'
    a.click()
    if (isMobile && isDrawerOpen) {
      onMenuClick()
    }
    setShowModal(true)
  }

  return (
    <nav className="flex justify-between items-center p-4 bg-gray-800 w-full">
      <Link
        href="/"
        className="focus:outline-none focus:ring-2 focus:ring-emerald-400 flex items-center"
      >
        <img className="w-auto h-12" src="readme.svg" alt="readme.so logo" />
      </Link>
      <div className="flex flex-row-reverse md:flex-row items-center">
        {/* visible for sm only */}
        <button
          className="focus:outline-none focus:ring-2 focus:ring-emerald-400"
          aria-label={isDrawerOpen ? 'Close menu' : 'Open menu'}
          onClick={onMenuClick}
        >
          {isDrawerOpen ? (
            <Close className="w-10 h-10 md:hidden fill-current text-emerald-500" />
          ) : (
            <Menu className="w-10 h-10 md:hidden fill-current text-emerald-500" />
          )}
        </button>
        {/* visible for md and above */}

        <ShareDropDown markdown={markdown} />

        <button
          type="button"
          aria-label="Download Markdown"
          className="flex flex-row relative items-center mr-4 md:mr-0 px-4 py-2 h-10 text-sm font-bold tracking-wide text-white border border-transparent rounded-md shadow-sm bg-emerald-500 hover:bg-emerald-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-emerald-500"
          onClick={downloadMarkdownFile}
        >
          <img className="w-auto h-6 cursor-pointer" src="download.svg" alt="Download" />
          <span className="hidden md:inline-block ml-2">Download</span>
        </button>
      </div>
    </nav>
  )
}

import Link from 'next/link'
import { useTranslation } from 'next-i18next'
import Menu from './icons/Menu'
import Close from './icons/Close'

export const Nav = ({
  selectedSectionSlugs,
  setShowModal,
  getTemplate,
  onMenuClick,
  isDrawerOpen,
}) => {
  const markdown = selectedSectionSlugs.reduce((acc, section) => {
    const template = getTemplate(section)
    return `${acc}${template.markdown}`
  }, ``)

  const downloadMarkdownFile = () => {
    const a = document.createElement('a')
    const blob = new Blob([markdown])
    a.href = URL.createObjectURL(blob)
    a.download = 'README.md'
    a.click()
    setShowModal(true)
  }

  const { t } = useTranslation('editor')

  return (
    <nav className="flex justify-between p-4 bg-gray-800 align-center w-full">
      <Link href="/">
        <a className="focus:outline-none focus:ring-2 focus:ring-emerald-400 flex items-center">
          <img className="w-auto h-8" src="readme.svg" alt="readme.so logo" />
          <span className="ml-2 text-white logo text-md">readme.so</span>
        </a>
      </Link>
      {/* visible for sm only */}
      <button
        className="focus:outline-none focus:ring-2 focus:ring-emerald-400"
        onClick={onMenuClick}
      >
        {isDrawerOpen ? (
          <Close className="w-10 h-10 md:hidden fill-current text-emerald-500" />
        ) : (
          <Menu className="w-10 h-10 md:hidden fill-current text-emerald-500" />
        )}
      </button>
      {/* visible for md and above */}
      <button
        type="button"
        aria-label="Download Markdown"
        className="hidden md:inline-flex relative  items-center px-4 py-2 text-sm font-bold tracking-wide text-white border border-transparent rounded-md shadow-sm bg-emerald-500 hover:bg-emerald-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-emerald-500"
        onClick={downloadMarkdownFile}
      >
        <img className="w-auto h-6 cursor-pointer" src="download.svg" />
        <span className=" ml-2 ">{t('nav-download')}</span>
      </button>
    </nav>
  )
}

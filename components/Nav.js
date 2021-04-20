import Link from 'next/link'
import { useTranslation } from 'next-i18next'

export const Nav = ({ selectedSectionSlugs, setShowModal, getTemplate }) => {
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

  const { t } = useTranslation("editor")

  return (
    <nav className="flex justify-between p-4 bg-gray-800 align-center">
      <Link href="/">
        <a className="focus:outline-none focus:ring-2 focus:ring-emerald-400 flex items-center">
          <img className="w-auto h-8 mt-1" src="readme.svg" alt="readme.so logo" />
          <span className="ml-2 -mb-2 text-white logo text-md">readme.so</span>
        </a>
      </Link>
      <button
        type="button"
        data-testid="download"
        className="relative inline-flex items-center px-4 py-2 text-sm font-bold tracking-wide text-white border border-transparent rounded-md shadow-sm bg-emerald-500 hover:bg-emerald-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-emerald-500"
        onClick={downloadMarkdownFile}
      >
        <img className="w-auto h-6 mr-2 cursor-pointer" src="download.svg" />
        <span>{t('nav-download')}</span>
      </button>
    </nav>
  )
}

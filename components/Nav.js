import Link from 'next/link'

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

  return (
    <nav className="bg-gray-800 flex justify-between p-4 align-center">
      <Link href="/">
        <div className="flex items-center">
          <img className="h-8 mt-1 w-auto cursor-pointer" src="readme.svg" />
          <p className="logo text-white ml-2 -mb-2 text-md">readme.so</p>
        </div>
      </Link>
      <button
        type="button"
        className="relative inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-bold tracking-wide rounded-md text-white bg-emerald-500 hover:bg-emerald-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-emerald-500"
        onClick={downloadMarkdownFile}
      >
        <img className="h-6 mr-2 w-auto cursor-pointer" src="download.svg" />
        <span>Download</span>
      </button>
    </nav>
  )
}

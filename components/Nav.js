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
    <nav className="flex justify-between p-4 bg-gray-800 align-center">
      <Link href="/">
        <div className="flex items-center">
          <img className="w-auto h-8 mt-1 cursor-pointer" src="readme.svg" />
          <p className="ml-2 -mb-2 text-white logo text-md">readme.so</p>
        </div>
      </Link>
      <button
        type="button"
        className="relative inline-flex items-center px-4 py-2 text-sm font-bold tracking-wide text-white bg-green-500 border border-transparent rounded-md shadow-sm hover:bg-green-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-green-500"
        onClick={downloadMarkdownFile}
      >
        <img className="w-auto h-6 mr-2 cursor-pointer" src="download.svg" />
        <span>Download</span>
      </button>
    </nav>
  )
}

import Link from 'next/link'

export const Nav = () => (
  <nav className="bg-gray-800 flex justify-between p-4 align-center">
    <Link href="/">
      <img className="h-8 mt-1 w-auto cursor-pointer" src="readme.svg" alt />
    </Link>
    <button
      type="button"
      className="relative inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-bold tracking-wide rounded-md text-white bg-orange-500 hover:bg-orange-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-orange-500"
    >
      <span>Export</span>
    </button>
  </nav>
)

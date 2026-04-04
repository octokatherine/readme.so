import Image from 'next/image'
import Link from 'next/link'

const DotPattern = ({ id, className }) => (
  <svg
    className={`absolute transform ${className}`}
    width={404}
    height={784}
    fill="none"
    viewBox="0 0 404 784"
  >
    <defs>
      <pattern id={id} x={0} y={0} width={20} height={20} patternUnits="userSpaceOnUse">
        <rect x={0} y={0} width={4} height={4} className="text-gray-200" fill="currentColor" />
      </pattern>
    </defs>
    <rect width={404} height={784} fill={`url(#${id})`} />
  </svg>
)

const Home = () => {
  return (
    <>
      <div className="bg-gray-50">
        <div className="relative overflow-hidden">
          <div className="absolute inset-y-0 w-full h-full" aria-hidden="true">
            <div className="relative h-full">
              <DotPattern
                id="dot-pattern-right"
                className="right-full translate-y-1/3 translate-x-1/4 md:translate-y-1/2 sm:translate-x-1/2 lg:translate-x-full"
              />
              <DotPattern
                id="dot-pattern-left"
                className="left-full -translate-y-3/4 -translate-x-1/4 sm:-translate-x-1/2 md:-translate-y-1/2 lg:-translate-x-3/4"
              />
            </div>
          </div>
          <div className="relative pt-6 pb-16 sm:pb-24">
            <div className="px-4 mx-auto max-w-7xl sm:px-6">
              <nav
                className="relative flex items-center justify-between md:justify-start"
                aria-label="Global"
              >
                <Link href="/">
                  <img
                    className="w-auto h-12 cursor-pointer"
                    src="readme.svg"
                    alt="readme.so logo"
                  />
                </Link>
              </nav>
            </div>

            <div className="px-4 mx-auto mt-16 max-w-7xl sm:mt-24 sm:px-6">
              <div className="text-center">
                <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
                  <span className="block">The easiest way to create a</span>
                  <span className="block text-emerald-500">README</span>
                </h1>
                <p className="max-w-md mx-auto mt-3 text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
                  Our simple editor allows you to quickly add and customize all the sections you
                  need for your project&apos;s readme
                </p>
              </div>
              <div className="flex justify-center mt-6">
                <Link
                  href="/editor"
                  className="inline-flex items-center px-8 py-3 font-medium text-xl bg-emerald-500 hover:bg-emerald-400 border border-transparent rounded-lg text-white shadow"
                >
                  Get Started
                </Link>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="absolute inset-0 flex flex-col" aria-hidden="true">
              <div className="flex-1" />
              <div className="flex-1 w-full bg-gray-800" />
            </div>
            <div className="px-4 mx-auto max-w-7xl sm:px-6">
              <Image
                className="relative rounded-lg shadow-lg"
                src="/screenshot.png"
                alt="App screenshot"
                height={700}
                width={1200}
              />
            </div>
          </div>
        </div>
        <div className="bg-gray-800">
          <div className="px-4 py-16 mx-auto max-w-7xl sm:py-24 sm:px-6 lg:px-8">
            <h2 className="text-sm font-semibold tracking-wide text-center text-gray-400">
              Made with &#9825; by{' '}
              <a
                className="hover:text-emerald-500"
                target="_blank"
                rel="noopener noreferrer"
                href="https://twitter.com/katherinecodes"
              >
                Katherine Oelsner
              </a>
            </h2>
            <div className="flex justify-center mt-4">
              <a
                href="https://github.com/octokatherine/readme.so"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="github logo"
              >
                <img className="w-auto h-6" src="github.svg" alt="github logo" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home

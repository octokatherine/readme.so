import { useRef, useState } from 'react'
import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  DialogTitle,
  Transition,
  TransitionChild,
} from '@headlessui/react'
import useLocalStorage from '../hooks/useLocalStorage'

const CustomSection = ({
  setTemplates,
  setSelectedSectionSlugs,
  setFocusedSectionSlug,
  setpageRefreshed,
  setAddAction,
}) => {
  const [showModal, setShowModal] = useState(false)
  const [title, setTitle] = useState('')
  const { saveBackup } = useLocalStorage()

  const inputRef = useRef(null)

  const addCustomSection = (e) => {
    if (e) {
      e.preventDefault()
    }

    if (!title) {
      return
    }

    setShowModal(false)

    const section = {
      slug: 'custom-' + title.toLowerCase().replace(/\s/g, '-'),
      name: title,
      markdown: `
## ${title}`,
    }

    localStorage.setItem('current-focused-slug', section.slug)
    setTemplates((prev) => {
      const newTemplates = [...prev, section]
      saveBackup(newTemplates)
      return newTemplates
    })
    setpageRefreshed(false)
    setAddAction(true)
    setSelectedSectionSlugs((prev) => [...prev, section.slug])
    setFocusedSectionSlug(localStorage.getItem('current-focused-slug'))
  }

  return (
    <>
      <Transition show={showModal}>
        <Dialog
          as="div"
          className="fixed z-10 inset-0 overflow-y-auto"
          initialFocus={inputRef}
          onClose={() => setShowModal(false)}
        >
          <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
            <TransitionChild
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <DialogBackdrop className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
            </TransitionChild>

            {/* This element is to trick the browser into centering the modal contents. */}
            <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">
              &#8203;
            </span>
            <TransitionChild
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <DialogPanel className="inline-block align-bottom bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full sm:p-6">
                <form onSubmit={addCustomSection}>
                  <div className="mt-3 text-center sm:mt-5">
                    <DialogTitle as="h3" className="text-lg leading-6 font-medium text-gray-900">
                      New Custom Section
                    </DialogTitle>
                    <div className="my-4">
                      <input
                        ref={inputRef}
                        type="text"
                        name="title"
                        id="title"
                        onChange={(e) => setTitle(e.target.value)}
                        className="shadow-sm p-2 focus:outline-none focus:ring-2 focus:ring-emerald-400 block w-full sm:text-sm border border-gray-300 rounded-md"
                        placeholder="Section Title"
                      />
                    </div>
                  </div>
                </form>
                <div className="mt-5 sm:mt-6 sm:grid sm:grid-cols-2 sm:gap-3 sm:grid-flow-row-dense">
                  <button
                    type="submit"
                    className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-emerald-500 text-base font-medium text-white hover:bg-emerald-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-400 sm:col-start-2 sm:text-sm disabled:opacity-50"
                    disabled={!title}
                    onClick={addCustomSection}
                  >
                    Add Section
                  </button>
                  <button
                    type="button"
                    className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-400 sm:mt-0 sm:col-start-1 sm:text-sm"
                    onClick={() => setShowModal(false)}
                  >
                    Cancel
                  </button>
                </div>
              </DialogPanel>
            </TransitionChild>
          </div>
        </Dialog>
      </Transition>

      <div className="mb-3">
        <button
          className="flex items-center justify-center block w-full h-full py-2 pl-3 pr-6 bg-white font-bold rounded-md shadow cursor-pointer focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-400"
          type="button"
          onClick={() => setShowModal(true)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
              clipRule="evenodd"
            />
          </svg>
          <span className="ml-1">Custom Section</span>
        </button>
      </div>
    </>
  )
}

export default CustomSection

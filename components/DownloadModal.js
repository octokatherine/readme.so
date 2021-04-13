import { useTranslation } from 'next-i18next'

export const DownloadModal = ({ setShowModal }) => {
  const { t } = useTranslation("editor")

  return (
    <>
      {/* This example requires Tailwind CSS v2.0+ */}
      <div
        className="fixed inset-0 z-10 overflow-y-auto"
        aria-labelledby="modal-title"
        role="dialog"
        aria-modal="true"
      >
        <div className="flex items-end justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:block sm:p-0">
          {/*
Background overlay, show/hide based on modal state.

Entering: "ease-out duration-300"
  From: "opacity-0"
  To: "opacity-100"
Leaving: "ease-in duration-200"
  From: "opacity-100"
  To: "opacity-0"
    */}
          <div
            className="fixed inset-0 transition-opacity bg-gray-500 bg-opacity-75"
            aria-hidden="true"
            onClick={() => setShowModal(false)}
          />
          {/* This element is to trick the browser into centering the modal contents. */}
          <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">
            ​
          </span>
          {/*
Modal panel, show/hide based on modal state.

Entering: "ease-out duration-300"
  From: "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
  To: "opacity-100 translate-y-0 sm:scale-100"
Leaving: "ease-in duration-200"
  From: "opacity-100 translate-y-0 sm:scale-100"
  To: "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
    */}
          <div className="inline-block px-4 pt-5 pb-4 overflow-hidden text-left align-bottom transition-all transform bg-white rounded-lg shadow-xl sm:my-8 sm:align-middle sm:max-w-sm sm:w-full sm:p-6">
            <div>
              <p className="text-center text-7xl">🎉</p>
              <div className="mt-3 text-center sm:mt-5">
                <h3 className="text-lg font-medium leading-6 text-gray-900" id="modal-title">
                  {t('download-readme-generated')}
                </h3>
                <div className="mt-2">
                  <p className="text-sm text-gray-500">
                    {t('download-reach-out')}{' '}
                    <a
                      href="https://twitter.com/katherinecodes"
                      target="_blank"
                      className="text-emerald-500 hover:text-emerald-400"
                    >
                      Twitter 
                    </a>{' '}
                    {t('download-feedback')}
                  </p>
                  <p className="mt-3 text-sm text-gray-500">
                    {t('download-coffee')}
                  </p>
                </div>
              </div>
            </div>
            <div className="flex justify-center mx-auto mt-5 sm:mt-6">
              <a href="https://www.buymeacoffee.com/katherinecodes">
                <img src="https://img.buymeacoffee.com/button-api/?text=Buy me a coffee&emoji=&slug=katherinecodes&button_colour=FFDD00&font_colour=000000&font_family=Cookie&outline_colour=000000&coffee_colour=ffffff" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

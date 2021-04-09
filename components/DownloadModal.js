export const DownloadModal = ({ setShowModal }) => {
  return (
    <>
      {/* This example requires Tailwind CSS v2.0+ */}
      <div
        className="fixed z-10 inset-0 overflow-y-auto"
        aria-labelledby="modal-title"
        role="dialog"
        aria-modal="true"
      >
        <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
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
            className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
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
          <div className="inline-block align-bottom bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-sm sm:w-full sm:p-6">
            <div>
              <p className="text-7xl text-center">🎉</p>
              <div className="mt-3 text-center sm:mt-5">
                <h3 className="text-lg leading-6 font-medium text-gray-900" id="modal-title">
                  Readme Generated!
                </h3>
                <div className="mt-2">
                  <p className="text-sm text-gray-500">
                    Thanks for using readme.so! Feel free to reach out to me on{' '}
                    <a
                      href="https://twitter.com/katherinecodes"
                      className="text-emerald-500 hover:text-emerald-400"
                    >
                      Twitter
                    </a>{' '}
                    with any feedback.
                  </p>
                  <p className="text-sm text-gray-500 mt-3">
                    If you found this product helpful, consider supporting me with a cup of coffee!
                  </p>
                </div>
              </div>
            </div>
            <div className="mt-5 sm:mt-6 mx-auto flex justify-center">
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

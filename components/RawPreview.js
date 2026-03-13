import React, { useEffect, useRef, useState } from 'react'

export default function RawPreview({ text }) {
  const textAreaRef = useRef(null)
  const [copySuccess, setCopySuccess] = useState(false)
  const timerRef = useRef(null)

  useEffect(() => {
    return () => {
      if (timerRef.current) {
        clearTimeout(timerRef.current)
      }
    }
  }, [])

  const copyToClipBoard = async () => {
    try {
      await navigator.clipboard.writeText(text)
    } catch {
      // Fallback for older browsers or insecure contexts
      textAreaRef.current.select()
      document.execCommand('copy')
    }
    setCopySuccess(true)
    timerRef.current = setTimeout(() => {
      setCopySuccess(false)
    }, 3000)
  }

  return (
    <div className="h-full relative">
      <button
        className="absolute top-0 right-7 rounded focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-400"
        type="button"
        aria-label={copySuccess ? 'Copied' : 'Copy to clipboard'}
        onClick={copyToClipBoard}
      >
        {!copySuccess ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 hover:text-emerald-500 transition-colors"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
            />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-emerald-500"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"
            />
          </svg>
        )}
      </button>
      <textarea
        ref={textAreaRef}
        readOnly
        className="h-full w-full resize-none bg-white focus:outline-none"
        value={text}
      ></textarea>
    </div>
  )
}

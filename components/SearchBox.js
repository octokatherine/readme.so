// components/SearchBox.js
import { useState, useEffect } from 'react'

export default function SearchBox({ placeholder = 'Search sections...', onSearch }) {
  const [value, setValue] = useState('')

  // 简单的防抖，300ms
  useEffect(() => {
    const id = setTimeout(() => {
      onSearch && onSearch(value.trim())
    }, 300)
    return () => clearTimeout(id)
  }, [value, onSearch])

  return (
    <div className="w-full">
      <label className="sr-only">Search</label>
      <div className="relative text-gray-600">
        <input
          type="search"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder={placeholder}
          className="w-full px-4 py-2 text-sm border rounded-md focus:outline-none focus:ring focus:ring-emerald-200 dark:bg-gray-700 dark:text-gray-100"
          aria-label="Search sections"
        />
        <span className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-400 text-sm">⌕</span>
      </div>
    </div>
  )
}

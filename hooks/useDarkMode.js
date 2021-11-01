import { useState, useEffect } from 'react'

const isBrowser = typeof window !== 'undefined'

export default function useDarkMode() {
  // Define the localstorage key
  const storageName = 'color-theme'
  // Get value from localstorage by key
  const storageTheme = isBrowser ? window.localStorage.getItem(storageName) : 'light'

  const [enabled, setEnabled] = useState(storageTheme === 'dark')

  // Fire off effect that add/removes dark mode class
  useEffect(() => {
    const className = 'dark'
    const element = window.document.documentElement
    if (enabled) {
      localStorage.setItem(storageName, 'dark')
      element.classList.add(className)
    } else {
      localStorage.setItem(storageName, 'light')
      element.classList.remove(className)
    }
  }, [enabled])

  // Return enabled state and setter
  return [enabled, setEnabled]
}

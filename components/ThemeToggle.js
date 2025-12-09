import { useEffect, useState } from 'react'

export default function ThemeToggle() {
  // Initialize theme: prioritize local storage, otherwise default to light mode
  const [isDarkMode, setIsDarkMode] = useState(false)

  // Read user preferences when the page loads
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme')
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches

    // Use stored value if available; otherwise use system preference
    if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
      setIsDarkMode(true)
      document.documentElement.setAttribute('data-theme', 'dark')
    }
  }, [])

  // Toggle theme
  const toggleTheme = () => {
    const newTheme = isDarkMode ? 'light' : 'dark'
    setIsDarkMode(!isDarkMode)
    document.documentElement.setAttribute('data-theme', newTheme)
    localStorage.setItem('theme', newTheme) // Save preference
  }

  return (
    <button className="theme-toggle" onClick={toggleTheme}>
      {isDarkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
      <span>{isDarkMode ? '☀️' : '🌙'}</span>
    </button>
  )
}

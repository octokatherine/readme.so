export default function DarkModeToggle() {
  const toggleTheme = () => {
    const current = document.documentElement.classList.contains('dark') ? 'dark' : 'light'
    const next = current === 'light' ? 'dark' : 'light'

    document.documentElement.classList.toggle('dark', next === 'dark')
    localStorage.setItem('theme', next)
  }

  return (
    <button onClick={toggleTheme} className="px-3 py-1 border rounded mt-4">
      Toggle Dark Mode
    </button>
  )
}

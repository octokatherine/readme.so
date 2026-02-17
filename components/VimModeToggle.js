import { useState, useEffect } from 'react'

export const VimModeToggle = () => {
  const [isVimMode, setIsVimMode] = useState(false)

  useEffect(() => {
    const saved = localStorage.getItem('vim-mode')
    if (saved !== null) {
      setIsVimMode(saved === 'true')
    }
  }, [])

  const handleToggle = (e) => {
    const checked = e.target.checked
    setIsVimMode(checked)
    localStorage.setItem('vim-mode', checked.toString())

    const event = new CustomEvent('vim-mode-change', {
      detail: { enabled: checked },
    })
    window.dispatchEvent(event)
  }

  return (
    <div className="vim-mode-toggle">
      <label className="flex items-center space-x-2 cursor-pointer">
        <input type="checkbox" checked={isVimMode} onChange={handleToggle} className="w-4 h-4" />
        <span className="text-sm font-medium">Enable Vim Mode</span>
      </label>
      {isVimMode && (
        <div className="vim-shortcut-help mt-2 text-xs text-gray-500">
          <span className="font-mono">
            <kbd className="px-1 py-0.5 bg-gray-100 rounded">i</kbd> Insert |{' '}
            <kbd className="px-1 py-0.5 bg-gray-100 rounded">Esc</kbd> Normal |{' '}
            <kbd className="px-1 py-0.5 bg-gray-100 rounded">v</kbd> Visual
          </span>
        </div>
      )}
    </div>
  )
}

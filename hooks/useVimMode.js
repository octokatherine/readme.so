import { useState, useEffect, useCallback } from 'react'

export const useVimMode = () => {
  const [mode, setMode] = useState('normal')
  const [lastAction, setLastAction] = useState('')
  const [isVimMode, setIsVimMode] = useState(true)

  const moveCursor = (direction) => {
    setLastAction(`move-${direction}`)
    console.log(`Move cursor ${direction}`)
  }

  const moveToLineStart = () => {
    setLastAction('move-line-start')
    console.log('Move to line start')
  }

  const moveToLineEnd = () => {
    setLastAction('')
    console.log('Move to line end')
  }

  const moveToNextWord = () => {
    setLastAction('move-next-word')
    console.log('Move to next word')
  }

  const moveToPreviousWord = () => {
    setLastAction('move-previous-word')
    console.log('Move to previous word')
  }

  const deleteChar = () => {
    setLastAction('delete-char')
    console.log('Delete character')
  }

  const deleteLine = () => {
    setLastAction('delete-line')
    console.log('Delete line')
  }

  const copyLine = () => {
    setLastAction('copy-line')
    console.log('Copy line')
  }

  const paste = () => {
    setLastAction('paste')
    console.log('Paste')
  }

  const undo = () => {
    setLastAction('undo')
    console.log('Undo')
  }

  const startSearch = () => {
    setLastAction('start-search')
    console.log('Start search')
  }

  const handleKeyDown = useCallback(
    (event) => {
      if (mode === 'insert' && event.key !== 'Escape') return

      event.preventDefault()

      const key = event.key
      const ctrl = event.ctrlKey
      const shift = event.shiftKey

      if (key === 'Escape') {
        setMode('normal')
        setLastAction('escape')
        return
      }

      if (key === 'i' && mode === 'normal') {
        setMode('insert')
        setLastAction('enter-insert')
        return
      }

      if (key === 'v' && mode === 'normal') {
        setMode('visual')
        setLastAction('enter-visual')
        return
      }

      if (mode === 'normal') {
        switch (key) {
          case 'h':
            moveCursor('left')
            break
          case 'j':
            moveCursor('down')
            break
          case 'k':
            moveCursor('up')
            break
          case 'l':
            moveCursor('right')
            break
          case '0':
            moveToLineStart()
            break
          case '$':
            moveToLineEnd()
            break
          case 'w':
            moveToNextWord()
            break
          case 'b':
            moveToPreviousWord()
            break
          case 'x':
            deleteChar()
            break
          case 'd':
            if (shift) deleteLine()
            break
          case 'y':
            if (shift) copyLine()
            break
          case 'p':
            paste()
            break
          case 'u':
            undo()
            break
          case '/':
            startSearch()
            break
          default:
            event.preventDefault()
            break
        }
      }
    },
    [mode]
  )

  useEffect(() => {
    if (isVimMode) {
      document.addEventListener('keydown', handleKeyDown)
      return () => document.removeEventListener('keydown', handleKeyDown)
    }
  }, [handleKeyDown, isVimMode])

  return { mode, lastAction, isVimMode, setIsVimMode }
}

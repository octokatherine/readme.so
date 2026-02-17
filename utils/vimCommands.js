// utils/vimCommands.js
export const VimCommands = {
  moveCursor(direction) {
    const textarea = document.querySelector('.editor-column textarea')
    if (!textarea) return

    const currentPos = textarea.selectionStart

    switch (direction) {
      case 'left':
        textarea.setSelectionRange(currentPos - 1, currentPos - 1)
        break
      case 'right':
        textarea.setSelectionRange(currentPos + 1, currentPos + 1)
        break
      case 'up':
        const lines = textarea.value.substring(0, currentPos).split('\n')
        if (lines.length > 1) {
          const currentLineIndex = lines.length - 1
          const currentColumn = lines[lines.length - 1].length
          const prevLine = lines[currentLineIndex - 1]
          const prevLineLength = prevLine ? prevLine.length : 0
          const targetColumn = Math.min(currentColumn, prevLineLength)

          let targetPos = 0
          for (let i = 0; i < currentLineIndex - 1; i++) {
            targetPos += lines[i].length + 1
          }
          targetPos += targetColumn
          textarea.setSelectionRange(targetPos, targetPos)
        }
        break
      case 'down':
        const allLines = textarea.value.split('\n')
        const linesUpToCursor = textarea.value.substring(0, currentPos).split('\n')
        const currentLineIndex = linesUpToCursor.length - 1
        const currentColumn = linesUpToCursor[currentLineIndex].length

        if (currentLineIndex < allLines.length - 1) {
          const nextLine = allLines[currentLineIndex + 1]
          const nextLineLength = nextLine ? nextLine.length : 0
          const targetColumn = Math.min(currentColumn, nextLineLength)

          let targetPos = 0
          for (let i = 0; i <= currentLineIndex; i++) {
            targetPos += allLines[i].length + 1 // +1 for newline
          }
          targetPos += targetColumn
          textarea.setSelectionRange(targetPos, targetPos)
        }
        break
    }
  },

  deleteChar() {
    const textarea = document.querySelector('.editor-column textarea')
    if (!textarea) return

    const start = textarea.selectionStart
    const end = textarea.selectionEnd

    if (start === end) {
      const newValue = textarea.value.slice(0, start) + textarea.value.slice(start + 1)
      textarea.value = newValue
      textarea.setSelectionRange(start, start)
    } else {
      const newValue = textarea.value.slice(0, start) + textarea.value.slice(end)
      textarea.value = newValue
      textarea.setSelectionRange(start, start)
    }
  },

  deleteLine() {
    const textarea = document.querySelector('.editor-column textarea')
    if (!textarea) return

    const value = textarea.value
    const cursorPos = textarea.selectionStart

    const lines = value.split('\n')
    let lineStart = 0
    let lineIndex = 0

    for (let i = 0; i < lines.length; i++) {
      const lineEnd = lineStart + lines[i].length
      if (cursorPos >= lineStart && cursorPos <= lineEnd) {
        lineIndex = i
        break
      }
      lineStart = lineEnd + 1
    }

    lines.splice(lineIndex, 1)
    textarea.value = lines.join('\n')

    const newCursorPos = Math.min(cursorPos, value.length - 1)
    textarea.setSelectionRange(newCursorPos, newCursorPos)
  },

  copyLine() {
    const textarea = document.querySelector('.editor-column textarea')
    if (!textarea) return

    const value = textarea.value
    const cursorPos = textarea.selectionStart

    const lines = value.split('\n')
    let lineStart = 0
    let lineIndex = 0

    for (let i = 0; i < lines.length; i++) {
      const lineEnd = lineStart + lines[i].length
      if (cursorPos >= lineStart && cursorPos <= lineEnd) {
        lineIndex = i
        break
      }
      lineStart = lineEnd + 1
    }

    navigator.clipboard.writeText(lines[lineIndex]).then(() => {
      console.log('Line copied to clipboard')
    })
  },

  undo() {
    document.execCommand('undo')
  },

  redo() {
    document.execCommand('redo')
  },
}

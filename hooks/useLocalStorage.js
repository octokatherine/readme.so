import { useEffect, useState } from 'react'

export default function useLocalStorage() {
  const [backup, setBackup] = useState(null)
  const [timer, setTimer] = useState(null)

  useEffect(() => {
    const localBackup = localStorage.getItem('readme-backup')

    if (localBackup) {
      setBackup(JSON.parse(localBackup))
    }
  }, [])

  const saveBackup = (templates) => {
    try {
      if (timer) {
        clearTimeout(timer)
      }

      setTimer(
        setTimeout(() => {
          localStorage.setItem('readme-backup', JSON.stringify(templates))
        }, 1000)
      )
    } catch (_) {
      console.error('Failed to create local backup')
    }
  }

  const deleteBackup = () => {
    try {
      localStorage.removeItem('readme-backup')
    } catch (_) {
      console.error('Failed to delete local backup')
    }
  }

  return { backup, saveBackup, deleteBackup }
}

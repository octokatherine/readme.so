import { renderHook, act } from '@testing-library/react-hooks'

import useLocalStorage from '../hooks/useLocalStorage'

describe('useLocalStorage', () => {
  beforeEach(() => {
    localStorage.clear()
    jest.useFakeTimers()
  })

  test('should load backup from localStorage', () => {
    localStorage.setItem('readme-backup', JSON.stringify({ test: 1 }))

    const { result } = renderHook(() => useLocalStorage())
    expect(result.current.backup).toEqual({ test: 1 })
  })

  test('saveBackup should write data', () => {
    const { result } = renderHook(() => useLocalStorage())

    act(() => {
      result.current.saveBackup({ hello: 'world' })
      jest.runAllTimers()
    })

    expect(localStorage.getItem('readme-backup')).toBe(JSON.stringify({ hello: 'world' }))
  })

  test('deleteBackup should remove data', () => {
    localStorage.setItem('readme-backup', JSON.stringify({ test: 1 }))

    const { result } = renderHook(() => useLocalStorage())

    act(() => result.current.deleteBackup())

    expect(localStorage.getItem('readme-backup')).toBe(null)
  })
})

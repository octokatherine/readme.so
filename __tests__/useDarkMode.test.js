import { renderHook, act } from '@testing-library/react-hooks'

import useDarkMode from '../hooks/useDarkMode'

describe('useDarkMode', () => {
  beforeEach(() => {
    localStorage.clear()
  })

  test('default should follow localStorage', () => {
    localStorage.setItem('color-theme', 'dark')

    const { result } = renderHook(() => useDarkMode())
    const [enabled] = result.current

    expect(enabled).toBe(true)
  })

  test('toggle should update theme', () => {
    const { result } = renderHook(() => useDarkMode())
    let [enabled, setEnabled] = result.current

    act(() => setEnabled(true))

    expect(localStorage.getItem('color-theme')).toBe('dark')
  })
})

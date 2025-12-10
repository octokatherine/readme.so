import { renderHook, act } from '@testing-library/react-hooks'

import useDeviceDetect from '../hooks/useDeviceDetect'

describe('useDeviceDetect', () => {
  test('should detect mobile', () => {
    Object.defineProperty(window.navigator, 'userAgent', {
      value: 'iPhone',
      writable: true,
    })

    const { result } = renderHook(() => useDeviceDetect())

    expect(result.current.isMobile).toBe(true)
  })

  test('should detect desktop', () => {
    Object.defineProperty(window.navigator, 'userAgent', {
      value: 'Mozilla',
      writable: true,
    })

    const { result } = renderHook(() => useDeviceDetect())

    expect(result.current.isMobile).toBe(false)
  })
})

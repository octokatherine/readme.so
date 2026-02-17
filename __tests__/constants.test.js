import { TAB } from '../utils/constants'

describe('TAB constants', () => {
  test('should contain expected keys', () => {
    expect(TAB.EDITOR).toBe('editor')
    expect(TAB.PREVIEW).toBe('preview')
    expect(TAB.RAW).toBe('raw')
  })

  test('should have 3 keys', () => {
    expect(Object.keys(TAB).length).toBe(3)
  })
})

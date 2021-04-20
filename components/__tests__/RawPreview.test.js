import { render, screen, fireEvent, act } from '@testing-library/react'

import RawPreview from '../RawPreview'

describe('<RawPreview />', () => {
  beforeAll(() => {
    jest.useFakeTimers()
  })

  afterAll(() => {
    jest.useRealTimers()
  })

  it('should render', () => {
    const { container } = render(<RawPreview text="test" />)
    expect(container).toBeInTheDocument()
  })

  it('should copy and setCopy when clicking on ', async () => {
    document.execCommand = jest.fn()
    render(<RawPreview text="test" />)

    fireEvent.click(screen.getByTestId('copy-button'))

    expect(document.execCommand).toHaveBeenCalledWith('copy')
    expect(screen.getByTestId('icon-copied')).toBeInTheDocument()

    act(() => {
      jest.advanceTimersByTime(3000)
    })
    expect(await screen.findByTestId('icon-not-copied', {}, { timeout: 3000 })).toBeInTheDocument()
  })
})

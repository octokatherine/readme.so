import { render, screen, act } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

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

  it('should copy and setCopy when clicking on copy button', async () => {
    // Mock the clipboard API
    const writeText = jest.fn().mockResolvedValue(undefined)
    Object.assign(navigator, {
      clipboard: { writeText },
    })

    render(<RawPreview text="test" />)

    await act(async () => {
      userEvent.click(screen.getByLabelText('Copy to clipboard'))
    })

    expect(writeText).toHaveBeenCalledWith('test')
    expect(screen.getByLabelText('Copied')).toBeInTheDocument()

    act(() => {
      jest.advanceTimersByTime(3000)
    })
    expect(screen.getByLabelText('Copy to clipboard')).toBeInTheDocument()
  })
})

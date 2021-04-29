import { render, screen, act } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import RawPreview from '../RawPreview'

describe('<RawPreview />', () => {
  beforeAll(() => {
    jest.useFakeTimers()
  })
  it('should render', () => {
    const { container } = render(<RawPreview text="test" />)
    expect(container).toBeInTheDocument()
  })

  it('should copy and setCopy when clicking on ', async () => {
    document.execCommand = jest.fn()
    render(<RawPreview text="test" />)

    userEvent.click(screen.getByLabelText('To Copy'))

    expect(document.execCommand).toHaveBeenCalledWith('copy')
    expect(screen.getByLabelText('Copied Success')).toBeInTheDocument()

    act(() => {
      jest.advanceTimersByTime(3000)
    })
    expect(screen.findByLabelText('To Copy')).not.toBeNull()
  })
})

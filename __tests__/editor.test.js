import { render, screen, fireEvent } from '@testing-library/react'
import Editor from '../editor'

describe('editor page', () => {
  let deviceGetter

  beforeEach(() => {
    deviceGetter = jest.spyOn(window.navigator, 'userAgent', 'get')
  })

  it('should render', () => {
    const { container } = render(<Editor />)
    expect(container).toBeInTheDocument()
  })

  it('should show DownloadModal component if showModal is true', () => {
    global.URL.createObjectURL = jest.fn()
    render(<Editor />)

    fireEvent.click(screen.getByTestId('download'))
    expect(screen.getByText('Readme Generated!')).toBeInTheDocument()
  })

  it('should add section', () => {
    render(<Editor />)

    fireEvent.click(screen.getAllByTestId('section-button')[0]) // first child => API
    expect(screen.getByTestId('selected-list').children.length).toEqual(2)
    expect(screen.getByTestId('sections-list')).not.toHaveTextContent('API')
  })

  it('should remove section', () => {
    render(<Editor />)

    fireEvent.click(screen.getAllByTestId('delete')[0])
    expect(screen.getByTestId('selected-list').children.length).toEqual(0)
  })

  it('should show message for mobile users if theyre using mobile', () => {
    deviceGetter.mockReturnValue('Mobile')
    render(<Editor />)
    expect(screen.getByTestId('mobile-screen')).toBeInTheDocument()
  })
})

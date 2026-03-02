import { render, screen, cleanup } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import Editor from '../pages/editor'

describe('editor page', () => {
  afterEach(cleanup)

  it('should render', () => {
    const { container } = render(<Editor />)
    expect(container).toBeInTheDocument()
  })

  it('should show DownloadModal component if showModal is true', () => {
    global.URL.createObjectURL = jest.fn()
    render(<Editor />)

    userEvent.click(screen.getByLabelText('Download Markdown'))
    expect(screen.getByText('🎉')).toBeInTheDocument()
  })

  it('should add section', () => {
    render(<Editor />)

    userEvent.click(screen.getByText(/FAQ/))
    // selected sections
    expect(screen.getByText('FAQ', { selector: 'p' })).toBeInTheDocument()
    // sections to be selected
    expect(screen.queryByText('FAQ', { selector: 'span' })).toBeNull()
  })
})

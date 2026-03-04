import { render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import CustomSection from '../CustomSection'

jest.mock('../../hooks/useLocalStorage', () => () => ({
  saveBackup: jest.fn(),
}))

describe('<CustomSection />', () => {
  const defaultProps = {
    setTemplates: jest.fn((fn) => fn([])),
    setSelectedSectionSlugs: jest.fn((fn) => fn([])),
    setFocusedSectionSlug: jest.fn(),
    setpageRefreshed: jest.fn(),
    setAddAction: jest.fn(),
  }

  beforeEach(() => {
    jest.clearAllMocks()
    localStorage.clear()
  })

  it('should render the Custom Section button', () => {
    render(<CustomSection {...defaultProps} />)
    expect(screen.getByText('Custom Section')).toBeInTheDocument()
  })

  it('should open the modal when the button is clicked', async () => {
    render(<CustomSection {...defaultProps} />)

    userEvent.click(screen.getByText('Custom Section'))

    await screen.findByText('New Custom Section')
    expect(screen.getByPlaceholderText('Section Title')).toBeInTheDocument()
    expect(screen.getByText('Add Section')).toBeInTheDocument()
    expect(screen.getByText('Cancel')).toBeInTheDocument()
  })

  it('should disable Add Section button when title is empty', async () => {
    render(<CustomSection {...defaultProps} />)

    userEvent.click(screen.getByText('Custom Section'))

    await screen.findByText('Add Section')
    expect(screen.getByText('Add Section')).toBeDisabled()
  })

  it('should enable Add Section button when title is entered', async () => {
    render(<CustomSection {...defaultProps} />)

    userEvent.click(screen.getByText('Custom Section'))

    await screen.findByPlaceholderText('Section Title')
    userEvent.type(screen.getByPlaceholderText('Section Title'), 'My Section')

    expect(screen.getByText('Add Section')).toBeEnabled()
  })

  it('should add a custom section and close the modal', async () => {
    render(<CustomSection {...defaultProps} />)

    userEvent.click(screen.getByText('Custom Section'))

    await screen.findByPlaceholderText('Section Title')
    userEvent.type(screen.getByPlaceholderText('Section Title'), 'My Section')
    userEvent.click(screen.getByText('Add Section'))

    expect(defaultProps.setSelectedSectionSlugs).toHaveBeenCalled()
    expect(defaultProps.setFocusedSectionSlug).toHaveBeenCalledWith('custom-my-section')
    expect(defaultProps.setpageRefreshed).toHaveBeenCalledWith(false)
    expect(defaultProps.setAddAction).toHaveBeenCalledWith(true)

    await waitFor(() => {
      expect(screen.queryByText('New Custom Section')).not.toBeInTheDocument()
    })
  })

  it('should close the modal when Cancel is clicked', async () => {
    render(<CustomSection {...defaultProps} />)

    userEvent.click(screen.getByText('Custom Section'))
    await screen.findByText('New Custom Section')

    userEvent.click(screen.getByText('Cancel'))

    await waitFor(() => {
      expect(screen.queryByText('New Custom Section')).not.toBeInTheDocument()
    })
  })

  it('should submit the form when Enter key is pressed', async () => {
    render(<CustomSection {...defaultProps} />)

    userEvent.click(screen.getByText('Custom Section'))

    await screen.findByPlaceholderText('Section Title')
    const input = screen.getByPlaceholderText('Section Title')

    userEvent.type(input, 'My Section{enter}')

    expect(defaultProps.setSelectedSectionSlugs).toHaveBeenCalled()
    expect(defaultProps.setFocusedSectionSlug).toHaveBeenCalledWith('custom-my-section')
    expect(defaultProps.setpageRefreshed).toHaveBeenCalledWith(false)
    expect(defaultProps.setAddAction).toHaveBeenCalledWith(true)

    await waitFor(() => {
      expect(screen.queryByText('New Custom Section')).not.toBeInTheDocument()
    })
  })
})

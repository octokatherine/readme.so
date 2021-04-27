import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import { SortableItem } from '../SortableItem'

describe('<SortableItem />', () => {
  const props = {
    setFocusedSectionSlug: jest.fn(),
    focusedSectionSlug: 'title-and-description',
    id: 'title-and-description',
    onDeleteSection: jest.fn(),
    section: { slug: 'title-and-description', name: 'title', markdown: 'Title and description' },
  }

  it('should render', () => {
    const { container } = render(<SortableItem {...props} />)
    expect(container).toBeInTheDocument()
  })

  it('should set focused section slug when clicking', () => {
    render(<SortableItem {...props} />)
    userEvent.click(screen.getByText(/title/))

    expect(props.setFocusedSectionSlug).toHaveBeenCalledWith('title-and-description')
  })

  it('should set focused section slug on keyup', () => {
    render(<SortableItem {...props} />)
    userEvent.type(screen.getByText(/title/), '{enter}')

    expect(props.setFocusedSectionSlug).toHaveBeenCalledWith('title-and-description')
  })

  it('should call onDeleteSection when section is deleted', () => {
    render(<SortableItem {...props} />)
    userEvent.click(screen.getByLabelText('Delete section'))

    expect(props.onDeleteSection).toHaveBeenCalledWith(expect.any(Object), 'title-and-description')
  })
})

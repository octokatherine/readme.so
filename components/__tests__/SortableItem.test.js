import { render, screen, fireEvent } from '@testing-library/react'

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
    fireEvent.click(screen.getByTestId('sortable-item'))

    expect(props.setFocusedSectionSlug).toHaveBeenCalledWith('title-and-description')
  })

  it('should set focused section slug on keyup', () => {
    render(<SortableItem {...props} />)
    fireEvent.keyUp(screen.getByTestId('sortable-item'), { key: 'Enter', code: 'Enter' })

    expect(props.setFocusedSectionSlug).toHaveBeenCalledWith('title-and-description')
  })
})

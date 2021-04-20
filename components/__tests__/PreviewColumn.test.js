import { render, screen, fireEvent } from '@testing-library/react'

import { PreviewColumn } from '../PreviewColumn'
import { sectionTemplates } from '../../data/section-templates'

describe('<PreviewColumn />', () => {
  it('should render', () => {
    const { container } = render(
      <PreviewColumn
        selectedSectionSlugs={['title-and-description']}
        getTemplate={(slug) => sectionTemplates.find((t) => t.slug === slug)}
      />
    )
    expect(container).toBeInTheDocument()
  })

  it('should toggle preview/raw buttons', () => {
    render(
      <PreviewColumn
        selectedSectionSlugs={['title-and-description']}
        getTemplate={(slug) => sectionTemplates.find((t) => t.slug === slug)}
      />
    )

    fireEvent.click(screen.getByTestId('preview-button'))
    expect(screen.getByTestId('preview-button')).toHaveClass('text-emerald-500')

    fireEvent.click(screen.getByTestId('raw-button'))
    expect(screen.getByTestId('raw-button')).toHaveClass('text-emerald-500')
  })
})

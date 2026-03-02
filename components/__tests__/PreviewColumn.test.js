import { render, screen } from '@testing-library/react'

import { PreviewColumn } from '../PreviewColumn'
import { en_EN } from '../../data/section-templates-en_EN'

describe('<PreviewColumn />', () => {
  it('should render', () => {
    const { container } = render(
      <PreviewColumn
        selectedSectionSlugs={['title-and-description']}
        getTemplate={(slug) => en_EN.find((t) => t.slug === slug)}
      />
    )

    expect(container).toBeInTheDocument()
  })
})

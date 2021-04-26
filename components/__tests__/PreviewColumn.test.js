import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import { PreviewColumn } from '../PreviewColumn'
import { en_EN } from '../../data/section-templates-en_EN'

const mockTranslations = {
  'preview-column-preview': 'Preview',
  'preview-column-raw': 'Raw',
}

jest.mock('next-i18next', () => ({
  useTranslation: () => ({
    t: jest.fn().mockImplementation((cb) => mockTranslations[cb]),
  }),
}))

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

  it('should toggle preview/raw buttons', () => {
    render(
      <PreviewColumn
        selectedSectionSlugs={['title-and-description']}
        getTemplate={(slug) => en_EN.find((t) => t.slug === slug)}
      />
    )

    userEvent.click(screen.getByText(/Preview/))
    expect(screen.getByText(/Preview/)).toHaveClass('text-emerald-500')

    userEvent.click(screen.getByText(/Raw/))
    expect(screen.getByText(/Raw/)).toHaveClass('text-emerald-500')
  })
})

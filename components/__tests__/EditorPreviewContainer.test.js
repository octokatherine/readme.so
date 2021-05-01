import { render, screen } from '@testing-library/react'
import EditorPreviewColumn from '../EditPreviewContainer'
import userEvent from '@testing-library/user-event'

import { en_EN } from '../../data/section-templates-en_EN'

jest.mock('next-i18next', () => ({
  useTranslation: () => ({ t: jest.fn() }),
}))

describe('<EditorPreviewColumn />', () => {
  beforeEach(() => {
    jest.useFakeTimers()
  })

  it('should render', () => {
    const { container } = render(<EditorPreviewColumn templates={en_EN} />)
    expect(container).toBeInTheDocument()
  })

  it('should toggle preview/raw buttons', () => {
    render(
      <EditorPreviewColumn
        templates={en_EN}
        selectedSectionSlugs={['title-and-description']}
        getTemplate={(slug) => en_EN.find((t) => t.slug === slug)}
      />
    )

    userEvent.click(screen.getByText(/Preview/))
    expect(screen.getByText(/Preview/)).toHaveClass('text-emerald-500')

    userEvent.click(screen.getByText(/Raw/))
    expect(screen.getByText(/Raw/)).toHaveClass('text-emerald-500')
  })

  it('should toggle dark/light mode', () => {
    render(<EditorPreviewColumn templates={en_EN} />)
    userEvent.click(screen.getByLabelText('Color Mode'))
    expect(screen.getByAltText('light')).toBeInTheDocument()

    userEvent.click(screen.getByLabelText('Color Mode'))
    expect(screen.getByAltText('vs-dark')).toBeInTheDocument()
  })
})

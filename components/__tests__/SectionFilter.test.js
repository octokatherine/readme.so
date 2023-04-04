import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import SectionFilter from '../SectionFilter'

import { en_EN } from '../../data/section-templates-en_EN'

jest.mock('next-i18next', () => ({
  useTranslation: () => ({ t: jest.fn() }),
}))

describe('<SectionFilter />', () => {
  const props = {
    sectionSlugs: ['api', 'appendix'],
    getTemplate: (slug) => en_EN.find((t) => t.slug === slug),
    filterSections: jest.fn(),
  }

  it('should render', () => {
    const { container } = render(<SectionFilter {...props} />)
    expect(container).toBeInTheDocument()
  })

  it('should call the callBack function with suggested slugs', () => {
    render(<SectionFilter {...props} />)

    const input = screen.getByTestId('slugs-filter')
    expect(input).toBeInTheDocument()
    expect(input).toHaveAttribute('type', 'text')
    expect(input).toHaveAttribute('placeholder', 'Search for a section')

    userEvent.type(input, 'app')
    expect(screen.getByTestId('slugs-filter')).toHaveValue('app')

    expect(props.filterSections).toHaveBeenCalledTimes(5)
    expect(props.filterSections).toHaveBeenNthCalledWith(1, [])
    expect(props.filterSections).toHaveBeenNthCalledWith(2, [])
    expect(props.filterSections).toHaveBeenNthCalledWith(3, ['api', 'appendix'])
    expect(props.filterSections).toHaveBeenNthCalledWith(4, ['api', 'appendix'])
    expect(props.filterSections).toHaveBeenNthCalledWith(5, ['appendix'])
  })
})

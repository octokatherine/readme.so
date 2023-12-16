import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import SectionFilter from '../SectionFilter'

jest.mock('next-i18next', () => ({
  useTranslation: () => ({ t: jest.fn() }),
}))

describe('<SectionFilter />', () => {
  const props = {
    searchFilter: '',
    setSearchFilter: jest.fn(),
  }

  it('should render', () => {
    const { container } = render(<SectionFilter {...props} />)
    expect(container).toBeInTheDocument()
  })

  it('should call the callBack function with updated filter query', () => {
    render(<SectionFilter {...props} />)

    const input = screen.getByTestId('slugs-filter')
    expect(input).toBeInTheDocument()
    expect(input).toHaveAttribute('type', 'text')
    expect(input).toHaveAttribute('placeholder', 'Search for a section')

    userEvent.type(input, 'app')

    expect(props.setSearchFilter).toHaveBeenCalledTimes(3)
    expect(props.setSearchFilter).toHaveBeenNthCalledWith(1, 'a')
    expect(props.setSearchFilter).toHaveBeenNthCalledWith(2, 'p')
    expect(props.setSearchFilter).toHaveBeenNthCalledWith(3, 'p')
  })
})

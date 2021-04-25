import { render, screen } from '@testing-library/react'

import { LanguageDropDown } from '../LanguageDropDown'

const mockTranslations = {
  english: 'English',
  french: 'French',
  spanish: 'Spanish',
}

jest.mock('next-i18next', () => ({
  useTranslation: () => ({ t: jest.fn().mockImplementation((cb) => mockTranslations[cb]) }),
}))

describe('<LanguageDropDown />', () => {
  it('should render with 3 languages', () => {
    const { container } = render(<LanguageDropDown />)
    expect(container).toBeInTheDocument()
    expect(screen.queryByText('English')).not.toBeNull()
    expect(screen.queryByText('French')).not.toBeNull()
    expect(screen.queryByText('Spanish')).not.toBeNull()

    expect(screen.queryByText('Chinese')).toBeNull()
  })
})

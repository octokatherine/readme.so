import { render, screen } from '@testing-library/react'
import { LanguageDropDown, languageSupports } from '../LanguageDropDown'

const mockTranslations = {
  english: 'English',
  french: 'French',
  spanish: 'Spanish',
}

jest.mock('next-i18next', () => ({
  useTranslation: () => ({ t: jest.fn().mockImplementation((cb) => mockTranslations[cb]) }),
}))

describe('<LanguageDropDown />', () => {
  it('should render with provided languages', () => {
    const { container } = render(<LanguageDropDown />)
    expect(container).toBeInTheDocument()

    languageSupports.forEach((language) => {
      expect(screen.queryByText(language.label)).not.toBeNull()
    })

    expect(screen.queryByText('Chinese')).toBeNull()
  })
})

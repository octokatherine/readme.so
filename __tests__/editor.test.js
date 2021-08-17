import { render, screen, cleanup } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import Editor from '../pages/editor'
import { en_EN } from '../data/section-templates-en_EN'

const mockTranslations = {
  'editor-desktop-optimized': 'This site is optimized for desktop',
  'editor-visit-desktop': 'Please visit readme.so on a desktop to create your readme!',
}

jest.mock('next-i18next', () => ({
  useTranslation: () => ({
    t: jest.fn().mockImplementation((cb) => mockTranslations[cb]),
  }),
}))

describe('editor page', () => {
  afterEach(cleanup)

  it('should render', () => {
    const { container } = render(<Editor sectionTemplate={en_EN} />)
    expect(container).toBeInTheDocument()
  })

  it('should show DownloadModal component if showModal is true', () => {
    global.URL.createObjectURL = jest.fn()
    render(<Editor sectionTemplate={en_EN} />)

    userEvent.click(screen.getByLabelText('Download Markdown'))
    expect(screen.getByText('🎉')).toBeInTheDocument()
  })

  it('should add section', () => {
    render(<Editor sectionTemplate={en_EN} />)

    userEvent.click(screen.getByText(/FAQ/))
    // selected sections
    expect(screen.getByText('FAQ', { selector: 'p' })).toBeInTheDocument()
    // sections to be selected
    expect(screen.queryByText('FAQ', { selector: 'span' })).toBeNull()
  })
})

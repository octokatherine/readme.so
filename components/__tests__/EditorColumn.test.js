import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { EditorColumn } from '../EditorColumn'

import { sectionTemplates } from '../../data/section-templates'

jest.mock(
  '@monaco-editor/react',
  () =>
    function Editor({ value, onChange }) {
      return <input aria-label="Markdown Editor" value={value} onChange={() => onChange('test')} />
    }
)

jest.mock('next-i18next', () => ({
  useTranslation: () => ({ t: jest.fn() }),
}))

describe('<EditorColumn />', () => {
  beforeEach(() => {
    jest.useFakeTimers()
  })

  it('should render', () => {
    const { container } = render(<EditorColumn templates={sectionTemplates} />)
    expect(container).toBeInTheDocument()
  })

  it('should toggle dark/light mode', () => {
    render(<EditorColumn templates={sectionTemplates} />)
    userEvent.click(screen.getByLabelText('Color Mode'))
    expect(screen.getByAltText('light')).toBeInTheDocument()

    userEvent.click(screen.getByLabelText('Color Mode'))
    expect(screen.getByAltText('vs-dark')).toBeInTheDocument()
  })

  it('should show <Editor /> if focusedSectionSlug is truthy', () => {
    render(
      <EditorColumn templates={sectionTemplates} focusedSectionSlug={'title-and-description'} />
    )
    expect(screen.getByLabelText('Markdown Editor').value).toEqual(
      "# Project TitleA brief description of what this project does and who it's for"
    )
  })

  it('should set markdown when editing', async () => {
    const setTemplatesHandler = jest.fn()
    render(
      <EditorColumn
        templates={sectionTemplates}
        focusedSectionSlug={'title-and-description'}
        setTemplates={setTemplatesHandler}
      />
    )

    userEvent.type(screen.getByLabelText('Markdown Editor'), 'test')

    expect(setTemplatesHandler).toHaveBeenCalledTimes(4)
    expect(screen.getByLabelText('Markdown Editor')).toHaveValue('test')
  })
})

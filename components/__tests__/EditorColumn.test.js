import { render, screen, fireEvent, waitFor, cleanup } from '@testing-library/react'

import { EditorColumn } from '../EditorColumn'

import { sectionTemplates } from '../../data/section-templates'

jest.mock(
  '@monaco-editor/react',
  () =>
    function Editor({ value, onChange }) {
      return <input data-testid="editor" value={value} onChange={() => onChange('test')} />
    }
)

describe('<EditorColumn />', () => {
  afterEach(cleanup)

  it('should render', () => {
    const { container } = render(<EditorColumn templates={sectionTemplates} />)
    expect(container).toBeInTheDocument()
  })

  it('should toggle dark/light mode', () => {
    render(<EditorColumn templates={sectionTemplates} />)
    fireEvent.click(screen.getByTestId('theme-toggle'))
    expect(screen.getByTestId('theme')).toHaveAttribute('src', 'toggle_moon.svg')
    expect(screen.getByTestId('theme')).not.toHaveAttribute('src', 'toggle_sun.svg')

    fireEvent.click(screen.getByTestId('theme-toggle'))
    expect(screen.getByTestId('theme')).toHaveAttribute('src', 'toggle_sun.svg')
    expect(screen.getByTestId('theme')).not.toHaveAttribute('src', 'toggle_moon.svg')
  })

  it('should show <Editor /> if focusedSectionSlug is truthy', () => {
    render(
      <EditorColumn templates={sectionTemplates} focusedSectionSlug={'title-and-description'} />
    )
    expect(screen.getByTestId('editor')).toHaveValue(
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

    fireEvent.change(screen.getByTestId('editor'), 'test')

    expect(setTemplatesHandler).toHaveBeenCalledTimes(1)
    await waitFor(() => expect(screen.getByTestId('editor')).toHaveValue('test'))
  })
})

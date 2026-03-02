import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { EditorColumn } from '../EditorColumn'

import { en_EN } from '../../data/section-templates-en_EN'

jest.mock('@monaco-editor/react', () => {
  function Editor({ value, onChange }) {
    return <input aria-label="Markdown Editor" value={value} onChange={() => onChange('test')} />
  }
  Editor.default = Editor
  return { __esModule: true, default: Editor }
})

describe('<EditorColumn />', () => {
  it('should render', () => {
    const { container } = render(<EditorColumn templates={en_EN} />)
    expect(container).toBeInTheDocument()
  })

  it('should show <Editor /> if focusedSectionSlug is truthy', async () => {
    render(<EditorColumn templates={en_EN} focusedSectionSlug={'title-and-description'} />)
    const editor = await screen.findByLabelText('Markdown Editor')
    expect(editor.value).toEqual(
      "# Project TitleA brief description of what this project does and who it's for"
    )
  })

  it('should set markdown when editing', async () => {
    const setTemplatesHandler = jest.fn()
    render(
      <EditorColumn
        templates={en_EN}
        focusedSectionSlug={'title-and-description'}
        setTemplates={setTemplatesHandler}
      />
    )

    const editor = await screen.findByLabelText('Markdown Editor')
    userEvent.type(editor, 'test')

    expect(setTemplatesHandler).toHaveBeenCalledTimes(4)
    expect(editor).toHaveValue('test')
  })
})

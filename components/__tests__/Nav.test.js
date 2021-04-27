import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import { Nav } from '../Nav'
import { en_EN } from '../../data/section-templates-en_EN'

jest.mock('next-i18next', () => ({
  useTranslation: () => ({ t: jest.fn() }),
}))

describe('<Nav />', () => {
  it('should render', () => {
    const { container } = render(
      <Nav
        selectedSectionSlugs={['title-and-description']}
        getTemplate={(slug) => en_EN.find((t) => t.slug === slug)}
      />
    )
    expect(container).toBeInTheDocument()
  })

  it('should download markdown file when clicking on download button', () => {
    const setShowModalStub = jest.fn()
    global.URL.createObjectURL = jest.fn()
    const blobSpy = jest.spyOn(global, 'Blob').mockImplementationOnce(() => ({
      size: 80,
    }))

    render(
      <Nav
        setShowModal={setShowModalStub}
        selectedSectionSlugs={['title-and-description']}
        getTemplate={(slug) => en_EN.find((t) => t.slug === slug)}
      />
    )

    userEvent.click(screen.getByLabelText('Download Markdown'))
    expect(blobSpy).toHaveBeenCalled()
    expect(global.URL.createObjectURL).toHaveBeenCalledWith({ size: 80 })
    expect(setShowModalStub).toHaveBeenCalledWith(true)
  })
})

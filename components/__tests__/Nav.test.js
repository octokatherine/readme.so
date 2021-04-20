import { render, screen, fireEvent } from '@testing-library/react'

import { Nav } from '../Nav'
import { sectionTemplates } from '../../data/section-templates'

describe('<Nav />', () => {
  it('should render', () => {
    const { container } = render(
      <Nav
        selectedSectionSlugs={['title-and-description']}
        getTemplate={(slug) => sectionTemplates.find((t) => t.slug === slug)}
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
        getTemplate={(slug) => sectionTemplates.find((t) => t.slug === slug)}
      />
    )

    fireEvent.click(screen.getByTestId('download'))
    expect(blobSpy).toHaveBeenCalled()
    expect(global.URL.createObjectURL).toHaveBeenCalledWith({ size: 80 })
    expect(setShowModalStub).toHaveBeenCalledWith(true)
  })
})

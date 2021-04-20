import { render, screen, fireEvent } from '@testing-library/react'

import { DownloadModal } from '../DownloadModal'

describe('<DownloadModal />', () => {
  it('should render', () => {
    const { container } = render(<DownloadModal />)
    expect(container).toBeInTheDocument()
  })

  it('should setShowModal to false when clicking on overlay', () => {
    const setShowModalStub = jest.fn()

    render(<DownloadModal setShowModal={setShowModalStub} />)

    fireEvent.click(screen.getByTestId('overlay'))
    expect(setShowModalStub).toHaveBeenCalledWith(false)
  })
})

import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import { DownloadModal } from '../DownloadModal'

jest.mock('next-i18next', () => ({
  useTranslation: () => ({ t: jest.fn() }),
}))

describe('<DownloadModal />', () => {
  it('should render', () => {
    const { container } = render(<DownloadModal />)
    expect(container).toBeInTheDocument()
  })

  it('should setShowModal to false when clicking on overlay', () => {
    const setShowModalStub = jest.fn()

    render(<DownloadModal setShowModal={setShowModalStub} />)

    userEvent.click(screen.getByRole('overlay', { hidden: true }))
    expect(setShowModalStub).toHaveBeenCalledWith(false)
  })
})

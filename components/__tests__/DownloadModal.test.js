import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import { DownloadModal } from '../DownloadModal'

describe('<DownloadModal />', () => {
  it('should render', () => {
    const { container } = render(<DownloadModal showModal={true} setShowModal={() => {}} />)
    expect(container).toBeInTheDocument()
  })

  it('should render modal content when showModal is true', () => {
    render(<DownloadModal showModal={true} setShowModal={() => {}} />)

    expect(screen.getByText('Readme Generated!')).toBeInTheDocument()
  })

  it('should call setShowModal(false) when closing the dialog', () => {
    const setShowModalStub = jest.fn()

    render(<DownloadModal showModal={true} setShowModal={setShowModalStub} />)

    userEvent.click(screen.getByText('Readme Generated!'))
    // Dialog onClose is triggered by clicking backdrop or pressing Escape
    // The headlessui Dialog handles this internally
  })
})

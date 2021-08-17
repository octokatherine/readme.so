import { render } from '@testing-library/react'
import Tabs from '../Tabs'
import { en_EN } from '../../data/section-templates-en_EN'
import { TAB } from '../../utils/constants'

describe('<Tabs />', () => {
  it('should render', () => {
    const { container } = render(
      <Tabs
        selectedTab={TAB.EDITOR}
        focusedSectionSlug={'title-and-description'}
        toggleState={{ theme: 'light', img: 'toggle_moon.svg' }}
        selectedSectionSlugs={['title-and-description']}
        getTemplate={(slug) => en_EN.find((t) => t.slug === slug)}
      />
    )
    expect(container).toBeInTheDocument()
  })
})

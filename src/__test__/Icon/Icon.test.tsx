import * as React from 'react'
import * as renderer from 'react-test-renderer'
import { Icon } from './../../components/Icon/Icon'

describe('<Icon>', () => {
  it('Should render Link', () => {
    const wrapper = renderer.create(
      <Icon href="https://github.com/vacarsu/uikit-react" options="github" />,
    )

    expect(wrapper.toJSON()).toMatchSnapshot()
  })

  it('Should render Button', () => {
    const wrapper = renderer.create(<Icon button options="github" />)

    expect(wrapper.toJSON()).toMatchSnapshot()
  })

  it('Should render image', () => {
    const wrapper = renderer.create(<Icon image="src/images/background.jpeg" options="star" />)

    expect(wrapper.toJSON()).toMatchSnapshot()
  })
})

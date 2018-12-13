import * as React from 'react'
import * as renderer from 'react-test-renderer'
import { Container } from './../../components/Container/Container'

describe('<Container>', () => {
  it('Should render without props', () => {
    const wrapper = renderer.create(<Container />)

    expect(wrapper.toJSON()).toMatchSnapshot()
  })

  it('Should render with size', () => {
    const wrapper = renderer.create(<Container size="small" />)

    expect(wrapper.toJSON()).toMatchSnapshot()
  })
})

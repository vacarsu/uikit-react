import * as React from 'react'
import * as renderer from 'react-test-renderer'
import { Flex } from './../../components/Flex/Flex'

describe('<Flex>', () => {
  it('Should render without props', () => {
    const wrapper = renderer.create(
      <Flex>
        <div>block</div>
        <div>block</div>
        <div>block</div>
      </Flex>,
    )

    expect(wrapper.toJSON()).toMatchSnapshot()
  })

  it('Should render with props', () => {
    const wrapper = renderer.create(
      <Flex alignment="center" direction="column" wrap="wrap">
        <div>block</div>
        <div>block</div>
        <div>block</div>
      </Flex>,
    )

    expect(wrapper.toJSON()).toMatchSnapshot()
  })
})

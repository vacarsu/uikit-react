import * as React from 'react'
import * as renderer from 'react-test-renderer'
import { Alert } from '../../components/Alert/Alert'

describe('<Alert>', () => {
  it('Should render with only content', () => {
    const wrapper = renderer.create(<Alert content="String" />)

    expect(wrapper.toJSON()).toMatchSnapshot()
  })

  it('Should render with props', () => {
    const wrapper = renderer.create(<Alert content="String" color="primary" isClosable />)

    expect(wrapper.toJSON()).toMatchSnapshot()
  })
})

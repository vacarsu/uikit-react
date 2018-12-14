import * as React from 'react'
import * as renderer from 'react-test-renderer'
import { Margin } from './../../components/Margin/Margin'

describe('<Margin>', () => {
  it('Should render Margin', () => {
    const wrapper = renderer.create(<Margin type="right" />)

    expect(wrapper.toJSON()).toMatchSnapshot()
  })
})

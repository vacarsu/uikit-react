import * as React from 'react'
import * as renderer from 'react-test-renderer'
import { Label } from './../../components/Label/Label'

describe('<Label>', () => {
  it('Should render Label', () => {
    const wrapper = renderer.create(<Label content="test" />)

    expect(wrapper.toJSON()).toMatchSnapshot()
  })

  it('Should render with color', () => {
    const wrapper = renderer.create(<Label color="primary" content="test" />)

    expect(wrapper.toJSON()).toMatchSnapshot()
  })
})

import * as React from 'react'
import * as renderer from 'react-test-renderer'
import { Panel } from './../../components/Panel/Panel'

describe('<Panel>', () => {
  it('Should render without props', () => {
    const wrapper = renderer.create(<Panel>Panel</Panel>)

    expect(wrapper.toJSON()).toMatchSnapshot()
  })

  it('Should render with props', () => {
    const wrapper = renderer.create(<Panel id="panel" isScrollable />)

    expect(wrapper.toJSON()).toMatchSnapshot()
  })
})

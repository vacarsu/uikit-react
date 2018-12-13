import * as React from 'react'
import * as renderer from 'react-test-renderer'
import { Dark } from './../../components/Dark/Dark'
import { Light } from './../../components/Light/Light'

describe('<Dark>', () => {
  it('Should render Dark mode', () => {
    const wrapper = renderer.create(
      <Dark>
        <p>Dark mode</p>
      </Dark>,
    )

    expect(wrapper.toJSON()).toMatchSnapshot()
  })
})

describe('<Light', () => {
  it('Should render Light mode', () => {
    const wrapper = renderer.create(
      <Light>
        <p>Light mode</p>
      </Light>,
    )

    expect(wrapper.toJSON()).toMatchSnapshot()
  })
})

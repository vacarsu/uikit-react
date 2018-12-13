import * as React from 'react'
import * as renderer from 'react-test-renderer'
import { Container } from './../../components/Container/Container'
import { Dropdown } from './../../components/Dropdown/Dropdown'

describe('<Dropdown>', () => {
  it('Should render without props', () => {
    const wrapper = renderer.create(
      <Container>
        <Dropdown>Dropdown</Dropdown>
      </Container>,
    )

    expect(wrapper.toJSON()).toMatchSnapshot()
  })

  it('Should render with clickable', () => {
    const wrapper = renderer.create(
      <Container>
        <Dropdown options="mode: click">Dropdown</Dropdown>
      </Container>,
    )

    expect(wrapper.toJSON()).toMatchSnapshot()
  })
})

import * as React from 'react'
import * as renderer from 'react-test-renderer'
import { Link } from './../../components/Link/Link'
import { Nav, NavItem } from './../../components/Nav'

describe('<Nav>', () => {
  it('Should render Nav', () => {
    const wrapper = renderer.create(
      <Nav>
        <NavItem>
          <Link href="#">Link</Link>
        </NavItem>
        <NavItem>
          <Link href="#">Link</Link>
        </NavItem>
        <NavItem>
          <Link href="#">Link</Link>
        </NavItem>
      </Nav>,
    )

    expect(wrapper.toJSON()).toMatchSnapshot()
  })

  it('Should render Nav Accordion', () => {
    const wrapper = renderer.create(
      <Nav options="multiple: true" accordion>
        <NavItem parent>
          <Nav child>
            <Link href="#">Link</Link>
          </Nav>
        </NavItem>
        <NavItem>
          <Link href="#">Link</Link>
        </NavItem>
        <NavItem>
          <Link href="#">Link</Link>
        </NavItem>
      </Nav>,
    )

    expect(wrapper.toJSON()).toMatchSnapshot()
  })
})

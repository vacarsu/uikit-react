import * as React from 'react'
import * as renderer from 'react-test-renderer'
import { Breadcrumb } from '../../components/Breadcrumb/Breadcrumb'
import { Link } from '../../components/Link/Link'

describe('<Breadcrumb>', () => {
  it('Should render with links', () => {
    const wrapper = renderer.create(
      <Breadcrumb>
        <Link href="#">Test</Link>
        <Link href="#">Test</Link>
        <Link href="#">Test</Link>
      </Breadcrumb>,
    )

    expect(wrapper.toJSON()).toMatchSnapshot()
  })
})

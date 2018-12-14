import * as React from 'react'
import * as renderer from 'react-test-renderer'
import { Link } from './../../components/Link/Link'

describe('<Link>', () => {
  it('Should render default', () => {
    const wrapper = renderer.create(<Link href="#">Link</Link>)

    expect(wrapper.toJSON()).toMatchSnapshot()
  })

  it('Should render toggle link', () => {
    const wrapper = renderer.create(
      <div>
        <Link toggleOptions="target: #my-id">Link</Link>
        <p id="my-id">Lorem ipsum dolor sit amet,</p>
      </div>,
    )

    expect(wrapper.toJSON()).toMatchSnapshot()
  })
})

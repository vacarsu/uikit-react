import * as React from 'react'
import * as renderer from 'react-test-renderer'
import { Badge } from '../../components/Badge/Badge'

describe('<Badge>', () => {
  it('Should render with count', () => {
    const wrapper = renderer.create(<Badge count={100} />)

    expect(wrapper.toJSON()).toMatchSnapshot()
  })
})

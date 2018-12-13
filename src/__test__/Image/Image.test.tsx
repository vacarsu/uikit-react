import * as React from 'react'
import * as renderer from 'react-test-renderer'
import { Image } from './../../components/Image/Image'

describe('<Image>', () => {
  it('Should render Image', () => {
    const wrapper = renderer.create(
      <Image width="300px" src="/src/images/image-1.jpg" alt="image-1" />,
    )

    expect(wrapper.toJSON()).toMatchSnapshot()
  })
})

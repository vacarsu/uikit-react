import * as React from 'react'
import * as renderer from 'react-test-renderer'
import { Cover } from './../../components/Cover/Cover'

describe('<Cover>', () => {
  it('Should render with image', () => {
    const wrapper = renderer.create(
      <Cover src="src/images/background.jpeg" type="image" height="medium" />,
    )

    expect(wrapper.toJSON()).toMatchSnapshot()
  })

  it('Should render with video', () => {
    const wrapper = renderer.create(
      <Cover type="video" src="src/videos/video.mp4" videoFormat="mp4" autoPlay muted loop />,
    )

    expect(wrapper.toJSON()).toMatchSnapshot()
  })
})

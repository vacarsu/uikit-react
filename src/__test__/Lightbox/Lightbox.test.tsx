import * as React from 'react'
import * as renderer from 'react-test-renderer'
import { Lightbox } from './../../components/Lightbox/Lightbox'

describe('<Lightbox>', () => {
  it('Should render Lightbox', () => {
    const wrapper = renderer.create(
      <Lightbox options="animation: slide">
        <a className="uk-button" href="https://www.youtube.com/watch?v=YE7VzlLtp-4" />
      </Lightbox>,
    )

    expect(wrapper.toJSON()).toMatchSnapshot()
  })
})

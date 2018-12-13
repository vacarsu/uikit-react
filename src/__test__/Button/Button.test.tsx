import * as React from 'react'
import * as renderer from 'react-test-renderer'
import { Button } from './../../components/Button/Button'

describe('<Button>', () => {
  it('Should render without props', () => {
    const wrapper = renderer.create(<Button>Click</Button>)

    expect(wrapper.toJSON()).toMatchSnapshot()
  })

  it('Should render with props', () => {
    const wrapper = renderer.create(
      <Button size="small" color="primary" onClick={() => {}}>
        Click
      </Button>,
    )

    expect(wrapper.toJSON()).toMatchSnapshot()
  })
})

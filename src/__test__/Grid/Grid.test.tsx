import * as React from 'react'
import * as renderer from 'react-test-renderer'
import { Grid } from './../../components/Grid/Grid'

describe('<Grid>', () => {
  it('Should render without props', () => {
    const wrapper = renderer.create(
      <Grid>
        <div>block</div>
        <div>block</div>
        <div>block</div>
      </Grid>,
    )

    expect(wrapper.toJSON()).toMatchSnapshot()
  })

  it('Should render with props', () => {
    const wrapper = renderer.create(
      <Grid gutter="large" divider match>
        <div>block</div>
        <div>block</div>
        <div>block</div>
      </Grid>,
    )

    expect(wrapper.toJSON()).toMatchSnapshot()
  })
})

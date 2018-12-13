import * as React from 'react'
import * as renderer from 'react-test-renderer'
import { Card, CardBody, CardFooter, CardHeader, CardTitle } from './../../components/Card'

describe('<Button>', () => {
  it('Should render card with footer, header, title, and body', () => {
    const wrapper = renderer.create(
      <Card>
        <CardHeader>
          <CardTitle>Title</CardTitle>
          <CardBody>Content body of the Card</CardBody>
          <CardFooter>Footer of the Card</CardFooter>
        </CardHeader>
      </Card>,
    )

    expect(wrapper.toJSON()).toMatchSnapshot()
  })

  it('Should render card with hover', () => {
    const wrapper = renderer.create(
      <Card hover>
        <CardHeader>
          <CardTitle>Title</CardTitle>
          <CardBody>Content body of the Card</CardBody>
          <CardFooter>Footer of the Card</CardFooter>
        </CardHeader>
      </Card>,
    )

    expect(wrapper.toJSON()).toMatchSnapshot()
  })

  it('Should render card with color', () => {
    const wrapper = renderer.create(
      <Card color="primary">
        <CardHeader>
          <CardTitle>Title</CardTitle>
          <CardBody>Content body of the Card</CardBody>
          <CardFooter>Footer of the Card</CardFooter>
        </CardHeader>
      </Card>,
    )

    expect(wrapper.toJSON()).toMatchSnapshot()
  })
})

import * as React from 'react'
import * as renderer from 'react-test-renderer'
import { List, ListItem } from './../../components/List'

describe('<List>', () => {
  it('Should render default', () => {
    const wrapper = renderer.create(
      <List>
        <ListItem>Item</ListItem>
        <ListItem>Item</ListItem>
        <ListItem>Item</ListItem>
      </List>,
    )

    expect(wrapper.toJSON()).toMatchSnapshot()
  })

  it('Should render divider', () => {
    const wrapper = renderer.create(
      <List type="divider">
        <ListItem>Item</ListItem>
        <ListItem>Item</ListItem>
        <ListItem>Item</ListItem>
      </List>,
    )

    expect(wrapper.toJSON()).toMatchSnapshot()
  })

  it('Should render striped', () => {
    const wrapper = renderer.create(
      <List type="striped">
        <ListItem>Item</ListItem>
        <ListItem>Item</ListItem>
        <ListItem>Item</ListItem>
      </List>,
    )

    expect(wrapper.toJSON()).toMatchSnapshot()
  })
})

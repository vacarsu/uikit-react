import * as React from 'react'
import * as renderer from 'react-test-renderer'

import { AccordionItem } from '../../components/Accordion'

describe('<AccordionItem>', () => {
  it('Should render correctly', () => {
    const wrapper = renderer.create(<AccordionItem title="Title">Hello</AccordionItem>)

    expect(wrapper.toJSON()).toMatchSnapshot()
    const content = <span>Test</span>
    wrapper.update(<AccordionItem title="Title">{content}</AccordionItem>)
    expect(wrapper.toJSON()).toMatchSnapshot()

    wrapper.update(
      <AccordionItem title="Title">
        <span>Hello</span>
      </AccordionItem>,
    )
    expect(wrapper.toJSON()).toMatchSnapshot()
  })

  it('Should set inline styles', () => {
    const props = {
      style: {
        textAlign: 'center',
        padding: 10,
      },
    }

    const wrapper = renderer.create(
      <AccordionItem title="Title" {...props}>
        hello
      </AccordionItem>,
    )
    const inst = wrapper.root
    expect(inst.props.style).toEqual(props.style)
  })
})

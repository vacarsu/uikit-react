import * as React from 'react'
import * as renderer from 'react-test-renderer'

import { AccordionItem } from '../../components/Accordion'

describe('<AccordionItem>', () => {
  it('Should render correctly', () => {
    const wrapper = renderer.create(<AccordionItem title="Title" content="Hello" />)

    expect(wrapper.toJSON()).toMatchSnapshot()
    wrapper.update(<AccordionItem title="Title" content="Hello" />)
    expect(wrapper.toJSON()).toMatchSnapshot()

    wrapper.update(<AccordionItem title="Title" content="Hello" />)
    expect(wrapper.toJSON()).toMatchSnapshot()
  })

  it('Should set inline styles', () => {
    const props = {
      style: {
        textAlign: 'center',
        padding: 10,
      },
    }

    const wrapper = renderer.create(<AccordionItem title="Title" {...props} content="Hello" />)
    const inst = wrapper.root
    expect(inst.props.style).toEqual(props.style)
  })
})

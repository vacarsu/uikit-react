import * as React from 'react'
import * as renderer from 'react-test-renderer'
import { shallow } from 'enzyme'
import { Accordion, AccordionItem } from './../../components/Accordion'

describe('<Accordion>', () => {
  it('Should render with default props', () => {
    const wrapper = renderer.create(
      <Accordion>
        {' '}
        <AccordionItem title="Heading" content="Hello" />
      </Accordion>,
    )
    expect(wrapper.toJSON()).toMatchSnapshot()
  })

  it('Should render with collapsible option FALSE', () => {
    const options = {
      collapsible: false,
    }
    const wrapper = renderer.create(
      <Accordion options={options}>
        <AccordionItem title="Heading" content="Hello" />
      </Accordion>,
    )
    expect(wrapper.toJSON()).toMatchSnapshot()
  })

  it('Should handle events ', () => {
    const props = {
      onBeforeHide: jest.fn(),
      onBeforeShow: jest.fn(),
    }
    const wrapper = shallow(
      <Accordion {...props}>
        <AccordionItem title="Heading" content="Hello" />
      </Accordion>,
    )
  })
})

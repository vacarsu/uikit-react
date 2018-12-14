import * as React from 'react'
import * as renderer from 'react-test-renderer'
import * as Adapter from 'enzyme-adapter-react-16'
import { configure, mount } from 'enzyme'
import { Accordion } from '../../components/Accordion/Accordion'
import { AccordionItem } from '../../components/Accordion/AccordionItem'

configure({ adapter: new Adapter() })

describe('<Accordion>', () => {
  it('Should render accordion element with children and without props', () => {
    const wrapper = renderer.create(
      <Accordion>
        <AccordionItem title="Item 1">Accordion Item content</AccordionItem>
        <AccordionItem title="Item 2">Accordion Item content</AccordionItem>
        <AccordionItem title="Item 3">Accordion Item content</AccordionItem>
      </Accordion>,
    )

    expect(wrapper.toJSON()).toMatchSnapshot()
  })

  it('Should render accordion element with props and children', () => {
    const wrapper = renderer.create(
      <Accordion options="active: true; duration: 200; animation: true; collapsible: true;">
        <AccordionItem title="Item 1">Accordion Item content</AccordionItem>
        <AccordionItem title="Item 2">Accordion Item content</AccordionItem>
        <AccordionItem title="Item 3">Accordion Item content</AccordionItem>
      </Accordion>,
    )

    expect(wrapper.toJSON()).toMatchSnapshot()
  })

  it('Should handle events ', () => {
    const props = {
      onBeforeHide: jest.fn(),
      onBeforeShow: jest.fn(),
      onHidden: jest.fn(),
      onHide: jest.fn(),
      onShow: jest.fn(),
      onShown: jest.fn(),
    }
    const wrapper = mount(
      <Accordion {...props}>
        <AccordionItem title="Heading">Hello</AccordionItem>
      </Accordion>,
    )
    const inst = wrapper.instance() as any

    inst.componentDidMount()
    inst.props.onBeforeShow()
    expect(props.onBeforeShow).toHaveBeenCalled()
    inst.props.onShow()
    expect(props.onShow).toHaveBeenCalled()
    inst.props.onShown()
    expect(props.onShown).toHaveBeenCalled()

    /**
     *
     */
    expect(props.onBeforeHide).not.toHaveBeenCalled()
    expect(props.onHide).not.toHaveBeenCalled()
    expect(props.onHidden).not.toHaveBeenCalled()

    inst.props.onBeforeHide()
    expect(props.onBeforeHide).toHaveBeenCalled()
    inst.props.onHide()
    expect(props.onHide).toHaveBeenCalled()
    inst.props.onHidden()
    expect(props.onHidden).toHaveBeenCalled()
  })

  it('Should be mount', () => {
    const wrapper = mount(
      <Accordion>
        <AccordionItem title="Heading">Hello</AccordionItem>
      </Accordion>,
    )

    const inst = wrapper.instance() as any

    inst.componentDidMount()

    expect(inst.mounted).toBe(true)

    inst.componentWillUnmount()

    expect(inst.mounted).toBe(false)
  })
})

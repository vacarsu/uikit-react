import * as React from 'react'
import * as renderer from 'react-test-renderer'
import { mount } from 'enzyme'
import { Accordion, AccordionItem } from './../../components/Accordion'

describe('<Accordion>', () => {
  it('Should render with default props', () => {
    const wrapper = renderer.create(
      <Accordion>
        {' '}
        <AccordionItem title="Heading">Hello</AccordionItem>
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
        <AccordionItem title="Heading">Hello</AccordionItem>
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

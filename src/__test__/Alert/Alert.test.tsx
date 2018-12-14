import * as React from 'react'
import * as renderer from 'react-test-renderer'
import * as Adapter from 'enzyme-adapter-react-16'
import { configure, mount } from 'enzyme'
import { Alert } from '../../components/Alert/Alert'

configure({ adapter: new Adapter() })

describe('<Alert>', () => {
  it('Should render with only content', () => {
    const wrapper = renderer.create(<Alert content="String" />)

    expect(wrapper.toJSON()).toMatchSnapshot()
  })

  it('Should render with props', () => {
    const wrapper = renderer.create(<Alert content="String" color="primary" isClosable />)

    expect(wrapper.toJSON()).toMatchSnapshot()
  })

  it('Should handle events', () => {
    const props = {
      onBeforeHide: jest.fn(),
      onHide: jest.fn(),
    }

    const wrapper = mount(<Alert {...props} content="String" color="primary" isClosable />)

    const inst = wrapper.instance() as any

    inst.componentDidMount()
    inst.props.onBeforeHide()
    expect(props.onBeforeHide).toHaveBeenCalled()
  })
})

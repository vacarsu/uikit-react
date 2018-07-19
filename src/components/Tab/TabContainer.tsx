import * as React from 'react'
import { createPortal } from 'react-dom'
import { setClassNames } from '../../utils/set-class-names'

export class TabContainer extends React.Component<TabContainerProps, any> {
  componentDidMount() {
    console.log(this.props.children)
    if (this.props.onBeforeShow) {
      this.validateIdProp()
      UIkit.util.on(this.props.id, 'beforeshow', () => {
        console.log('eventFired')
        this.props.onBeforeShow()
      })
    }

    if (this.props.onShow) {
      this.validateIdProp()
      UIkit.util.on(this.props.id, 'show', this.props.onShow)
    }

    if (this.props.onShown) {
      this.validateIdProp()
      UIkit.util.on(this.props.id, 'shown', this.props.onShown)
    }

    if (this.props.onBeforeHide) {
      this.validateIdProp()
      UIkit.util.on(this.props.id, 'beforehide', this.props.onBeforeHide)
    }

    if (this.props.onHide) {
      this.validateIdProp()
      UIkit.util.on(this.props.id, 'hide', this.props.onHide)
    }

    if (this.props.onHidden) {
      this.validateIdProp()
      UIkit.util.on(this.props.id, 'hidden', this.props.onHidden)
    }
  }

  render() {
    return (
      <div
        id={this.props.id ? this.props.id : null}
        style={this.props.style ? this.props.style : null}
        className={setClassNames(this.props)}
      >
        <ul uk-tab={this.props.options ? this.props.options : ''}>{this.renderChildren('tab')}</ul>
        <ul id={this.props.id ? this.props.id : ''} className="uk-switcher">
          {this.renderChildren('tab-content')}
        </ul>
      </div>
    )
  }

  private renderChildren(key) {
    return React.Children.map(this.props.children, (child, idx) => {
      const comp = child as React.ReactElement<any>
      if (comp.key === key) {
        return comp
      }
    })
  }

  private validateIdProp() {
    if (!this.props.id) {
      console.error('ID property is required to register to tab events')
    }
  }
}

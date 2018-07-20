import * as React from 'react'
import { setClassNames } from '../../utils/set-class-names'

export class Offcanvas extends React.Component<OffcanvasProps, any> {
  componentDidMount() {
    if (this.props.onBeforeShow) {
      UIkit.util.on(this.props.id, 'beforeshow', this.props.onBeforeShow)
    }

    if (this.props.onShow) {
      UIkit.util.on(this.props.id, 'show', this.props.onShow)
    }

    if (this.props.onShown) {
      UIkit.util.on(this.props.id, 'shown', this.props.onShown)
    }

    if (this.props.onBeforeHide) {
      UIkit.util.on(this.props.id, 'beforehide', this.props.onBeforeHide)
    }

    if (this.props.onHide) {
      UIkit.util.on(this.props.id, 'hide', this.props.onHide)
    }

    if (this.props.onHidden) {
      UIkit.util.on(this.props.id, 'hidden', this.props.onHidden)
    }
  }

  render() {
    return (
      <div
        id={this.props.id}
        style={this.props.style ? this.props.style : null}
        className={`${setClassNames(this.props)}`}
        data-uk-offcanvas={this.props.options ? this.props.options : ''}
      >
        <div className="uk-offcanvas-bar">{this.props.children}</div>
      </div>
    )
  }
}

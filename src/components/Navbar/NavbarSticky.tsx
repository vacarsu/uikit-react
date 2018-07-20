import * as React from 'react'
import { setClassNames } from '../../utils/set-class-names'

export class NavbarSticky extends React.Component<NavbarStickyProps, any> {
  componentDidMount() {
    if (this.props.onActive) {
      this.validateIdProp()
      UIkit.util.on(this.props.id, 'active', this.props.onActive)
    }
    if (this.props.onInactive) {
      this.validateIdProp()
      UIkit.util.on(this.props.id, 'active', this.props.onInactive)
    }
  }

  render() {
    return (
      <div
        id={this.props.id ? this.props.id : null}
        style={this.props.style ? this.props.style : null}
        className={`${setClassNames(this.props)}`}
        data-uk-sticky={`
                    sel-target: .uk-navbar-container;
                    cls-active: uk-navbar-sticky;
                    ${this.props.options ? this.props.options : ''}
            `}
      >
        {this.props.children}
      </div>
    )
  }

  private validateIdProp() {
    if (!this.props.id) {
      console.error('ID property is required to register to Navbar Sticky events')
    }
  }
}

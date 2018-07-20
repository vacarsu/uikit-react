import * as React from 'react'
import { setClassNames } from '../../utils/set-class-names'

export class NavbarDropdown extends React.Component<BaseProps, any> {
  render() {
    return (
      <div
        id={this.props.id ? this.props.id : null}
        style={this.props.style ? this.props.style : null}
        className={`uk-navbar-dropdown ${setClassNames(this.props)}`}
      >
        <ul className="uk-nav uk-navbar-dropdown-nav">{this.props.children}</ul>
      </div>
    )
  }
}

import * as React from 'react'
import * as _classNames from 'classnames'
const classNames = _classNames
import { setClassNames } from '../../utils/set-class-names'

export class NavItem extends React.Component<NavItemProps, any> {
  render() {
    return (
      <li
        id={this.props.id ? this.props.id : null}
        style={this.props.style ? this.props.style : null}
        className={`${this.setClassNames()}`}
      >
        {this.props.children}
      </li>
    )
  }

  private setClassNames(): string {
    return classNames({
      [`uk-nav-${this.props.type}`]: !!this.props.type,
      [`uk-parent`]: this.props.parent,
      [`${setClassNames(this.props)}`]: true,
    })
  }
}

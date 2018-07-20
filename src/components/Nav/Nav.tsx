import * as React from 'react'
import * as _classNames from 'classnames'
const classNames = _classNames
import { setClassNames } from '../../utils/set-class-names'

export class Nav extends React.Component<NavProps, any> {
  render() {
    return (
      <ul
        id={this.props.id ? this.props.id : null}
        style={this.props.style ? this.props.style : null}
        className={`${this.setClassNames()}`}
        data-uk-nav={this.props.options ? this.props.options : ''}
      >
        {this.props.children}
      </ul>
    )
  }

  setClassNames() {
    return classNames({
      [`uk-nav`]: true,
      [`uk-nav-${this.props.preset}`]: !!this.props.preset,
      [`uk-nav-sub`]: this.props.child,
      [`uk-nav-parent-icon`]: this.props.accordion,
      [`${setClassNames(this.props)}`]: true,
    })
  }
}

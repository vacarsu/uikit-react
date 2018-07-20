import * as React from 'react'
import * as _classNames from 'classnames'
const classNames = _classNames
import { setClassNames } from '../../utils/set-class-names'

export class NavbarContainer extends React.Component<NavbarContainerProps, any> {
  render() {
    return (
      <div>
        <nav
          id={this.props.id ? this.props.id : null}
          className={`${this.setClassNames()}`}
          style={this.props.style ? this.props.style : null}
          data-uk-navbar={this.props.options ? this.props.options : ''}
        >
          {this.props.children}
        </nav>
        {this.props.dropbar ? <div className="uk-navbar-dropbar" /> : null}
      </div>
    )
  }

  private setClassNames(): string {
    return classNames('uk-navbar-container', {
      [`uk-navbar-transparent`]: this.props.transparent,
      [setClassNames(this.props)]: true,
    })
  }
}

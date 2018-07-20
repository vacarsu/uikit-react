import * as React from 'react'
import * as _classNames from 'classnames'
const classNames = _classNames
import { setClassNames } from '../../utils/set-class-names'

export class Sidebar extends React.Component<SidebarProps, any> {
  render() {
    return (
      <div
        id={this.props.id ? this.props.id : null}
        style={this.props.style ? this.props.style : null}
        className={this.setClassNames()}
      >
        {this.props.children}
      </div>
    )
  }

  private setClassNames(): string {
    return classNames({
      [`uk-overflow-auto`]: true,
      [`uk-${this.props.visibility}`]: !!this.props.visibility,
      [setClassNames(this.props)]: true,
    })
  }
}

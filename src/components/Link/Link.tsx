import * as React from 'react'
import * as _classNames from 'classnames'
const classNames = _classNames
import { setClassNames } from '../../utils/set-class-names'

export class Link extends React.Component<LinkProps, any> {
  render() {
    return (
      <a
        id={this.props.id ? this.props.id : null}
        style={this.props.style ? this.props.style : null}
        data-uk-toggle={this.props.toggleOptions ? this.props.toggleOptions : null}
        href={this.props.href}
        className={`${this.setClassNames()}`}
      >
        {this.props.children}
      </a>
    )
  }

  private setClassNames() {
    return classNames({
      [`uk-link-${this.props.type}`]: !!this.props.type,
      [`${setClassNames(this.props)}`]: true,
    })
  }
}

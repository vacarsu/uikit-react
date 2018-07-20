import * as React from 'react'
import * as _classNames from 'classnames'
const classNames = _classNames
import { setClassNames } from '../../utils/set-class-names'

export class List extends React.Component<ListProps, any> {
  render() {
    return (
      <ul
        id={this.props.id ? this.props.id : null}
        style={this.props.style ? this.props.style : null}
        className={`${this.setClassNames()}`}
      >
        {this.props.children}
      </ul>
    )
  }

  private setClassNames() {
    return classNames('uk-list', {
      [`uk-link-${this.props.type}`]: !!this.props.type,
      [`${setClassNames(this.props)}`]: true,
    })
  }
}

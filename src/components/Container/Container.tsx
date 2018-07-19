import * as React from 'react'
import * as _classNames from 'classnames'
const classNames = _classNames

import { setClassNames } from '../../utils/set-class-names'

export class Container extends React.Component<ContainerProps, any> {
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
      [`uk-container`]: true,
      [`uk-container-${this.props.size}`]: !!this.props.size,
      [setClassNames(this.props)]: true,
    })
  }
}

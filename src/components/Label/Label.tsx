import * as React from 'react'
import * as _classNames from 'classnames'
const classNames = _classNames
import { setClassNames } from '../../utils/set-class-names'

export class Label extends React.Component<LabelProps, any> {
  render() {
    return (
      <div
        id={this.props.id ? this.props.id : null}
        style={this.props.style ? this.props.style : null}
        className={`${setClassNames(this.props)}`}
      >
        {this.props.content}
      </div>
    )
  }

  private setClassNames() {
    return classNames('uk-label', {
      [`uk-label-${this.props.color}`]: !!this.props.color,
    })
  }
}

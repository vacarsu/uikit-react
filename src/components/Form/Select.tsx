import * as React from 'react'
import * as _classNames from 'classnames'
const classNames = _classNames
import { setClassNames } from '../../utils/set-class-names'

export class Select extends React.Component<FormSelectProps, any> {
  render() {
    return (
      <select
        id={this.props.id}
        placeholder={this.props.placeholder ? this.props.placeholder : null}
        style={this.props.style ? this.props.style : null}
        className={this.setClassNames()}
        value={this.props.value}
        onChange={this.props.onChange}
      >
        {this.props.children}
      </select>
    )
  }

  private setClassNames(): string {
    return classNames({
      [`uk-select`]: true,
      [`uk-form-${this.props.color}`]: !!this.props.color,
      [`uk-form-${this.props.width}`]: !!this.props.width,
      [`uk-form-${this.props.layout}`]: !!this.props.layout,
      [`${setClassNames(this.props)}`]: true,
    })
  }
}

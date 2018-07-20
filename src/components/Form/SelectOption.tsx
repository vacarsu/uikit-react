import * as React from 'react'
import * as _classNames from 'classnames'
const classNames = _classNames
import { setClassNames } from '../../utils/set-class-names'

export class SelectOption extends React.Component<React.HTMLProps<HTMLOptionElement>, any> {
  render() {
    return (
      <option
        id={this.props.id ? this.props.id : null}
        style={this.props.style ? this.props.style : null}
        className={`${setClassNames(this.props)}`}
        value={this.props.value}
      >
        {this.props.children}
      </option>
    )
  }
}

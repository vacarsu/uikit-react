import * as React from 'react'
import { setClassNames } from '../../utils/set-class-names'

export class TableBody extends React.Component<BaseProps, any> {
  render() {
    return (
      <tbody
        id={this.props.id ? this.props.id : null}
        style={this.props.style ? this.props.style : null}
        className={`${setClassNames(this.props)}`}
      >
        {this.props.children}
      </tbody>
    )
  }
}

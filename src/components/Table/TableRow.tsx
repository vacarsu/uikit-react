import * as React from 'react'
import { setClassNames } from '../../utils/set-class-names'

export class TableRow extends React.Component<BaseProps, any> {
  render() {
    return (
      <tr
        id={this.props.id ? this.props.id : null}
        style={this.props.style ? this.props.style : null}
        className={`${setClassNames(this.props)}`}
      >
        {this.props.children}
      </tr>
    )
  }
}

import * as React from 'react'
import { setClassNames } from '../../utils/set-class-names'

export class TableHead extends React.Component<TableHeadProps, any> {
  render() {
    return (
      <thead
        id={this.props.id ? this.props.id : null}
        style={this.props.style ? this.props.style : null}
        className={`${setClassNames(this.props)}`}
      >
        {this.props.children}
      </thead>
    )
  }
}

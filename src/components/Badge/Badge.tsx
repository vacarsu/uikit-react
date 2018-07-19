import * as React from 'react'
import { setClassNames } from '../../utils/set-class-names'

export class Badge extends React.Component<BadgeProps, any> {
  render() {
    return (
      <span
        id={this.props.id ? this.props.id : null}
        style={this.props.style ? this.props.style : null}
        className={`uk-badge ${setClassNames(this.props)}`}
      >
        {this.props.count}
      </span>
    )
  }
}

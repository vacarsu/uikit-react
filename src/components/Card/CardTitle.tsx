import * as React from 'react'
import { setClassNames } from '../../utils/set-class-names'

export class CardTitle extends React.Component<BaseProps, any> {
  render() {
    return (
      <h3
        id={this.props.id ? this.props.id : null}
        style={this.props.style ? this.props.style : null}
        className={`uk-card-title ${setClassNames(this.props)}`}
      >
        {this.props.children}
      </h3>
    )
  }
}

import * as React from 'react'
import { setClassNames } from '../../utils/set-class-names'

export class Light extends React.Component<BaseContainerProps, any> {
  render() {
    return (
      <div
        id={this.props.id ? this.props.id : null}
        style={this.props.style ? this.props.style : null}
        className={`uk-light ${setClassNames(this.props)}`}
      >
        {this.props.children}
      </div>
    )
  }
}

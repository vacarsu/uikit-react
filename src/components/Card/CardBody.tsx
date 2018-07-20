import * as React from 'react'
import { setClassNames } from '../../utils/set-class-names'

export class CardBody extends React.Component<BaseProps, any> {
  render() {
    return (
      <div
        id={this.props.id ? this.props.id : null}
        style={this.props.style ? this.props.style : null}
        className={`uk-card-body ${setClassNames(this.props)}`}
      >
        {this.props.children}
      </div>
    )
  }
}

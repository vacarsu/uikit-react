import * as React from 'react'
import { setClassNames } from '../../utils/set-class-names'

export class CardFooter extends React.Component<BaseProps, any> {
  render() {
    return (
      <div
        id={this.props.id ? this.props.id : null}
        style={this.props.style ? this.props.style : null}
        className={`uk-card-footer ${setClassNames(this.props)}`}
      >
        {this.props.children}
      </div>
    )
  }
}

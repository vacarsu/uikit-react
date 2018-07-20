import * as React from 'react'
import { setClassNames } from '../../utils/set-class-names'

export class Scrollspy extends React.Component<ScrollspyProps, any> {
  render() {
    return (
      <div
        id={this.props.id ? this.props.id : null}
        style={this.props.style ? this.props.style : null}
        className={`${setClassNames(this.props)}`}
        data-uk-scrollspy={this.props.options ? this.props.options : ''}
      >
        {this.props.children}
      </div>
    )
  }
}

import * as React from 'react'
import { setClassNames } from '../../utils/set-class-names'

export class Breadcrumb extends React.Component<BreadcrumbProps, any> {
  render() {
    return (
      <ul
        id={this.props.id ? this.props.id : null}
        style={this.props.style ? this.props.style : null}
        className={`uk-breadcrumb ${setClassNames(this.props)}`}
      >
        {this.props.children}
      </ul>
    )
  }
}

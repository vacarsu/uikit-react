import * as React from 'react'
import { setClassNames } from '../../utils/set-class-names'

export class OffcanvasContainer extends React.Component<BaseProps, any> {
  render() {
    return (
      <div
        id={this.props.id ? this.props.id : null}
        style={this.props.style ? this.props.style : null}
        className={`uk-offcanvas-content ${setClassNames(this.props)}`}
      >
        {this.props.children}
      </div>
    )
  }
}

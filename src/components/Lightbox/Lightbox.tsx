import * as React from 'react'
import { setClassNames } from '../../utils/set-class-names'

export class Lightbox extends React.Component<LightboxProps, any> {
  render() {
    return (
      <div
        id={this.props.id ? this.props.id : null}
        style={this.props.style ? this.props.style : null}
        className={setClassNames(this.props)}
        data-uk-lightbox={this.props.options ? this.props.options : ''}
      >
        {this.props.children}
      </div>
    )
  }
}

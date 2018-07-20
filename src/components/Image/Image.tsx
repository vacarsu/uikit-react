import * as React from 'react'
import * as _classNames from 'classnames'
const classNames = _classNames
import { setClassNames } from '../../utils/set-class-names'

export class Image extends React.Component<ImageProps, any> {
  render() {
    return (
      <img
        id={this.props.id ? this.props.id : null}
        className={this.props.className}
        width={this.props.width}
        height={this.props.height}
        style={this.props.style ? this.props.style : null}
        data-src={this.props.src}
        data-uk-img={this.props.options ? this.props.options : ''}
      />
    )
  }
}

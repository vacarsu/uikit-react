import * as React from 'react'
import * as _classNames from 'classnames'
const classNames = _classNames
import { setClassNames } from '../../utils/set-class-names'

export class Overlay extends React.Component<OverlayProps, any> {
  render() {
    return (
      <div
        id={this.props.id ? this.props.id : null}
        style={this.props.style ? this.props.style : null}
        className={`${this.setClassNames()}`}
      >
        {this.props.showIcon ? <span uk-overlay-icon /> : null}
      </div>
    )
  }

  private setClassNames() {
    return classNames('uk-overlay', {
      [`uk-position-${this.props.position}`]: !!this.props.position,
      [`uk-position-${this.props.type}`]: !!this.props.type,
      [`${setClassNames(this.props)}`]: true,
    })
  }
}

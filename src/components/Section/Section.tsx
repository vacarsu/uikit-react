import * as React from 'react'
import * as _classNames from 'classnames'
const classNames = _classNames
import { setClassNames } from '../../utils/set-class-names'

export class Section extends React.Component<SectionProps, any> {
  render() {
    return (
      <div
        id={this.props.id ? this.props.id : null}
        style={this.props.style ? this.props.style : null}
        className={`${this.setClassNames()}`}
      >
        {this.props.children}
      </div>
    )
  }

  private setClassNames(): string {
    return classNames({
      [`uk-section`]: this.props.padding,
      [`uk-section-${this.props.color}`]: !!this.props.color,
      [`uk-section-${this.props.size}`]: !!this.props.size,
      [`uk-preserve-color`]: this.props.preserveColor,
      [setClassNames(this.props)]: true,
      [`uk-position-${this.props.position}`]: !!this.props.position,
    })
  }
}

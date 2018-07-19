import * as React from 'react'
import * as _classNames from 'classnames'
const classNames = _classNames
import { setClassNames } from '../../utils/set-class-names'

export class Card extends React.Component<CardProps, any> {
  render() {
    return (
      <div
        id={this.props.id ? this.props.id : null}
        style={this.props.style ? this.props.style : null}
        className={this.setClassNames()}
      >
        {this.props.children}
      </div>
    )
  }

  private setClassNames(): string {
    return classNames('uk-card', {
      [`uk-card-default`]: !this.props.color,
      [`uk-card-${this.props.color}`]: !!this.props.color,
      [`uk-card-hover`]: this.props.hover,
      [`uk-card-${this.props.size}`]: !!this.props.size,
      [setClassNames(this.props)]: true,
    })
  }
}

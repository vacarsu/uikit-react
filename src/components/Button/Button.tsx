import * as React from 'react'
import * as _classNames from 'classnames'
const classNames = _classNames
import { setClassNames } from '../../utils/set-class-names'

export class Button extends React.Component<ButtonProps, any> {
  render() {
    return this.isLink() ? (
      <a
        id={this.props.id ? this.props.id : null}
        style={this.props.style ? this.props.style : null}
        data-uk-toggle={this.props.toggleOptions}
        href={this.props.href}
        onClick={this.props.onClick}
        className={this.setClassNames()}
      >
        {this.props.children}
      </a>
    ) : (
      <button
        id={this.props.id ? this.props.id : null}
        style={this.props.style ? this.props.style : null}
        data-uk-toggle={this.props.toggleOptions}
        onClick={this.props.onClick}
        className={this.setClassNames()}
      >
        {this.props.children}
      </button>
    )
  }

  private isLink(): boolean {
    return !!this.props.href
  }

  private setClassNames(): string {
    return classNames('uk-button', {
      [`uk-button-default`]: !this.props.color,
      [`uk-button-${this.props.color}`]: !!this.props.color,
      [`uk-button-${this.props.size}`]: !!this.props.size,
      [`${setClassNames(this.props)}`]: true,
    })
  }
}

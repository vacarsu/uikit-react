import * as React from 'react'
import * as _classNames from 'classnames'

const classNames = _classNames
import { setClassNames } from '../../utils/set-class-names'

export class Icon extends React.Component<IconProps, any> {
  render() {
    return this.renderIconType()
  }

  private renderIconType() {
    if (this.props.href) {
      return (
        <a
          id={this.props.id ? this.props.id : null}
          style={this.props.style ? this.props.style : null}
          className={this.getClassNames()}
          href={this.props.href}
          uk-icon={this.props.options}
        />
      )
    }
    if (this.props.image) {
      return (
        <span
          id={this.props.id ? this.props.id : null}
          className={this.getClassNames()}
          style={{
            backgroundImage: `url(${this.props.image})`,
            ...this.props.style,
          }}
          uk-icon={this.props.options}
        />
      )
    }

    return (
      <em
        id={this.props.id ? this.props.id : null}
        style={this.props.style ? this.props.style : null}
        className={this.getClassNames()}
        uk-icon={this.props.options}
      />
    )
  }

  private getClassNames(): string {
    return classNames({
      [`uk-icon`]: true,
      [`uk-icon-button`]: this.props.button,
      [`uk-icon-link`]: !!this.props.href,
      [`uk-icon-image`]: !!this.props.image,
      [`${setClassNames(this.props)}`]: true,
    })
  }
}

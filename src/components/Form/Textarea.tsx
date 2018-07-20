import * as React from 'react'
import * as _classNames from 'classnames'
const classNames = _classNames
import { setClassNames } from '../../utils/set-class-names'

export class Textarea extends React.Component<FormTextareaProps, any> {
  render() {
    return (
      <textarea
        id={this.props.id ? this.props.id : null}
        placeholder={this.props.placeholder ? this.props.placeholder : null}
        style={this.props.style ? this.props.style : null}
        className={this.setClassNames()}
        name={this.props.name ? this.props.name : null}
        onChange={this.props.onChange}
        onBlur={this.props.onBlur}
        onFocus={this.props.onFocus}
      >
        {this.props.children}
      </textarea>
    )
  }

  private setClassNames(): string {
    return classNames({
      [`uk-textarea`]: true,
      [`uk-form-${this.props.color}`]: !!this.props.color,
      [`uk-form-${this.props.width}`]: !!this.props.width,
      [`uk-form-${this.props.layout}`]: !!this.props.layout,
      [`${setClassNames(this.props)}`]: true,
    })
  }
}

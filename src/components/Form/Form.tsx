import * as React from 'react'
import * as _classNames from 'classnames'
const classNames = _classNames
import { setClassNames } from '../../utils/set-class-names'

export class Form extends React.Component<FormProps, any> {
  render() {
    return (
      <div
        id={this.props.id ? this.props.id : null}
        style={this.props.style ? this.props.style : null}
        className={this.setClassNames()}
        data-uk-form-custom={this.props.custom ? '' : null}
      >
        {this.props.children}
      </div>
    )
  }

  private setClassNames(): string {
    return classNames({
      [`uk-form-${this.props.layout}`]: !!this.props.layout,
      [`${setClassNames(this.props)}`]: true,
    })
  }
}

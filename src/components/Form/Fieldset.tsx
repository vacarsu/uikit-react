import * as React from 'react'
import * as _classNames from 'classnames'
const classNames = _classNames
import { setClassNames } from '../../utils/set-class-names'

export class Fieldset extends React.Component<BaseProps, any> {
  render() {
    return (
      <fieldset
        id={this.props.id ? this.props.id : null}
        style={this.props.style ? this.props.style : null}
        className={this.setClassNames()}
      >
        {this.props.children}
      </fieldset>
    )
  }

  private setClassNames(): string {
    return classNames({
      [`uk-fieldset`]: true,
      [`${setClassNames(this.props)}`]: true,
    })
  }
}

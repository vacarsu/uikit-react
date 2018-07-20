import * as React from 'react'
import * as _classNames from 'classnames'
const classNames = _classNames
import { setClassNames } from '../../utils/set-class-names'

export class InputContainer extends React.Component<BaseContainerProps, any> {
  render() {
    return (
      <div
        id={this.props.id ? this.props.id : null}
        style={this.props.style ? this.props.style : null}
        className={`uk-form-controls ${setClassNames(this.props)}`}
      >
        {this.props.children}
      </div>
    )
  }
}

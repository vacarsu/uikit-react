import * as React from 'react'
import * as _classNames from 'classnames'
const classNames = _classNames
import { setClassNames } from '../../utils/set-class-names'

export class Progress extends React.Component<ProgressProps, ProgressState> {
  constructor(props) {
    super(props)

    this.state = { value: props.value }
  }

  static getDerivedStateFromProps(props, currentState) {
    if (currentState !== props.value) {
      return {
        value: props.value,
      }
    }
  }

  render() {
    return (
      <progress
        id={this.props.id ? this.props.id : null}
        style={this.props.style ? this.props.style : null}
        className={`${this.setClassNames()}`}
        value={this.state.value}
        max={this.props.max}
      />
    )
  }

  private setClassNames() {
    return classNames('uk-progress', {
      [`${setClassNames(this.props)}`]: true,
    })
  }
}

import * as React from 'react'
import * as _classNames from 'classnames'
const classNames = _classNames
import { setClassNames } from '../../utils/set-class-names'

export class Flex extends React.Component<FlexProps, any> {
  render() {
    return (
      <div
        id={this.props.id ? this.props.id : null}
        style={this.props.style ? this.props.style : null}
        className={`uk-flex ${this.setClassNames()}`}
      >
        {this.props.children}
      </div>
    )
  }

  private setClassNames(): string {
    const alignments = this.props.alignment ? this.props.alignment.split(' ') : []

    return classNames({
      [`uk-flex-${alignments[0]}`]: !!alignments[0],
      [`uk-flex-${alignments[1]}`]: !!alignments[1],
      [`uk-flex-${this.props.direction}`]: !!this.props.direction,
      [`uk-flex-${this.props.wrap}`]: !!this.props.wrap,
      [`${setClassNames(this.props)}`]: true,
    })
  }
}

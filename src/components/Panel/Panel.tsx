import * as React from 'react'
import * as _classNames from 'classnames'
const classNames = _classNames
import { setClassNames } from '../../utils/set-class-names'

export class Panel extends React.Component<PanelProps, any> {
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

  private setClassNames() {
    return classNames('uk-panel', {
      [`uk-panel-scrollable`]: this.props.isScrollable,
      [setClassNames(this.props)]: true,
    })
  }
}

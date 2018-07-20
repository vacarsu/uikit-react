import * as React from 'react'
import * as _classNames from 'classnames'
const classNames = _classNames
import { setClassNames } from '../../utils/set-class-names'

export class Grid extends React.Component<GridProps, any> {
  render() {
    return (
      <div
        id={this.props.id ? this.props.id : null}
        style={this.props.style ? this.props.style : null}
        className={`${this.setClassNames()}`}
        data-uk-grid={this.props.options ? this.props.options : ''}
      >
        {this.props.children}
      </div>
    )
  }

  private setClassNames() {
    return classNames({
      [`uk-grid-${this.props.gutter}`]: !!this.props.gutter,
      [`uk-grid-divider`]: this.props.divider,
      [`uk-grid-match`]: this.props.match,
      [`${setClassNames(this.props)}`]: true,
    })
  }
}

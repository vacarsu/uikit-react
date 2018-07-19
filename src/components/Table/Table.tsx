import * as React from 'react'
import * as _classNames from 'classnames'
const classNames = _classNames
import { setClassNames } from '../../utils/set-class-names'

export class Table extends React.Component<TableProps, any> {
  render() {
    return (
      <table
        id={this.props.id ? this.props.id : null}
        style={this.props.style ? this.props.style : null}
        className={`${this.setClassNames()}`}
      >
        {this.props.children}
      </table>
    )
  }

  private setClassNames(): string {
    return classNames('uk-table', {
      [`uk-table-divider`]: this.props.divider,
      [`uk-table-striped`]: this.props.striped,
      [`uk-table-hover`]: this.props.hover,
      [`uk-table-justify`]: this.props.justify,
      [`uk-table-middle`]: this.props.center,
      [`uk-overflow-auto`]: this.props.responsive,
      [`uk-table-${this.props.size}`]: !!this.props.size,
      [`${setClassNames(this.props)}`]: true,
    })
  }
}

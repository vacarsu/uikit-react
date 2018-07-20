import * as React from 'react'
import { setClassNames } from '../../utils/set-class-names'

export class Dropdown extends React.Component<DropdownProps, any> {
  render() {
    return (
      <div
        id={this.props.id ? this.props.id : null}
        className={`${setClassNames(this.props)}`}
        data-uk-dropdown={this.props.options ? this.props.options : ''}
      >
        <ul style={this.props.style ? this.props.style : null} className={`uk-nav uk-dropdown-nav`}>
          {this.props.children}
        </ul>
      </div>
    )
  }
}

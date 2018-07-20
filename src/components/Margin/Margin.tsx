import * as React from 'react'
import * as _classNames from 'classnames'
const classNames = _classNames
import { setClassNames } from '../../utils/set-class-names'

export class Margin extends React.Component<MarginProps, any> {
  render() {
    return (
      <div
        id={this.props.id ? this.props.id : null}
        style={this.props.style ? this.props.style : null}
        data-uk-margin={this.props.dynamicWrapping}
        className={this.setClassNames()}
      >
        {this.props.children}
      </div>
    )
  }

  private setClassNames() {
    const stringArray = this.props.type.split('; ')
    let classString: string

    stringArray.map((string, idx) => {
      classString = `${classString} uk-margin-${string}`
    })

    return classNames(classString, {
      [`${setClassNames(this.props)}`]: true,
    })
  }
}

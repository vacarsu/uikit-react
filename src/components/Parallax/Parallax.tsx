import * as React from 'react'
import { setClassNames } from '../../utils/set-class-names'

export class Parallax extends React.Component<ParallaxProps, any> {
  render() {
    return (
      <div
        id={this.props.id ? this.props.id : null}
        style={this.props.style ? this.props.style : null}
        className={`${setClassNames(this.props)}`}
      >
        {this.applyParallaxFiltersToChild()}
      </div>
    )
  }

  private applyParallaxFiltersToChild() {
    return React.Children.map(this.props.children, (child: React.ReactChild, idx: number) => {
      if (idx > 0) return child
      return React.cloneElement(child as React.ReactElement<any>, {
        'uk-parallax': this.props.options,
      })
    })
  }
}

import * as React from 'react'
import * as _classNames from 'classnames'

const classNames = _classNames
import { setClassNames } from '../../utils/set-class-names'

export class Slideshow extends React.Component<SlideshowProps, any> {
  render() {
    return (
      <div
        id={this.props.id ? this.props.id : null}
        style={this.props.style ? this.props.style : null}
        className={`${setClassNames(this.props)}`}
        data-uk-slideshow={this.props.options ? this.props.options : ''}
      >
        {this.setNavigation()}
      </div>
    )
  }

  private setNavigation() {
    if (this.props.navigation) {
      return (
        <div className={`uk-position-relative uk-visible-toggle ${this.setNavigationStyle()}`}>
          <ul className="uk-slideshow-items">{this.props.children}</ul>
          <a
            className="uk-position-center-left uk-position-small uk-hidden-hover"
            href="#"
            uk-slidenav-previous=""
            uk-slideshow-item="previous"
          />
          <a
            className="uk-position-center-right uk-position-small uk-hidden-hover"
            href="#"
            uk-slidenav-next=""
            uk-slideshow-item="next"
          />
        </div>
      )
    }
    return <ul className="uk-slideshow-items">{this.props.children}</ul>
  }

  private setNavigationStyle() {
    if (this.props.navigation && this.props.navigationStyle) {
      return `uk-${this.props.navigationStyle}`
    }

    return `uk-dark`
  }
}

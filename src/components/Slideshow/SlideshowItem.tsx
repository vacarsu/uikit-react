import * as React from 'react'
import { setClassNames } from '../../utils/set-class-names'

export class SlideshowItem extends React.Component<SlideshowItemProps, any> {
  render() {
    return (
      <li
        id={this.props.id ? this.props.id : null}
        style={this.props.style ? this.props.style : null}
        className={`${setClassNames(this.props)}`}
      >
        {this.renderBasedOnType()}
      </li>
    )
  }

  private renderBasedOnType() {
    if (this.props.type === 'image') {
      return <img src={this.props.src} alt={this.props.alt} uk-cover="" />
    }
    if (this.props.type === 'video') {
      return (
        <video
          autoPlay={this.props.autoPlay}
          loop={this.props.loop}
          muted={this.props.muted}
          playsinline={this.props.playsinline}
          data-uk-cover={''}
        >
          <source src={this.props.src} type={`${this.props.type}/${this.props.videoFormat}`} />
        </video>
      )
    }
    console.error('Type property on cover component must be either video or image')
  }
}

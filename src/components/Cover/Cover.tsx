import * as React from 'react'
import { setClassNames } from '../../utils/set-class-names'

export class Cover extends React.Component<CoverProps, any> {
  render() {
    return (
      <div
        id={this.props.id ? this.props.id : null}
        style={this.props.style ? this.props.style : null}
        className={`uk-cover-container ${setClassNames(this.props)}`}
      >
        {this.renderResponsiveMode()}
        {this.renderBasedOnType()}
      </div>
    )
  }

  private renderResponsiveMode() {
    if (this.props.responsive) {
      return <canvas width={this.props.width} height={this.props.height} />
    }
  }

  private renderBasedOnType() {
    if (this.props.type === 'image') {
      return (
        <img
          src={this.props.src}
          alt={this.props.alt}
          width={this.props.width}
          height={this.props.height}
          data-uk-cover={''}
        />
      )
    }
    if (this.props.type === 'video') {
      return (
        <video
          autoPlay={this.props.autoPlay}
          loop={this.props.loop}
          muted={this.props.muted}
          playsinline={this.props.playsinline}
          width={this.props.width}
          height={this.props.height}
          data-uk-cover={''}
        >
          <source src={this.props.src} type={`${this.props.type}/${this.props.videoFormat}`} />
        </video>
      )
    }
    console.error('Type property on cover component must be either video or image')
  }
}

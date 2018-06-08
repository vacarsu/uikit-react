import * as React from 'react';

declare interface props {
    src: string;
    alt?: string;
    type: 'image' | 'video';
    videoFormat?: string;
    autoPlay?: boolean;
    loop?: boolean;
    muted?: boolean;
    playsinline?: boolean;
}


export class SlideshowItem extends React.Component<props, any> {
    render() {
        return (
            <li>
                {this.renderBasedOnType()}
            </li>
        );
    }

    private renderBasedOnType() {
        if (this.props.type === 'image') {
            return (
                <img
                    src={this.props.src}
                    alt={this.props.alt}
                    uk-cover=""
                />
            );
        } else if (this.props.type === 'video') {
            return (
                <video
                    autoPlay={this.props.autoPlay}
                    loop={this.props.loop}
                    muted={this.props.muted}
                    playsinline={this.props.playsinline}
                    uk-cover=""
                >
                    <source src={this.props.src} type={`${this.props.type}/${this.props.videoFormat}`} />
                </video>
            )
        } else {
            console.error('Type property on cover component must be either video or image');
        }
    }
}
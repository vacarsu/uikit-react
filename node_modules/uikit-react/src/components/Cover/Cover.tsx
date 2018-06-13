import * as React from 'react';
import { alignClass } from '../../utils/align-class';
import { heightClass } from '../../utils/height-class';
import { widthClass } from '../../utils/width-class';

declare interface props {
    src: string;
    alt?: string;
    type: 'video' | 'image';
    videoFormat?: string;
    autoPlay?: boolean;
    loop?: boolean;
    muted?: boolean;
    playsinline?: boolean;
    width?: string;
    height?: string;
    responsive?: boolean;
}

export class Cover extends React.Component<props, any> {
    render() {
        return (
            <div className="uk-cover-container">
                {this.renderResponsiveMode()}
                {this.renderBasedOnType()}
            </div>
        );
    }

    private renderResponsiveMode() {
        if (this.props.responsive) {
            return (<canvas width={this.props.width} height={this.props.height} />);
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
                    uk-cover
                />
            );
        } else if (this.props.type === 'video') {
            return (
                <video
                    autoPlay={this.props.autoPlay}
                    loop={this.props.loop}
                    muted={this.props.muted}
                    playsinline={this.props.playsinline}
                    width={this.props.width}
                    height={this.props.height}
                    uk-cover
                >
                    <source src={this.props.src} type={`${this.props.type}/${this.props.videoFormat}`} />
                </video>
            )
        } else {
            console.error('Type property on cover component must be either video or image');
        }
    }
}
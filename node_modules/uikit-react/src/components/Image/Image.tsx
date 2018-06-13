import * as React from 'react';

declare interface props {
    src: string;
    options?: string;
    className?: string;
    width?: string;
    height?: string;
    style?: object;
    alt?: string;
}

export class Image extends React.Component<props, any> {
    render() {
        return (
            <img
                className={this.props.className}
                width={this.props.width}
                height={this.props.height}
                style={this.props.style}
                data-src={this.props.src}
                uk-img={this.props.options ? this.props.options : ""}
            />
        );
    }
}
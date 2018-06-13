import * as React from 'react';

declare interface props {
    href: string;
    caption?: string;
}


export class LightboxItem extends React.Component<props, any> {
    render() {
        return (
            <a href={this.props.href} data-caption={this.props.caption}>
                {this.props.children}
            </a>
        );
    }
}
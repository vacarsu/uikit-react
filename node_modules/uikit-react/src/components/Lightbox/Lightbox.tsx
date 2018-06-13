import * as React from 'react';

declare interface props extends BaseProps {
    options: string;
}

export class Lightbox extends React.Component<props, any> {
    render() {
        return (
            <div uk-grid uk-lightbox={this.props.options ? this.props.options : ""}>
                {this.props.children}
            </div>
        );
    }
}
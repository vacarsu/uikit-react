import * as React from 'react';

declare interface props {
    options: string;
}

export class Scrollspy extends React.Component<props, any> {
    render() {
        return (
            <div uk-scrollspy={this.props.options}>
                {this.props.children}
            </div>
        );
    }
}
import * as React from 'react';

declare interface props {
}

export class Breadcrumb extends React.Component<props, any> {
    render() {
        return (
            <ul className="uk-breadcrumb">
                {this.props.children}
            </ul>
        );
    }
}
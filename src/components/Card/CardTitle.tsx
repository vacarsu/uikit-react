import * as React from 'react';

declare interface props {
}

export class CardTitle extends React.Component<props, any> {
    render() {
        return (
            <h3 className="uk-card-title">
                {this.props.children}
            </h3>
        );
    }
}
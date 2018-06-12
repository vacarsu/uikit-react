import * as React from 'react';

declare interface props {
}

export class CardHeader extends React.Component<props, any> {
    render() {
        return (
            <div className="uk-card-header">
                {this.props.children}
            </div>
        );
    }
}
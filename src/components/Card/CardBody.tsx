import * as React from 'react';

declare interface props {
}

export class CardBody extends React.Component<props, any> {
    render() {
        return (
            <div className="uk-card-body">
                {this.props.children}
            </div>
        );
    }
}
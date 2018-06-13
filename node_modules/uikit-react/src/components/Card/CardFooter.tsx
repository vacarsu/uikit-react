import * as React from 'react';

declare interface props {
}

export class CardFooter extends React.Component<props, any> {
    render() {
        return (
            <div className="uk-card-footer">
                {this.props.children}
            </div>
        );
    }
}
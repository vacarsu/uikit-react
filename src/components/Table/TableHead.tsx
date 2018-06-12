import * as React from 'react';

declare interface props {
    shrink?: boolean;
    expand?: boolean;
    width?: string;
}

export class TableHead extends React.Component<props, any> {
    render() {
        return (
            <thead>
                {this.props.children}
            </thead>
        );
    }
}
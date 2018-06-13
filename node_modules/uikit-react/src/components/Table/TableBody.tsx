import * as React from 'react';

declare interface props {
}

export class TableBody extends React.Component<props, any> {
    render() {
        return (
            <tbody>
                {this.props.children}
            </tbody>
        );
    }
}
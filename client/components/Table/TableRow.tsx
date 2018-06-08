import * as React from 'react';

declare interface props {
}

export class TableRow extends React.Component<props, any> {
    render() {
        return (
            <tr>
                {this.props.children}
            </tr>
        );
    }
}
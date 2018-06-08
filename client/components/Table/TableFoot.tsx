import * as React from 'react';

declare interface props {
}

export class TableFoot extends React.Component<props, any> {
    render() {
        return (
            <tfoot>
                {this.props.children}
            </tfoot>
        );
    }
}
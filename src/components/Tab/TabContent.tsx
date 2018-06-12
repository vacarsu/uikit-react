import * as React from 'react';

declare interface props {}


export class TabContent extends React.Component<props, any> {
    render() {
        return (
            <li>
                {this.props.children}
            </li>
        );
    }
}
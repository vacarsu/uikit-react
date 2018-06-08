import * as React from 'react';

declare interface props {}


export class Tab extends React.Component<props, any> {
    render() {
        return (
            <li>
                <a href="#">
                    {this.props.children}
                </a>
            </li>
        );
    }
}
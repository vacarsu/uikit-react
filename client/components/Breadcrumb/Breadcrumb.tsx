import * as React from 'react';
import { colorClass } from '../../utils/color-class';

declare interface props {
    children: any;
}

export class Breadcrumb extends React.Component<props, any> {
    render() {
        return (
            <ul className="uk-breadcrumb">
                {this.props.children}
            </ul>
        );
    }
}
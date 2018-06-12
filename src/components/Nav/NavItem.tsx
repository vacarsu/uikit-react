import * as React from 'react';
const classNames = require('classnames');

declare interface props {
    type?: 'header' | 'divider';
    parent?: boolean;
}

export class NavItem extends React.Component<props, any> {
    render() {
        return (
            <li className={`${this.setClassNames()}`}>
                {this.props.children}
            </li>
        );
    }

    private setClassNames(): string {
        return classNames({
            [`uk-nav-${this.props.type}`]: !!this.props.type,
            [`uk-parent`]: this.props.parent
        })
    }
}
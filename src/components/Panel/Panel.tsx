import * as React from 'react';
const classNames = require('classnames');

import { setClassNames } from '../../utils/set-class-names';

declare interface props extends BaseProps {
    isScrollable?: boolean;
}

export class Panel extends React.Component<props, any> {
    render() {
        return (
            <div className={this.setClassNames()}>
                {this.props.children}
            </div>
        );
    }

    private setClassNames() {
        return classNames({
            [`uk-panel`]: true,
            [`uk-panel-scrollable`]: this.props.isScrollable,
            [setClassNames(this.props)]: true
        });
    }

    private isScrollable() {
        if (this.props.isScrollable) return 'uk-panel-scrollable';
    }
}
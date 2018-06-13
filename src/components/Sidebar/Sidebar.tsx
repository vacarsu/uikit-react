import * as React from 'react';
import * as _classNames from 'classnames'; let classNames = _classNames;

import { setClassNames } from '../../utils/set-class-names';
import { Panel } from '../Panel/Panel';

declare interface props extends BaseProps {
    visibility?: string;
}


export class Sidebar extends React.Component<props, any> {
    render() {
        return (
            <div style={this.props.style} className={this.setClassNames()}>
                {this.props.children}
            </div>
        );
    }

    private setClassNames(): string {
        return classNames({
            [`uk-overflow-auto`]: true,
            [`uk-${this.props.visibility}`]: !!this.props.visibility,
            [setClassNames(this.props)]: true
        });
    }
}
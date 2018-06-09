import * as React from 'react';
import * as classNames from 'classNames';

import { setClassNames } from '../../utils/set-class-names';
import { Panel } from '../Panel/Panel';

declare interface props extends BaseProps {
    visibility?: string;
}


export class Sidebar extends React.Component<props, any> {
    render() {
        return (
            <div style={{
                position: 'fixed',
                top: '80px',
                bottom: '0',
                boxSizing: 'border-box',
                width: '240px !important',
                padding: '40px 40px 60px 40px',
                borderRight: '1px #e5e5e5 solid',
                overflow: 'auto'
            }} className={this.setClassNames()}>
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
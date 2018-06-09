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
            <Panel className={this.setClassNames()}>
                {this.props.children}
            </Panel>
        );
    }

    private setClassNames(): string {
        return classNames({
            [`uk-${this.props.visibility}`]: !!this.props.visibility,
            [setClassNames(this.props)]: true
        });
    }
}
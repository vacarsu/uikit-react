import * as React from 'react';
const classNames = require('classnames');
import { setClassNames } from '../../utils/set-class-names';

declare interface props extends BaseProps {
    padding?: boolean;
    color?: string;
    size?: string;
    preserveColor?: boolean;
}


export class Section extends React.Component<props, any> {
    render() {
        return (
            <div className={`
                ${this.setClassNames()}
            `}>
                {this.props.children}
            </div>
        );
    }

    private setClassNames(): string {
        return classNames({
            [`uk-section`]: this.props.padding,
            [`uk-section-${this.props.color}`]: !!this.props.color,
            [`uk-section-${this.props.size}`]: !!this.props.size,
            [`uk-preserve-color`]: this.props.preserveColor,
            [setClassNames(this.props)]: true,
            [`uk-position-${this.props.position}`]: !!this.props.position
        })
    }
}
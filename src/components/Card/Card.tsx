import * as React from 'react';
import * as _classNames from 'classnames'; let classNames = _classNames;
import { setClassNames } from '../../utils/set-class-names';

declare interface props extends BaseProps {
    hover?: boolean;
    color?: string;
    size?: string;
}

export class Card extends React.Component<props, any> {
    render() {
        return (
            <div className={this.setClassNames()}>
                {this.props.children}
            </div>
        );
    }

    private setClassNames(): string {
        return classNames('uk-card', {
            [`uk-card-default`]: !this.props.color,
            [`uk-card-${this.props.color}`]: !!this.props.color,
            [`uk-card-hover`]: this.props.hover,
            [`uk-card-${this.props.size}`]: !!this.props.size,
            [setClassNames(this.props)]: true
        });
    }
}
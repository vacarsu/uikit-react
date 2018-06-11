import * as React from 'react';
import * as classNames from 'classnames';
import { setClassNames } from '../../utils/set-class-names';
import { alignClass } from '../../utils/align-class';

declare interface props extends BaseProps {
    toggleOptions?: string;
    color?: string;
    size?: string;
    href?: string;
    onClick?: any;
}

export class Button extends React.Component<props, any> {
    render() {
        return (
            this.isLink() ?
            <a 
                uk-toggle={this.props.toggleOptions}
                href={this.props.href}
                onClick={this.props.onClick}
                className={this.setClassNames()}
            >
                {this.props.children}
            </a>
            :
            <button 
                uk-toggle={this.props.toggleOptions}
                onClick={this.props.onClick}
                className={this.setClassNames()}
            >
                {this.props.children}
            </button>
        )
    }

    private isLink(): boolean {
        return this.props.href ? true : false;
    }

    private setClassNames(): string {
        return classNames('uk-button', {
            [`uk-button-default`]: !this.props.color,
            [`uk-button-${this.props.color}`]: !!this.props.color,
            [`uk-button-${this.props.size}`]: !!this.props.size,
            [`${setClassNames(this.props)}`]: true
        });
    }
}
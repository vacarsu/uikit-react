import * as React from 'react';
const classNames = require('classnames');

declare interface props extends React.HTMLProps<HTMLFormElement> {
    layout?: string;
    custom?: boolean;
}

export class Form extends React.Component<props, any> {
    render() {
        return (
            <div
                className={this.setClassNames()}
                uk-form-custom={this.props.custom ? "" : null}>
                {this.props.children}
            </div>
        );
    }

    private setClassNames(): string {
        return classNames({
            [`uk-form-${this.props.layout}`]: !!this.props.layout
        });
    }
}
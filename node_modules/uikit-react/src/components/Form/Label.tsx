import * as React from 'react';
const classNames = require('classnames');

declare interface props extends React.HTMLProps<HTMLLabelElement> {
}

export class Label extends React.Component<props, any> {
    render() {
        return (
            <label className="uk-form-label" htmlFor={this.props.htmlFor}>
                {this.props.children}
            </label>
        );
    }
}
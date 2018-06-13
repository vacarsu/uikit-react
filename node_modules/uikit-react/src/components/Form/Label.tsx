import * as React from 'react';
import * as _classNames from 'classnames'; let classNames = _classNames;

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
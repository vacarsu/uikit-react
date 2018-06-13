import * as React from 'react';
import * as _classNames from 'classnames'; let classNames = _classNames;

declare interface props extends React.HTMLProps<HTMLOptionElement> {
}

export class SelectOption extends React.Component<props, any> {
    render() {
        return (
            <option value={this.props.value}>
                {this.props.children}
            </option>
        );
    }
}
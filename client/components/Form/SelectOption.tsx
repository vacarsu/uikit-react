import * as React from 'react';
import * as classNames from 'classnames';

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
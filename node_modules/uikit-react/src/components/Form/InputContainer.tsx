import * as React from 'react';
import * as _classNames from 'classnames'; let classNames = _classNames;

declare interface props {
}

export class InputContainer extends React.Component<props, any> {
    render() {
        return (
            <div className="uk-form-controls">
                {this.props.children}
            </div>
        );
    }
}
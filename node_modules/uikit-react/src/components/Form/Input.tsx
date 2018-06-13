import * as React from 'react';
import * as _classNames from 'classnames'; let classNames = _classNames;

declare interface props extends React.HTMLProps<HTMLInputElement> {
    color?: 'danger' | 'success' | 'blank';
    layout?: 'small' | 'large';
    width?: 'large' | 'medium' | 'small' | 'xsmall';
}

export class Input extends React.Component<props, any> {
    render() {
        return (
            <input
                id={this.props.id}
                className={this.setClassNames()}
                type="text"
                name={this.props.name ? this.props.name : null}
                value={this.props.value}
                onChange={this.props.onChange}
                onBlur={this.props.onBlur}
                onFocus={this.props.onFocus} />
        );
    }

    private  setClassNames(): string {
        return classNames({
            [`uk-input`]: true,
            [`uk-form-${this.props.color}`]: !!this.props.color,
            [`uk-form-${this.props.width}`]: !!this.props.width,
            [`uk-form-${this.props.layout}`]: !!this.props.layout
        });
    }
}
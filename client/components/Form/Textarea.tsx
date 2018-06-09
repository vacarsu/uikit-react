import * as React from 'react';
import * as classNames from 'classnames';

declare interface props extends React.HTMLProps<HTMLTextAreaElement> {
    children?: string;
    color?: 'danger' | 'success' | 'blank';
    layout?: 'small' | 'large';
    width?: 'large' | 'medium' | 'small' | 'xsmall';
}

export class Input extends React.Component<props, any> {
    render() {
        return (
            <textarea
                className={this.setClassNames()}
                name={this.props.name ? this.props.name : null}
                placeholder={this.props.placeholder}
                onChange={this.props.onChange}
                onBlur={this.props.onBlur}
                onFocus={this.props.onFocus}
            >{this.props.children}</textarea>
        );
    }

    private  setClassNames(): string {
        return classNames({
            [`uk-textarea`]: true,
            [`uk-form-${this.props.color}`]: !!this.props.color,
            [`uk-form-${this.props.width}`]: !!this.props.width,
            [`uk-form-${this.props.layout}`]: !!this.props.layout
        });
    }
}
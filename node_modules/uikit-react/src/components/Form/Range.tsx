import * as React from 'react';
import * as _classNames from 'classnames'; let classNames = _classNames;

declare interface props extends React.HTMLProps<HTMLInputElement> {
    color?: 'danger' | 'success' | 'blank';
    layout?: 'small' | 'large';
    width?: 'large' | 'medium' | 'small' | 'xsmall';
}

export class Range extends React.Component<props, any> {
    render() {
        return (
            <input
                id={this.props.id}
                className={this.setClassNames()}
                type="range"
                name={this.props.name ? this.props.name : null}
                value={this.props.value}
                min={this.props.min}
                max={this.props.max}
                step={this.props.step}
                onChange={this.props.onChange}
                onBlur={this.props.onBlur}
                onFocus={this.props.onFocus} />
        );
    }

    private  setClassNames(): string {
        return classNames({
            [`uk-range`]: true,
            [`uk-form-${this.props.color}`]: !!this.props.color,
            [`uk-form-${this.props.width}`]: !!this.props.width,
            [`uk-form-${this.props.layout}`]: !!this.props.layout
        });
    }
}
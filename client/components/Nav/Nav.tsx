import * as React from 'react';
import * as classNames from 'classnames';

declare interface props {
    preset?: 'default' | 'primary' | 'center'
    options?: string;
    accordion?: boolean;
    child?: boolean;
}

export class Nav extends React.Component<props, any> {
    render() {
        return (
            <ul 
                className={`${this.setClassNames()}`}
                uk-nav={this.props.options ? this.props.options : ""}
            >
                {this.props.children}
            </ul>
        );
    }

    setClassNames() {
        return classNames({
            [`uk-nav`]: true,
            [`uk-nav-${this.props.preset}`]: !!this.props.preset,
            [`uk-nav-sub`]: this.props.child,
            [`uk-nav-parent-icon`]: this.props.accordion
        });
    }
}
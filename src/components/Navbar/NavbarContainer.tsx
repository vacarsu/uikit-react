import * as React from 'react';
import * as _classNames from 'classnames'; let classNames = _classNames;

declare interface props extends BaseProps {
    options?: string;
    dropbar?: boolean;
    transparent?: boolean;
}

export class NavbarContainer extends React.Component<props, any> {
    render() {
        return (
            <div>
                <nav
                    className={`
                        ${this.setClassNames()}
                        uk-navbar-container
                    `}
                    style={this.props.style}
                    uk-navbar={
                        this.props.options ? this.props.options : ""
                    }
                >
                    {this.props.children}
                </nav>
                {
                    this.props.dropbar ? 
                    <div className="uk-navbar-dropbar"></div>
                    :
                    ''
                }
            </div>
        );
    }

    private setClassNames(): string {
        return classNames({
            [`uk-navbar-transparent`]: this.props.transparent,
            [this.props.className]: !!this.props.className
        });
    }
}
import * as React from 'react';

declare interface props {
    align?: string;
}

export class Navbar extends React.Component<props, any> {
    render() {
        return (
            <div className={`${this.setAlign()}`}>
                <ul className="uk-navbar-nav">
                    {this.props.children}
                </ul>
            </div>
        );
    }

    private setAlign(): string {
        if (this.props.align) {
            return `uk-navbar-${this.props.align}`;
        } else {
            return `uk-navbar-left`;
        }
    }
}
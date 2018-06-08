import * as React from 'react';

declare interface props {
}

export class NavbarDropdown extends React.Component<props, any> {
    render() {
        return (
            <div className="uk-navbar-dropdown">
                <ul className="uk-nav uk-navbar-dropdown-nav">
                    {this.props.children}
                </ul>
            </div>
        );
    }
}
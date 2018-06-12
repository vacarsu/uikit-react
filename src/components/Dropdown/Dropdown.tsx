import * as React from 'react';

declare interface props {
    options?: string;
}

export class Dropdown extends React.Component<props, any> {
    render() {
        return (
            <div uk-dropdown={this.props.options ? this.props.options : ""}>
                <ul className="uk-nav uk-dropdown-nav">
                    {this.props.children}
                </ul>
            </div>
        );
    }
}
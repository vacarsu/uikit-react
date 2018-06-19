import * as React from 'react';
import * as _classNames from 'classnames';
let classNames = _classNames;
import { setClassNames } from '../../utils/set-class-names';

export class Navbar extends React.Component<NavbarProps, any> {
    render() {
        return (
            <div 
                style={this.props.style ? this.props.style : null}
                className={`${this.setClassNames()}`}>
                <ul className="uk-navbar-nav">
                    {this.props.children}
                </ul>
            </div>
        );
    }

    private setClassNames() {
        return classNames({
            [`uk-navbar-left`]: this.props.left,
            [`uk-navbar-right`]: this.props.right,
            [setClassNames(this.props)]: true
        })
    }
}
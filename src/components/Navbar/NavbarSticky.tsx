import * as React from 'react';
import { setClassNames } from '../../utils/set-class-names';

export class NavbarSticky extends React.Component<NavbarStickyProps, any> {
    render() {
        return (
            <div 
                style={this.props.style ? this.props.style : null}
                className={`${setClassNames(this.props)}`}
                uk-sticky={`
                    sel-target: .uk-navbar-container;
                    cls-active: uk-navbar-sticky;
                    ${this.props.options ? this.props.options : ''}
            `}>
                {this.props.children}
            </div>
        );
    }
}
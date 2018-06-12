import * as React from 'react';

declare interface props {
    options?: string;
    navigation?: boolean;
    navigationStyle?: 'dark' | 'light';
}


export class Slideshow extends React.Component<props, any> {
    render() {
        return (
            <div uk-slideshow={this.props.options ? this.props.options : ""}>
                {this.setNavigation()}
            </div>
        );
    }

    private setNavigation() {
        if (this.props.navigation) {
            return (
                <div className={`uk-position-relative uk-visible-toggle ${this.setNavigationStyle()}`}>
                    <ul className="uk-slideshow-items">
                        {this.props.children}
                    </ul>
                    <a className="uk-position-center-left uk-position-small uk-hidden-hover" href="#" uk-slidenav-previous="" uk-slideshow-item="previous"></a>
                    <a className="uk-position-center-right uk-position-small uk-hidden-hover" href="#" uk-slidenav-next="" uk-slideshow-item="next"></a>
                </div>
            );
        } else {
            return (
                <ul className="uk-slideshow-items">
                    {this.props.children}
                </ul>
            );
        }
    }

    private setNavigationStyle() {
        if (this.props.navigation && this.props.navigationStyle) {
            return `uk-${this.props.navigationStyle}`;
        } else {
            return `uk-dark`;
        }
    }
}
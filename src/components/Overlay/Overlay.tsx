import * as React from 'react';

declare interface props {
    position?: string;
    style?: 'light' | 'dark';
    showIcon?: boolean;
}

export class Overlay extends React.Component<props, any> {
    render() {
        return (
            <div className={`uk-overlay ${this.setPosition()}`}>
                {this.props.showIcon ? <span uk-overlay-icon></span> : ""}
            </div>
        );
    }

    setPosition(): string {
        if (this.props.position) {
            return `uk-position-${this.props.position}`;
        }
    }
}
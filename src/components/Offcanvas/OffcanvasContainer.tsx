import * as React from 'react';

declare interface props {
}

export class OffcanvasContainer extends React.Component<props, any> {
    render() {
        return (
            <div className="uk-offcanvas-content">
                {this.props.children}
            </div>
        );
    }
}
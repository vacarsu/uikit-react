import * as React from 'react';

declare interface props extends BaseProps {

}

export class Light extends React.Component<props, any> {
    render() {
        return (
            <div className={`
                uk-light
            `}>
                {this.props.children}
            </div>
        );
    }
}
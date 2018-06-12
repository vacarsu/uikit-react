import * as React from 'react';

declare interface props extends BaseProps {

}


export class Dark extends React.Component<props, any> {
    render() {
        return (
            <div className={`
                uk-dark
            `}>
            {this.props.children}
            </div>
        );
    }
}
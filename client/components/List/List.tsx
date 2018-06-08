import * as React from 'react';
import { linkType } from '../../utils/link-type';


declare interface props extends BaseProps {
    type?: 'bullet' | 'divider' | 'striped';
}


export class List extends React.Component<props, any> {
    render() {
        return (
            <ul className={`uk-list ${this.setType()}`}>
                {this.props.children}
            </ul>
        );
    }

    setType() {
        if(this.props.type) {
            return `uk-list-${this.props.type}`;
        }
    }
}
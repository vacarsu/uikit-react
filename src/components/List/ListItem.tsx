import * as React from 'react';
import { linkType } from '../../utils/link-type';


declare interface props {
}


export class ListItem extends React.Component<props, any> {
    render() {
        return (
            <li>
                {this.props.children}
            </li>
        );
    }
}
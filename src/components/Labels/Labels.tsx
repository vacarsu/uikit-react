import * as React from 'react';
import { colorClass } from '../../utils/color-class';

declare interface props extends BaseProps {
  color?: string;
  content: string;
}


export class Labels extends React.Component<props, any> {
    render() {
        return (
            <div className={`
                uk-label uk-label-${colorClass(this.props.color)}
            `}>
                {this.props.content}
            </div>
        );
    }
}
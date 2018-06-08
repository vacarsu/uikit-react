import * as React from 'react';
import { alignClass } from '../../utils/align-class';
import { heightClass } from '../../utils/height-class';
import { widthClass } from '../../utils/width-class';

declare interface props extends BaseProps {
    isScrollable?: boolean;
}

export class Panel extends React.Component<props, any> {
    render() {
        return (
            <div className={`
                uk-panel
                ${this.isScrollable()}
                ${alignClass(this.props.align)}
                ${heightClass(this.props.height)}
                ${widthClass(this.props.width)}
            `}>
                {this.props.children}
            </div>
        );
    }

    private isScrollable() {
        if (this.props.isScrollable) return 'uk-panel-scrollable';
    }
}
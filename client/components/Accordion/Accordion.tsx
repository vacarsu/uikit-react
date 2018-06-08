import * as React from 'react';
import * as classNames from 'classnames';
import { setClassNames } from '../../utils/set-class-names';

import { AccordionItem } from './AccordionItem';

declare interface props extends BaseProps {
    children: any;
    options?: string;
}

export class Accordion extends React.Component<props, any> {
    render() {
        return (
            <ul className={setClassNames(this.props)}
                data-uk-accordion={this.props.options ? this.props.options : ""}
            >
                {this.props.children}
            </ul>
        );
    }
}
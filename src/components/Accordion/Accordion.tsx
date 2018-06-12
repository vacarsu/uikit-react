import * as React from 'react';
const classNames = require('classnames');
import { setClassNames } from '../../utils/set-class-names';

import { AccordionProps } from 'uikit-react';

export class Accordion extends React.Component<AccordionProps, any> {
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
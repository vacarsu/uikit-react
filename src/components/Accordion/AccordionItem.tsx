import * as React from 'react';
const classNames = require('classnames');
import { setClassNames } from '../../utils/set-class-names'
import { AccordionItemProps } from 'uikit-react';

export class AccordionItem extends React.Component<AccordionItemProps, any> {
    render() {
        return (
            <li>
                <a className="uk-accordion-title" href="#">{this.props.title}</a>
                <div className="uk-accordion-content">{this.props.content}</div>
            </li>
        );
    }
}
import * as React from 'react';
import * as _classNames from 'classnames'; let classNames = _classNames;
import { setClassNames } from '../../utils/set-class-names'

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
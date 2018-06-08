import * as React from 'react';
import * as classNames from 'classnames';
import { setClassNames } from '../../utils/set-class-names'

declare interface props {
    title: string;
    content: string;
}

export class AccordionItem extends React.Component<props, any> {
    render() {
        return (
            <li>
                <a className="uk-accordion-title" href="#">{this.props.title}</a>
                <div className="uk-accordion-content">{this.props.content}</div>
            </li>
        );
    }
}
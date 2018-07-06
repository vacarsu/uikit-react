import * as React from 'react';
import * as _classNames from 'classnames';
let classNames = _classNames;
import { setClassNames } from '../../utils/set-class-names';

export class Accordion extends React.Component<AccordionProps, any> {
    render() {
        return (
            <ul 
                id={this.props.id ? this.props.id : null}
                style={this.props.style ? this.props.style : null}
                className={setClassNames(this.props)}
                data-uk-accordion={this.props.options ? this.props.options : ""}
            >
                {this.props.children}
            </ul>
        );
    }
}
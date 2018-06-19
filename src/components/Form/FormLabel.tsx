import * as React from 'react';
import * as _classNames from 'classnames';
let classNames = _classNames;
import { setClassNames } from '../../utils/set-class-names';

export class FormLabel extends React.Component<React.HTMLProps<HTMLLabelElement>, any> {
    render() {
        return (
            <label
                style={this.props.style ? this.props.style : null}
                className={`${setClassNames(this.props)}`}
                htmlFor={this.props.htmlFor}>
                {this.props.children}
            </label>
        );
    }
}
import React from 'react';
import _classNames from 'classnames';
const classNames = _classNames;
import { setClassNames } from '../../utils/set-class-names';

export class FormLabel extends React.Component<React.HTMLProps<HTMLLabelElement>, any> {
  render() {
    return (
      <label
        id={this.props.id ? this.props.id : null}
        style={this.props.style ? this.props.style : null}
        className={this.setClassNames()}
        htmlFor={this.props.htmlFor}
      >
        {this.props.children}
      </label>
    );
  }

  private setClassNames(): string {
    return classNames({
      [`uk-form-label`]: true,
      [`${setClassNames(this.props)}`]: true,
    });
  }
}

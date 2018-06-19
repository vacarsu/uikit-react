import * as React from 'react';
import * as _classNames from 'classnames';
let classNames = _classNames;
import { setClassNames } from '../../utils/set-class-names';

export class Legend extends React.Component<BaseProps, any> {
    render() {
        return (
            <legend
                style={this.props.style ? this.props.style : null}
                className={this.setClassNames()}>
                {this.props.children}
            </legend>
        );
    }

    private setClassNames(): string {
        return classNames({
            [`uk-legend`]: true,
            [`${setClassNames(this.props)}`]: true
        });
    }
}
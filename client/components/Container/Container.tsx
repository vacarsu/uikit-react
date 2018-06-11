import * as React from 'react';
import * as classNames from 'classnames';

import { setClassNames } from '../../utils/set-class-names';

declare interface props extends BaseProps {
  size?: string;
}


export class Container extends React.Component<props, any> {
    render() {
        return (
            <div style={this.props.style ? this.props.style : null} className={this.setClassNames()}>
                {this.props.children}
            </div>
        );
    }

    private setClassNames(): string {
        return classNames({
            [`uk-container`]: true,
            [`uk-container-${this.props.size}`]: !!this.props.size,
            [setClassNames(this.props)]: true
        });
    }
}
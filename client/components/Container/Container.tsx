import * as React from 'react';
import * as classNames from 'classnames';

declare interface props {
  size?: string;
}


export class Container extends React.Component<props, any> {
    render() {
        return (
            <div className={this.setClassNames()}>
                {this.props.children}
            </div>
        );
    }

    private setClassNames(): string {
        const isSized = this.props.size ? true : false;
        return classNames({
            [`uk-container`]: true,
            [`uk-container-${this.props.size}`]: isSized
        });
    }
}
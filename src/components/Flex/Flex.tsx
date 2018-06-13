import * as React from 'react';
import * as _classNames from 'classnames'; let classNames = _classNames;

declare interface props {
    alignment?: string;
    direction?: string;
    wrap?: string;
}

export class Flex extends React.Component<props, any> {
    render() {
        return (
            <div className={`
                uk-flex
                ${this.setClassNames()}
            `}>
                {this.props.children}
            </div>
        );
    }

    private setClassNames(): string {
        const alignments = this.props.alignment ? this.props.alignment.split(' ') : [];

        return classNames({
            [`uk-flex-${alignments[0]}`]: !!alignments[0],
            [`uk-flex-${alignments[1]}`]: !!alignments[1],
            [`uk-flex-${this.props.direction}`]: !!this.props.direction,
            [`uk-flex-${this.props.wrap}`]: !!this.props.wrap
        });
    }
}
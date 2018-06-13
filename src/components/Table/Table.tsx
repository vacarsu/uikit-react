import * as React from 'react';
import * as _classNames from 'classnames'; let classNames = _classNames;

declare interface props {
    divider?: boolean;
    striped?: boolean;
    hover?: boolean;
    justify?: boolean;
    center?: boolean;
    responsive?: boolean;
    size?: string;
}

export class Table extends React.Component<props, any> {
    render() {
        return (
            <table className={`uk-table ${this.setClassNames()}`}>
                {this.props.children}
            </table>
        );
    }

    private setClassNames(): string {
        const isSized = this.props.size ? true : false;
        return classNames({
            [`uk-table-divider`]: this.props.divider,
            [`uk-table-striped`]: this.props.striped,
            [`uk-table-hover`]: this.props.hover,
            [`uk-table-justify`]: this.props.justify,
            [`uk-table-middle`]: this.props.center,
            [`uk-overflow-auto`]: this.props.responsive,
            [`uk-table-${this.props.size}`]: isSized,
        })
    }
}
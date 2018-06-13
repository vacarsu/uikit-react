import * as React from 'react';
import * as _classNames from 'classnames'; let classNames = _classNames;

declare interface props {
    shrink?: boolean;
    expand?: boolean;
    width?: string;
}

export class TableHeader extends React.Component<props, any> {
    render() {
        return (
            <th className={this.setClassNames()}>
                {this.props.children}
            </th>
        );
    }

    private setClassNames(): string {
        if (this.props.shrink && this.props.expand) {
            console.error("Please use only one width modfier on table components");
        } else if (this.props.expand && this.props.width) {
            console.error("Please use only one width modfier on table components");
        } else if (this.props.shrink && this.props.width) {
            console.error("Please use only one width modfier on table components");
        } else {
            const isWidth = this.props.width ? true : false;
            return classNames({
                [`uk-table-expand`]: this.props.expand,
                [`uk-table-shrink`]: this.props.shrink,
                [`uk-table-${this.props.width}`]: isWidth
            })
        }
    }
}
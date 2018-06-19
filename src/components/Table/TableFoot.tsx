import * as React from 'react';
import { setClassNames } from '../../utils/set-class-names';

export class TableFoot extends React.Component<BaseProps, any> {
    render() {
        return (
            <tfoot
                style={this.props.style ? this.props.style : null}
                className={`${setClassNames(this.props)}`}>
                {this.props.children}
            </tfoot>
        );
    }
}
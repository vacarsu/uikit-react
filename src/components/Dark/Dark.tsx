import * as React from 'react';
import { setClassNames } from '../../utils/set-class-names';


export class Dark extends React.Component<BaseContainerProps, any> {
    render() {
        return (
            <div
                style={this.props.style ? this.props.style : null}
                className={`uk-dark ${setClassNames(this.props)}`}>
                {this.props.children}
            </div>
        );
    }
}
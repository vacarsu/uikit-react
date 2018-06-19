import * as React from 'react';
import { setClassNames } from '../../utils/set-class-names';

export class Label extends React.Component<LabelProps, any> {
    render() {
        return (
            <div 
                style={this.props.style ? this.props.style : null}
                className={`uk-label ${setClassNames(this.props)}`}>
                {this.props.content}
            </div>
        );
    }
}
import * as React from 'react';
import { setClassNames } from '../../utils/set-class-names';

export class LightboxItem extends React.Component<LightboxItemProps, any> {
    render() {
        return (
            <a
                style={this.props.style ? this.props.style : null}
                className={setClassNames(this.props)}
                href={this.props.href}
                data-caption={this.props.caption}>
                {this.props.children}
            </a>
        );
    }
}
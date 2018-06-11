import * as React from 'react';
import * as ReactDOM from 'react-dom/server';
import { escape } from 'he';
import * as Prism from 'prismjs';

export class Code extends React.Component<any, any> {
    render() {
        return (
            <code className="language-tsx">
                {this.props.code}
            </code>
        );
    }
}
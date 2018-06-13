import * as React from 'react';
import * as ReactDOM from 'react-dom/server';
import * as Prism from 'prismjs';

export class Code extends React.Component<any, any> {
    render() {
        return (
            <code
                dangerouslySetInnerHTML={{ __html: Prism.highlight(this.props.code, Prism.languages.tsx) }}
                className="language-tsx">
            </code>
        );
    }
}
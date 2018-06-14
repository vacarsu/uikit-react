import * as React from 'react';
import { setClassNames } from '../../utils/set-class-names';

declare interface props extends BaseProps {
    children: any;
    title: string;
    meta?: string;
    lead?: string
}

export class Article extends React.Component<props, any> {
    render() {
        return (
            <article className={`
                uk-article
                ${setClassNames(this.props)}
            `}>
                <h1 className="uk-article-title">{this.props.title}</h1>
                { this.props.meta ? <p className="uk-article-meta">{this.props.meta}</p> : '' }
                { this.props.lead ? <p className="uk-text-lead">{this.props.lead}</p> : '' }
                <div>{this.props.children}</div>
            </article>
        );
    }
}
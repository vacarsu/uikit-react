import * as React from 'react'
import { setClassNames } from '../../utils/set-class-names'

export class Article extends React.Component<ArticleProps, any> {
  render() {
    return (
      <article
        id={this.props.id ? this.props.id : null}
        style={this.props.style ? this.props.style : null}
        className={`
                    uk-article
                    ${setClassNames(this.props)}
                `}
      >
        <h1 className="uk-article-title">{this.props.title}</h1>
        {this.props.meta ? <p className="uk-article-meta">{this.props.meta}</p> : ''}
        {this.props.lead ? <p className="uk-text-lead">{this.props.lead}</p> : ''}
        <div>{this.props.children}</div>
      </article>
    )
  }
}

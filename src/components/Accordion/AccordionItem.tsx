import * as React from 'react'

export class AccordionItem extends React.Component<AccordionItemProps, any> {
  render() {
    const { title, content, ...rest } = this.props

    return (
      <li {...rest}>
        <a className="uk-accordion-title" href="#">
          {title}
        </a>
        <div className="uk-accordion-content">{content}</div>
      </li>
    )
  }
}

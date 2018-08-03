import * as React from 'react'

export const AccordionItem: React.SFC<AccordionItemProps> = ({ title, children, ...rest }) => (
  <li {...rest}>
    <a role="button" className="uk-accordion-title">
      {title}
    </a>
    <div className="uk-accordion-content">{children}</div>
  </li>
)

export default AccordionItem

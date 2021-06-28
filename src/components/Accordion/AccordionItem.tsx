import React from 'react';

export function AccordionItem({ title, children, ...rest }) {
  return (
    <li {...rest}>
      <a role="button" className="uk-accordion-title">
        {title}
      </a>
      <div className="uk-accordion-content">{children}</div>
    </li>
  );
}

export default AccordionItem;

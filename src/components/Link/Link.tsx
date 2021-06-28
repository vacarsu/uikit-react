import React from 'react';
import _classNames from 'classnames';
import { setClassNames } from '../../utils/set-class-names';

export function Link(props: LinkProps) {
  const _setClassNames = (): string => {
    return _classNames({
      [`uk-link-${props.type}`]: !!props.type,
      [`${setClassNames(props)}`]: true,
    });
  };

  return (
    <a
      id={props.id ? props.id : null}
      style={props.style ? props.style : null}
      data-uk-toggle={props.toggleOptions ? props.toggleOptions : null}
      href={props.href}
      className={`${_setClassNames()}`}
    >
      {props.children}
    </a>
  );
}

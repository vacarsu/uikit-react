import React from 'react';
import _classNames from 'classnames';
import { setClassNames } from '../../utils/set-class-names';

export function List(props: ListProps) {
  const _setClassNames = (): string => {
    return _classNames('uk-list', {
      [`uk-link-${props.type}`]: !!props.type,
      [`${setClassNames(props)}`]: true,
    });
  };

  return (
    <ul
      id={props.id ? props.id : null}
      style={props.style ? props.style : null}
      className={`${_setClassNames()}`}
    >
      {props.children}
    </ul>
  );
}

import React from 'react';
import { setClassNames } from '../../utils/set-class-names';

export function Tab(props: BaseContainerProps) {
  return (
    <li
      id={props.id ? props.id : null}
      style={props.style ? props.style : null}
      className={setClassNames(props)}
    >
      <a href="#">{props.children}</a>
    </li>
  );
}

import React from 'react';
import { setClassNames } from '../../utils/set-class-names';

export function ListItem(props: BaseContainerProps) {
  return (
    <li
      id={props.id ? props.id : null}
      style={props.style ? props.style : null}
      className={setClassNames(props)}
    >
      {props.children}
    </li>
  );
}

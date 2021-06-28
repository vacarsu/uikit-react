import React from 'react';
import { setClassNames } from '../../utils/set-class-names';

export function TableBody(props: BaseContainerProps) {
  return (
    <tbody
      id={props.id ? props.id : null}
      style={props.style ? props.style : null}
      className={`${setClassNames(props)}`}
    >
      {props.children}
    </tbody>
  );
}

export default TableBody;

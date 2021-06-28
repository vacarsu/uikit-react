import React from 'react';
import { setClassNames } from '../../utils/set-class-names';

export function TableRow(props: BaseContainerProps) {
  return (
    <tr
      id={props.id ? props.id : null}
      style={props.style ? props.style : null}
      className={`${setClassNames(props)}`}
    >
      {props.children}
    </tr>
  );
}

export default TableRow;

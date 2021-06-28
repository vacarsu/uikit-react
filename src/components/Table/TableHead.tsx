import React from 'react';
import { setClassNames } from '../../utils/set-class-names';

export function TableHead(props: TableHeadProps) {
  return (
    <thead
      id={props.id ? props.id : null}
      style={props.style ? props.style : null}
      className={`${setClassNames(props)}`}
    >
      {props.children}
    </thead>
  );
}

export default TableHead;

import React from 'react';
import { setClassNames } from '../../utils/set-class-names';

export function TableFoot(props: BaseContainerProps) {
  return (
    <tfoot
      id={props.id ? props.id : null}
      style={props.style ? props.style : null}
      className={`${setClassNames(props)}`}
    >
      {props.children}
    </tfoot>
  );
}

export default TableFoot;

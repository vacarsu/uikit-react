import React from 'react';
import { setClassNames } from '../../utils/set-class-names';

export function Dropdown(props: DropdownProps) {
  return (
    <div
      id={props.id ? props.id : null}
      className={`${setClassNames(props)}`}
      data-uk-dropdown={props.options ? props.options : ''}
    >
      {props.children}
    </div>
  );
}

export default Dropdown;

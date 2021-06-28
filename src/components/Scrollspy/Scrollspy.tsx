import React from 'react';
import { setClassNames } from '../../utils/set-class-names';

export function Scrollspy(props: ScrollspyProps) {
  return (
    <div
      id={props.id ? props.id : null}
      style={props.style ? props.style : null}
      className={`${setClassNames(props)}`}
      data-uk-scrollspy={props.options ? props.options : ''}
    >
      {props.children}
    </div>
  );
}

export default Scrollspy;

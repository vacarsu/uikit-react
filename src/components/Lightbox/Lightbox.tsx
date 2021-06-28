import React from 'react';
import { setClassNames } from '../../utils/set-class-names';

export function Lightbox(props: LightboxProps) {
  return (
    <div
      id={props.id ? props.id : null}
      style={props.style ? props.style : null}
      className={setClassNames(props)}
      data-uk-lightbox={props.options ? props.options : ''}
    >
      {props.children}
    </div>
  );
}

export default Lightbox;

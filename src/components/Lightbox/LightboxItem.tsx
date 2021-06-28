import React from 'react';
import { setClassNames } from '../../utils/set-class-names';

export function LightboxItem(props: LightboxItemProps) {
  return (
    <a
      id={props.id ? props.id : null}
      style={props.style ? props.style : null}
      className={setClassNames(props)}
      href={props.href}
      data-caption={props.caption}
    >
      {props.children}
    </a>
  );
}

export default LightboxItem;

import React from 'react';
import { setClassNames } from '../../utils/set-class-names';

export function CardHeader(props: BaseContainerProps) {
  return (
    <div
      id={props.id ? props.id : null}
      style={props.style ? props.style : null}
      className={`uk-card-header ${setClassNames(props)}`}
    >
      {props.children}
    </div>
  );
}

export default CardHeader;

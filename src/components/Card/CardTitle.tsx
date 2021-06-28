import React from 'react';
import { setClassNames } from '../../utils/set-class-names';

export function CardTitle(props: BaseContainerProps) {
  return (
    <h3
      id={props.id ? props.id : null}
      style={props.style ? props.style : null}
      className={`uk-card-title ${setClassNames(props)}`}
    >
      {props.children}
    </h3>
  );
}

export default CardTitle;

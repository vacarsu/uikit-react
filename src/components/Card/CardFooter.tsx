import React from 'react';
import { setClassNames } from '../../utils/set-class-names';

export function CardFooter(props: BaseContainerProps) {
  return (
    <div
      id={props.id ? props.id : null}
      style={props.style ? props.style : null}
      className={`uk-card-footer ${setClassNames(props)}`}
    >
      {props.children}
    </div>
  );
}

export default CardFooter;

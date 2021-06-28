import React from 'react';
import _classNames from 'classnames';
import { setClassNames } from '../../utils/set-class-names';

export function Label(props: LabelProps) {
  const _setClassNames = (): string => {
    return _classNames('uk-label', {
      [`uk-label-${props.color}`]: !!props.color,
    });
  };

  return (
    <div
      id={props.id ? props.id : null}
      style={props.style ? props.style : null}
      className={`${_setClassNames()}`}
    >
      {props.content}
    </div>
  );
}

export default Label;

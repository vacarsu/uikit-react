import React, { useState } from 'react';
import _classNames from 'classnames';
import { setClassNames } from '../../utils/set-class-names';

export function Progress(props: ProgressProps) {
  const [state, setState] = useState({ value: props.value });

  const _setClassNames = (): string => {
    return _classNames('uk-progress', {
      [`${setClassNames(props)}`]: true,
    });
  };

  return (
    <progress
      id={props.id ? props.id : null}
      style={props.style ? props.style : null}
      className={`${_setClassNames()}`}
      value={state.value}
      max={props.max}
    />
  );
}

export default Progress;

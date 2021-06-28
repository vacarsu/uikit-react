import React from 'react';
import _classNames from 'classnames';
import { setClassNames } from '../../utils/set-class-names';

export function Overlay(props: OverlayProps) {
  const _setClassNames = (): string => {
    return _classNames('uk-overlay', {
      [`uk-position-${props.position}`]: !!props.position,
      [`uk-position-${props.type}`]: !!props.type,
      [`${setClassNames(props)}`]: true,
    });
  };
  return (
    <div
      id={props.id ? props.id : null}
      style={props.style ? props.style : null}
      className={`${_setClassNames()}`}
    >
      {props.showIcon ? <span uk-overlay-icon /> : null}
    </div>
  );
}

export default Overlay;

import React from 'react';
import _classNames from 'classnames';
import { setClassNames } from '../../utils/set-class-names';

export function Grid(props: GridProps) {
  const _setClassNames = (): string => {
    return _classNames({
      [`uk-grid-${props.gutter}`]: !!props.gutter,
      [`uk-grid-divider`]: props.divider,
      [`uk-grid-match`]: props.match,
      [`${setClassNames(props)}`]: true,
    });
  };

  return (
    <div
      id={props.id ? props.id : null}
      style={props.style ? props.style : null}
      className={`${_setClassNames()}`}
      uk-grid={props.options ? props.options : ''}
    >
      {props.children}
    </div>
  );
}

export default Grid;

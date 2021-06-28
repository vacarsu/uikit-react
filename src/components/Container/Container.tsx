import React from 'react';
import classnames from 'classnames';
import { setClassNames } from '../../utils/set-class-names';

export function Container(props: ContainerProps) {
  const _setClassNames = (): string => {
    return classnames({
      [`uk-container`]: true,
      [`uk-container-${props.size}`]: !!props.size,
      [setClassNames(props)]: true,
    });
  };

  return (
    <div
      id={props.id ? props.id : null}
      style={props.style ? props.style : null}
      className={_setClassNames()}
    >
      {props.children}
    </div>
  );
}

export default Container;

import React from 'react';
import _classNames from 'classnames';
import { setClassNames } from '../../utils/set-class-names';

export function Nav(props: NavProps) {
  const _setClassNames = (): string => {
    return _classNames({
      [`uk-nav`]: true,
      [`uk-nav-${props.preset}`]: !!props.preset,
      [`uk-nav-sub`]: props.child,
      [`uk-nav-parent-icon`]: props.accordion,
      [`${setClassNames(props)}`]: true,
    });
  };

  return (
    <ul
      id={props.id ? props.id : null}
      style={props.style ? props.style : null}
      className={`${_setClassNames()}`}
      data-uk-nav={props.options ? props.options : ''}
    >
      {props.children}
    </ul>
  );
}

export default Nav;

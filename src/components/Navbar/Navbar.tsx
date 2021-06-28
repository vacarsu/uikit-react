import React from 'react';
import _classNames from 'classnames';
import { setClassNames } from '../../utils/set-class-names';

export function Navbar(props: NavbarProps) {
  const _setClassNames = (): string => {
    return _classNames({
      [`uk-navbar-left`]: props.left,
      [`uk-navbar-right`]: props.right,
      [setClassNames(props)]: true,
    });
  };

  return (
    <div
      id={props.id ? props.id : null}
      style={props.style ? props.style : null}
      className={`${_setClassNames()}`}
    >
      <ul className="uk-navbar-nav">{props.children}</ul>
    </div>
  );
}

export default Navbar;

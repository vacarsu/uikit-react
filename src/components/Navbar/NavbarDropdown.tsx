import React from 'react';
import { setClassNames } from '../../utils/set-class-names';

export function NavbarDropdown(props: BaseContainerProps) {
  return (
    <div
      id={props.id ? props.id : null}
      style={props.style ? props.style : null}
      className={`uk-navbar-dropdown ${setClassNames(props)}`}
    >
      <ul className="uk-nav uk-navbar-dropdown-nav">{props.children}</ul>
    </div>
  );
}

export default NavbarDropdown;

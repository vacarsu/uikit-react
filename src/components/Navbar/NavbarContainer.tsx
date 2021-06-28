import React from 'react';
import _classNames from 'classnames';
import { setClassNames } from '../../utils/set-class-names';

export function NavbarContainer(props: NavbarContainerProps) {
  const _setClassNames = (): string => {
    return _classNames('uk-navbar-container', {
      [`uk-navbar-transparent`]: props.transparent,
      [setClassNames(props)]: true,
    });
  };

  return (
    <div>
      <nav
        id={props.id ? props.id : null}
        className={`${_setClassNames()}`}
        style={props.style ? props.style : null}
        data-uk-navbar={props.options ? props.options : ''}
      >
        {props.children}
      </nav>
      {props.dropbar ? <div className="uk-navbar-dropbar" /> : null}
    </div>
  );
}

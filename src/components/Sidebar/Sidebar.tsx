import React from 'react';
import _classNames from 'classnames';
import { setClassNames } from '../../utils/set-class-names';

export function Sidebar(props: SidebarProps) {
  const _setClassNames = (): string => {
    return _classNames({
      [`uk-overflow-auto`]: true,
      [`uk-${props.visibility}`]: !!this.props.visibility,
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

export default Sidebar;

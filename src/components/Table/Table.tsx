import React from 'react';
import _classNames from 'classnames';
import { setClassNames } from '../../utils/set-class-names';

export function Table(props: TableProps) {
  const _setClassNames = (): string => {
    return _classNames('uk-table', {
      [`uk-table-divider`]: props.divider,
      [`uk-table-striped`]: props.striped,
      [`uk-table-hover`]: props.hover,
      [`uk-table-justify`]: props.justify,
      [`uk-table-middle`]: props.center,
      [`uk-overflow-auto`]: props.responsive,
      [`uk-table-${props.size}`]: !!props.size,
      [`${setClassNames(props)}`]: true,
    });
  };

  return (
    <table
      id={props.id ? props.id : null}
      style={props.style ? props.style : null}
      className={`${_setClassNames()}`}
    >
      {props.children}
    </table>
  );
}

export default Table;

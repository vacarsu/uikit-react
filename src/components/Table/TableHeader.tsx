import React from 'react';
import _classNames from 'classnames';
import { setClassNames } from '../../utils/set-class-names';

export function TableHeader(props: TableHeaderProps) {
  const _setClassNames = (): string => {
    if (props.shrink && props.expand) {
      console.error('Please use only one width modfier on table components');
    } else if (props.expand && props.width) {
      console.error('Please use only one width modfier on table components');
    } else if (props.shrink && props.width) {
      console.error('Please use only one width modfier on table components');
    } else {
      return _classNames({
        [`uk-table-expand`]: props.expand,
        [`uk-table-shrink`]: props.shrink,
        [`uk-table-${props.width}`]: !!props.width,
        [`${setClassNames(props)}`]: true,
      });
    }
  };

  return (
    <th
      id={props.id ? props.id : null}
      style={props.style ? props.style : null}
      className={_setClassNames()}
    >
      {props.children}
    </th>
  );
}

export default TableHeader;

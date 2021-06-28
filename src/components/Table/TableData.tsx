import React from 'react';
import _classNames from 'classnames';
import { setClassNames } from '../../utils/set-class-names';

export function TableData(props: TableDataProps) {
  const _setClassNames = (): string => {
    if (props.shrink && props.expand) {
      console.error('Please use only one width modfier on table components');
    } else if (props.expand && props.width) {
      console.error('Please use only one width modfier on table components');
    } else if (props.shrink && props.width) {
      console.error('Please use only one width modfier on table components');
    } else {
      const isWidth = props.width ? true : false;
      return _classNames({
        [`uk-table-expand`]: props.expand,
        [`uk-table-shrink`]: props.shrink,
        [`uk-table-${props.width}`]: isWidth,
        [`${setClassNames(props)}`]: true,
      });
    }
  };

  return (
    <td
      id={props.id ? props.id : null}
      style={props.style ? props.style : null}
      className={_setClassNames()}
    >
      {props.children}
    </td>
  );
}

export default TableData;

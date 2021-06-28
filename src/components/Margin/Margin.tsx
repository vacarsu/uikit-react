import React from 'react';
import _classNames from 'classnames';
import { setClassNames } from '../../utils/set-class-names';

export function Margin(props: MarginProps) {
  const _setClassNames = (): string => {
    const stringArray = props.type.split('; ');
    let classString: string;

    stringArray.map((string, idx) => {
      classString = `${classString} uk-margin-${string}`;
    });

    return _classNames(classString, {
      [`${setClassNames(props)}`]: true,
    });
  };

  return (
    <div
      id={props.id ? props.id : null}
      style={props.style ? props.style : null}
      data-uk-margin={props.dynamicWrapping}
      className={_setClassNames()}
    >
      {props.children}
    </div>
  );
}

export default Margin;

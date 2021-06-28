import React from 'react';
import _classNames from 'classnames';
import { setClassNames } from '../../utils/set-class-names';

export function Flex(props: FlexProps) {
  const _setClassNames = (): string => {
    const alignments = props.alignment ? props.alignment.split(' ') : [];

    return _classNames({
      [`uk-flex-${alignments[0]}`]: !!alignments[0],
      [`uk-flex-${alignments[1]}`]: !!alignments[1],
      [`uk-flex-${props.direction}`]: !!props.direction,
      [`uk-flex-${props.wrap}`]: !!props.wrap,
      [`${setClassNames(props)}`]: true,
    });
  };

  return (
    <div
      id={props.id ? props.id : null}
      style={props.style ? props.style : null}
      className={`uk-flex ${_setClassNames()}`}
    >
      {props.children}
    </div>
  );
}

export default Flex;

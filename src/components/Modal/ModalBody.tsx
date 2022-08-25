import React from 'react';
import { setClassNames } from '../../utils/set-class-names';
import _classNames from 'classnames';

export function ModalBody(props: ModalBodyProps) {
  const _setClassNames = (): string => {
    return _classNames('uk-modal-body', {
      [`${setClassNames(props)}`]: true,
    });
  };

  return (
    <div className={`${_setClassNames()}`} id={props.id} style={props.style}>
      {props.children}
    </div>
  );
}

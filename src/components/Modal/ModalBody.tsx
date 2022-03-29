import React from 'react';
import { setClassNames } from '../../utils/set-class-names';

export function ModalBody({ className, children, ...rest }: ModalBodyProps) {
  function createClassNames(): string {
    return setClassNames({
      className: className,
      'uk-modal-body': true,
      ...rest,
    });
  }

  return (
    <div className={createClassNames()} {...rest}>
      {children}
    </div>
  );
}

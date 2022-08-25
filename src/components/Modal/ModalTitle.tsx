import React, { HTMLProps } from 'react';
import _classNames from 'classnames';

const classNames = _classNames;
import { setClassNames } from '../../utils/set-class-names';

export function ModalTitle(props: HTMLProps<HTMLHeadingElement>) {
  function createClassNames(): string {
    return classNames({
      [`uk-modal-title`]: true,
      [`${setClassNames(props)}`]: true,
    });
  }

  const { children, className, ...rest } = props;

  return (
    <h2 className={createClassNames()} {...rest}>
      {children}
    </h2>
  );
}

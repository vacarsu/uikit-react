import React from 'react';
import _classNames from 'classnames';
const classNames = _classNames;
import { setClassNames } from '../../utils/set-class-names';

export function Image(props: ImageProps) {
  return (
    <img
      id={props.id ? props.id : null}
      className={props.className}
      width={props.width}
      height={props.height}
      style={props.style ? props.style : null}
      data-src={props.src}
      data-uk-img={props.options ? props.options : ''}
    />
  );
}

export default Image;

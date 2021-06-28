import React from 'react';
import classNames from 'classnames';
import { setClassNames } from '../../utils/set-class-names';

export function Icon(props: IconProps) {
  const getClassNames = (): string => {
    return classNames({
      [`uk-icon`]: true,
      [`uk-icon-button`]: props.button,
      [`uk-icon-link`]: !!props.href,
      [`uk-icon-image`]: !!props.image,
      [`${setClassNames(props)}`]: true,
    });
  };

  const renderIconType = () => {
    if (props.href) {
      return (
        <a
          id={props.id ? props.id : null}
          style={props.style ? props.style : null}
          className={getClassNames()}
          href={props.href}
          data-uk-icon={props.options}
        />
      );
    }

    if (props.image) {
      return (
        <span
          id={props.id ? props.id : null}
          className={getClassNames()}
          style={{
            backgroundImage: `url(${props.image})`,
            ...props.style,
          }}
          data-uk-icon={props.options}
        />
      );
    }

    return (
      <em
        id={props.id ? props.id : null}
        style={props.style ? props.style : null}
        className={getClassNames()}
        data-uk-icon={props.options}
      />
    );
  };

  return renderIconType();
}

export default Icon;

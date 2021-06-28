import React, { useEffect } from 'react';
import { setClassNames } from '../../utils/set-class-names';

export function NavbarSticky(props: NavbarStickyProps) {
  const validateIdProp = () => {
    if (!props.id) {
      console.error('ID property is required to register to Navbar Sticky events');
    }
  };

  useEffect(() => {
    if (props.onActive) {
      validateIdProp();
      UIkit.util.on(props.id, 'active', props.onActive);
    }
    if (props.onInactive) {
      validateIdProp();
      UIkit.util.on(props.id, 'active', props.onInactive);
    }
  }, []);

  return (
    <div
      id={props.id ? props.id : null}
      style={props.style ? props.style : null}
      className={`${setClassNames(props)}`}
      data-uk-sticky={`
                sel-target: .uk-navbar-container;
                cls-active: uk-navbar-sticky;
                ${props.options ? props.options : ''}
            `}
    >
      {props.children}
    </div>
  );
}

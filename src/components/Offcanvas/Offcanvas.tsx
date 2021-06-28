import React, { useEffect } from 'react';
import { setClassNames } from '../../utils/set-class-names';

export function Offcanvas(props: OffcanvasProps) {
  useEffect(() => {
    if (props.onBeforeShow) {
      UIkit.util.on(props.id, 'beforeshow', props.onBeforeShow);
    }

    if (props.onShow) {
      UIkit.util.on(props.id, 'show', props.onShow);
    }

    if (props.onShown) {
      UIkit.util.on(props.id, 'shown', props.onShown);
    }

    if (props.onBeforeHide) {
      UIkit.util.on(props.id, 'beforehide', props.onBeforeHide);
    }

    if (props.onHide) {
      UIkit.util.on(props.id, 'hide', props.onHide);
    }

    if (props.onHidden) {
      UIkit.util.on(props.id, 'hidden', props.onHidden);
    }
  }, []);

  return (
    <div
      id={props.id}
      style={props.style ? props.style : null}
      className={`${setClassNames(props)}`}
      data-uk-offcanvas={props.options ? props.options : ''}
    >
      <div className="uk-offcanvas-bar">{props.children}</div>
    </div>
  );
}

export default Offcanvas;

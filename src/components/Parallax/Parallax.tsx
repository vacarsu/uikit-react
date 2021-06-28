import React from 'react';
import { setClassNames } from '../../utils/set-class-names';

export function Parallax(props: ParallaxProps) {
  const applyParallaxFiltersToChild = (): string => {
    return React.Children.map(props.children, (child: React.ReactChild, idx: number) => {
      if (idx > 0) return child;
      return React.cloneElement(child as React.ReactElement<any>, {
        'uk-parallax': props.options,
      });
    });
  };

  return (
    <div
      id={props.id ? props.id : null}
      style={props.style ? props.style : null}
      className={`${setClassNames(props)}`}
    >
      {applyParallaxFiltersToChild()}
    </div>
  );
}

export default Parallax;

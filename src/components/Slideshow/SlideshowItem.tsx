import React from 'react';
import { setClassNames } from '../../utils/set-class-names';

export function SlideshowItem(props: SlideshowItemProps) {
  const renderBasedOnType = () => {
    if (props.type === 'image') {
      return <img src={props.src} alt={props.alt} uk-cover="" />;
    }
    if (props.type === 'video') {
      return (
        <video
          autoPlay={props.autoPlay}
          loop={props.loop}
          muted={props.muted}
          playsInline={props.playsInline}
          data-uk-cover={''}
        >
          <source src={props.src} type={`${props.type}/${props.videoFormat}`} />
        </video>
      );
    }
    console.error('Type property on cover component must be either video or image');
  };

  return (
    <li
      id={props.id ? props.id : null}
      style={props.style ? props.style : null}
      className={`${setClassNames(props)}`}
    >
      {renderBasedOnType()}
    </li>
  );
}

export default SlideshowItem;

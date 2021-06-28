import React from 'react';
import { setClassNames } from '../../utils/set-class-names';

export function Cover(props: CoverProps) {
  const renderResponsiveMode = () => {
    if (props.responsive) {
      return <canvas width={props.width} height={props.height} />;
    }
  };

  const renderBasedOnType = () => {
    if (props.type === 'image') {
      return (
        <img
          src={props.src}
          alt={props.alt}
          width={props.width}
          height={props.height}
          data-uk-cover={''}
        />
      );
    }
    if (props.type === 'video') {
      return (
        <video
          autoPlay={props.autoPlay}
          loop={props.loop}
          muted={props.muted}
          playsInline={props.playsInline}
          width={props.width}
          height={props.height}
          data-uk-cover={''}
        >
          <source src={props.src} type={`${props.type}/${props.videoFormat}`} />
        </video>
      );
    }
    console.error('Type property on cover component must be either video or image');
  };

  return (
    <div
      id={props.id ? props.id : null}
      style={props.style ? props.style : null}
      className={`uk-cover-container ${setClassNames(props)}`}
    >
      {renderResponsiveMode()}
      {renderBasedOnType()}
    </div>
  );
}

export default Cover;

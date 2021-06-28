import React, { createRef, useState, useEffect } from 'react';
import _classnames from 'classnames';

import { setClassNames } from '../../utils/set-class-names';
import { Icon } from '../Icon/Icon';

const UIkit = require('uikit');

export function Alert(props: AlertProps) {
  let durationTimeout;
  let leaveTimeout;
  const alertRef = createRef<HTMLUListElement>();
  const [state, setState] = useState({
    isOpen: true,
    isClosed: false,
    component: null,
  });

  const handleClose = () => {
    setState({ ...state, isOpen: false });
    if (props.onBeforeHide) props.onBeforeHide();
    leaveTimeout = setTimeout(() => {
      setState({ ...state, isClosed: true });
      if (props.onHide) props.onHide();
    }, 505);
  };

  const _setClassNames = () => {
    return _classnames('uk-alert', {
      [`uk-alert-${props.color}`]: !!props.color,
      [setClassNames(props)]: true,
    });
  };

  useEffect(() => {
    setState({ ...state, component: alertRef.current });
    if (props.duration) {
      durationTimeout = setTimeout(() => {
        handleClose();
      }, props.duration);
    }

    return () => {
      if (leaveTimeout) clearTimeout(leaveTimeout);
      if (durationTimeout) clearTimeout(durationTimeout);
    };
  }, []);

  if (state.isClosed) return null;

  return (
    <div
      id={props.id ? props.id : null}
      className={_setClassNames()}
      style={{
        overflow: 'hidden',
        transform: !state.isOpen ? 'scaleY(0)' : 'scaleY(100px)',
        transition: 'transform 0.5s ease-out, opacity 0.3s ease-out',
        maxHeight: 'auto',
        opacity: !state.isOpen ? '0' : '1',
        ...props.style,
      }}
    >
      {props.isClosable ? (
        <a className="uk-alert-close" data-uk-close onClick={handleClose}></a>
      ) : null}
      <span>{props.content}</span>
    </div>
  );
}

// export class Alert extends React.Component<AlertProps, any> {
//   durationTimeout
//   leaveTimeout
//   constructor(props) {
//     super(props)
//     this.state = {
//       isOpen: true,
//       isClosed: false,
//     }
//   }

//   componentDidMount() {
//     if (this.props.duration) {
//       this.durationTimeout = setTimeout(() => {
//         this.handleClose()
//       }, this.props.duration)
//     }
//   }

//   componentWillUnmount() {
//     if (this.leaveTimeout) clearTimeout(this.leaveTimeout)
//     if (this.durationTimeout) clearTimeout(this.durationTimeout)
//   }

//   render() {
//     if (this.state.isClosed) return false

//     return (
//       <div
//         id={this.props.id ? this.props.id : null}
//         className={this.setClassNames()}
//         style={{
//           overflow: 'hidden',
//           transition: 'height 0.5s ease-in-out, opacity 0.3s ease-in-out',
//           height: !this.state.isOpen ? 0 : 'auto',
//           opacity: !this.state.isOpen ? 0 : 1,
//           ...this.props.style,
//         }}
//       >
//         {this.props.isClosable ? (
//           <a className="uk-alert-close" onClick={this.handleClose.bind(this)}>
//             <Icon options="close" />
//           </a>
//         ) : null}
//         <span>{this.props.content}</span>
//       </div>
//     )
//   }

//   private handleClose() {
//     this.setState(
//       {
//         isOpen: false,
//       },
//       () => {
//         if (this.props.onBeforeHide) this.props.onBeforeHide()
//         this.leaveTimeout = setTimeout(() => {
//           this.setState({ isClosed: true })
//           if (this.props.onHide) this.props.onHide()
//         }, 505)
//       },
//     )
//   }

//   private setClassNames(): string {
//     return classNames('uk-alert', {
//       [`uk-alert-${this.props.color}`]: !!this.props.color,
//       [setClassNames(this.props)]: true,
//     })
//   }
// }

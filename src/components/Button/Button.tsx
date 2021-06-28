import React from 'react';
import classNames from 'classnames';
import { setClassNames } from '../../utils/set-class-names';

export function Button(props: ButtonProps) {
  const isLink = () => {
    return !!props.href;
  };
  const _setClassNames = (): string => {
    return classNames('uk-button', {
      [`uk-button-default`]: !props.color,
      [`uk-button-${props.color}`]: !!props.color,
      [`uk-button-${props.size}`]: !!props.size,
      [`${setClassNames(props)}`]: true,
    });
  };
  return isLink() ? (
    <a
      id={props.id ? props.id : null}
      style={props.style ? props.style : null}
      data-uk-toggle={props.toggleOptions}
      href={props.href}
      onClick={props.onClick}
      className={_setClassNames()}
    >
      {props.children}
    </a>
  ) : (
    <button
      id={props.id ? props.id : null}
      style={props.style ? props.style : null}
      data-uk-toggle={props.toggleOptions}
      onClick={props.onClick}
      className={_setClassNames()}
    >
      {props.children}
    </button>
  );
}

// export class Button extends React.Component<ButtonProps, any> {
//   render() {
//     return this.isLink() ? (
//       <a
//         id={this.props.id ? this.props.id : null}
//         style={this.props.style ? this.props.style : null}
//         data-uk-toggle={this.props.toggleOptions}
//         href={this.props.href}
//         onClick={this.props.onClick}
//         className={this.setClassNames()}
//       >
//         {this.props.children}
//       </a>
//     ) : (
//       <button
//         id={this.props.id ? this.props.id : null}
//         style={this.props.style ? this.props.style : null}
//         data-uk-toggle={this.props.toggleOptions}
//         onClick={this.props.onClick}
//         className={this.setClassNames()}
//       >
//         {this.props.children}
//       </button>
//     )
//   }

//   private isLink(): boolean {
//     return !!this.props.href
//   }

//   private setClassNames(): string {
//     return classNames('uk-button', {
//       [`uk-button-default`]: !this.props.color,
//       [`uk-button-${this.props.color}`]: !!this.props.color,
//       [`uk-button-${this.props.size}`]: !!this.props.size,
//       [`${setClassNames(this.props)}`]: true,
//     })
//   }
// }

export default Button;

import React from 'react';
import classNames from 'classnames';
import { setClassNames } from '../../utils/set-class-names';

export function Card(props: CardProps) {
  const _setClassNames = () => {
    return classNames('uk-card', {
      [`uk-card-default`]: !props.color,
      [`uk-card-${props.color}`]: !!props.color,
      [`uk-card-hover`]: props.hover,
      [`uk-card-${props.size}`]: !!props.size,
      [setClassNames(props)]: true,
    });
  };

  return (
    <div
      id={props.id ? props.id : null}
      style={props.style ? props.style : null}
      className={_setClassNames()}
    >
      {props.children}
    </div>
  );
}

export default Card;

// export class Card extends React.Component<CardProps, any> {
//   render() {
//     return (
//       <div
//         id={this.props.id ? this.props.id : null}
//         style={this.props.style ? this.props.style : null}
//         className={this.setClassNames()}
//       >
//         {this.props.children}
//       </div>
//     )
//   }

//   private setClassNames(): string {
//     return classNames('uk-card', {
//       [`uk-card-default`]: !this.props.color,
//       [`uk-card-${this.props.color}`]: !!this.props.color,
//       [`uk-card-hover`]: this.props.hover,
//       [`uk-card-${this.props.size}`]: !!this.props.size,
//       [setClassNames(this.props)]: true,
//     })
//   }
// }

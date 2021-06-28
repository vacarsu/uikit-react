import React from 'react';
import { setClassNames } from '../../utils/set-class-names';

export function Badge(props: BadgeProps) {
  return (
    <span
      id={props.id ? props.id : null}
      style={props.style ? props.style : null}
      className={`uk-badge ${setClassNames(props)}`}
    >
      {props.count}
    </span>
  );
}

// export class Badge extends React.Component<BadgeProps, any> {
//   render() {
//     return (
//       <span
//         id={this.props.id ? this.props.id : null}
//         style={this.props.style ? this.props.style : null}
//         className={`uk-badge ${setClassNames(this.props)}`}
//       >
//         {this.props.count}
//       </span>
//     )
//   }
// }

export default Badge;

import { setOptions } from 'marked';
import React, { useState, useEffect, createRef } from 'react';
import { setClassNames } from '../../utils/set-class-names';

const UIkit = require('uikit');

export function Accordion(props: AccordionProps) {
  const [state, setState] = useState({
    mounted: false,
    component: null,
  });
  const accordionRef = createRef<HTMLUListElement>();

  useEffect(() => {
    if (accordionRef.current) {
      const { options } = props;
      console.log(accordionRef.current);
      // setState({ ...state, component: UIkit.accordion(accordionRef.current, options) })
      UIkit.util.on(
        accordionRef.current as HTMLElement,
        'beforeshow beforehide show shown hide hidden',
        e => {
          const eventName = e.type;
          /**
           * @description Fires before an item is shown. Can prevent showing by returning false.
           */
          if (eventName === 'beforeshow' && props.onBeforeShow) {
            props.onBeforeShow(e, props);
          }
          /**
           * @description Fires after an item is shown.
           */
          if (eventName === 'show' && props.onShow) {
            props.onShow(e, props);
          }
          /**
           * @description Fires after the item's show animation has completed.
           */
          if (eventName === 'shown' && props.onShown) {
            props.onShown(e, props);
          }
          /**
           * @description Fires before an item is hidden. Can prevent hiding by returning false.
           */
          if (eventName === 'beforehide' && props.onBeforeHide) {
            props.onBeforeHide(e, props);
          }
          /**
           *  @description  Fires after an item's hide animation has started.
           */
          if (eventName === 'hide' && props.onHide) {
            props.onHide(e, props);
          }
          /**
           * @description  Fires after an item is hidden.
           */
          if (eventName === 'hidden' && props.onHidden) {
            props.onHidden(e, props);
          }
        },
      );
    }
  }, []);

  return (
    <ul
      uk-accordion={props.options ? props.options : ''}
      ref={accordionRef}
      id={props.id ? props.id : null}
      style={props.style ? props.style : null}
      className={setClassNames(props)}
    >
      {props.children}
    </ul>
  );
}

export default Accordion;

// export class Accordion extends React.Component<AccordionProps, any> {
//   private accordionRef: React.RefObject<any>
//   private mounted: boolean
//   private component: any

//   constructor(props: AccordionProps) {
//     super(props)
//     this.accordionRef = React.createRef()
//   }

//   componentDidMount() {
//     this.mounted = true

//     if (this.accordionRef.current) {
//       const { options } = this.props
//       this.component = UIkit.accordion(this.accordionRef.current, options)

//       if (this.mounted) {
//         UIkit.util.on(
//           this.accordionRef.current as HTMLElement,
//           'beforeshow beforehide show shown hide hidden',
//           e => {
//             const eventName = e.type
//             /**
//              * @description Fires before an item is shown. Can prevent showing by returning false.
//              */
//             if (eventName === 'beforeshow' && this.props.onBeforeShow) {
//               this.props.onBeforeShow(e, this.props)
//             }
//             /**
//              * @description Fires after an item is shown.
//              */
//             if (eventName === 'show' && this.props.onShow) {
//               this.props.onShow(e, this.props)
//             }
//             /**
//              * @description Fires after the item's show animation has completed.
//              */
//             if (eventName === 'shown' && this.props.onShown) {
//               this.props.onShown(e, this.props)
//             }
//             /**
//              * @description Fires before an item is hidden. Can prevent hiding by returning false.
//              */
//             if (eventName === 'beforehide' && this.props.onBeforeHide) {
//               this.props.onBeforeHide(e, this.props)
//             }
//             /**
//              *  @description  Fires after an item's hide animation has started.
//              */
//             if (eventName === 'hide' && this.props.onHide) {
//               this.props.onHide(e, this.props)
//             }
//             /**
//              * @description  Fires after an item is hidden.
//              */
//             if (eventName === 'hidden' && this.props.onHidden) {
//               this.props.onHidden(e, this.props)
//             }
//           },
//         )
//       }
//     }
//   }

//   componentWillUnmount() {
//     this.mounted = false

//     if (this.component) this.component.$destroy(true)
//   }

//   render(): JSX.Element {
//     return (
//       <ul
//         ref={this.accordionRef}
//         id={this.props.id ? this.props.id : null}
//         style={this.props.style ? this.props.style : null}
//         className={setClassNames(this.props)}
//       >
//         {this.props.children}
//       </ul>
//     )
//   }
// }

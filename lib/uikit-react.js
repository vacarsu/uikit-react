import _classNames from 'classnames';
import React, { useState, useEffect, createRef } from 'react';

const classNames = _classNames;
function setClassNames(props) {
    const isClassNameSet = props.className ? true : false;
    const isHeightSet = props.height ? true : false;
    const isWidthSet = props.width ? true : false;
    const isAlignSet = props.align ? true : false;
    const isBackgroundSet = props.background ? true : false;
    const isPositionSet = props.position ? true : false;
    return classNames({
        [`${props.className}`]: isClassNameSet,
        [`uk-align-${props.align}`]: isAlignSet,
        [`uk-height-${props.height}`]: isHeightSet,
        [`uk-width-${props.width}`]: isWidthSet,
        [`uk-background-${props.background}`]: isBackgroundSet,
        [`uk-position-${props.position}`]: isPositionSet,
    });
}

const UIkit$1 = require('uikit');
function Accordion(props) {
    const [state, setState] = useState({
        mounted: false,
        component: null,
    });
    const accordionRef = createRef();
    useEffect(() => {
        if (accordionRef.current) {
            console.log(accordionRef.current);
            // setState({ ...state, component: UIkit.accordion(accordionRef.current, options) })
            UIkit$1.util.on(accordionRef.current, 'beforeshow beforehide show shown hide hidden', e => {
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
            });
        }
    }, []);
    return (React.createElement("ul", { "uk-accordion": props.options ? props.options : '', ref: accordionRef, id: props.id ? props.id : null, style: props.style ? props.style : null, className: setClassNames(props) }, props.children));
}
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

function AccordionItem({ title, children, ...rest }) {
    return (React.createElement("li", Object.assign({}, rest),
        React.createElement("a", { role: "button", className: "uk-accordion-title" }, title),
        React.createElement("div", { className: "uk-accordion-content" }, children)));
}

const UIkit$2 = require('uikit');
function Alert(props) {
    let durationTimeout;
    let leaveTimeout;
    const alertRef = createRef();
    const [state, setState] = useState({
        isOpen: true,
        isClosed: false,
        component: null,
    });
    const handleClose = () => {
        setState({ ...state, isOpen: false });
        if (props.onBeforeHide)
            props.onBeforeHide();
        leaveTimeout = setTimeout(() => {
            setState({ ...state, isClosed: true });
            if (props.onHide)
                props.onHide();
        }, 505);
    };
    const _setClassNames = () => {
        return _classNames('uk-alert', {
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
            if (leaveTimeout)
                clearTimeout(leaveTimeout);
            if (durationTimeout)
                clearTimeout(durationTimeout);
        };
    }, []);
    if (state.isClosed)
        return null;
    return (React.createElement("div", { id: props.id ? props.id : null, className: _setClassNames(), style: {
            overflow: 'hidden',
            transform: !state.isOpen ? 'scaleY(0)' : 'scaleY(100px)',
            transition: 'transform 0.5s ease-out, opacity 0.3s ease-out',
            maxHeight: 'auto',
            opacity: !state.isOpen ? '0' : '1',
            ...props.style,
        } },
        props.isClosable ? (React.createElement("a", { className: "uk-alert-close", "data-uk-close": true, onClick: handleClose })) : null,
        React.createElement("span", null, props.content)));
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

function Article(props) {
    return (React.createElement("article", { id: props.id ? props.id : null, style: props.style ? props.style : null, className: `
                  uk-article
                  ${setClassNames(props)}
              ` },
        React.createElement("h1", { className: "uk-article-title" }, props.title),
        props.meta ? React.createElement("p", { className: "uk-article-meta" }, props.meta) : '',
        props.lead ? React.createElement("p", { className: "uk-text-lead" }, props.lead) : '',
        React.createElement("div", null, props.children)));
}

function Badge(props) {
    return (React.createElement("span", { id: props.id ? props.id : null, style: props.style ? props.style : null, className: `uk-badge ${setClassNames(props)}` }, props.count));
}

function Breadcrumb(props) {
    return (React.createElement("ul", { id: props.id ? props.id : null, style: props.style ? props.style : null, className: `uk-breadcrumb ${setClassNames(props)}` }, props.children));
}

function Button(props) {
    const isLink = () => {
        return !!props.href;
    };
    const _setClassNames = () => {
        return _classNames('uk-button', {
            [`uk-button-default`]: !props.color,
            [`uk-button-${props.color}`]: !!props.color,
            [`uk-button-${props.size}`]: !!props.size,
            [`${setClassNames(props)}`]: true,
        });
    };
    return isLink() ? (React.createElement("a", { id: props.id ? props.id : null, style: props.style ? props.style : null, "data-uk-toggle": props.toggleOptions, href: props.href, onClick: props.onClick, className: _setClassNames() }, props.children)) : (React.createElement("button", { id: props.id ? props.id : null, style: props.style ? props.style : null, "data-uk-toggle": props.toggleOptions, onClick: props.onClick, className: _setClassNames() }, props.children));
}

function Card(props) {
    const _setClassNames = () => {
        return _classNames('uk-card', {
            [`uk-card-default`]: !props.color,
            [`uk-card-${props.color}`]: !!props.color,
            [`uk-card-hover`]: props.hover,
            [`uk-card-${props.size}`]: !!props.size,
            [setClassNames(props)]: true,
        });
    };
    return (React.createElement("div", { id: props.id ? props.id : null, style: props.style ? props.style : null, className: _setClassNames() }, props.children));
}
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

function CardBody(props) {
    return (React.createElement("div", { id: props.id ? props.id : null, style: props.style ? props.style : null, className: `uk-card-body ${setClassNames(props)}` }, props.children));
}

function CardFooter(props) {
    return (React.createElement("div", { id: props.id ? props.id : null, style: props.style ? props.style : null, className: `uk-card-footer ${setClassNames(props)}` }, props.children));
}

function CardHeader(props) {
    return (React.createElement("div", { id: props.id ? props.id : null, style: props.style ? props.style : null, className: `uk-card-header ${setClassNames(props)}` }, props.children));
}

function CardTitle(props) {
    return (React.createElement("h3", { id: props.id ? props.id : null, style: props.style ? props.style : null, className: `uk-card-title ${setClassNames(props)}` }, props.children));
}

function Container(props) {
    const _setClassNames = () => {
        return _classNames({
            [`uk-container`]: true,
            [`uk-container-${props.size}`]: !!props.size,
            [setClassNames(props)]: true,
        });
    };
    return (React.createElement("div", { id: props.id ? props.id : null, style: props.style ? props.style : null, className: _setClassNames() }, props.children));
}

function Cover(props) {
    const renderResponsiveMode = () => {
        if (props.responsive) {
            return React.createElement("canvas", { width: props.width, height: props.height });
        }
    };
    const renderBasedOnType = () => {
        if (props.type === 'image') {
            return (React.createElement("img", { src: props.src, alt: props.alt, width: props.width, height: props.height, "data-uk-cover": '' }));
        }
        if (props.type === 'video') {
            return (React.createElement("video", { autoPlay: props.autoPlay, loop: props.loop, muted: props.muted, playsInline: props.playsInline, width: props.width, height: props.height, "data-uk-cover": '' },
                React.createElement("source", { src: props.src, type: `${props.type}/${props.videoFormat}` })));
        }
        console.error('Type property on cover component must be either video or image');
    };
    return (React.createElement("div", { id: props.id ? props.id : null, style: props.style ? props.style : null, className: `uk-cover-container ${setClassNames(props)}` },
        renderResponsiveMode(),
        renderBasedOnType()));
}

function Dark(props) {
    return (React.createElement("div", { id: props.id ? props.id : null, style: props.style ? props.style : null, className: `uk-dark ${setClassNames(props)}` }, props.children));
}

function Dropdown(props) {
    return (React.createElement("div", { id: props.id ? props.id : null, className: `${setClassNames(props)}`, "data-uk-dropdown": props.options ? props.options : '' }, props.children));
}

function Flex(props) {
    const _setClassNames = () => {
        const alignments = props.alignment ? props.alignment.split(' ') : [];
        return _classNames({
            [`uk-flex-${alignments[0]}`]: !!alignments[0],
            [`uk-flex-${alignments[1]}`]: !!alignments[1],
            [`uk-flex-${props.direction}`]: !!props.direction,
            [`uk-flex-${props.wrap}`]: !!props.wrap,
            [`${setClassNames(props)}`]: true,
        });
    };
    return (React.createElement("div", { id: props.id ? props.id : null, style: props.style ? props.style : null, className: `uk-flex ${_setClassNames()}` }, props.children));
}

const classNames$1 = _classNames;
class Checkbox extends React.Component {
    render() {
        return (React.createElement("input", { id: this.props.id, placeholder: this.props.placeholder ? this.props.placeholder : null, style: this.props.style ? this.props.style : null, className: this.setClassNames(), type: "checkbox", name: this.props.name ? this.props.name : null, value: this.props.value, onChange: this.props.onChange, onBlur: this.props.onBlur, onFocus: this.props.onFocus }));
    }
    setClassNames() {
        return classNames$1({
            [`uk-checkbox`]: true,
            [`uk-form-${this.props.color}`]: !!this.props.color,
            [`uk-form-${this.props.width}`]: !!this.props.width,
            [`uk-form-${this.props.layout}`]: !!this.props.layout,
            [`${setClassNames(this.props)}`]: true,
        });
    }
}

const classNames$2 = _classNames;
class Fieldset extends React.Component {
    render() {
        return (React.createElement("fieldset", { id: this.props.id ? this.props.id : null, style: this.props.style ? this.props.style : null, className: this.setClassNames() }, this.props.children));
    }
    setClassNames() {
        return classNames$2({
            [`uk-fieldset`]: true,
            [`${setClassNames(this.props)}`]: true,
        });
    }
}

const classNames$3 = _classNames;
class Form extends React.Component {
    render() {
        return (React.createElement("div", { id: this.props.id ? this.props.id : null, style: this.props.style ? this.props.style : null, className: this.setClassNames(), "data-uk-form-custom": this.props.custom ? '' : null }, this.props.children));
    }
    setClassNames() {
        return classNames$3({
            [`uk-form-${this.props.layout}`]: !!this.props.layout,
            [`${setClassNames(this.props)}`]: true,
        });
    }
}

const classNames$4 = _classNames;
class Input extends React.Component {
    render() {
        return (React.createElement("input", { id: this.props.id, placeholder: this.props.placeholder ? this.props.placeholder : null, style: this.props.style ? this.props.style : null, className: this.setClassNames(), type: "text", name: this.props.name ? this.props.name : null, value: this.props.value, onChange: this.props.onChange, onBlur: this.props.onBlur, onFocus: this.props.onFocus }));
    }
    setClassNames() {
        return classNames$4({
            [`uk-input`]: true,
            [`uk-form-${this.props.color}`]: !!this.props.color,
            [`uk-form-${this.props.width}`]: !!this.props.width,
            [`uk-form-${this.props.layout}`]: !!this.props.layout,
            [`${setClassNames(this.props)}`]: true,
        });
    }
}

class InputContainer extends React.Component {
    render() {
        return (React.createElement("div", { id: this.props.id ? this.props.id : null, style: this.props.style ? this.props.style : null, className: `uk-form-controls ${setClassNames(this.props)}` }, this.props.children));
    }
}

class FormLabel extends React.Component {
    render() {
        return (React.createElement("label", { id: this.props.id ? this.props.id : null, style: this.props.style ? this.props.style : null, className: `${setClassNames(this.props)}`, htmlFor: this.props.htmlFor }, this.props.children));
    }
}

const classNames$7 = _classNames;
class Legend extends React.Component {
    render() {
        return (React.createElement("legend", { id: this.props.id ? this.props.id : null, style: this.props.style ? this.props.style : null, className: this.setClassNames() }, this.props.children));
    }
    setClassNames() {
        return classNames$7({
            [`uk-legend`]: true,
            [`${setClassNames(this.props)}`]: true,
        });
    }
}

const classNames$8 = _classNames;
class Radio extends React.Component {
    render() {
        return (React.createElement("input", { id: this.props.id, placeholder: this.props.placeholder ? this.props.placeholder : null, style: this.props.style ? this.props.style : null, className: this.setClassNames(), type: "radio", name: this.props.name ? this.props.name : null, value: this.props.value, onChange: this.props.onChange, onBlur: this.props.onBlur, onFocus: this.props.onFocus }));
    }
    setClassNames() {
        return classNames$8({
            [`uk-radio`]: true,
            [`uk-form-${this.props.color}`]: !!this.props.color,
            [`uk-form-${this.props.width}`]: !!this.props.width,
            [`uk-form-${this.props.layout}`]: !!this.props.layout,
            [`${setClassNames(this.props)}`]: true,
        });
    }
}

const classNames$9 = _classNames;
class Range extends React.Component {
    render() {
        return (React.createElement("input", { id: this.props.id, placeholder: this.props.placeholder ? this.props.placeholder : null, style: this.props.style ? this.props.style : null, className: this.setClassNames(), type: "range", name: this.props.name ? this.props.name : null, value: this.props.value, min: this.props.min, max: this.props.max, step: this.props.step, onChange: this.props.onChange, onBlur: this.props.onBlur, onFocus: this.props.onFocus }));
    }
    setClassNames() {
        return classNames$9({
            [`uk-range`]: true,
            [`uk-form-${this.props.color}`]: !!this.props.color,
            [`uk-form-${this.props.width}`]: !!this.props.width,
            [`uk-form-${this.props.layout}`]: !!this.props.layout,
            [`${setClassNames(this.props)}`]: true,
        });
    }
}

const classNames$a = _classNames;
class Select extends React.Component {
    render() {
        return (React.createElement("select", { id: this.props.id, placeholder: this.props.placeholder ? this.props.placeholder : null, style: this.props.style ? this.props.style : null, className: this.setClassNames(), value: this.props.value, onChange: this.props.onChange }, this.props.children));
    }
    setClassNames() {
        return classNames$a({
            [`uk-select`]: true,
            [`uk-form-${this.props.color}`]: !!this.props.color,
            [`uk-form-${this.props.width}`]: !!this.props.width,
            [`uk-form-${this.props.layout}`]: !!this.props.layout,
            [`${setClassNames(this.props)}`]: true,
        });
    }
}

class SelectOption extends React.Component {
    render() {
        return (React.createElement("option", { id: this.props.id ? this.props.id : null, style: this.props.style ? this.props.style : null, className: `${setClassNames(this.props)}`, value: this.props.value }, this.props.children));
    }
}

const classNames$c = _classNames;
class Textarea extends React.Component {
    render() {
        return (React.createElement("textarea", { id: this.props.id ? this.props.id : null, placeholder: this.props.placeholder ? this.props.placeholder : null, style: this.props.style ? this.props.style : null, className: this.setClassNames(), name: this.props.name ? this.props.name : null, onChange: this.props.onChange, onBlur: this.props.onBlur, onFocus: this.props.onFocus }, this.props.children));
    }
    setClassNames() {
        return classNames$c({
            [`uk-textarea`]: true,
            [`uk-form-${this.props.color}`]: !!this.props.color,
            [`uk-form-${this.props.width}`]: !!this.props.width,
            [`uk-form-${this.props.layout}`]: !!this.props.layout,
            [`${setClassNames(this.props)}`]: true,
        });
    }
}

function Grid(props) {
    const _setClassNames = () => {
        return _classNames({
            [`uk-grid-${props.gutter}`]: !!props.gutter,
            [`uk-grid-divider`]: props.divider,
            [`uk-grid-match`]: props.match,
            [`${setClassNames(props)}`]: true,
        });
    };
    return (React.createElement("div", { id: props.id ? props.id : null, style: props.style ? props.style : null, className: `${_setClassNames()}`, "uk-grid": props.options ? props.options : '' }, props.children));
}

function Icon(props) {
    const getClassNames = () => {
        return _classNames({
            [`uk-icon`]: true,
            [`uk-icon-button`]: props.button,
            [`uk-icon-link`]: !!props.href,
            [`uk-icon-image`]: !!props.image,
            [`${setClassNames(props)}`]: true,
        });
    };
    const renderIconType = () => {
        if (props.href) {
            return (React.createElement("a", { id: props.id ? props.id : null, style: props.style ? props.style : null, className: getClassNames(), href: props.href, "data-uk-icon": props.options }));
        }
        if (props.image) {
            return (React.createElement("span", { id: props.id ? props.id : null, className: getClassNames(), style: {
                    backgroundImage: `url(${props.image})`,
                    ...props.style,
                }, "data-uk-icon": props.options }));
        }
        return (React.createElement("em", { id: props.id ? props.id : null, style: props.style ? props.style : null, className: getClassNames(), "data-uk-icon": props.options }));
    };
    return renderIconType();
}

function Image(props) {
    return (React.createElement("img", { id: props.id ? props.id : null, className: props.className, width: props.width, height: props.height, style: props.style ? props.style : null, "data-src": props.src, "data-uk-img": props.options ? props.options : '' }));
}

function Label(props) {
    const _setClassNames = () => {
        return _classNames('uk-label', {
            [`uk-label-${props.color}`]: !!props.color,
        });
    };
    return (React.createElement("div", { id: props.id ? props.id : null, style: props.style ? props.style : null, className: `${_setClassNames()}` }, props.content));
}

function Light(props) {
    return (React.createElement("div", { id: props.id ? props.id : null, style: props.style ? props.style : null, className: `uk-light ${setClassNames(props)}` }, props.children));
}

function Lightbox(props) {
    return (React.createElement("div", { id: props.id ? props.id : null, style: props.style ? props.style : null, className: setClassNames(props), "data-uk-lightbox": props.options ? props.options : '' }, props.children));
}

function LightboxItem(props) {
    return (React.createElement("a", { id: props.id ? props.id : null, style: props.style ? props.style : null, className: setClassNames(props), href: props.href, "data-caption": props.caption }, props.children));
}

function Link(props) {
    const _setClassNames = () => {
        return _classNames({
            [`uk-link-${props.type}`]: !!props.type,
            [`${setClassNames(props)}`]: true,
        });
    };
    return (React.createElement("a", { id: props.id ? props.id : null, style: props.style ? props.style : null, "data-uk-toggle": props.toggleOptions ? props.toggleOptions : null, href: props.href, className: `${_setClassNames()}` }, props.children));
}

function List(props) {
    const _setClassNames = () => {
        return _classNames('uk-list', {
            [`uk-link-${props.type}`]: !!props.type,
            [`${setClassNames(props)}`]: true,
        });
    };
    return (React.createElement("ul", { id: props.id ? props.id : null, style: props.style ? props.style : null, className: `${_setClassNames()}` }, props.children));
}

function ListItem(props) {
    return (React.createElement("li", { id: props.id ? props.id : null, style: props.style ? props.style : null, className: setClassNames(props) }, props.children));
}

function Margin(props) {
    const _setClassNames = () => {
        const stringArray = props.type.split('; ');
        let classString;
        stringArray.map((string, idx) => {
            classString = `${classString} uk-margin-${string}`;
        });
        return _classNames(classString, {
            [`${setClassNames(props)}`]: true,
        });
    };
    return (React.createElement("div", { id: props.id ? props.id : null, style: props.style ? props.style : null, "data-uk-margin": props.dynamicWrapping, className: _setClassNames() }, props.children));
}

function Nav(props) {
    const _setClassNames = () => {
        return _classNames({
            [`uk-nav`]: true,
            [`uk-nav-${props.preset}`]: !!props.preset,
            [`uk-nav-sub`]: props.child,
            [`uk-nav-parent-icon`]: props.accordion,
            [`${setClassNames(props)}`]: true,
        });
    };
    return (React.createElement("ul", { id: props.id ? props.id : null, style: props.style ? props.style : null, className: `${_setClassNames()}`, "data-uk-nav": props.options ? props.options : '' }, props.children));
}

function NavItem(props) {
    const _setClassNames = () => {
        return _classNames({
            [`uk-nav-${props.type}`]: !!props.type,
            [`uk-parent`]: props.parent,
            [`${setClassNames(props)}`]: true,
        });
    };
    return (React.createElement("li", { id: props.id ? props.id : null, style: props.style ? props.style : null, className: `${_setClassNames()}` }, props.children));
}

function Navbar(props) {
    const _setClassNames = () => {
        return _classNames({
            [`uk-navbar-left`]: props.left,
            [`uk-navbar-right`]: props.right,
            [setClassNames(props)]: true,
        });
    };
    return (React.createElement("div", { id: props.id ? props.id : null, style: props.style ? props.style : null, className: `${_setClassNames()}` },
        React.createElement("ul", { className: "uk-navbar-nav" }, props.children)));
}

function NavbarContainer(props) {
    const _setClassNames = () => {
        return _classNames('uk-navbar-container', {
            [`uk-navbar-transparent`]: props.transparent,
            [setClassNames(props)]: true,
        });
    };
    return (React.createElement("div", null,
        React.createElement("nav", { id: props.id ? props.id : null, className: `${_setClassNames()}`, style: props.style ? props.style : null, "data-uk-navbar": props.options ? props.options : '' }, props.children),
        props.dropbar ? React.createElement("div", { className: "uk-navbar-dropbar" }) : null));
}

function NavbarDropdown(props) {
    return (React.createElement("div", { id: props.id ? props.id : null, style: props.style ? props.style : null, className: `uk-navbar-dropdown ${setClassNames(props)}` },
        React.createElement("ul", { className: "uk-nav uk-navbar-dropdown-nav" }, props.children)));
}

function NavbarSticky(props) {
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
    return (React.createElement("div", { id: props.id ? props.id : null, style: props.style ? props.style : null, className: `${setClassNames(props)}`, "data-uk-sticky": `
                sel-target: .uk-navbar-container;
                cls-active: uk-navbar-sticky;
                ${props.options ? props.options : ''}
            ` }, props.children));
}

function Offcanvas(props) {
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
    return (React.createElement("div", { id: props.id, style: props.style ? props.style : null, className: `${setClassNames(props)}`, "data-uk-offcanvas": props.options ? props.options : '' },
        React.createElement("div", { className: "uk-offcanvas-bar" }, props.children)));
}

function OffcanvasContainer(props) {
    return (React.createElement("div", { id: props.id ? props.id : null, style: props.style ? props.style : null, className: `uk-offcanvas-content ${setClassNames(props)}` }, props.children));
}

function Overlay(props) {
    const _setClassNames = () => {
        return _classNames('uk-overlay', {
            [`uk-position-${props.position}`]: !!props.position,
            [`uk-position-${props.type}`]: !!props.type,
            [`${setClassNames(props)}`]: true,
        });
    };
    return (React.createElement("div", { id: props.id ? props.id : null, style: props.style ? props.style : null, className: `${_setClassNames()}` }, props.showIcon ? React.createElement("span", { "uk-overlay-icon": true }) : null));
}

function Panel(props) {
    const _setClassNames = () => {
        return _classNames('uk-panel', {
            [`uk-panel-scrollable`]: props.isScrollable,
            [setClassNames(props)]: true,
        });
    };
    return (React.createElement("div", { id: props.id ? props.id : null, style: props.style ? props.style : null, className: _setClassNames() }, props.children));
}

function Parallax(props) {
    const applyParallaxFiltersToChild = () => {
        return React.Children.map(props.children, (child, idx) => {
            if (idx > 0)
                return child;
            return React.cloneElement(child, {
                'uk-parallax': props.options,
            });
        });
    };
    return (React.createElement("div", { id: props.id ? props.id : null, style: props.style ? props.style : null, className: `${setClassNames(props)}` }, applyParallaxFiltersToChild()));
}

function Progress(props) {
    const [state, setState] = useState({ value: props.value });
    const _setClassNames = () => {
        return _classNames('uk-progress', {
            [`${setClassNames(props)}`]: true,
        });
    };
    return (React.createElement("progress", { id: props.id ? props.id : null, style: props.style ? props.style : null, className: `${_setClassNames()}`, value: state.value, max: props.max }));
}

function Scrollspy(props) {
    return (React.createElement("div", { id: props.id ? props.id : null, style: props.style ? props.style : null, className: `${setClassNames(props)}`, "data-uk-scrollspy": props.options ? props.options : '' }, props.children));
}

function Section(props) {
    const _setClassNames = () => {
        return _classNames({
            [`uk-section`]: props.padding,
            [`uk-section-${props.color}`]: !!props.color,
            [`uk-section-${props.size}`]: !!props.size,
            [`uk-preserve-color`]: props.preserveColor,
            [setClassNames(props)]: true,
            [`uk-position-${props.position}`]: !!props.position,
        });
    };
    return (React.createElement("div", { id: props.id ? props.id : null, style: props.style ? props.style : null, className: `${_setClassNames()}` }, props.children));
}

function Sidebar(props) {
    const _setClassNames = () => {
        return _classNames({
            [`uk-overflow-auto`]: true,
            [`uk-${props.visibility}`]: !!this.props.visibility,
            [setClassNames(props)]: true,
        });
    };
    return (React.createElement("div", { id: props.id ? props.id : null, style: props.style ? props.style : null, className: _setClassNames() }, props.children));
}

function Slideshow(props) {
    const setNavigation = () => {
        if (props.navigation) {
            return (React.createElement("div", { className: `uk-position-relative uk-visible-toggle ${setNavigationStyle()}` },
                React.createElement("ul", { className: "uk-slideshow-items" }, props.children),
                React.createElement("a", { className: "uk-position-center-left uk-position-small uk-hidden-hover", href: "#", "uk-slidenav-previous": "", "uk-slideshow-item": "previous" }),
                React.createElement("a", { className: "uk-position-center-right uk-position-small uk-hidden-hover", href: "#", "uk-slidenav-next": "", "uk-slideshow-item": "next" })));
        }
        return React.createElement("ul", { className: "uk-slideshow-items" }, props.children);
    };
    const setNavigationStyle = () => {
        if (props.navigation && props.navigationStyle) {
            return `uk-${props.navigationStyle}`;
        }
        return `uk-dark`;
    };
    return (React.createElement("div", { id: props.id ? props.id : null, style: props.style ? props.style : null, className: `${setClassNames(props)}`, "data-uk-slideshow": props.options ? props.options : '' }, setNavigation()));
}

function SlideshowItem(props) {
    const renderBasedOnType = () => {
        if (props.type === 'image') {
            return React.createElement("img", { src: props.src, alt: props.alt, "uk-cover": "" });
        }
        if (props.type === 'video') {
            return (React.createElement("video", { autoPlay: props.autoPlay, loop: props.loop, muted: props.muted, playsInline: props.playsInline, "data-uk-cover": '' },
                React.createElement("source", { src: props.src, type: `${props.type}/${props.videoFormat}` })));
        }
        console.error('Type property on cover component must be either video or image');
    };
    return (React.createElement("li", { id: props.id ? props.id : null, style: props.style ? props.style : null, className: `${setClassNames(props)}` }, renderBasedOnType()));
}

function Tab(props) {
    return (React.createElement("li", { id: props.id ? props.id : null, style: props.style ? props.style : null, className: setClassNames(props) },
        React.createElement("a", { href: "#" }, props.children)));
}

function TabContainer(props) {
    const renderChildren = key => {
        return React.Children.map(props.children, (child, idx) => {
            const comp = child;
            if (comp.key === key) {
                return comp;
            }
        });
    };
    const validateIdProp = () => {
        if (!props.id) {
            console.error('ID property is required to register to tab events');
        }
    };
    useEffect(() => {
        if (props.onBeforeShow) {
            validateIdProp();
            UIkit.util.on(props.id, 'beforeshow', () => {
                console.log('eventFired');
                props.onBeforeShow();
            });
        }
        if (props.onShow) {
            validateIdProp();
            UIkit.util.on(props.id, 'show', props.onShow);
        }
        if (props.onShown) {
            validateIdProp();
            UIkit.util.on(props.id, 'shown', props.onShown);
        }
        if (props.onBeforeHide) {
            validateIdProp();
            UIkit.util.on(props.id, 'beforehide', props.onBeforeHide);
        }
        if (props.onHide) {
            validateIdProp();
            UIkit.util.on(props.id, 'hide', props.onHide);
        }
        if (props.onHidden) {
            validateIdProp();
            UIkit.util.on(props.id, 'hidden', props.onHidden);
        }
    }, []);
    return (React.createElement("div", { id: props.id ? props.id : null, style: props.style ? props.style : null, className: setClassNames(props) },
        React.createElement("ul", { "uk-tab": props.options ? props.options : '' }, renderChildren('tab')),
        React.createElement("ul", { id: props.id ? props.id : '', className: "uk-switcher" }, renderChildren('tab-content'))));
}

function TabContent(props) {
    return (React.createElement("li", { id: this.props.id ? this.props.id : null, style: this.props.style ? this.props.style : null, className: `${setClassNames(this.props)}` }, this.props.children));
}

function Table(props) {
    const _setClassNames = () => {
        return _classNames('uk-table', {
            [`uk-table-divider`]: props.divider,
            [`uk-table-striped`]: props.striped,
            [`uk-table-hover`]: props.hover,
            [`uk-table-justify`]: props.justify,
            [`uk-table-middle`]: props.center,
            [`uk-overflow-auto`]: props.responsive,
            [`uk-table-${props.size}`]: !!props.size,
            [`${setClassNames(props)}`]: true,
        });
    };
    return (React.createElement("table", { id: props.id ? props.id : null, style: props.style ? props.style : null, className: `${_setClassNames()}` }, props.children));
}

export { Accordion, AccordionItem, Alert, Article, Badge, Breadcrumb, Button, Card, CardBody, CardFooter, CardHeader, CardTitle, Container, Cover, Dark, Dropdown, Flex, Checkbox, Fieldset, Form, Input, InputContainer, FormLabel, Legend, Radio, Range, Select, SelectOption, Textarea, Grid, Icon, Image, Label, Light, Lightbox, LightboxItem, Link, List, ListItem, Margin, Nav, NavItem, Navbar, NavbarContainer, NavbarDropdown, NavbarSticky, Offcanvas, OffcanvasContainer, Overlay, Panel, Parallax, Progress, Scrollspy, Section, Sidebar, Slideshow, SlideshowItem, Tab, TabContainer, TabContent, Table };

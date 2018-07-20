import * as _classNames from 'classnames';
import { createElement, Component, Children, cloneElement } from 'react';

/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics =
  Object.setPrototypeOf ||
  ({ __proto__: [] } instanceof Array &&
    function(d, b) {
      d.__proto__ = b;
    }) ||
  function(d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
  };

function __extends(d, b) {
  extendStatics(d, b);
  function __() {
    this.constructor = d;
  }
  d.prototype = b === null ? Object.create(b) : ((__.prototype = b.prototype), new __());
}

var __assign =
  Object.assign ||
  function __assign(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];
      for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
    }
    return t;
  };

function __rest(s, e) {
  var t = {};
  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === 'function')
    for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++)
      if (e.indexOf(p[i]) < 0) t[p[i]] = s[p[i]];
  return t;
}

var classNames = _classNames;
function setClassNames(props) {
  var _a;
  var isClassNameSet = props.className ? true : false;
  var isHeightSet = props.height ? true : false;
  var isWidthSet = props.width ? true : false;
  var isAlignSet = props.align ? true : false;
  var isBackgroundSet = props.background ? true : false;
  var isPositionSet = props.position ? true : false;
  return classNames(
    ((_a = {}),
    (_a['' + props.className] = isClassNameSet),
    (_a['uk-align-' + props.align] = isAlignSet),
    (_a['uk-height-' + props.height] = isHeightSet),
    (_a['uk-width-' + props.width] = isWidthSet),
    (_a['uk-background-' + props.background] = isBackgroundSet),
    (_a['uk-position-' + props.position] = isPositionSet),
    _a),
  );
}

var Accordion = /** @class */ (function(_super) {
  __extends(Accordion, _super);
  function Accordion() {
    return (_super !== null && _super.apply(this, arguments)) || this;
  }
  Accordion.prototype.render = function() {
    return createElement(
      'ul',
      {
        id: this.props.id ? this.props.id : null,
        style: this.props.style ? this.props.style : null,
        className: setClassNames(this.props),
        'data-uk-accordion': this.props.options ? this.props.options : '',
      },
      this.props.children,
    );
  };
  return Accordion;
})(Component);

var AccordionItem = /** @class */ (function(_super) {
  __extends(AccordionItem, _super);
  function AccordionItem() {
    return (_super !== null && _super.apply(this, arguments)) || this;
  }
  AccordionItem.prototype.render = function() {
    var _a = this.props,
      title = _a.title,
      content = _a.content,
      rest = __rest(_a, ['title', 'content']);
    return createElement(
      'li',
      __assign({}, rest),
      createElement('a', { className: 'uk-accordion-title', href: '#' }, title),
      createElement('div', { className: 'uk-accordion-content' }, content),
    );
  };
  return AccordionItem;
})(Component);

var classNames$2 = _classNames;
var Icon = /** @class */ (function(_super) {
  __extends(Icon, _super);
  function Icon() {
    return (_super !== null && _super.apply(this, arguments)) || this;
  }
  Icon.prototype.render = function() {
    return this.renderIconType();
  };
  Icon.prototype.renderIconType = function() {
    if (this.props.href) {
      return createElement('a', {
        id: this.props.id ? this.props.id : null,
        style: this.props.style ? this.props.style : null,
        className: this.getClassNames(),
        href: this.props.href,
        'uk-icon': this.props.options,
      });
    } else if (this.props.image) {
      return createElement('span', {
        id: this.props.id ? this.props.id : null,
        className: this.getClassNames(),
        style: __assign({ backgroundImage: 'url(' + this.props.image + ')' }, this.props.style),
        'uk-icon': this.props.options,
      });
    } else {
      return createElement('em', {
        id: this.props.id ? this.props.id : null,
        style: this.props.style ? this.props.style : null,
        className: this.getClassNames(),
        'uk-icon': this.props.options,
      });
    }
  };
  Icon.prototype.getClassNames = function() {
    var _a;
    return classNames$2(
      ((_a = {}),
      (_a['uk-icon'] = true),
      (_a['uk-icon-button'] = this.props.button),
      (_a['uk-icon-link'] = !!this.props.href),
      (_a['uk-icon-image'] = !!this.props.image),
      (_a['' + setClassNames(this.props)] = true),
      _a),
    );
  };
  return Icon;
})(Component);

var classNames$3 = _classNames;
var Alert = /** @class */ (function(_super) {
  __extends(Alert, _super);
  function Alert(props) {
    var _this = _super.call(this, props) || this;
    _this.state = {
      isOpen: true,
      isClosed: false,
    };
    return _this;
  }
  Alert.prototype.componentDidMount = function() {
    var _this = this;
    if (this.props.duration) {
      this.durationTimeout = setTimeout(function() {
        _this.handleClose();
      }, this.props.duration);
    }
  };
  Alert.prototype.componentWillUnmount = function() {
    if (this.leaveTimeout) clearTimeout(this.leaveTimeout);
    if (this.durationTimeout) clearTimeout(this.durationTimeout);
  };
  Alert.prototype.render = function() {
    if (this.state.isClosed) return false;
    return createElement(
      'div',
      {
        id: this.props.id ? this.props.id : null,
        className: this.setClassNames(),
        style: __assign(
          {
            overflow: 'hidden',
            transition: 'height 0.5s ease-in-out, opacity 0.3s ease-in-out',
            height: !this.state.isOpen ? 0 : 'auto',
            opacity: !this.state.isOpen ? 0 : 1,
          },
          this.props.style,
        ),
      },
      this.props.isClosable
        ? createElement(
            'a',
            {
              className: 'uk-alert-close',
              onClick: this.handleClose.bind(this),
            },
            createElement(Icon, { options: 'close' }),
          )
        : null,
      createElement('span', null, this.props.content),
    );
  };
  Alert.prototype.handleClose = function() {
    var _this = this;
    this.setState(
      {
        isOpen: false,
      },
      function() {
        if (_this.props.onBeforeHide) _this.props.onBeforeHide();
        _this.leaveTimeout = setTimeout(function() {
          _this.setState({ isClosed: true });
          if (_this.props.onHide) _this.props.onHide();
        }, 505);
      },
    );
  };
  Alert.prototype.setClassNames = function() {
    var _a;
    return classNames$3(
      'uk-alert',
      ((_a = {}),
      (_a['uk-alert-' + this.props.color] = !!this.props.color),
      (_a[setClassNames(this.props)] = true),
      _a),
    );
  };
  return Alert;
})(Component);

var Article = /** @class */ (function(_super) {
  __extends(Article, _super);
  function Article() {
    return (_super !== null && _super.apply(this, arguments)) || this;
  }
  Article.prototype.render = function() {
    return createElement(
      'article',
      {
        id: this.props.id ? this.props.id : null,
        style: this.props.style ? this.props.style : null,
        className:
          '\n                    uk-article\n                    ' +
          setClassNames(this.props) +
          '\n                ',
      },
      createElement('h1', { className: 'uk-article-title' }, this.props.title),
      this.props.meta ? createElement('p', { className: 'uk-article-meta' }, this.props.meta) : '',
      this.props.lead ? createElement('p', { className: 'uk-text-lead' }, this.props.lead) : '',
      createElement('div', null, this.props.children),
    );
  };
  return Article;
})(Component);

var Badge = /** @class */ (function(_super) {
  __extends(Badge, _super);
  function Badge() {
    return (_super !== null && _super.apply(this, arguments)) || this;
  }
  Badge.prototype.render = function() {
    return createElement(
      'span',
      {
        id: this.props.id ? this.props.id : null,
        style: this.props.style ? this.props.style : null,
        className: 'uk-badge ' + setClassNames(this.props),
      },
      this.props.count,
    );
  };
  return Badge;
})(Component);

var Breadcrumb = /** @class */ (function(_super) {
  __extends(Breadcrumb, _super);
  function Breadcrumb() {
    return (_super !== null && _super.apply(this, arguments)) || this;
  }
  Breadcrumb.prototype.render = function() {
    return createElement(
      'ul',
      {
        id: this.props.id ? this.props.id : null,
        style: this.props.style ? this.props.style : null,
        className: 'uk-breadcrumb ' + setClassNames(this.props),
      },
      this.props.children,
    );
  };
  return Breadcrumb;
})(Component);

var classNames$4 = _classNames;
var Button = /** @class */ (function(_super) {
  __extends(Button, _super);
  function Button() {
    return (_super !== null && _super.apply(this, arguments)) || this;
  }
  Button.prototype.render = function() {
    return this.isLink()
      ? createElement(
          'a',
          {
            id: this.props.id ? this.props.id : null,
            style: this.props.style ? this.props.style : null,
            'uk-toggle': this.props.toggleOptions,
            href: this.props.href,
            onClick: this.props.onClick,
            className: this.setClassNames(),
          },
          this.props.children,
        )
      : createElement(
          'button',
          {
            id: this.props.id ? this.props.id : null,
            style: this.props.style ? this.props.style : null,
            'uk-toggle': this.props.toggleOptions,
            onClick: this.props.onClick,
            className: this.setClassNames(),
          },
          this.props.children,
        );
  };
  Button.prototype.isLink = function() {
    return this.props.href ? true : false;
  };
  Button.prototype.setClassNames = function() {
    var _a;
    return classNames$4(
      'uk-button',
      ((_a = {}),
      (_a['uk-button-default'] = !this.props.color),
      (_a['uk-button-' + this.props.color] = !!this.props.color),
      (_a['uk-button-' + this.props.size] = !!this.props.size),
      (_a['' + setClassNames(this.props)] = true),
      _a),
    );
  };
  return Button;
})(Component);

var classNames$5 = _classNames;
var Card = /** @class */ (function(_super) {
  __extends(Card, _super);
  function Card() {
    return (_super !== null && _super.apply(this, arguments)) || this;
  }
  Card.prototype.render = function() {
    return createElement(
      'div',
      {
        id: this.props.id ? this.props.id : null,
        style: this.props.style ? this.props.style : null,
        className: this.setClassNames(),
      },
      this.props.children,
    );
  };
  Card.prototype.setClassNames = function() {
    var _a;
    return classNames$5(
      'uk-card',
      ((_a = {}),
      (_a['uk-card-default'] = !this.props.color),
      (_a['uk-card-' + this.props.color] = !!this.props.color),
      (_a['uk-card-hover'] = this.props.hover),
      (_a['uk-card-' + this.props.size] = !!this.props.size),
      (_a[setClassNames(this.props)] = true),
      _a),
    );
  };
  return Card;
})(Component);

var CardBody = /** @class */ (function(_super) {
  __extends(CardBody, _super);
  function CardBody() {
    return (_super !== null && _super.apply(this, arguments)) || this;
  }
  CardBody.prototype.render = function() {
    return createElement(
      'div',
      {
        id: this.props.id ? this.props.id : null,
        style: this.props.style ? this.props.style : null,
        className: 'uk-card-body ' + setClassNames(this.props),
      },
      this.props.children,
    );
  };
  return CardBody;
})(Component);

var CardFooter = /** @class */ (function(_super) {
  __extends(CardFooter, _super);
  function CardFooter() {
    return (_super !== null && _super.apply(this, arguments)) || this;
  }
  CardFooter.prototype.render = function() {
    return createElement(
      'div',
      {
        id: this.props.id ? this.props.id : null,
        style: this.props.style ? this.props.style : null,
        className: 'uk-card-footer ' + setClassNames(this.props),
      },
      this.props.children,
    );
  };
  return CardFooter;
})(Component);

var CardHeader = /** @class */ (function(_super) {
  __extends(CardHeader, _super);
  function CardHeader() {
    return (_super !== null && _super.apply(this, arguments)) || this;
  }
  CardHeader.prototype.render = function() {
    return createElement(
      'div',
      {
        id: this.props.id ? this.props.id : null,
        style: this.props.style ? this.props.style : null,
        className: 'uk-card-header ' + setClassNames(this.props),
      },
      this.props.children,
    );
  };
  return CardHeader;
})(Component);

var CardTitle = /** @class */ (function(_super) {
  __extends(CardTitle, _super);
  function CardTitle() {
    return (_super !== null && _super.apply(this, arguments)) || this;
  }
  CardTitle.prototype.render = function() {
    return createElement(
      'h3',
      {
        id: this.props.id ? this.props.id : null,
        style: this.props.style ? this.props.style : null,
        className: 'uk-card-title ' + setClassNames(this.props),
      },
      this.props.children,
    );
  };
  return CardTitle;
})(Component);

var classNames$6 = _classNames;
var Container = /** @class */ (function(_super) {
  __extends(Container, _super);
  function Container() {
    return (_super !== null && _super.apply(this, arguments)) || this;
  }
  Container.prototype.render = function() {
    return createElement(
      'div',
      {
        id: this.props.id ? this.props.id : null,
        style: this.props.style ? this.props.style : null,
        className: this.setClassNames(),
      },
      this.props.children,
    );
  };
  Container.prototype.setClassNames = function() {
    var _a;
    return classNames$6(
      ((_a = {}),
      (_a['uk-container'] = true),
      (_a['uk-container-' + this.props.size] = !!this.props.size),
      (_a[setClassNames(this.props)] = true),
      _a),
    );
  };
  return Container;
})(Component);

var Cover = /** @class */ (function(_super) {
  __extends(Cover, _super);
  function Cover() {
    return (_super !== null && _super.apply(this, arguments)) || this;
  }
  Cover.prototype.render = function() {
    return createElement(
      'div',
      {
        id: this.props.id ? this.props.id : null,
        style: this.props.style ? this.props.style : null,
        className: 'uk-cover-container ' + setClassNames(this.props),
      },
      this.renderResponsiveMode(),
      this.renderBasedOnType(),
    );
  };
  Cover.prototype.renderResponsiveMode = function() {
    if (this.props.responsive) {
      return createElement('canvas', {
        width: this.props.width,
        height: this.props.height,
      });
    }
  };
  Cover.prototype.renderBasedOnType = function() {
    if (this.props.type === 'image') {
      return createElement('img', {
        src: this.props.src,
        alt: this.props.alt,
        width: this.props.width,
        height: this.props.height,
        'uk-cover': true,
      });
    } else if (this.props.type === 'video') {
      return createElement(
        'video',
        {
          autoPlay: this.props.autoPlay,
          loop: this.props.loop,
          muted: this.props.muted,
          playsinline: this.props.playsinline,
          width: this.props.width,
          height: this.props.height,
          'uk-cover': true,
        },
        createElement('source', {
          src: this.props.src,
          type: this.props.type + '/' + this.props.videoFormat,
        }),
      );
    } else {
      console.error('Type property on cover component must be either video or image');
    }
  };
  return Cover;
})(Component);

var Dark = /** @class */ (function(_super) {
  __extends(Dark, _super);
  function Dark() {
    return (_super !== null && _super.apply(this, arguments)) || this;
  }
  Dark.prototype.render = function() {
    return createElement(
      'div',
      {
        id: this.props.id ? this.props.id : null,
        style: this.props.style ? this.props.style : null,
        className: 'uk-dark ' + setClassNames(this.props),
      },
      this.props.children,
    );
  };
  return Dark;
})(Component);

var Dropdown = /** @class */ (function(_super) {
  __extends(Dropdown, _super);
  function Dropdown() {
    return (_super !== null && _super.apply(this, arguments)) || this;
  }
  Dropdown.prototype.render = function() {
    return createElement(
      'div',
      {
        id: this.props.id ? this.props.id : null,
        className: '' + setClassNames(this.props),
        'uk-dropdown': this.props.options ? this.props.options : '',
      },
      createElement(
        'ul',
        {
          style: this.props.style ? this.props.style : null,
          className: 'uk-nav uk-dropdown-nav',
        },
        this.props.children,
      ),
    );
  };
  return Dropdown;
})(Component);

var classNames$7 = _classNames;
var Flex = /** @class */ (function(_super) {
  __extends(Flex, _super);
  function Flex() {
    return (_super !== null && _super.apply(this, arguments)) || this;
  }
  Flex.prototype.render = function() {
    return createElement(
      'div',
      {
        id: this.props.id ? this.props.id : null,
        style: this.props.style ? this.props.style : null,
        className: 'uk-flex ' + this.setClassNames(),
      },
      this.props.children,
    );
  };
  Flex.prototype.setClassNames = function() {
    var _a;
    var alignments = this.props.alignment ? this.props.alignment.split(' ') : [];
    return classNames$7(
      ((_a = {}),
      (_a['uk-flex-' + alignments[0]] = !!alignments[0]),
      (_a['uk-flex-' + alignments[1]] = !!alignments[1]),
      (_a['uk-flex-' + this.props.direction] = !!this.props.direction),
      (_a['uk-flex-' + this.props.wrap] = !!this.props.wrap),
      (_a['' + setClassNames(this.props)] = true),
      _a),
    );
  };
  return Flex;
})(Component);

var classNames$8 = _classNames;
var Checkbox = /** @class */ (function(_super) {
  __extends(Checkbox, _super);
  function Checkbox() {
    return (_super !== null && _super.apply(this, arguments)) || this;
  }
  Checkbox.prototype.render = function() {
    return createElement('input', {
      id: this.props.id,
      placeholder: this.props.placeholder ? this.props.placeholder : null,
      style: this.props.style ? this.props.style : null,
      className: this.setClassNames(),
      type: 'checkbox',
      name: this.props.name ? this.props.name : null,
      value: this.props.value,
      onChange: this.props.onChange,
      onBlur: this.props.onBlur,
      onFocus: this.props.onFocus,
    });
  };
  Checkbox.prototype.setClassNames = function() {
    var _a;
    return classNames$8(
      ((_a = {}),
      (_a['uk-checkbox'] = true),
      (_a['uk-form-' + this.props.color] = !!this.props.color),
      (_a['uk-form-' + this.props.width] = !!this.props.width),
      (_a['uk-form-' + this.props.layout] = !!this.props.layout),
      (_a['' + setClassNames(this.props)] = true),
      _a),
    );
  };
  return Checkbox;
})(Component);

var classNames$9 = _classNames;
var Fieldset = /** @class */ (function(_super) {
  __extends(Fieldset, _super);
  function Fieldset() {
    return (_super !== null && _super.apply(this, arguments)) || this;
  }
  Fieldset.prototype.render = function() {
    return createElement(
      'fieldset',
      {
        id: this.props.id ? this.props.id : null,
        style: this.props.style ? this.props.style : null,
        className: this.setClassNames(),
      },
      this.props.children,
    );
  };
  Fieldset.prototype.setClassNames = function() {
    var _a;
    return classNames$9(
      ((_a = {}), (_a['uk-fieldset'] = true), (_a['' + setClassNames(this.props)] = true), _a),
    );
  };
  return Fieldset;
})(Component);

var classNames$a = _classNames;
var Form = /** @class */ (function(_super) {
  __extends(Form, _super);
  function Form() {
    return (_super !== null && _super.apply(this, arguments)) || this;
  }
  Form.prototype.render = function() {
    return createElement(
      'div',
      {
        id: this.props.id ? this.props.id : null,
        style: this.props.style ? this.props.style : null,
        className: this.setClassNames(),
        'uk-form-custom': this.props.custom ? '' : null,
      },
      this.props.children,
    );
  };
  Form.prototype.setClassNames = function() {
    var _a;
    return classNames$a(
      ((_a = {}),
      (_a['uk-form-' + this.props.layout] = !!this.props.layout),
      (_a['' + setClassNames(this.props)] = true),
      _a),
    );
  };
  return Form;
})(Component);

var classNames$b = _classNames;
var Input = /** @class */ (function(_super) {
  __extends(Input, _super);
  function Input() {
    return (_super !== null && _super.apply(this, arguments)) || this;
  }
  Input.prototype.render = function() {
    return createElement('input', {
      id: this.props.id,
      placeholder: this.props.placeholder ? this.props.placeholder : null,
      style: this.props.style ? this.props.style : null,
      className: this.setClassNames(),
      type: 'text',
      name: this.props.name ? this.props.name : null,
      value: this.props.value,
      onChange: this.props.onChange,
      onBlur: this.props.onBlur,
      onFocus: this.props.onFocus,
    });
  };
  Input.prototype.setClassNames = function() {
    var _a;
    return classNames$b(
      ((_a = {}),
      (_a['uk-input'] = true),
      (_a['uk-form-' + this.props.color] = !!this.props.color),
      (_a['uk-form-' + this.props.width] = !!this.props.width),
      (_a['uk-form-' + this.props.layout] = !!this.props.layout),
      (_a['' + setClassNames(this.props)] = true),
      _a),
    );
  };
  return Input;
})(Component);

var InputContainer = /** @class */ (function(_super) {
  __extends(InputContainer, _super);
  function InputContainer() {
    return (_super !== null && _super.apply(this, arguments)) || this;
  }
  InputContainer.prototype.render = function() {
    return createElement(
      'div',
      {
        id: this.props.id ? this.props.id : null,
        style: this.props.style ? this.props.style : null,
        className: 'uk-form-controls ' + setClassNames(this.props),
      },
      this.props.children,
    );
  };
  return InputContainer;
})(Component);

var FormLabel = /** @class */ (function(_super) {
  __extends(FormLabel, _super);
  function FormLabel() {
    return (_super !== null && _super.apply(this, arguments)) || this;
  }
  FormLabel.prototype.render = function() {
    return createElement(
      'label',
      {
        id: this.props.id ? this.props.id : null,
        style: this.props.style ? this.props.style : null,
        className: '' + setClassNames(this.props),
        htmlFor: this.props.htmlFor,
      },
      this.props.children,
    );
  };
  return FormLabel;
})(Component);

var classNames$e = _classNames;
var Legend = /** @class */ (function(_super) {
  __extends(Legend, _super);
  function Legend() {
    return (_super !== null && _super.apply(this, arguments)) || this;
  }
  Legend.prototype.render = function() {
    return createElement(
      'legend',
      {
        id: this.props.id ? this.props.id : null,
        style: this.props.style ? this.props.style : null,
        className: this.setClassNames(),
      },
      this.props.children,
    );
  };
  Legend.prototype.setClassNames = function() {
    var _a;
    return classNames$e(
      ((_a = {}), (_a['uk-legend'] = true), (_a['' + setClassNames(this.props)] = true), _a),
    );
  };
  return Legend;
})(Component);

var classNames$f = _classNames;
var Radio = /** @class */ (function(_super) {
  __extends(Radio, _super);
  function Radio() {
    return (_super !== null && _super.apply(this, arguments)) || this;
  }
  Radio.prototype.render = function() {
    return createElement('input', {
      id: this.props.id,
      placeholder: this.props.placeholder ? this.props.placeholder : null,
      style: this.props.style ? this.props.style : null,
      className: this.setClassNames(),
      type: 'radio',
      name: this.props.name ? this.props.name : null,
      value: this.props.value,
      onChange: this.props.onChange,
      onBlur: this.props.onBlur,
      onFocus: this.props.onFocus,
    });
  };
  Radio.prototype.setClassNames = function() {
    var _a;
    return classNames$f(
      ((_a = {}),
      (_a['uk-radio'] = true),
      (_a['uk-form-' + this.props.color] = !!this.props.color),
      (_a['uk-form-' + this.props.width] = !!this.props.width),
      (_a['uk-form-' + this.props.layout] = !!this.props.layout),
      (_a['' + setClassNames(this.props)] = true),
      _a),
    );
  };
  return Radio;
})(Component);

var classNames$g = _classNames;
var Range = /** @class */ (function(_super) {
  __extends(Range, _super);
  function Range() {
    return (_super !== null && _super.apply(this, arguments)) || this;
  }
  Range.prototype.render = function() {
    return createElement('input', {
      id: this.props.id,
      placeholder: this.props.placeholder ? this.props.placeholder : null,
      style: this.props.style ? this.props.style : null,
      className: this.setClassNames(),
      type: 'range',
      name: this.props.name ? this.props.name : null,
      value: this.props.value,
      min: this.props.min,
      max: this.props.max,
      step: this.props.step,
      onChange: this.props.onChange,
      onBlur: this.props.onBlur,
      onFocus: this.props.onFocus,
    });
  };
  Range.prototype.setClassNames = function() {
    var _a;
    return classNames$g(
      ((_a = {}),
      (_a['uk-range'] = true),
      (_a['uk-form-' + this.props.color] = !!this.props.color),
      (_a['uk-form-' + this.props.width] = !!this.props.width),
      (_a['uk-form-' + this.props.layout] = !!this.props.layout),
      (_a['' + setClassNames(this.props)] = true),
      _a),
    );
  };
  return Range;
})(Component);

var classNames$h = _classNames;
var Select = /** @class */ (function(_super) {
  __extends(Select, _super);
  function Select() {
    return (_super !== null && _super.apply(this, arguments)) || this;
  }
  Select.prototype.render = function() {
    return createElement(
      'select',
      {
        id: this.props.id,
        placeholder: this.props.placeholder ? this.props.placeholder : null,
        style: this.props.style ? this.props.style : null,
        className: this.setClassNames(),
        value: this.props.value,
        onChange: this.props.onChange,
      },
      this.props.children,
    );
  };
  Select.prototype.setClassNames = function() {
    var _a;
    return classNames$h(
      ((_a = {}),
      (_a['uk-select'] = true),
      (_a['uk-form-' + this.props.color] = !!this.props.color),
      (_a['uk-form-' + this.props.width] = !!this.props.width),
      (_a['uk-form-' + this.props.layout] = !!this.props.layout),
      (_a['' + setClassNames(this.props)] = true),
      _a),
    );
  };
  return Select;
})(Component);

var SelectOption = /** @class */ (function(_super) {
  __extends(SelectOption, _super);
  function SelectOption() {
    return (_super !== null && _super.apply(this, arguments)) || this;
  }
  SelectOption.prototype.render = function() {
    return createElement(
      'option',
      {
        id: this.props.id ? this.props.id : null,
        style: this.props.style ? this.props.style : null,
        className: '' + setClassNames(this.props),
        value: this.props.value,
      },
      this.props.children,
    );
  };
  return SelectOption;
})(Component);

var classNames$j = _classNames;
var Textarea = /** @class */ (function(_super) {
  __extends(Textarea, _super);
  function Textarea() {
    return (_super !== null && _super.apply(this, arguments)) || this;
  }
  Textarea.prototype.render = function() {
    return createElement(
      'textarea',
      {
        id: this.props.id ? this.props.id : null,
        placeholder: this.props.placeholder ? this.props.placeholder : null,
        style: this.props.style ? this.props.style : null,
        className: this.setClassNames(),
        name: this.props.name ? this.props.name : null,
        onChange: this.props.onChange,
        onBlur: this.props.onBlur,
        onFocus: this.props.onFocus,
      },
      this.props.children,
    );
  };
  Textarea.prototype.setClassNames = function() {
    var _a;
    return classNames$j(
      ((_a = {}),
      (_a['uk-textarea'] = true),
      (_a['uk-form-' + this.props.color] = !!this.props.color),
      (_a['uk-form-' + this.props.width] = !!this.props.width),
      (_a['uk-form-' + this.props.layout] = !!this.props.layout),
      (_a['' + setClassNames(this.props)] = true),
      _a),
    );
  };
  return Textarea;
})(Component);

var classNames$k = _classNames;
var Grid = /** @class */ (function(_super) {
  __extends(Grid, _super);
  function Grid() {
    return (_super !== null && _super.apply(this, arguments)) || this;
  }
  Grid.prototype.render = function() {
    return createElement(
      'div',
      {
        id: this.props.id ? this.props.id : null,
        style: this.props.style ? this.props.style : null,
        className: '' + this.setClassNames(),
        'uk-grid': this.props.options ? this.props.options : '',
      },
      this.props.children,
    );
  };
  Grid.prototype.setClassNames = function() {
    var _a;
    return classNames$k(
      ((_a = {}),
      (_a['uk-grid-' + this.props.gutter] = !!this.props.gutter),
      (_a['uk-grid-divider'] = this.props.divider),
      (_a['uk-grid-match'] = this.props.match),
      (_a['' + setClassNames(this.props)] = true),
      _a),
    );
  };
  return Grid;
})(Component);

var Image = /** @class */ (function(_super) {
  __extends(Image, _super);
  function Image() {
    return (_super !== null && _super.apply(this, arguments)) || this;
  }
  Image.prototype.render = function() {
    return createElement('img', {
      id: this.props.id ? this.props.id : null,
      className: this.props.className,
      width: this.props.width,
      height: this.props.height,
      style: this.props.style ? this.props.style : null,
      'data-src': this.props.src,
      'uk-img': this.props.options ? this.props.options : '',
    });
  };
  return Image;
})(Component);

var classNames$m = _classNames;
var Label = /** @class */ (function(_super) {
  __extends(Label, _super);
  function Label() {
    return (_super !== null && _super.apply(this, arguments)) || this;
  }
  Label.prototype.render = function() {
    return createElement(
      'div',
      {
        id: this.props.id ? this.props.id : null,
        style: this.props.style ? this.props.style : null,
        className: '' + setClassNames(this.props),
      },
      this.props.content,
    );
  };
  Label.prototype.setClassNames = function() {
    var _a;
    return classNames$m(
      'uk-label',
      ((_a = {}), (_a['uk-label-' + this.props.color] = !!this.props.color), _a),
    );
  };
  return Label;
})(Component);

var Light = /** @class */ (function(_super) {
  __extends(Light, _super);
  function Light() {
    return (_super !== null && _super.apply(this, arguments)) || this;
  }
  Light.prototype.render = function() {
    return createElement(
      'div',
      {
        id: this.props.id ? this.props.id : null,
        style: this.props.style ? this.props.style : null,
        className: 'uk-light ' + setClassNames(this.props),
      },
      this.props.children,
    );
  };
  return Light;
})(Component);

var Lightbox = /** @class */ (function(_super) {
  __extends(Lightbox, _super);
  function Lightbox() {
    return (_super !== null && _super.apply(this, arguments)) || this;
  }
  Lightbox.prototype.render = function() {
    return createElement(
      'div',
      {
        id: this.props.id ? this.props.id : null,
        style: this.props.style ? this.props.style : null,
        className: setClassNames(this.props),
        'uk-lightbox': this.props.options ? this.props.options : '',
      },
      this.props.children,
    );
  };
  return Lightbox;
})(Component);

var LightboxItem = /** @class */ (function(_super) {
  __extends(LightboxItem, _super);
  function LightboxItem() {
    return (_super !== null && _super.apply(this, arguments)) || this;
  }
  LightboxItem.prototype.render = function() {
    return createElement(
      'a',
      {
        id: this.props.id ? this.props.id : null,
        style: this.props.style ? this.props.style : null,
        className: setClassNames(this.props),
        href: this.props.href,
        'data-caption': this.props.caption,
      },
      this.props.children,
    );
  };
  return LightboxItem;
})(Component);

var classNames$n = _classNames;
var Link = /** @class */ (function(_super) {
  __extends(Link, _super);
  function Link() {
    return (_super !== null && _super.apply(this, arguments)) || this;
  }
  Link.prototype.render = function() {
    return createElement(
      'a',
      {
        id: this.props.id ? this.props.id : null,
        style: this.props.style ? this.props.style : null,
        'uk-toggle': this.props.toggleOptions ? this.props.toggleOptions : null,
        href: this.props.href,
        className: '' + this.setClassNames(),
      },
      this.props.children,
    );
  };
  Link.prototype.setClassNames = function() {
    var _a;
    return classNames$n(
      ((_a = {}),
      (_a['uk-link-' + this.props.type] = !!this.props.type),
      (_a['' + setClassNames(this.props)] = true),
      _a),
    );
  };
  return Link;
})(Component);

var classNames$o = _classNames;
var List = /** @class */ (function(_super) {
  __extends(List, _super);
  function List() {
    return (_super !== null && _super.apply(this, arguments)) || this;
  }
  List.prototype.render = function() {
    return createElement(
      'ul',
      {
        id: this.props.id ? this.props.id : null,
        style: this.props.style ? this.props.style : null,
        className: '' + this.setClassNames(),
      },
      this.props.children,
    );
  };
  List.prototype.setClassNames = function() {
    var _a;
    return classNames$o(
      'uk-list',
      ((_a = {}),
      (_a['uk-link-' + this.props.type] = !!this.props.type),
      (_a['' + setClassNames(this.props)] = true),
      _a),
    );
  };
  return List;
})(Component);

var ListItem = /** @class */ (function(_super) {
  __extends(ListItem, _super);
  function ListItem() {
    return (_super !== null && _super.apply(this, arguments)) || this;
  }
  ListItem.prototype.render = function() {
    return createElement(
      'li',
      {
        id: this.props.id ? this.props.id : null,
        style: this.props.style ? this.props.style : null,
        className: setClassNames(this.props),
      },
      this.props.children,
    );
  };
  return ListItem;
})(Component);

var classNames$p = _classNames;
var Margin = /** @class */ (function(_super) {
  __extends(Margin, _super);
  function Margin() {
    return (_super !== null && _super.apply(this, arguments)) || this;
  }
  Margin.prototype.render = function() {
    return createElement(
      'div',
      {
        id: this.props.id ? this.props.id : null,
        style: this.props.style ? this.props.style : null,
        'uk-margin': this.props.dynamicWrapping,
        className: this.setClassNames(),
      },
      this.props.children,
    );
  };
  Margin.prototype.setClassNames = function() {
    var _a;
    var stringArray = this.props.type.split('; ');
    var classString;
    stringArray.map(function(string, idx) {
      classString = classString + ' uk-margin-' + string;
    });
    return classNames$p(classString, ((_a = {}), (_a['' + setClassNames(this.props)] = true), _a));
  };
  return Margin;
})(Component);

var classNames$q = _classNames;
var Nav = /** @class */ (function(_super) {
  __extends(Nav, _super);
  function Nav() {
    return (_super !== null && _super.apply(this, arguments)) || this;
  }
  Nav.prototype.render = function() {
    return createElement(
      'ul',
      {
        id: this.props.id ? this.props.id : null,
        style: this.props.style ? this.props.style : null,
        className: '' + this.setClassNames(),
        'uk-nav': this.props.options ? this.props.options : '',
      },
      this.props.children,
    );
  };
  Nav.prototype.setClassNames = function() {
    var _a;
    return classNames$q(
      ((_a = {}),
      (_a['uk-nav'] = true),
      (_a['uk-nav-' + this.props.preset] = !!this.props.preset),
      (_a['uk-nav-sub'] = this.props.child),
      (_a['uk-nav-parent-icon'] = this.props.accordion),
      (_a['' + setClassNames(this.props)] = true),
      _a),
    );
  };
  return Nav;
})(Component);

var classNames$r = _classNames;
var NavItem = /** @class */ (function(_super) {
  __extends(NavItem, _super);
  function NavItem() {
    return (_super !== null && _super.apply(this, arguments)) || this;
  }
  NavItem.prototype.render = function() {
    return createElement(
      'li',
      {
        id: this.props.id ? this.props.id : null,
        style: this.props.style ? this.props.style : null,
        className: '' + this.setClassNames(),
      },
      this.props.children,
    );
  };
  NavItem.prototype.setClassNames = function() {
    var _a;
    return classNames$r(
      ((_a = {}),
      (_a['uk-nav-' + this.props.type] = !!this.props.type),
      (_a['uk-parent'] = this.props.parent),
      (_a['' + setClassNames(this.props)] = true),
      _a),
    );
  };
  return NavItem;
})(Component);

var classNames$s = _classNames;
var Navbar = /** @class */ (function(_super) {
  __extends(Navbar, _super);
  function Navbar() {
    return (_super !== null && _super.apply(this, arguments)) || this;
  }
  Navbar.prototype.render = function() {
    return createElement(
      'div',
      {
        id: this.props.id ? this.props.id : null,
        style: this.props.style ? this.props.style : null,
        className: '' + this.setClassNames(),
      },
      createElement('ul', { className: 'uk-navbar-nav' }, this.props.children),
    );
  };
  Navbar.prototype.setClassNames = function() {
    var _a;
    return classNames$s(
      ((_a = {}),
      (_a['uk-navbar-left'] = this.props.left),
      (_a['uk-navbar-right'] = this.props.right),
      (_a[setClassNames(this.props)] = true),
      _a),
    );
  };
  return Navbar;
})(Component);

var classNames$t = _classNames;
var NavbarContainer = /** @class */ (function(_super) {
  __extends(NavbarContainer, _super);
  function NavbarContainer() {
    return (_super !== null && _super.apply(this, arguments)) || this;
  }
  NavbarContainer.prototype.render = function() {
    return createElement(
      'div',
      null,
      createElement(
        'nav',
        {
          id: this.props.id ? this.props.id : null,
          className: '' + this.setClassNames(),
          style: this.props.style ? this.props.style : null,
          'uk-navbar': this.props.options ? this.props.options : '',
        },
        this.props.children,
      ),
      this.props.dropbar ? createElement('div', { className: 'uk-navbar-dropbar' }) : null,
    );
  };
  NavbarContainer.prototype.setClassNames = function() {
    var _a;
    return classNames$t(
      'uk-navbar-container',
      ((_a = {}),
      (_a['uk-navbar-transparent'] = this.props.transparent),
      (_a[setClassNames(this.props)] = true),
      _a),
    );
  };
  return NavbarContainer;
})(Component);

var NavbarDropdown = /** @class */ (function(_super) {
  __extends(NavbarDropdown, _super);
  function NavbarDropdown() {
    return (_super !== null && _super.apply(this, arguments)) || this;
  }
  NavbarDropdown.prototype.render = function() {
    return createElement(
      'div',
      {
        id: this.props.id ? this.props.id : null,
        style: this.props.style ? this.props.style : null,
        className: 'uk-navbar-dropdown ' + setClassNames(this.props),
      },
      createElement('ul', { className: 'uk-nav uk-navbar-dropdown-nav' }, this.props.children),
    );
  };
  return NavbarDropdown;
})(Component);

var NavbarSticky = /** @class */ (function(_super) {
  __extends(NavbarSticky, _super);
  function NavbarSticky() {
    return (_super !== null && _super.apply(this, arguments)) || this;
  }
  NavbarSticky.prototype.componentDidMount = function() {
    if (this.props.onActive) {
      this.validateIdProp();
      UIkit.util.on(this.props.id, 'active', this.props.onActive);
    }
    if (this.props.onInactive) {
      this.validateIdProp();
      UIkit.util.on(this.props.id, 'active', this.props.onInactive);
    }
  };
  NavbarSticky.prototype.render = function() {
    return createElement(
      'div',
      {
        id: this.props.id ? this.props.id : null,
        style: this.props.style ? this.props.style : null,
        className: '' + setClassNames(this.props),
        'uk-sticky':
          '\n                    sel-target: .uk-navbar-container;\n                    cls-active: uk-navbar-sticky;\n                    ' +
          (this.props.options ? this.props.options : '') +
          '\n            ',
      },
      this.props.children,
    );
  };
  NavbarSticky.prototype.validateIdProp = function() {
    if (!this.props.id) {
      console.error('ID property is required to register to Navbar Sticky events');
    }
  };
  return NavbarSticky;
})(Component);

var Offcanvas = /** @class */ (function(_super) {
  __extends(Offcanvas, _super);
  function Offcanvas() {
    return (_super !== null && _super.apply(this, arguments)) || this;
  }
  Offcanvas.prototype.componentDidMount = function() {
    if (this.props.onBeforeShow) {
      UIkit.util.on(this.props.id, 'beforeshow', this.props.onBeforeShow);
    }
    if (this.props.onShow) {
      UIkit.util.on(this.props.id, 'show', this.props.onShow);
    }
    if (this.props.onShown) {
      UIkit.util.on(this.props.id, 'shown', this.props.onShown);
    }
    if (this.props.onBeforeHide) {
      UIkit.util.on(this.props.id, 'beforehide', this.props.onBeforeHide);
    }
    if (this.props.onHide) {
      UIkit.util.on(this.props.id, 'hide', this.props.onHide);
    }
    if (this.props.onHidden) {
      UIkit.util.on(this.props.id, 'hidden', this.props.onHidden);
    }
  };
  Offcanvas.prototype.render = function() {
    return createElement(
      'div',
      {
        id: this.props.id,
        style: this.props.style ? this.props.style : null,
        className: '' + setClassNames(this.props),
        'uk-offcanvas': this.props.options ? this.props.options : '',
      },
      createElement('div', { className: 'uk-offcanvas-bar' }, this.props.children),
    );
  };
  return Offcanvas;
})(Component);

var OffcanvasContainer = /** @class */ (function(_super) {
  __extends(OffcanvasContainer, _super);
  function OffcanvasContainer() {
    return (_super !== null && _super.apply(this, arguments)) || this;
  }
  OffcanvasContainer.prototype.render = function() {
    return createElement(
      'div',
      {
        id: this.props.id ? this.props.id : null,
        style: this.props.style ? this.props.style : null,
        className: 'uk-offcanvas-content ' + setClassNames(this.props),
      },
      this.props.children,
    );
  };
  return OffcanvasContainer;
})(Component);

var classNames$u = _classNames;
var Overlay = /** @class */ (function(_super) {
  __extends(Overlay, _super);
  function Overlay() {
    return (_super !== null && _super.apply(this, arguments)) || this;
  }
  Overlay.prototype.render = function() {
    return createElement(
      'div',
      {
        id: this.props.id ? this.props.id : null,
        style: this.props.style ? this.props.style : null,
        className: '' + this.setClassNames(),
      },
      this.props.showIcon ? createElement('span', { 'uk-overlay-icon': true }) : null,
    );
  };
  Overlay.prototype.setClassNames = function() {
    var _a;
    return classNames$u(
      'uk-overlay',
      ((_a = {}),
      (_a['uk-position-' + this.props.position] = !!this.props.position),
      (_a['uk-position-' + this.props.type] = !!this.props.type),
      (_a['' + setClassNames(this.props)] = true),
      _a),
    );
  };
  return Overlay;
})(Component);

var classNames$v = _classNames;
var Panel = /** @class */ (function(_super) {
  __extends(Panel, _super);
  function Panel() {
    return (_super !== null && _super.apply(this, arguments)) || this;
  }
  Panel.prototype.render = function() {
    return createElement(
      'div',
      {
        id: this.props.id ? this.props.id : null,
        style: this.props.style ? this.props.style : null,
        className: this.setClassNames(),
      },
      this.props.children,
    );
  };
  Panel.prototype.setClassNames = function() {
    var _a;
    return classNames$v(
      'uk-panel',
      ((_a = {}),
      (_a['uk-panel-scrollable'] = this.props.isScrollable),
      (_a[setClassNames(this.props)] = true),
      _a),
    );
  };
  return Panel;
})(Component);

var Parallax = /** @class */ (function(_super) {
  __extends(Parallax, _super);
  function Parallax() {
    return (_super !== null && _super.apply(this, arguments)) || this;
  }
  Parallax.prototype.render = function() {
    return createElement(
      'div',
      {
        id: this.props.id ? this.props.id : null,
        style: this.props.style ? this.props.style : null,
        className: '' + setClassNames(this.props),
      },
      this.applyParallaxFiltersToChild(),
    );
  };
  Parallax.prototype.applyParallaxFiltersToChild = function() {
    var _this = this;
    return Children.map(this.props.children, function(child, idx) {
      if (idx > 0) return child;
      return cloneElement(child, { 'uk-parallax': _this.props.options });
    });
  };
  return Parallax;
})(Component);

var classNames$w = _classNames;
var Progress = /** @class */ (function(_super) {
  __extends(Progress, _super);
  function Progress(props) {
    var _this = _super.call(this, props) || this;
    _this.state = { value: props.value };
    return _this;
  }
  Progress.getDerivedStateFromProps = function(props, currentState) {
    if (currentState !== props.value) {
      return {
        value: props.value,
      };
    }
  };
  Progress.prototype.render = function() {
    return createElement('progress', {
      id: this.props.id ? this.props.id : null,
      style: this.props.style ? this.props.style : null,
      className: '' + this.setClassNames(),
      value: this.state.value,
      max: this.props.max,
    });
  };
  Progress.prototype.setClassNames = function() {
    var _a;
    return classNames$w(
      'uk-progress',
      ((_a = {}), (_a['' + setClassNames(this.props)] = true), _a),
    );
  };
  return Progress;
})(Component);

var Scrollspy = /** @class */ (function(_super) {
  __extends(Scrollspy, _super);
  function Scrollspy() {
    return (_super !== null && _super.apply(this, arguments)) || this;
  }
  Scrollspy.prototype.render = function() {
    return createElement(
      'div',
      {
        id: this.props.id ? this.props.id : null,
        style: this.props.style ? this.props.style : null,
        className: '' + setClassNames(this.props),
        'uk-scrollspy': this.props.options ? this.props.options : '',
      },
      this.props.children,
    );
  };
  return Scrollspy;
})(Component);

var classNames$x = _classNames;
var Section = /** @class */ (function(_super) {
  __extends(Section, _super);
  function Section() {
    return (_super !== null && _super.apply(this, arguments)) || this;
  }
  Section.prototype.render = function() {
    return createElement(
      'div',
      {
        id: this.props.id ? this.props.id : null,
        style: this.props.style ? this.props.style : null,
        className: '' + this.setClassNames(),
      },
      this.props.children,
    );
  };
  Section.prototype.setClassNames = function() {
    var _a;
    return classNames$x(
      ((_a = {}),
      (_a['uk-section'] = this.props.padding),
      (_a['uk-section-' + this.props.color] = !!this.props.color),
      (_a['uk-section-' + this.props.size] = !!this.props.size),
      (_a['uk-preserve-color'] = this.props.preserveColor),
      (_a[setClassNames(this.props)] = true),
      (_a['uk-position-' + this.props.position] = !!this.props.position),
      _a),
    );
  };
  return Section;
})(Component);

var classNames$y = _classNames;
var Sidebar = /** @class */ (function(_super) {
  __extends(Sidebar, _super);
  function Sidebar() {
    return (_super !== null && _super.apply(this, arguments)) || this;
  }
  Sidebar.prototype.render = function() {
    return createElement(
      'div',
      {
        id: this.props.id ? this.props.id : null,
        style: this.props.style ? this.props.style : null,
        className: this.setClassNames(),
      },
      this.props.children,
    );
  };
  Sidebar.prototype.setClassNames = function() {
    var _a;
    return classNames$y(
      ((_a = {}),
      (_a['uk-overflow-auto'] = true),
      (_a['uk-' + this.props.visibility] = !!this.props.visibility),
      (_a[setClassNames(this.props)] = true),
      _a),
    );
  };
  return Sidebar;
})(Component);

var Slideshow = /** @class */ (function(_super) {
  __extends(Slideshow, _super);
  function Slideshow() {
    return (_super !== null && _super.apply(this, arguments)) || this;
  }
  Slideshow.prototype.render = function() {
    return createElement(
      'div',
      {
        id: this.props.id ? this.props.id : null,
        style: this.props.style ? this.props.style : null,
        className: '' + setClassNames(this.props),
        'uk-slideshow': this.props.options ? this.props.options : '',
      },
      this.setNavigation(),
    );
  };
  Slideshow.prototype.setNavigation = function() {
    if (this.props.navigation) {
      return createElement(
        'div',
        {
          className: 'uk-position-relative uk-visible-toggle ' + this.setNavigationStyle(),
        },
        createElement('ul', { className: 'uk-slideshow-items' }, this.props.children),
        createElement('a', {
          className: 'uk-position-center-left uk-position-small uk-hidden-hover',
          href: '#',
          'uk-slidenav-previous': '',
          'uk-slideshow-item': 'previous',
        }),
        createElement('a', {
          className: 'uk-position-center-right uk-position-small uk-hidden-hover',
          href: '#',
          'uk-slidenav-next': '',
          'uk-slideshow-item': 'next',
        }),
      );
    } else {
      return createElement('ul', { className: 'uk-slideshow-items' }, this.props.children);
    }
  };
  Slideshow.prototype.setNavigationStyle = function() {
    if (this.props.navigation && this.props.navigationStyle) {
      return 'uk-' + this.props.navigationStyle;
    } else {
      return 'uk-dark';
    }
  };
  return Slideshow;
})(Component);

var SlideshowItem = /** @class */ (function(_super) {
  __extends(SlideshowItem, _super);
  function SlideshowItem() {
    return (_super !== null && _super.apply(this, arguments)) || this;
  }
  SlideshowItem.prototype.render = function() {
    return createElement(
      'li',
      {
        id: this.props.id ? this.props.id : null,
        style: this.props.style ? this.props.style : null,
        className: '' + setClassNames(this.props),
      },
      this.renderBasedOnType(),
    );
  };
  SlideshowItem.prototype.renderBasedOnType = function() {
    if (this.props.type === 'image') {
      return createElement('img', {
        src: this.props.src,
        alt: this.props.alt,
        'uk-cover': '',
      });
    } else if (this.props.type === 'video') {
      return createElement(
        'video',
        {
          autoPlay: this.props.autoPlay,
          loop: this.props.loop,
          muted: this.props.muted,
          playsinline: this.props.playsinline,
          'uk-cover': '',
        },
        createElement('source', {
          src: this.props.src,
          type: this.props.type + '/' + this.props.videoFormat,
        }),
      );
    } else {
      console.error('Type property on cover component must be either video or image');
    }
  };
  return SlideshowItem;
})(Component);

var Tab = /** @class */ (function(_super) {
  __extends(Tab, _super);
  function Tab() {
    return (_super !== null && _super.apply(this, arguments)) || this;
  }
  Tab.prototype.render = function() {
    return createElement(
      'li',
      {
        id: this.props.id ? this.props.id : null,
        style: this.props.style ? this.props.style : null,
        className: setClassNames(this.props),
      },
      createElement('a', { href: '#' }, this.props.children),
    );
  };
  return Tab;
})(Component);

var TabContainer = /** @class */ (function(_super) {
  __extends(TabContainer, _super);
  function TabContainer() {
    return (_super !== null && _super.apply(this, arguments)) || this;
  }
  TabContainer.prototype.componentDidMount = function() {
    var _this = this;
    console.log(this.props.children);
    if (this.props.onBeforeShow) {
      this.validateIdProp();
      UIkit.util.on(this.props.id, 'beforeshow', function() {
        console.log('eventFired');
        _this.props.onBeforeShow();
      });
    }
    if (this.props.onShow) {
      this.validateIdProp();
      UIkit.util.on(this.props.id, 'show', this.props.onShow);
    }
    if (this.props.onShown) {
      this.validateIdProp();
      UIkit.util.on(this.props.id, 'shown', this.props.onShown);
    }
    if (this.props.onBeforeHide) {
      this.validateIdProp();
      UIkit.util.on(this.props.id, 'beforehide', this.props.onBeforeHide);
    }
    if (this.props.onHide) {
      this.validateIdProp();
      UIkit.util.on(this.props.id, 'hide', this.props.onHide);
    }
    if (this.props.onHidden) {
      this.validateIdProp();
      UIkit.util.on(this.props.id, 'hidden', this.props.onHidden);
    }
  };
  TabContainer.prototype.render = function() {
    return createElement(
      'div',
      {
        id: this.props.id ? this.props.id : null,
        style: this.props.style ? this.props.style : null,
        className: setClassNames(this.props),
      },
      createElement(
        'ul',
        { 'uk-tab': this.props.options ? this.props.options : '' },
        this.renderChildren('tab'),
      ),
      createElement(
        'ul',
        { id: this.props.id ? this.props.id : '', className: 'uk-switcher' },
        this.renderChildren('tab-content'),
      ),
    );
  };
  TabContainer.prototype.renderChildren = function(key) {
    return Children.map(this.props.children, function(child, idx) {
      var comp = child;
      if (comp.key === key) {
        return comp;
      }
    });
  };
  TabContainer.prototype.validateIdProp = function() {
    if (!this.props.id) {
      console.error('ID property is required to register to tab events');
    }
  };
  return TabContainer;
})(Component);

var TabContent = /** @class */ (function(_super) {
  __extends(TabContent, _super);
  function TabContent() {
    return (_super !== null && _super.apply(this, arguments)) || this;
  }
  TabContent.prototype.render = function() {
    return createElement(
      'li',
      {
        id: this.props.id ? this.props.id : null,
        style: this.props.style ? this.props.style : null,
        className: '' + setClassNames(this.props),
      },
      this.props.children,
    );
  };
  return TabContent;
})(Component);

var classNames$A = _classNames;
var Table = /** @class */ (function(_super) {
  __extends(Table, _super);
  function Table() {
    return (_super !== null && _super.apply(this, arguments)) || this;
  }
  Table.prototype.render = function() {
    return createElement(
      'table',
      {
        id: this.props.id ? this.props.id : null,
        style: this.props.style ? this.props.style : null,
        className: '' + this.setClassNames(),
      },
      this.props.children,
    );
  };
  Table.prototype.setClassNames = function() {
    var _a;
    return classNames$A(
      'uk-table',
      ((_a = {}),
      (_a['uk-table-divider'] = this.props.divider),
      (_a['uk-table-striped'] = this.props.striped),
      (_a['uk-table-hover'] = this.props.hover),
      (_a['uk-table-justify'] = this.props.justify),
      (_a['uk-table-middle'] = this.props.center),
      (_a['uk-overflow-auto'] = this.props.responsive),
      (_a['uk-table-' + this.props.size] = !!this.props.size),
      (_a['' + setClassNames(this.props)] = true),
      _a),
    );
  };
  return Table;
})(Component);

export {
  Accordion,
  AccordionItem,
  Alert,
  Article,
  Badge,
  Breadcrumb,
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  CardTitle,
  Container,
  Cover,
  Dark,
  Dropdown,
  Flex,
  Checkbox,
  Fieldset,
  Form,
  Input,
  InputContainer,
  FormLabel,
  Legend,
  Radio,
  Range,
  Select,
  SelectOption,
  Textarea,
  Grid,
  Icon,
  Image,
  Label,
  Light,
  Lightbox,
  LightboxItem,
  Link,
  List,
  ListItem,
  Margin,
  Nav,
  NavItem,
  Navbar,
  NavbarContainer,
  NavbarDropdown,
  NavbarSticky,
  Offcanvas,
  OffcanvasContainer,
  Overlay,
  Panel,
  Parallax,
  Progress,
  Scrollspy,
  Section,
  Sidebar,
  Slideshow,
  SlideshowItem,
  Tab,
  TabContainer,
  TabContent,
  Table,
};

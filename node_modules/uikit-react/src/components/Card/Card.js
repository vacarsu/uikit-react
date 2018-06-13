var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
import * as React from 'react';
import * as _classNames from 'classnames'; let classNames = _classNames;
import { setClassNames } from '../../utils/set-class-names';
var Card = /** @class */ (function (_super) {
    __extends(Card, _super);
    function Card() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Card.prototype.render = function () {
        return (React.createElement("div", { className: this.setClassNames() }, this.props.children));
    };
    Card.prototype.setClassNames = function () {
        return classNames('uk-card', (_a = {},
            _a["uk-card-default"] = !this.props.color,
            _a["uk-card-" + this.props.color] = !!this.props.color,
            _a["uk-card-hover"] = this.props.hover,
            _a["uk-card-" + this.props.size] = !!this.props.size,
            _a[setClassNames(this.props)] = true,
            _a));
        var _a;
    };
    return Card;
}(React.Component));
export { Card };

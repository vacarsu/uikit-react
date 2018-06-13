'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.marksy = marksy;

exports.default = function (options) {
  return marksy(options);
};

var _marked = require('marked');

var _marked2 = _interopRequireDefault(_marked);

var _createRenderer = require('./createRenderer');

var _createRenderer2 = _interopRequireDefault(_createRenderer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function marksy() {
  var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  var tracker = {
    tree: null,
    elements: null,
    nextElementId: null,
    toc: null,
    currentIdLevel: 0,
    currentId: []
  };
  var renderer = (0, _createRenderer2.default)(tracker, options);

  return function compile(content) {
    var markedOptions = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var context = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

    tracker.tree = [];
    tracker.elements = {};
    tracker.toc = [];
    tracker.nextElementId = 0;
    tracker.context = context;
    tracker.currentId = [];
    (0, _marked2.default)(content, Object.assign({ renderer: renderer, smartypants: true }, markedOptions));

    return { tree: tracker.tree, toc: tracker.toc };
  };
}
//# sourceMappingURL=index.js.map
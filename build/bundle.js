/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"bundle": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push(["./src/app.tsx","vendor"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/app.tsx":
/*!*********************!*\
  !*** ./src/app.tsx ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/es/index.js");
/* harmony import */ var prismjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prismjs */ "./node_modules/prismjs/prism.js");
/* harmony import */ var prismjs__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prismjs__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var prismjs_components_prism_javascript_min__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! prismjs/components/prism-javascript.min */ "./node_modules/prismjs/components/prism-javascript.min.js");
/* harmony import */ var prismjs_components_prism_javascript_min__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(prismjs_components_prism_javascript_min__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var prismjs_components_prism_jsx_min__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! prismjs/components/prism-jsx.min */ "./node_modules/prismjs/components/prism-jsx.min.js");
/* harmony import */ var prismjs_components_prism_jsx_min__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(prismjs_components_prism_jsx_min__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var prismjs_components_prism_tsx_min__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! prismjs/components/prism-tsx.min */ "./node_modules/prismjs/components/prism-tsx.min.js");
/* harmony import */ var prismjs_components_prism_tsx_min__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(prismjs_components_prism_tsx_min__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var prismjs_plugins_toolbar_prism_toolbar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! prismjs/plugins/toolbar/prism-toolbar */ "./node_modules/prismjs/plugins/toolbar/prism-toolbar.js");
/* harmony import */ var prismjs_plugins_toolbar_prism_toolbar__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(prismjs_plugins_toolbar_prism_toolbar__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var prismjs_plugins_copy_to_clipboard_prism_copy_to_clipboard__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! prismjs/plugins/copy-to-clipboard/prism-copy-to-clipboard */ "./node_modules/prismjs/plugins/copy-to-clipboard/prism-copy-to-clipboard.js");
/* harmony import */ var prismjs_plugins_copy_to_clipboard_prism_copy_to_clipboard__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(prismjs_plugins_copy_to_clipboard_prism_copy_to_clipboard__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var prismjs_components_prism_css_min__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! prismjs/components/prism-css.min */ "./node_modules/prismjs/components/prism-css.min.js");
/* harmony import */ var prismjs_components_prism_css_min__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(prismjs_components_prism_css_min__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var uikit_react__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! uikit-react */ "./node_modules/uikit-react/lib/uikit-react.js");
/* harmony import */ var _pages_Docs_DocsPage__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./pages/Docs/DocsPage */ "./src/pages/Docs/DocsPage.tsx");
/* harmony import */ var _pages_Index_IndexPage__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./pages/Index/IndexPage */ "./src/pages/Index/IndexPage.tsx");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();













document.addEventListener('DOMContentLoaded', function () {
    console.log(uikit_react__WEBPACK_IMPORTED_MODULE_10__["Section"]);
    Object(react_dom__WEBPACK_IMPORTED_MODULE_1__["render"])(react__WEBPACK_IMPORTED_MODULE_0__["createElement"](ExamplePage, null), document.getElementById('root'));
}, false);
var ExamplePage = /** @class */ (function (_super) {
    __extends(ExamplePage, _super);
    function ExamplePage() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ExamplePage.prototype.render = function () {
        return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_router_dom__WEBPACK_IMPORTED_MODULE_2__["BrowserRouter"], { basename: "/uikit-react" },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](uikit_react__WEBPACK_IMPORTED_MODULE_10__["Section"], { position: "relative" },
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"](uikit_react__WEBPACK_IMPORTED_MODULE_10__["Section"], { color: "secondary", preserveColor: true },
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"](uikit_react__WEBPACK_IMPORTED_MODULE_10__["NavbarSticky"], { options: "animation: uk-animation-slide-top; cls-inactive: uk-navbar-transparent uk-light; top: 556;" },
                        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](uikit_react__WEBPACK_IMPORTED_MODULE_10__["NavbarContainer"], null,
                            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](uikit_react__WEBPACK_IMPORTED_MODULE_10__["Navbar"], { align: "left" },
                                react__WEBPACK_IMPORTED_MODULE_0__["createElement"](uikit_react__WEBPACK_IMPORTED_MODULE_10__["ListItem"], { padding: "small" },
                                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("a", { href: "/" },
                                        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("img", { width: "200", height: "200", src: "src/images/uikit-react-simple-text.svg" })))),
                            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](uikit_react__WEBPACK_IMPORTED_MODULE_10__["Navbar"], { align: "right" },
                                react__WEBPACK_IMPORTED_MODULE_0__["createElement"](uikit_react__WEBPACK_IMPORTED_MODULE_10__["ListItem"], null,
                                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_router_dom__WEBPACK_IMPORTED_MODULE_2__["NavLink"], { to: "/docs/0.0.1/Introduction" },
                                        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](uikit_react__WEBPACK_IMPORTED_MODULE_10__["Button"], { size: "small" }, "Documentation"))),
                                react__WEBPACK_IMPORTED_MODULE_0__["createElement"](uikit_react__WEBPACK_IMPORTED_MODULE_10__["ListItem"], null,
                                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"](uikit_react__WEBPACK_IMPORTED_MODULE_10__["Link"], null, "Changelog")),
                                react__WEBPACK_IMPORTED_MODULE_0__["createElement"](uikit_react__WEBPACK_IMPORTED_MODULE_10__["ListItem"], null,
                                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"](uikit_react__WEBPACK_IMPORTED_MODULE_10__["Link"], { href: "https://github.com/vacarsu/dimension-cms" },
                                        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](uikit_react__WEBPACK_IMPORTED_MODULE_10__["Icon"], { options: "github", button: true }))))))),
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Route"], { exact: true, path: "/", component: _pages_Index_IndexPage__WEBPACK_IMPORTED_MODULE_12__["IndexPage"] }),
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Route"], { path: "/docs", component: _pages_Docs_DocsPage__WEBPACK_IMPORTED_MODULE_11__["DocsPage"] }))));
    };
    return ExamplePage;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]));


/***/ }),

/***/ "./src/pages/Docs/DocsPage.tsx":
/*!*************************************!*\
  !*** ./src/pages/Docs/DocsPage.tsx ***!
  \*************************************/
/*! exports provided: DocsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DocsPage", function() { return DocsPage; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/es/index.js");
/* harmony import */ var uikit_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! uikit-react */ "./node_modules/uikit-react/lib/uikit-react.js");
/* harmony import */ var _Documentation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Documentation */ "./src/pages/Docs/Documentation.tsx");
/* harmony import */ var _docs_nav__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./docs-nav */ "./src/pages/Docs/docs-nav.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();





var DocsPage = /** @class */ (function (_super) {
    __extends(DocsPage, _super);
    function DocsPage(props) {
        var _this = _super.call(this, props) || this;
        _this.state = { version: '0.0.1' };
        return _this;
    }
    DocsPage.prototype.onVersionChange = function (event) {
        this.setState({
            version: event.target.value
        });
    };
    DocsPage.prototype.render = function () {
        return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](uikit_react__WEBPACK_IMPORTED_MODULE_2__["Section"], null,
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](uikit_react__WEBPACK_IMPORTED_MODULE_2__["Container"], null,
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"](uikit_react__WEBPACK_IMPORTED_MODULE_2__["Container"], null,
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"](uikit_react__WEBPACK_IMPORTED_MODULE_2__["Sidebar"], { style: {
                            top: '80px',
                            bottom: '0',
                            boxSizing: 'border-box',
                            padding: '40px 40px 60px 40px',
                            borderRight: '1px #e5e5e5 solid',
                            height: 'auto',
                            overflow: 'auto'
                        }, position: "fixed" },
                        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](uikit_react__WEBPACK_IMPORTED_MODULE_2__["Nav"], { preset: "default" }, this.renderMenu()))),
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"](uikit_react__WEBPACK_IMPORTED_MODULE_2__["Container"], { size: "1-1", style: { paddingLeft: '220' } },
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], { path: this.props.match.url + "/:version/:name", component: _Documentation__WEBPACK_IMPORTED_MODULE_3__["Documentation"] })))));
    };
    DocsPage.prototype.renderMenu = function () {
        var _this = this;
        var count = 0;
        return Object.keys(_docs_nav__WEBPACK_IMPORTED_MODULE_4__["docsNav"]).map(function (k) {
            count++;
            return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](uikit_react__WEBPACK_IMPORTED_MODULE_2__["NavItem"], { key: k, type: count === 1 ? "divider" : null },
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_router_dom__WEBPACK_IMPORTED_MODULE_1__["NavLink"], { to: "/docs/" + _this.state.version + "/" + _docs_nav__WEBPACK_IMPORTED_MODULE_4__["docsNav"][k].toLowerCase() }, _docs_nav__WEBPACK_IMPORTED_MODULE_4__["docsNav"][k])));
        });
    };
    return DocsPage;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]));



/***/ }),

/***/ "./src/pages/Docs/Documentation.tsx":
/*!******************************************!*\
  !*** ./src/pages/Docs/Documentation.tsx ***!
  \******************************************/
/*! exports provided: Documentation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Documentation", function() { return Documentation; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _marksy_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./marksy-components */ "./src/pages/Docs/marksy-components.tsx");
/* harmony import */ var uikit_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! uikit-react */ "./node_modules/uikit-react/lib/uikit-react.js");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();



var Documentation = /** @class */ (function (_super) {
    __extends(Documentation, _super);
    function Documentation(props) {
        var _this = _super.call(this, props) || this;
        var _a = _this.props.match.params, name = _a.name, version = _a.version;
        _this.state = {
            name: name,
            version: version,
            parsedMarkdown: null,
            isLoading: true
        };
        return _this;
    }
    Documentation.prototype.componentWillReceiveProps = function (nextProps) {
        var _this = this;
        var _a = nextProps.match.params, name = _a.name, version = _a.version;
        if (this.state.name !== name) {
            this.setState({
                name: name
            }, function () { return _this.fetchDocs(); });
        }
        if (this.state.version !== version) {
            this.setState({
                version: version
            }, function () { return _this.fetchDocs(); });
        }
    };
    Documentation.prototype.shouldComponentUpdate = function (nextProps, nextState) {
        var _a = nextProps.match.params, name = _a.name, version = _a.version;
        if (this.state.name !== name) {
            return true;
        }
        if (this.state.version !== version) {
            return true;
        }
        if (this.state.isLoading !== nextState.isLoading) {
            return true;
        }
        return false;
    };
    Documentation.prototype.componentDidMount = function () {
        this.fetchDocs();
    };
    Documentation.prototype.render = function () {
        return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](uikit_react__WEBPACK_IMPORTED_MODULE_2__["Section"], { padding: true },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](uikit_react__WEBPACK_IMPORTED_MODULE_2__["Article"], { title: this.state.name.charAt(0).toUpperCase() + this.state.name.substr(1) }, this.state.parsedMarkdown ? this.state.parsedMarkdown.tree : null)));
    };
    Documentation.prototype.fetchDocs = function () {
        var _this = this;
        this.setState({ isLoading: true });
        console.log(this.state.name);
        fetch("src/docs/" + this.state.version + "/" + (this.state.name.charAt(0).toUpperCase() + this.state.name.substr(1)) + ".md")
            .then(function (res) { return res.text(); })
            .then(function (text) {
            _this.setState({
                parsedMarkdown: Object(_marksy_components__WEBPACK_IMPORTED_MODULE_1__["compile"])(text),
                isLoading: false
            });
        })
            .catch(function (err) {
            console.error(err);
        });
    };
    return Documentation;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]));



/***/ }),

/***/ "./src/pages/Docs/code.tsx":
/*!*********************************!*\
  !*** ./src/pages/Docs/code.tsx ***!
  \*********************************/
/*! exports provided: Code */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Code", function() { return Code; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prismjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prismjs */ "./node_modules/prismjs/prism.js");
/* harmony import */ var prismjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prismjs__WEBPACK_IMPORTED_MODULE_1__);
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();


var Code = /** @class */ (function (_super) {
    __extends(Code, _super);
    function Code() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Code.prototype.render = function () {
        return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("code", { dangerouslySetInnerHTML: { __html: prismjs__WEBPACK_IMPORTED_MODULE_1__["highlight"](this.props.code, prismjs__WEBPACK_IMPORTED_MODULE_1__["languages"].tsx) }, className: "language-tsx" }));
    };
    return Code;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]));



/***/ }),

/***/ "./src/pages/Docs/docs-nav.ts":
/*!************************************!*\
  !*** ./src/pages/Docs/docs-nav.ts ***!
  \************************************/
/*! exports provided: docsNav */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "docsNav", function() { return docsNav; });
var docsNav = {
    introduction: 'Introduction',
    accordion: 'Accordion',
    alert: 'Alert',
    article: 'Article',
    badge: 'Badge',
    breadcrumb: 'Breadcrumb',
    button: 'Button',
    card: 'Card',
    container: 'Container',
    cover: 'Cover',
    dark: 'Dark',
    dropdown: 'Dropdown',
    flex: 'Flex',
    grid: 'Grid',
    icon: 'Icon',
    image: 'Image',
    labels: 'Labels',
    light: 'Light',
    Lightbox: 'Lightbox',
    link: 'Link',
    list: 'List',
    margin: 'Margin',
    nav: 'Nav',
    navbar: 'Navbar',
    offcanvas: 'Offcanvas',
    overlay: 'Overlay',
    panel: 'Panel',
    parallax: 'Parallax',
    progress: 'Progress',
    scrollspy: 'Scrollspy',
    section: 'Section',
    sidebar: 'Sidebar',
    slideshow: 'Slideshow',
    tab: 'Tab',
    table: 'Table'
};


/***/ }),

/***/ "./src/pages/Docs/marksy-components.tsx":
/*!**********************************************!*\
  !*** ./src/pages/Docs/marksy-components.tsx ***!
  \**********************************************/
/*! exports provided: compile */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "compile", function() { return compile; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prismjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prismjs */ "./node_modules/prismjs/prism.js");
/* harmony import */ var prismjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prismjs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var marksy_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! marksy/components */ "./node_modules/marksy/components.js");
/* harmony import */ var marksy_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(marksy_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var uikit_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! uikit-react */ "./node_modules/uikit-react/lib/uikit-react.js");
/* harmony import */ var _code__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./code */ "./src/pages/Docs/code.tsx");





var compile = marksy_components__WEBPACK_IMPORTED_MODULE_2___default()({
    createElement: react__WEBPACK_IMPORTED_MODULE_0__["createElement"],
    highlight: function (language, code) {
        return prismjs__WEBPACK_IMPORTED_MODULE_1__["highlight"](code, prismjs__WEBPACK_IMPORTED_MODULE_1__["languages"].tsx);
    },
    elements: {
        table: function (_a) {
            var children = _a.children;
            return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](uikit_react__WEBPACK_IMPORTED_MODULE_3__["Table"], { divider: true }, children);
        }
    },
    components: {
        Accordion: uikit_react__WEBPACK_IMPORTED_MODULE_3__["Accordion"],
        AccordionItem: uikit_react__WEBPACK_IMPORTED_MODULE_3__["AccordionItem"],
        Alert: uikit_react__WEBPACK_IMPORTED_MODULE_3__["Alert"],
        Article: uikit_react__WEBPACK_IMPORTED_MODULE_3__["Article"],
        Badge: uikit_react__WEBPACK_IMPORTED_MODULE_3__["Badge"],
        Breadcrumb: uikit_react__WEBPACK_IMPORTED_MODULE_3__["Breadcrumb"],
        Button: uikit_react__WEBPACK_IMPORTED_MODULE_3__["Button"],
        Card: uikit_react__WEBPACK_IMPORTED_MODULE_3__["Card"],
        CardBody: uikit_react__WEBPACK_IMPORTED_MODULE_3__["CardBody"],
        CardFooter: uikit_react__WEBPACK_IMPORTED_MODULE_3__["CardFooter"],
        CardHeader: uikit_react__WEBPACK_IMPORTED_MODULE_3__["CardHeader"],
        CardTitle: uikit_react__WEBPACK_IMPORTED_MODULE_3__["CardTitle"],
        Code: _code__WEBPACK_IMPORTED_MODULE_4__["Code"],
        Link: uikit_react__WEBPACK_IMPORTED_MODULE_3__["Link"],
        Tab: uikit_react__WEBPACK_IMPORTED_MODULE_3__["Tab"],
        TabContainer: uikit_react__WEBPACK_IMPORTED_MODULE_3__["TabContainer"],
        TabContent: uikit_react__WEBPACK_IMPORTED_MODULE_3__["TabContent"],
        Cover: uikit_react__WEBPACK_IMPORTED_MODULE_3__["Cover"],
    }
});


/***/ }),

/***/ "./src/pages/Index/IndexPage.tsx":
/*!***************************************!*\
  !*** ./src/pages/Index/IndexPage.tsx ***!
  \***************************************/
/*! exports provided: IndexPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IndexPage", function() { return IndexPage; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var uikit_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! uikit-react */ "./node_modules/uikit-react/lib/uikit-react.js");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();





var IndexPage = /** @class */ (function (_super) {
    __extends(IndexPage, _super);
    function IndexPage() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    IndexPage.prototype.render = function () {
        return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](uikit_react__WEBPACK_IMPORTED_MODULE_1__["Flex"], { direction: "column" },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](uikit_react__WEBPACK_IMPORTED_MODULE_1__["Light"], null,
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"](uikit_react__WEBPACK_IMPORTED_MODULE_1__["Section"], { color: "secondary", padding: "large" },
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"](uikit_react__WEBPACK_IMPORTED_MODULE_1__["Flex"], { alignment: "center" },
                        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("object", { width: "300", height: "300", data: "src/images/uikit-react.svg" })),
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"](uikit_react__WEBPACK_IMPORTED_MODULE_1__["Flex"], { alignment: "center" },
                        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("h1", null, "UIkit React")),
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"](uikit_react__WEBPACK_IMPORTED_MODULE_1__["Flex"], { alignment: "center" },
                        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](uikit_react__WEBPACK_IMPORTED_MODULE_1__["Button"], { size: "large", color: "" }, "Get Started")),
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"](uikit_react__WEBPACK_IMPORTED_MODULE_1__["Section"], { padding: "small" },
                        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](uikit_react__WEBPACK_IMPORTED_MODULE_1__["Flex"], { alignment: "center" },
                            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("h4", null, " Use Uikit with React, a powerfully simple framwork ")))))));
    };
    return IndexPage;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]));



/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL3BhZ2VzL0RvY3MvRG9jc1BhZ2UudHN4Iiwid2VicGFjazovLy8uL3NyYy9wYWdlcy9Eb2NzL0RvY3VtZW50YXRpb24udHN4Iiwid2VicGFjazovLy8uL3NyYy9wYWdlcy9Eb2NzL2NvZGUudHN4Iiwid2VicGFjazovLy8uL3NyYy9wYWdlcy9Eb2NzL2RvY3MtbmF2LnRzIiwid2VicGFjazovLy8uL3NyYy9wYWdlcy9Eb2NzL21hcmtzeS1jb21wb25lbnRzLnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXMvSW5kZXgvSW5kZXhQYWdlLnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxnQkFBUSxvQkFBb0I7QUFDNUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBaUIsNEJBQTRCO0FBQzdDO0FBQ0E7QUFDQSwwQkFBa0IsMkJBQTJCO0FBQzdDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGtEQUEwQyxnQ0FBZ0M7QUFDMUU7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxnRUFBd0Qsa0JBQWtC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LEtBQUssRUFBQyxFQUFFLGtCQUFxQixDQUMvQztvQkFDWCxvREFBQyxtREFBTyxJQUFDLE9BQU8sRUFBQyxPQUFPO3dCQUNwQixvREFBQyxnREFBSSxJQUFDLFNBQVMsRUFBQyxRQUFROzRCQUNwQix1SEFBNkQsQ0FDMUQsQ0FDRCxDQUNBLENBQ04sQ0FFTCxDQUNWLENBQUM7SUFDTixDQUFDO0lBQ0wsZ0JBQUM7QUFBRCxDQUFDLENBMUI4QiwrQ0FBZSxHQTBCN0MiLCJmaWxlIjoiYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gaW5zdGFsbCBhIEpTT05QIGNhbGxiYWNrIGZvciBjaHVuayBsb2FkaW5nXG4gXHRmdW5jdGlvbiB3ZWJwYWNrSnNvbnBDYWxsYmFjayhkYXRhKSB7XG4gXHRcdHZhciBjaHVua0lkcyA9IGRhdGFbMF07XG4gXHRcdHZhciBtb3JlTW9kdWxlcyA9IGRhdGFbMV07XG4gXHRcdHZhciBleGVjdXRlTW9kdWxlcyA9IGRhdGFbMl07XG5cbiBcdFx0Ly8gYWRkIFwibW9yZU1vZHVsZXNcIiB0byB0aGUgbW9kdWxlcyBvYmplY3QsXG4gXHRcdC8vIHRoZW4gZmxhZyBhbGwgXCJjaHVua0lkc1wiIGFzIGxvYWRlZCBhbmQgZmlyZSBjYWxsYmFja1xuIFx0XHR2YXIgbW9kdWxlSWQsIGNodW5rSWQsIGkgPSAwLCByZXNvbHZlcyA9IFtdO1xuIFx0XHRmb3IoO2kgPCBjaHVua0lkcy5sZW5ndGg7IGkrKykge1xuIFx0XHRcdGNodW5rSWQgPSBjaHVua0lkc1tpXTtcbiBcdFx0XHRpZihpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0pIHtcbiBcdFx0XHRcdHJlc29sdmVzLnB1c2goaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdWzBdKTtcbiBcdFx0XHR9XG4gXHRcdFx0aW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdID0gMDtcbiBcdFx0fVxuIFx0XHRmb3IobW9kdWxlSWQgaW4gbW9yZU1vZHVsZXMpIHtcbiBcdFx0XHRpZihPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwobW9yZU1vZHVsZXMsIG1vZHVsZUlkKSkge1xuIFx0XHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0gPSBtb3JlTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdFx0fVxuIFx0XHR9XG4gXHRcdGlmKHBhcmVudEpzb25wRnVuY3Rpb24pIHBhcmVudEpzb25wRnVuY3Rpb24oZGF0YSk7XG5cbiBcdFx0d2hpbGUocmVzb2x2ZXMubGVuZ3RoKSB7XG4gXHRcdFx0cmVzb2x2ZXMuc2hpZnQoKSgpO1xuIFx0XHR9XG5cbiBcdFx0Ly8gYWRkIGVudHJ5IG1vZHVsZXMgZnJvbSBsb2FkZWQgY2h1bmsgdG8gZGVmZXJyZWQgbGlzdFxuIFx0XHRkZWZlcnJlZE1vZHVsZXMucHVzaC5hcHBseShkZWZlcnJlZE1vZHVsZXMsIGV4ZWN1dGVNb2R1bGVzIHx8IFtdKTtcblxuIFx0XHQvLyBydW4gZGVmZXJyZWQgbW9kdWxlcyB3aGVuIGFsbCBjaHVua3MgcmVhZHlcbiBcdFx0cmV0dXJuIGNoZWNrRGVmZXJyZWRNb2R1bGVzKCk7XG4gXHR9O1xuIFx0ZnVuY3Rpb24gY2hlY2tEZWZlcnJlZE1vZHVsZXMoKSB7XG4gXHRcdHZhciByZXN1bHQ7XG4gXHRcdGZvcih2YXIgaSA9IDA7IGkgPCBkZWZlcnJlZE1vZHVsZXMubGVuZ3RoOyBpKyspIHtcbiBcdFx0XHR2YXIgZGVmZXJyZWRNb2R1bGUgPSBkZWZlcnJlZE1vZHVsZXNbaV07XG4gXHRcdFx0dmFyIGZ1bGZpbGxlZCA9IHRydWU7XG4gXHRcdFx0Zm9yKHZhciBqID0gMTsgaiA8IGRlZmVycmVkTW9kdWxlLmxlbmd0aDsgaisrKSB7XG4gXHRcdFx0XHR2YXIgZGVwSWQgPSBkZWZlcnJlZE1vZHVsZVtqXTtcbiBcdFx0XHRcdGlmKGluc3RhbGxlZENodW5rc1tkZXBJZF0gIT09IDApIGZ1bGZpbGxlZCA9IGZhbHNlO1xuIFx0XHRcdH1cbiBcdFx0XHRpZihmdWxmaWxsZWQpIHtcbiBcdFx0XHRcdGRlZmVycmVkTW9kdWxlcy5zcGxpY2UoaS0tLCAxKTtcbiBcdFx0XHRcdHJlc3VsdCA9IF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gZGVmZXJyZWRNb2R1bGVbMF0pO1xuIFx0XHRcdH1cbiBcdFx0fVxuIFx0XHRyZXR1cm4gcmVzdWx0O1xuIFx0fVxuXG4gXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuIFx0Ly8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4gXHQvLyBQcm9taXNlID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxuIFx0dmFyIGluc3RhbGxlZENodW5rcyA9IHtcbiBcdFx0XCJidW5kbGVcIjogMFxuIFx0fTtcblxuIFx0dmFyIGRlZmVycmVkTW9kdWxlcyA9IFtdO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHR2YXIganNvbnBBcnJheSA9IHdpbmRvd1tcIndlYnBhY2tKc29ucFwiXSA9IHdpbmRvd1tcIndlYnBhY2tKc29ucFwiXSB8fCBbXTtcbiBcdHZhciBvbGRKc29ucEZ1bmN0aW9uID0ganNvbnBBcnJheS5wdXNoLmJpbmQoanNvbnBBcnJheSk7XG4gXHRqc29ucEFycmF5LnB1c2ggPSB3ZWJwYWNrSnNvbnBDYWxsYmFjaztcbiBcdGpzb25wQXJyYXkgPSBqc29ucEFycmF5LnNsaWNlKCk7XG4gXHRmb3IodmFyIGkgPSAwOyBpIDwganNvbnBBcnJheS5sZW5ndGg7IGkrKykgd2VicGFja0pzb25wQ2FsbGJhY2soanNvbnBBcnJheVtpXSk7XG4gXHR2YXIgcGFyZW50SnNvbnBGdW5jdGlvbiA9IG9sZEpzb25wRnVuY3Rpb247XG5cblxuIFx0Ly8gYWRkIGVudHJ5IG1vZHVsZSB0byBkZWZlcnJlZCBsaXN0XG4gXHRkZWZlcnJlZE1vZHVsZXMucHVzaChbXCIuL3NyYy9hcHAudHN4XCIsXCJ2ZW5kb3JcIl0pO1xuIFx0Ly8gcnVuIGRlZmVycmVkIG1vZHVsZXMgd2hlbiByZWFkeVxuIFx0cmV0dXJuIGNoZWNrRGVmZXJyZWRNb2R1bGVzKCk7XG4iLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyByZW5kZXIgfSBmcm9tICdyZWFjdC1kb20nO1xuaW1wb3J0IHsgQnJvd3NlclJvdXRlciBhcyBSb3V0ZXIsIFJvdXRlLCBOYXZMaW5rIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XG5pbXBvcnQgJ3ByaXNtanMnO1xuaW1wb3J0ICdwcmlzbWpzL2NvbXBvbmVudHMvcHJpc20tamF2YXNjcmlwdC5taW4nO1xuaW1wb3J0ICdwcmlzbWpzL2NvbXBvbmVudHMvcHJpc20tanN4Lm1pbic7XG5pbXBvcnQgJ3ByaXNtanMvY29tcG9uZW50cy9wcmlzbS10c3gubWluJztcbmltcG9ydCAncHJpc21qcy9wbHVnaW5zL3Rvb2xiYXIvcHJpc20tdG9vbGJhcic7XG5pbXBvcnQgJ3ByaXNtanMvcGx1Z2lucy9jb3B5LXRvLWNsaXBib2FyZC9wcmlzbS1jb3B5LXRvLWNsaXBib2FyZCc7XG5pbXBvcnQgJ3ByaXNtanMvY29tcG9uZW50cy9wcmlzbS1jc3MubWluJztcblxuaW1wb3J0IHtcbiAgICBDb250YWluZXIsXG4gICAgTGlnaHQsXG4gICAgSWNvbixcbiAgICBMaW5rLFxuICAgIExpc3QsXG4gICAgTGlzdEl0ZW0sXG4gICAgT2ZmY2FudmFzLFxuICAgIE9mZmNhbnZhc0NvbnRhaW5lcixcbiAgICBOYXZiYXIsXG4gICAgTmF2YmFyQ29udGFpbmVyLFxuICAgIE5hdmJhclN0aWNreSxcbiAgICBTZWN0aW9uLFxuICAgIEZsZXgsXG4gICAgQnV0dG9uLFxuXG4gICAgXG59IGZyb20gJ3Vpa2l0LXJlYWN0JztcblxuXG5pbXBvcnQgeyBEb2NzUGFnZSB9IGZyb20gJy4vcGFnZXMvRG9jcy9Eb2NzUGFnZSc7XG5pbXBvcnQgeyBJbmRleFBhZ2UgfSBmcm9tICcuL3BhZ2VzL0luZGV4L0luZGV4UGFnZSc7XG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCAoKSA9PiB7XG4gICAgY29uc29sZS5sb2coU2VjdGlvbik7XG4gICAgcmVuZGVyKFxuICAgICAgICA8RXhhbXBsZVBhZ2UgLz4sXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyb290JylcbiAgICApO1xufSwgZmFsc2UpO1xuXG5jbGFzcyBFeGFtcGxlUGFnZSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudDxhbnksIGFueT4ge1xuICAgIHJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuIChcblxuICAgICAgICAgICAgICAgIDxSb3V0ZXIgYmFzZW5hbWU9XCIvdWlraXQtcmVhY3RcIj5cbiAgICAgICAgICAgICAgICAgICAgPFNlY3Rpb24gcG9zaXRpb249XCJyZWxhdGl2ZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPFNlY3Rpb24gY29sb3I9XCJzZWNvbmRhcnlcIiBwcmVzZXJ2ZUNvbG9yPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxOYXZiYXJTdGlja3kgb3B0aW9ucz1cImFuaW1hdGlvbjogdWstYW5pbWF0aW9uLXNsaWRlLXRvcDsgY2xzLWluYWN0aXZlOiB1ay1uYXZiYXItdHJhbnNwYXJlbnQgdWstbGlnaHQ7IHRvcDogNTU2O1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TmF2YmFyQ29udGFpbmVyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE5hdmJhciBhbGlnbj1cImxlZnRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGlzdEl0ZW0gcGFkZGluZz1cInNtYWxsXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiL1wiPjxpbWcgd2lkdGg9XCIyMDBcIiBoZWlnaHQ9XCIyMDBcIiBzcmM9XCJzcmMvaW1hZ2VzL3Vpa2l0LXJlYWN0LXNpbXBsZS10ZXh0LnN2Z1wiLz48L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaXN0SXRlbT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTmF2YmFyPlxuICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TmF2YmFyIGFsaWduPVwicmlnaHRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGlzdEl0ZW0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TmF2TGluayB0bz1cIi9kb2NzLzAuMC4xL0ludHJvZHVjdGlvblwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b24gc2l6ZT1cInNtYWxsXCI+RG9jdW1lbnRhdGlvbjwvQnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9OYXZMaW5rPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpc3RJdGVtPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGlzdEl0ZW0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluaz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBDaGFuZ2Vsb2dcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaXN0SXRlbT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpc3RJdGVtPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiaHR0cHM6Ly9naXRodWIuY29tL3ZhY2Fyc3UvZGltZW5zaW9uLWNtc1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEljb24gb3B0aW9ucz1cImdpdGh1YlwiIGJ1dHRvbiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaXN0SXRlbT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTmF2YmFyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L05hdmJhckNvbnRhaW5lcj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L05hdmJhclN0aWNreT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvU2VjdGlvbj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgPFJvdXRlIGV4YWN0IHBhdGg9XCIvXCIgY29tcG9uZW50PXtJbmRleFBhZ2V9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8Um91dGUgcGF0aD1cIi9kb2NzXCIgY29tcG9uZW50PXtEb2NzUGFnZX0gLz5cbiAgICAgICAgICAgICAgICAgICAgPC9TZWN0aW9uPlxuICAgICAgICAgICAgICAgIDwvUm91dGVyPlxuXG4gICAgICAgIClcbiAgICB9XG59IiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgUm91dGUsIE5hdkxpbmsgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcblxuaW1wb3J0IHtcbiAgICBDb250YWluZXIsXG4gICAgRmxleCxcbiAgICBGb3JtLFxuICAgIElucHV0Q29udGFpbmVyLFxuICAgIExhYmVsLFxuICAgIFNlbGVjdCxcbiAgICBTZWxlY3RPcHRpb24sXG4gICAgTGlzdCxcbiAgICBMaXN0SXRlbSxcbiAgICBOYXYsXG4gICAgTmF2SXRlbSxcbiAgICBTZWN0aW9uLFxuICAgIFNpZGViYXJcbn0gZnJvbSAndWlraXQtcmVhY3QnO1xuXG5pbXBvcnQgeyBEb2N1bWVudGF0aW9uIH0gZnJvbSAnLi9Eb2N1bWVudGF0aW9uJztcbmltcG9ydCB7IGRvY3NOYXYgfSBmcm9tICcuL2RvY3MtbmF2JztcblxuZXhwb3J0IGNsYXNzIERvY3NQYWdlIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50PGFueSwgYW55PiB7XG4gICAgY29uc3RydWN0b3IgKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKTtcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHsgdmVyc2lvbjogJzAuMC4xJyB9O1xuICAgIH1cblxuICAgIHByaXZhdGUgb25WZXJzaW9uQ2hhbmdlKGV2ZW50KSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgdmVyc2lvbjogZXZlbnQudGFyZ2V0LnZhbHVlXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxTZWN0aW9uPlxuICAgICAgICAgICAgICAgIDxDb250YWluZXI+XG4gICAgICAgICAgICAgICAgICAgIDxDb250YWluZXI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8U2lkZWJhciBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b3A6ICc4MHB4JyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm90dG9tOiAnMCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJveFNpemluZzogJ2JvcmRlci1ib3gnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAnNDBweCA0MHB4IDYwcHggNDBweCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlclJpZ2h0OiAnMXB4ICNlNWU1ZTUgc29saWQnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6ICdhdXRvJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3ZlcmZsb3c6ICdhdXRvJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb249XCJmaXhlZFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxOYXYgcHJlc2V0PVwiZGVmYXVsdFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7LyogPE5hdkl0ZW0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SW5wdXRDb250YWluZXI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMYWJlbCBodG1sRm9yPVwidmVyc2lvblwiPlZlcnNpb248L0xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8U2VsZWN0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD1cInZlcnNpb25cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUudmVyc2lvbn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLm9uVmVyc2lvbkNoYW5nZS5iaW5kKHRoaXMpfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxTZWxlY3RPcHRpb24gdmFsdWU9XCIwLjAuMVwiPjAuMC4xPC9TZWxlY3RPcHRpb24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8U2VsZWN0T3B0aW9uIHZhbHVlPVwiMC4wLjJcIj4wLjAuMjwvU2VsZWN0T3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1NlbGVjdD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0lucHV0Q29udGFpbmVyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Gb3JtPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L05hdkl0ZW0+ICovfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dGhpcy5yZW5kZXJNZW51KCl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9OYXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L1NpZGViYXI+XG4gICAgICAgICAgICAgICAgICAgIDwvQ29udGFpbmVyPlxuICAgICAgICAgICAgICAgICAgICA8Q29udGFpbmVyIHNpemU9XCIxLTFcIiBzdHlsZT17eyBwYWRkaW5nTGVmdDogJzIyMCcgfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8Um91dGUgcGF0aD17YCR7dGhpcy5wcm9wcy5tYXRjaC51cmx9Lzp2ZXJzaW9uLzpuYW1lYH0gY29tcG9uZW50PXtEb2N1bWVudGF0aW9ufSAvPlxuICAgICAgICAgICAgICAgICAgICA8L0NvbnRhaW5lcj5cbiAgICAgICAgICAgICAgICA8L0NvbnRhaW5lcj5cbiAgICAgICAgICAgIDwvU2VjdGlvbj5cbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIHJlbmRlck1lbnUoKSB7XG4gICAgICAgIGxldCBjb3VudCA9IDA7XG4gICAgICAgIHJldHVybiBPYmplY3Qua2V5cyhkb2NzTmF2KS5tYXAoKGspID0+IHtcbiAgICAgICAgICAgIGNvdW50Kys7XG4gICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgIDxOYXZJdGVtIGtleT17a30gdHlwZT17Y291bnQgPT09IDEgPyBcImRpdmlkZXJcIiA6IG51bGx9PlxuICAgICAgICAgICAgICAgICAgICA8TmF2TGluayB0bz17YC9kb2NzLyR7dGhpcy5zdGF0ZS52ZXJzaW9ufS8ke2RvY3NOYXZba10udG9Mb3dlckNhc2UoKX1gfT57ZG9jc05hdltrXX08L05hdkxpbms+XG4gICAgICAgICAgICAgICAgPC9OYXZJdGVtPlxuICAgICAgICAgICAgKTtcbiAgICAgICAgfSk7XG4gICAgfVxufSIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCAqIGFzIFByaXNtIGZyb20gJ3ByaXNtanMnO1xuaW1wb3J0ICogYXMgbWFya2VkIGZyb20gJ21hcmtlZCc7XG5pbXBvcnQgeyBSb3V0ZSwgTmF2TGluayB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xuaW1wb3J0IHsgTWFya2Rvd24gfSBmcm9tICcuL3BhcnNlLW1hcmtkb3duJztcbmltcG9ydCB7IGNvbXBpbGUgfSBmcm9tICcuL21hcmtzeS1jb21wb25lbnRzJztcbmltcG9ydCB7XG4gICAgQXJ0aWNsZSxcbiAgICBDb250YWluZXIsXG4gICAgRmxleCxcbiAgICBMaXN0LFxuICAgIExpc3RJdGVtLFxuICAgIE5hdixcbiAgICBOYXZJdGVtLFxuICAgIFNlY3Rpb24sXG4gICAgU2lkZWJhclxufSBmcm9tICd1aWtpdC1yZWFjdCc7XG5cbmV4cG9ydCBjbGFzcyBEb2N1bWVudGF0aW9uIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50PGFueSwgYW55PiB7XG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpO1xuICAgICAgICBjb25zdCB7IG5hbWUsIHZlcnNpb24gfSA9IHRoaXMucHJvcHMubWF0Y2gucGFyYW1zO1xuICAgICAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgICAgICAgbmFtZTogbmFtZSxcbiAgICAgICAgICAgIHZlcnNpb246IHZlcnNpb24sXG4gICAgICAgICAgICBwYXJzZWRNYXJrZG93bjogbnVsbCxcbiAgICAgICAgICAgIGlzTG9hZGluZzogdHJ1ZVxuICAgICAgICB9O1xuICAgIH1cblxuICAgIGNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMobmV4dFByb3BzKSB7XG4gICAgICAgIGNvbnN0IHsgbmFtZSwgdmVyc2lvbiB9ID0gbmV4dFByb3BzLm1hdGNoLnBhcmFtcztcbiAgICAgICAgaWYgKHRoaXMuc3RhdGUubmFtZSAhPT0gbmFtZSkge1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgICAgbmFtZTogbmFtZVxuICAgICAgICAgICAgfSwgKCkgPT4gdGhpcy5mZXRjaERvY3MoKSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5zdGF0ZS52ZXJzaW9uICE9PSB2ZXJzaW9uKSB7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgICB2ZXJzaW9uOiB2ZXJzaW9uXG4gICAgICAgICAgICB9LCAoKSA9PiB0aGlzLmZldGNoRG9jcygpKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHNob3VsZENvbXBvbmVudFVwZGF0ZShuZXh0UHJvcHMsIG5leHRTdGF0ZSk6IGJvb2xlYW4ge1xuICAgICAgICBjb25zdCB7IG5hbWUsIHZlcnNpb24gfSA9IG5leHRQcm9wcy5tYXRjaC5wYXJhbXM7XG4gICAgICAgIGlmICh0aGlzLnN0YXRlLm5hbWUgIT09IG5hbWUpIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMuc3RhdGUudmVyc2lvbiAhPT0gdmVyc2lvbikge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5zdGF0ZS5pc0xvYWRpbmcgIT09IG5leHRTdGF0ZS5pc0xvYWRpbmcpIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgICAgICB0aGlzLmZldGNoRG9jcygpO1xuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxTZWN0aW9uIHBhZGRpbmc+XG4gICAgICAgICAgICAgICAgPEFydGljbGUgdGl0bGU9e3RoaXMuc3RhdGUubmFtZS5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIHRoaXMuc3RhdGUubmFtZS5zdWJzdHIoMSl9PlxuICAgICAgICAgICAgICAgICAgICB7dGhpcy5zdGF0ZS5wYXJzZWRNYXJrZG93biA/IHRoaXMuc3RhdGUucGFyc2VkTWFya2Rvd24udHJlZSA6IG51bGx9XG4gICAgICAgICAgICAgICAgPC9BcnRpY2xlPlxuICAgICAgICAgICAgPC9TZWN0aW9uPlxuICAgICAgICApO1xuICAgIH1cblxuICAgIHByaXZhdGUgZmV0Y2hEb2NzKCkge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHsgaXNMb2FkaW5nOiB0cnVlIH0pO1xuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLnN0YXRlLm5hbWUpO1xuICAgICAgICBmZXRjaChgc3JjL2RvY3MvJHt0aGlzLnN0YXRlLnZlcnNpb259LyR7dGhpcy5zdGF0ZS5uYW1lLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsgdGhpcy5zdGF0ZS5uYW1lLnN1YnN0cigxKX0ubWRgKVxuICAgICAgICAgICAgLnRoZW4oKHJlcykgPT4gcmVzLnRleHQoKSlcbiAgICAgICAgICAgIC50aGVuKHRleHQgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICAgICAgICBwYXJzZWRNYXJrZG93bjogY29tcGlsZSh0ZXh0KSxcbiAgICAgICAgICAgICAgICAgICAgaXNMb2FkaW5nOiBmYWxzZVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihlcnIpO1xuICAgICAgICAgICAgfSk7XG4gICAgfVxufSIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCAqIGFzIFJlYWN0RE9NIGZyb20gJ3JlYWN0LWRvbS9zZXJ2ZXInO1xuaW1wb3J0ICogYXMgUHJpc20gZnJvbSAncHJpc21qcyc7XG5cbmV4cG9ydCBjbGFzcyBDb2RlIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50PGFueSwgYW55PiB7XG4gICAgcmVuZGVyKCkge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGNvZGVcbiAgICAgICAgICAgICAgICBkYW5nZXJvdXNseVNldElubmVySFRNTD17eyBfX2h0bWw6IFByaXNtLmhpZ2hsaWdodCh0aGlzLnByb3BzLmNvZGUsIFByaXNtLmxhbmd1YWdlcy50c3gpIH19XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibGFuZ3VhZ2UtdHN4XCI+XG4gICAgICAgICAgICA8L2NvZGU+XG4gICAgICAgICk7XG4gICAgfVxufSIsImV4cG9ydCBjb25zdCBkb2NzTmF2ID0ge1xuICAgIGludHJvZHVjdGlvbjogJ0ludHJvZHVjdGlvbicsXG4gICAgYWNjb3JkaW9uOiAnQWNjb3JkaW9uJyxcbiAgICBhbGVydDogJ0FsZXJ0JyxcbiAgICBhcnRpY2xlOiAnQXJ0aWNsZScsXG4gICAgYmFkZ2U6ICdCYWRnZScsXG4gICAgYnJlYWRjcnVtYjogJ0JyZWFkY3J1bWInLFxuICAgIGJ1dHRvbjogJ0J1dHRvbicsXG4gICAgY2FyZDogJ0NhcmQnLFxuICAgIGNvbnRhaW5lcjogJ0NvbnRhaW5lcicsXG4gICAgY292ZXI6ICdDb3ZlcicsXG4gICAgZGFyazogJ0RhcmsnLFxuICAgIGRyb3Bkb3duOiAnRHJvcGRvd24nLFxuICAgIGZsZXg6ICdGbGV4JyxcbiAgICBncmlkOiAnR3JpZCcsXG4gICAgaWNvbjogJ0ljb24nLFxuICAgIGltYWdlOiAnSW1hZ2UnLFxuICAgIGxhYmVsczogJ0xhYmVscycsXG4gICAgbGlnaHQ6ICdMaWdodCcsXG4gICAgTGlnaHRib3g6ICdMaWdodGJveCcsXG4gICAgbGluazogJ0xpbmsnLFxuICAgIGxpc3Q6ICdMaXN0JyxcbiAgICBtYXJnaW46ICdNYXJnaW4nLFxuICAgIG5hdjogJ05hdicsXG4gICAgbmF2YmFyOiAnTmF2YmFyJyxcbiAgICBvZmZjYW52YXM6ICdPZmZjYW52YXMnLFxuICAgIG92ZXJsYXk6ICdPdmVybGF5JyxcbiAgICBwYW5lbDogJ1BhbmVsJyxcbiAgICBwYXJhbGxheDogJ1BhcmFsbGF4JyxcbiAgICBwcm9ncmVzczogJ1Byb2dyZXNzJyxcbiAgICBzY3JvbGxzcHk6ICdTY3JvbGxzcHknLFxuICAgIHNlY3Rpb246ICdTZWN0aW9uJyxcbiAgICBzaWRlYmFyOiAnU2lkZWJhcicsXG4gICAgc2xpZGVzaG93OiAnU2xpZGVzaG93JyxcbiAgICB0YWI6ICdUYWInLFxuICAgIHRhYmxlOiAnVGFibGUnXG59IiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0ICogYXMgUHJpc20gZnJvbSAncHJpc21qcyc7XG5pbXBvcnQgeyBlc2NhcGUgfSBmcm9tICdoZSc7XG5pbXBvcnQgbWFya3N5IGZyb20gJ21hcmtzeS9jb21wb25lbnRzJztcbmltcG9ydCB7XG4gICAgQWNjb3JkaW9uLFxuICAgIEFjY29yZGlvbkl0ZW0sXG4gICAgQWxlcnQsXG4gICAgQXJ0aWNsZSxcbiAgICBCYWRnZSxcbiAgICBCcmVhZGNydW1iLFxuICAgIEJ1dHRvbixcbiAgICBDYXJkLFxuICAgIENhcmRCb2R5LFxuICAgIENhcmRGb290ZXIsXG4gICAgQ2FyZEhlYWRlcixcbiAgICBDYXJkVGl0bGUsXG4gICAgTGluayxcbiAgICBUYWIsXG4gICAgVGFiQ29udGFpbmVyLFxuICAgIFRhYkNvbnRlbnQsXG4gICAgVGFibGUsXG4gICAgQ292ZXIsXG59IGZyb20gJ3Vpa2l0LXJlYWN0JztcbmltcG9ydCB7IENvZGUgfSBmcm9tICcuL2NvZGUnO1xuXG5leHBvcnQgY29uc3QgY29tcGlsZSA9IG1hcmtzeSh7XG4gICAgY3JlYXRlRWxlbWVudDogUmVhY3QuY3JlYXRlRWxlbWVudCxcbiAgICBoaWdobGlnaHQobGFuZ3VhZ2UsIGNvZGUpIHtcbiAgICAgICAgcmV0dXJuIFByaXNtLmhpZ2hsaWdodChjb2RlLCBQcmlzbS5sYW5ndWFnZXMudHN4KTtcbiAgICB9LFxuICAgIGVsZW1lbnRzOiB7XG4gICAgICAgIHRhYmxlKHtjaGlsZHJlbn0pIHtcbiAgICAgICAgICAgIHJldHVybiA8VGFibGUgZGl2aWRlcj57Y2hpbGRyZW59PC9UYWJsZT5cbiAgICAgICAgfVxuICAgIH0sXG4gICAgY29tcG9uZW50czoge1xuICAgICAgICBBY2NvcmRpb24sXG4gICAgICAgIEFjY29yZGlvbkl0ZW0sXG4gICAgICAgIEFsZXJ0LFxuICAgICAgICBBcnRpY2xlLFxuICAgICAgICBCYWRnZSxcbiAgICAgICAgQnJlYWRjcnVtYixcbiAgICAgICAgQnV0dG9uLFxuICAgICAgICBDYXJkLFxuICAgICAgICBDYXJkQm9keSxcbiAgICAgICAgQ2FyZEZvb3RlcixcbiAgICAgICAgQ2FyZEhlYWRlcixcbiAgICAgICAgQ2FyZFRpdGxlLFxuICAgICAgICBDb2RlLFxuICAgICAgICBMaW5rLFxuICAgICAgICBUYWIsXG4gICAgICAgIFRhYkNvbnRhaW5lcixcbiAgICAgICAgVGFiQ29udGVudCxcbiAgICAgICAgQ292ZXIsXG4gICAgfVxufSk7IiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5pbXBvcnQgeyBCdXR0b24gfSBmcm9tICd1aWtpdC1yZWFjdCc7XG5pbXBvcnQgeyBDb250YWluZXIgfSBmcm9tICd1aWtpdC1yZWFjdCc7XG5pbXBvcnQgeyBGbGV4IH0gZnJvbSAndWlraXQtcmVhY3QnO1xuaW1wb3J0IHsgTGlnaHQgfSBmcm9tICd1aWtpdC1yZWFjdCc7XG5pbXBvcnQgeyBMaXN0IH0gZnJvbSAndWlraXQtcmVhY3QnO1xuaW1wb3J0IHsgTGlzdEl0ZW0gfSBmcm9tICd1aWtpdC1yZWFjdCc7XG5pbXBvcnQgeyBTZWN0aW9uIH0gZnJvbSAndWlraXQtcmVhY3QnO1xuaW1wb3J0IHsgSW1hZ2UgfSBmcm9tICd1aWtpdC1yZWFjdCc7XG5pbXBvcnQgeyBEYXJrIH0gZnJvbSAndWlraXQtcmVhY3QnO1xuaW1wb3J0IHsgTGluayB9IGZyb20gJ3Vpa2l0LXJlYWN0JztcbmltcG9ydCB7IEljb24gfSBmcm9tICd1aWtpdC1yZWFjdCc7XG5cbmV4cG9ydCBjbGFzcyBJbmRleFBhZ2UgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIHJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxGbGV4IGRpcmVjdGlvbj1cImNvbHVtblwiPlxuICAgICAgICAgICAgICAgIDxMaWdodD5cbiAgICAgICAgICAgICAgICAgICAgPFNlY3Rpb24gY29sb3I9XCJzZWNvbmRhcnlcIiBwYWRkaW5nPVwibGFyZ2VcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxGbGV4IGFsaWdubWVudD1cImNlbnRlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvYmplY3Qgd2lkdGg9XCIzMDBcIiBoZWlnaHQ9XCIzMDBcIiBkYXRhPVwic3JjL2ltYWdlcy91aWtpdC1yZWFjdC5zdmdcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9GbGV4PlxuICAgICAgICAgICAgICAgICAgICAgICAgPEZsZXggYWxpZ25tZW50PVwiY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgxPlVJa2l0IFJlYWN0PC9oMT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvRmxleD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxGbGV4IGFsaWdubWVudD1cImNlbnRlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b24gc2l6ZT1cImxhcmdlXCIgY29sb3I9XCJcIj5HZXQgU3RhcnRlZDwvQnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9GbGV4PlxuICAgICAgICAgICAgICAgICAgICA8U2VjdGlvbiBwYWRkaW5nPVwic21hbGxcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxGbGV4IGFsaWdubWVudD1cImNlbnRlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoND4gVXNlIFVpa2l0IHdpdGggUmVhY3QsIGEgcG93ZXJmdWxseSBzaW1wbGUgZnJhbXdvcmsgPC9oND5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvRmxleD5cbiAgICAgICAgICAgICAgICAgICAgPC9TZWN0aW9uPlxuICAgICAgICAgICAgICAgICAgICA8L1NlY3Rpb24+XG4gICAgICAgICAgICAgICAgPC9MaWdodD5cbiAgXG4gICAgICAgICAgICA8L0ZsZXg+XG4gICAgICAgICk7XG4gICAgfVxufSJdLCJzb3VyY2VSb290IjoiIn0=
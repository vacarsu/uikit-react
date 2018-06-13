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
/* harmony import */ var uikit_react__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(uikit_react__WEBPACK_IMPORTED_MODULE_10__);
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
        return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](uikit_react__WEBPACK_IMPORTED_MODULE_10__["OffcanvasContainer"], null,
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_router_dom__WEBPACK_IMPORTED_MODULE_2__["BrowserRouter"], null,
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"](uikit_react__WEBPACK_IMPORTED_MODULE_10__["Section"], { position: "relative" },
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"](uikit_react__WEBPACK_IMPORTED_MODULE_10__["Section"], { color: "secondary", preserveColor: true },
                        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](uikit_react__WEBPACK_IMPORTED_MODULE_10__["NavbarSticky"], { options: "animation: uk-animation-slide-top; cls-inactive: uk-navbar-transparent uk-light; top: 556;" },
                            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](uikit_react__WEBPACK_IMPORTED_MODULE_10__["NavbarContainer"], { transparent: true },
                                react__WEBPACK_IMPORTED_MODULE_0__["createElement"](uikit_react__WEBPACK_IMPORTED_MODULE_10__["Navbar"], null,
                                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"](uikit_react__WEBPACK_IMPORTED_MODULE_10__["ListItem"], null,
                                        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](uikit_react__WEBPACK_IMPORTED_MODULE_10__["Link"], { toggleOptions: "target: #menu;", href: "#" },
                                            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](uikit_react__WEBPACK_IMPORTED_MODULE_10__["Icon"], { options: "menu", button: true })))),
                                react__WEBPACK_IMPORTED_MODULE_0__["createElement"](uikit_react__WEBPACK_IMPORTED_MODULE_10__["Navbar"], { align: "right" },
                                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"](uikit_react__WEBPACK_IMPORTED_MODULE_10__["ListItem"], null,
                                        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](uikit_react__WEBPACK_IMPORTED_MODULE_10__["Link"], { href: "https://github.com/vacarsu/dimension-cms" },
                                            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](uikit_react__WEBPACK_IMPORTED_MODULE_10__["Icon"], { options: "github", button: true }))))))),
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"](uikit_react__WEBPACK_IMPORTED_MODULE_10__["Offcanvas"], { id: "menu", options: "overlay: true" },
                        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](uikit_react__WEBPACK_IMPORTED_MODULE_10__["List"], { type: "divider" },
                            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](uikit_react__WEBPACK_IMPORTED_MODULE_10__["ListItem"], null,
                                react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_router_dom__WEBPACK_IMPORTED_MODULE_2__["NavLink"], { to: "/" }, "Home")),
                            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](uikit_react__WEBPACK_IMPORTED_MODULE_10__["ListItem"], null,
                                react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_router_dom__WEBPACK_IMPORTED_MODULE_2__["NavLink"], { to: "/docs/accordion" }, "Accordion")),
                            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](uikit_react__WEBPACK_IMPORTED_MODULE_10__["ListItem"], null,
                                react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_router_dom__WEBPACK_IMPORTED_MODULE_2__["NavLink"], { to: "/docs/alert" }, "Alert")),
                            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](uikit_react__WEBPACK_IMPORTED_MODULE_10__["ListItem"], null,
                                react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_router_dom__WEBPACK_IMPORTED_MODULE_2__["NavLink"], { to: "/docs/article" }, "Article")),
                            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](uikit_react__WEBPACK_IMPORTED_MODULE_10__["ListItem"], null,
                                react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_router_dom__WEBPACK_IMPORTED_MODULE_2__["NavLink"], { to: "/docs/badge" }, "Badge")),
                            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](uikit_react__WEBPACK_IMPORTED_MODULE_10__["ListItem"], null,
                                react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_router_dom__WEBPACK_IMPORTED_MODULE_2__["NavLink"], { to: "/docs/icon" }, "Icon")))),
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Route"], { exact: true, path: "/", component: _pages_Index_IndexPage__WEBPACK_IMPORTED_MODULE_12__["IndexPage"] }),
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Route"], { path: "/docs", component: _pages_Docs_DocsPage__WEBPACK_IMPORTED_MODULE_11__["DocsPage"] })))));
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
/* harmony import */ var uikit_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(uikit_react__WEBPACK_IMPORTED_MODULE_2__);
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
/* harmony import */ var uikit_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(uikit_react__WEBPACK_IMPORTED_MODULE_2__);
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
        fetch("/src/docs/" + this.state.version + "/" + this.state.name + ".md")
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
/* harmony import */ var uikit_react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(uikit_react__WEBPACK_IMPORTED_MODULE_3__);
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
        TabContent: uikit_react__WEBPACK_IMPORTED_MODULE_3__["TabContent"]
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
/* harmony import */ var uikit_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(uikit_react__WEBPACK_IMPORTED_MODULE_1__);
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
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"](uikit_react__WEBPACK_IMPORTED_MODULE_1__["Section"], { color: "secondary", padding: true },
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"](uikit_react__WEBPACK_IMPORTED_MODULE_1__["Flex"], { alignment: "center" },
                        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("object", { width: "300", height: "300", data: "/client/images/uikit-react.svg" })),
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"](uikit_react__WEBPACK_IMPORTED_MODULE_1__["Flex"], { alignment: "center" },
                        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("h2", null, "React UIkit")),
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"](uikit_react__WEBPACK_IMPORTED_MODULE_1__["Flex"], { alignment: "center" },
                        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](uikit_react__WEBPACK_IMPORTED_MODULE_1__["Button"], { size: "large", color: "primary" }, "Get Started")))),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](uikit_react__WEBPACK_IMPORTED_MODULE_1__["Section"], { size: "default", padding: true },
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"](uikit_react__WEBPACK_IMPORTED_MODULE_1__["Container"], null,
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"](uikit_react__WEBPACK_IMPORTED_MODULE_1__["Flex"], { alignment: "center", direction: "row" },
                        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](uikit_react__WEBPACK_IMPORTED_MODULE_1__["List"], { type: "divider" },
                            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](uikit_react__WEBPACK_IMPORTED_MODULE_1__["ListItem"], null,
                                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("p", null,
                                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. ",
                                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("b", null, "Lorem ipsum dolor sit amet, consectetur adipiscing elit"),
                                    ". Praesent mauris. Fusce nec tellus sed augue semper porta. ",
                                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("b", null, "Lorem ipsum dolor sit amet, consectetur adipiscing elit"),
                                    ". Mauris massa. Vestibulum lacinia arcu eget nulla. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur sodales ligula in libero. ",
                                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("b", null, "Lorem ipsum dolor sit amet, consectetur adipiscing elit"),
                                    ". Sed dignissim lacinia nunc. ")),
                            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](uikit_react__WEBPACK_IMPORTED_MODULE_1__["ListItem"], null,
                                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("p", null,
                                    "Curabitur tortor. Pellentesque nibh. ",
                                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("i", null, "Lorem ipsum dolor sit amet, consectetur adipiscing elit"),
                                    ". Aenean quam. In scelerisque sem at dolor. Maecenas mattis. Sed convallis tristique sem. Proin ut ligula vel nunc egestas porttitor. Morbi lectus risus, iaculis vel, suscipit quis, luctus non, massa. Fusce ac turpis quis ligula lacinia aliquet. ",
                                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("i", null, "Lorem ipsum dolor sit amet, consectetur adipiscing elit"),
                                    ". Mauris ipsum. Nulla metus metus, ullamcorper vel, tincidunt sed, euismod in, nibh. ")),
                            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](uikit_react__WEBPACK_IMPORTED_MODULE_1__["ListItem"], null,
                                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("p", null,
                                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("i", null, "Lorem ipsum dolor sit amet, consectetur adipiscing elit"),
                                    ". Quisque volutpat condimentum velit. ",
                                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("i", null, "Sed dignissim lacinia nunc"),
                                    ". Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nam nec ante. Sed lacinia, urna non tincidunt mattis, tortor neque adipiscing diam, a cursus ipsum ante quis turpis. Nulla facilisi. ",
                                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("b", null, "Proin ut ligula vel nunc egestas porttitor"),
                                    ". Ut fringilla. Suspendisse potenti. Nunc feugiat mi a tellus consequat imperdiet. Vestibulum sapien. Proin quam. Etiam ultrices. Suspendisse in justo eu magna luctus suscipit. Sed lectus. Integer euismod lacus luctus magna. ")),
                            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](uikit_react__WEBPACK_IMPORTED_MODULE_1__["ListItem"], null,
                                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("p", null,
                                    "Quisque cursus, metus vitae pharetra auctor, sem massa mattis sem, at interdum magna augue eget diam. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Morbi lacinia molestie dui. Praesent blandit dolor. Sed non quam. In vel mi sit amet augue congue elementum. Morbi in ipsum sit amet pede facilisis laoreet. Donec lacus nunc, viverra nec, blandit vel, egestas et, augue. Vestibulum tincidunt malesuada tellus. Ut ultrices ultrices enim. ",
                                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("b", null, "Suspendisse in justo eu magna luctus suscipit"),
                                    ". Curabitur sit amet mauris. Morbi in dui quis est pulvinar ullamcorper. ",
                                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("b", null, "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Morbi lacinia molestie dui"),
                                    ". Nulla facilisi. Integer lacinia sollicitudin massa. "))))))));
    };
    return IndexPage;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]));



/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL3BhZ2VzL0RvY3MvRG9jc1BhZ2UudHN4Iiwid2VicGFjazovLy8uL3NyYy9wYWdlcy9Eb2NzL0RvY3VtZW50YXRpb24udHN4Iiwid2VicGFjazovLy8uL3NyYy9wYWdlcy9Eb2NzL2NvZGUudHN4Iiwid2VicGFjazovLy8uL3NyYy9wYWdlcy9Eb2NzL2RvY3MtbmF2LnRzIiwid2VicGFjazovLy8uL3NyYy9wYWdlcy9Eb2NzL21hcmtzeS1jb21wb25lbnRzLnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXMvSW5kZXgvSW5kZXhQYWdlLnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxnQkFBUSxvQkFBb0I7QUFDNUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBaUIsNEJBQTRCO0FBQzdDO0FBQ0E7QUFDQSwwQkFBa0IsMkJBQTJCO0FBQzdDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGtEQUEwQyxnQ0FBZ0M7QUFDMUU7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxnRUFBd0Qsa0JBQWtCO0FBQzFFO0FBQ0EseURBQWlELGNBQWM7QUFDL0Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlEQUF5QyxpQ0FBaUM7QUFDMUUsd0hBQWdILG1CQUFtQixFQUFFO0FBQ3JJO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBZ0IsdUJBQXVCO0FBQ3ZDOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN0SitCO0FBQ0k7QUFDd0M7QUFDMUQ7QUFDZ0M7QUFDUDtBQUNBO0FBQ0s7QUFDb0I7QUFDekI7QUFlckI7QUFHNEI7QUFDRztBQUVwRCxRQUFRLENBQUMsZ0JBQWdCLENBQUMsa0JBQWtCLEVBQUU7SUFDMUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxvREFBTyxDQUFDLENBQUM7SUFDckIsd0RBQU0sQ0FDRixvREFBQyxXQUFXLE9BQUcsRUFDZixRQUFRLENBQUMsY0FBYyxDQUFDLE1BQU0sQ0FBQyxDQUNsQyxDQUFDO0FBQ04sQ0FBQyxFQUFFLEtBQUssQ0FBQyxDQUFDO0FBRVY7SUFBMEIsK0JBQXlCO0lBQW5EOztJQXVEQSxDQUFDO0lBdERHLDRCQUFNLEdBQU47UUFDSSxPQUFPLENBQ0gsb0RBQUMsK0RBQWtCO1lBQ2Ysb0RBQUMsOERBQU07Z0JBQ0gsb0RBQUMsb0RBQU8sSUFBQyxRQUFRLEVBQUMsVUFBVTtvQkFDeEIsb0RBQUMsb0RBQU8sSUFBQyxLQUFLLEVBQUMsV0FBVyxFQUFDLGFBQWE7d0JBQ3BDLG9EQUFDLHlEQUFZLElBQUMsT0FBTyxFQUFDLDRGQUE0Rjs0QkFDOUcsb0RBQUMsNERBQWUsSUFBQyxXQUFXO2dDQUN4QixvREFBQyxtREFBTTtvQ0FDSCxvREFBQyxxREFBUTt3Q0FDTCxvREFBQyxpREFBSSxJQUFDLGFBQWEsRUFBQyxnQkFBZ0IsRUFBQyxJQUFJLEVBQUMsR0FBRzs0Q0FDekMsb0RBQUMsaURBQUksSUFBQyxPQUFPLEVBQUMsTUFBTSxFQUFDLE1BQU0sU0FBRyxDQUMzQixDQUNBLENBQ047Z0NBQ1Qsb0RBQUMsbURBQU0sSUFBQyxLQUFLLEVBQUMsT0FBTztvQ0FDakIsb0RBQUMscURBQVE7d0NBQ0wsb0RBQUMsaURBQUksSUFBQyxJQUFJLEVBQUMsMENBQTBDOzRDQUNqRCxvREFBQyxpREFBSSxJQUFDLE9BQU8sRUFBQyxRQUFRLEVBQUMsTUFBTSxTQUFHLENBQzdCLENBQ0EsQ0FDTixDQUNLLENBQ1AsQ0FDVDtvQkFDVixvREFBQyxzREFBUyxJQUFDLEVBQUUsRUFBQyxNQUFNLEVBQUMsT0FBTyxFQUFDLGVBQWU7d0JBQ3hDLG9EQUFDLGlEQUFJLElBQUMsSUFBSSxFQUFDLFNBQVM7NEJBQ2hCLG9EQUFDLHFEQUFRO2dDQUNMLG9EQUFDLHdEQUFPLElBQUMsRUFBRSxFQUFDLEdBQUcsV0FBZSxDQUN2Qjs0QkFDWCxvREFBQyxxREFBUTtnQ0FDTCxvREFBQyx3REFBTyxJQUFDLEVBQUUsRUFBQyxpQkFBaUIsZ0JBQW9CLENBQzFDOzRCQUNYLG9EQUFDLHFEQUFRO2dDQUNMLG9EQUFDLHdEQUFPLElBQUMsRUFBRSxFQUFDLGFBQWEsWUFBZ0IsQ0FDbEM7NEJBQ1gsb0RBQUMscURBQVE7Z0NBQ0wsb0RBQUMsd0RBQU8sSUFBQyxFQUFFLEVBQUMsZUFBZSxjQUFrQixDQUN0Qzs0QkFDWCxvREFBQyxxREFBUTtnQ0FDTCxvREFBQyx3REFBTyxJQUFDLEVBQUUsRUFBQyxhQUFhLFlBQWdCLENBQ2xDOzRCQUNYLG9EQUFDLHFEQUFRO2dDQUNMLG9EQUFDLHdEQUFPLElBQUMsRUFBRSxFQUFDLFlBQVksV0FBZSxDQUNoQyxDQUNSLENBQ0M7b0JBQ1osb0RBQUMsc0RBQUssSUFBQyxLQUFLLFFBQUMsSUFBSSxFQUFDLEdBQUcsRUFBQyxTQUFTLEVBQUUsaUVBQVMsR0FBSTtvQkFDOUMsb0RBQUMsc0RBQUssSUFBQyxJQUFJLEVBQUMsT0FBTyxFQUFDLFNBQVMsRUFBRSw4REFBUSxHQUFJLENBQ3JDLENBQ0wsQ0FDUSxDQUN4QjtJQUNMLENBQUM7SUFDTCxrQkFBQztBQUFELENBQUMsQ0F2RHlCLCtDQUFlLEdBdUR4Qzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM3RjhCO0FBQ21CO0FBZ0I3QjtBQUUyQjtBQUNYO0FBRXJDO0lBQThCLDRCQUF5QjtJQUNuRCxrQkFBYSxLQUFLO1FBQWxCLFlBQ0ksa0JBQU0sS0FBSyxDQUFDLFNBRWY7UUFERyxLQUFJLENBQUMsS0FBSyxHQUFHLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBRSxDQUFDOztJQUN0QyxDQUFDO0lBRU8sa0NBQWUsR0FBdkIsVUFBd0IsS0FBSztRQUN6QixJQUFJLENBQUMsUUFBUSxDQUFDO1lBQ1YsT0FBTyxFQUFFLEtBQUssQ0FBQyxNQUFNLENBQUMsS0FBSztTQUM5QixDQUFDLENBQUM7SUFDUCxDQUFDO0lBRUQseUJBQU0sR0FBTjtRQUNJLE9BQU8sQ0FDSCxvREFBQyxtREFBTztZQUNKLG9EQUFDLHFEQUFTO2dCQUNOLG9EQUFDLHFEQUFTO29CQUNOLG9EQUFDLG1EQUFPLElBQ0osS0FBSyxFQUFFOzRCQUNILEdBQUcsRUFBRSxNQUFNOzRCQUNYLE1BQU0sRUFBRSxHQUFHOzRCQUNYLFNBQVMsRUFBRSxZQUFZOzRCQUN2QixPQUFPLEVBQUUscUJBQXFCOzRCQUM5QixXQUFXLEVBQUUsbUJBQW1COzRCQUNoQyxNQUFNLEVBQUUsTUFBTTs0QkFDZCxRQUFRLEVBQUUsTUFBTTt5QkFDbkIsRUFDRCxRQUFRLEVBQUMsT0FBTzt3QkFDaEIsb0RBQUMsK0NBQUcsSUFBQyxNQUFNLEVBQUMsU0FBUyxJQWVoQixJQUFJLENBQUMsVUFBVSxFQUFFLENBQ2hCLENBQ0EsQ0FDRjtnQkFDWixvREFBQyxxREFBUyxJQUFDLElBQUksRUFBQyxLQUFLLEVBQUMsS0FBSyxFQUFFLEVBQUUsV0FBVyxFQUFFLEtBQUssRUFBRTtvQkFDL0Msb0RBQUMsc0RBQUssSUFBQyxJQUFJLEVBQUssSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsR0FBRyxvQkFBaUIsRUFBRSxTQUFTLEVBQUUsNERBQWEsR0FBSSxDQUMzRSxDQUNKLENBQ04sQ0FDYixDQUFDO0lBQ04sQ0FBQztJQUVPLDZCQUFVLEdBQWxCO1FBQUEsaUJBVUM7UUFURyxJQUFJLEtBQUssR0FBRyxDQUFDLENBQUM7UUFDZCxPQUFPLE1BQU0sQ0FBQyxJQUFJLENBQUMsaURBQU8sQ0FBQyxDQUFDLEdBQUcsQ0FBQyxVQUFDLENBQUM7WUFDOUIsS0FBSyxFQUFFLENBQUM7WUFDUixPQUFPLENBQ0gsb0RBQUMsbURBQU8sSUFBQyxHQUFHLEVBQUUsQ0FBQyxFQUFFLElBQUksRUFBRSxLQUFLLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLElBQUk7Z0JBQ2pELG9EQUFDLHdEQUFPLElBQUMsRUFBRSxFQUFFLFdBQVMsS0FBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLFNBQUksaURBQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxXQUFXLEVBQUksSUFBRyxpREFBTyxDQUFDLENBQUMsQ0FBQyxDQUFXLENBQ3hGLENBQ2IsQ0FBQztRQUNOLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUNMLGVBQUM7QUFBRCxDQUFDLENBbEU2QiwrQ0FBZSxHQWtFNUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN4RjhCO0FBS2U7QUFXekI7QUFFckI7SUFBbUMsaUNBQXlCO0lBQ3hELHVCQUFZLEtBQUs7UUFBakIsWUFDSSxrQkFBTSxLQUFLLENBQUMsU0FRZjtRQVBTLGlDQUEyQyxFQUF6QyxjQUFJLEVBQUUsb0JBQU8sQ0FBNkI7UUFDbEQsS0FBSSxDQUFDLEtBQUssR0FBRztZQUNULElBQUksRUFBRSxJQUFJO1lBQ1YsT0FBTyxFQUFFLE9BQU87WUFDaEIsY0FBYyxFQUFFLElBQUk7WUFDcEIsU0FBUyxFQUFFLElBQUk7U0FDbEIsQ0FBQzs7SUFDTixDQUFDO0lBRUQsaURBQXlCLEdBQXpCLFVBQTBCLFNBQVM7UUFBbkMsaUJBYUM7UUFaUywrQkFBMEMsRUFBeEMsY0FBSSxFQUFFLG9CQUFPLENBQTRCO1FBQ2pELElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLEtBQUssSUFBSSxFQUFFO1lBQzFCLElBQUksQ0FBQyxRQUFRLENBQUM7Z0JBQ1YsSUFBSSxFQUFFLElBQUk7YUFDYixFQUFFLGNBQU0sWUFBSSxDQUFDLFNBQVMsRUFBRSxFQUFoQixDQUFnQixDQUFDLENBQUM7U0FDOUI7UUFFRCxJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxLQUFLLE9BQU8sRUFBRTtZQUNoQyxJQUFJLENBQUMsUUFBUSxDQUFDO2dCQUNWLE9BQU8sRUFBRSxPQUFPO2FBQ25CLEVBQUUsY0FBTSxZQUFJLENBQUMsU0FBUyxFQUFFLEVBQWhCLENBQWdCLENBQUMsQ0FBQztTQUM5QjtJQUNMLENBQUM7SUFFRCw2Q0FBcUIsR0FBckIsVUFBc0IsU0FBUyxFQUFFLFNBQVM7UUFDaEMsK0JBQTBDLEVBQXhDLGNBQUksRUFBRSxvQkFBTyxDQUE0QjtRQUNqRCxJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxLQUFLLElBQUksRUFBRTtZQUMxQixPQUFPLElBQUksQ0FBQztTQUNmO1FBRUQsSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sS0FBSyxPQUFPLEVBQUU7WUFDaEMsT0FBTyxJQUFJLENBQUM7U0FDZjtRQUVELElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxTQUFTLEtBQUssU0FBUyxDQUFDLFNBQVMsRUFBRTtZQUM5QyxPQUFPLElBQUksQ0FBQztTQUNmO1FBRUQsT0FBTyxLQUFLLENBQUM7SUFDakIsQ0FBQztJQUVELHlDQUFpQixHQUFqQjtRQUNJLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQztJQUNyQixDQUFDO0lBRUQsOEJBQU0sR0FBTjtRQUNJLE9BQU8sQ0FDSCxvREFBQyxtREFBTyxJQUFDLE9BQU87WUFDWixvREFBQyxtREFBTyxJQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsV0FBVyxFQUFFLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxJQUM5RSxJQUFJLENBQUMsS0FBSyxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQzVELENBQ0osQ0FDYixDQUFDO0lBQ04sQ0FBQztJQUVPLGlDQUFTLEdBQWpCO1FBQUEsaUJBY0M7UUFiRyxJQUFJLENBQUMsUUFBUSxDQUFDLEVBQUUsU0FBUyxFQUFFLElBQUksRUFBRSxDQUFDLENBQUM7UUFDbkMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQzdCLEtBQUssQ0FBQyxlQUFhLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxTQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxRQUFLLENBQUM7YUFDekQsSUFBSSxDQUFDLFVBQUMsR0FBRyxJQUFLLFVBQUcsQ0FBQyxJQUFJLEVBQUUsRUFBVixDQUFVLENBQUM7YUFDekIsSUFBSSxDQUFDLGNBQUk7WUFDTixLQUFJLENBQUMsUUFBUSxDQUFDO2dCQUNWLGNBQWMsRUFBRSxrRUFBTyxDQUFDLElBQUksQ0FBQztnQkFDN0IsU0FBUyxFQUFFLEtBQUs7YUFDbkIsQ0FBQyxDQUFDO1FBQ1AsQ0FBQyxDQUFDO2FBQ0QsS0FBSyxDQUFDLFVBQUMsR0FBRztZQUNQLE9BQU8sQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDdkIsQ0FBQyxDQUFDLENBQUM7SUFDWCxDQUFDO0lBQ0wsb0JBQUM7QUFBRCxDQUFDLENBekVrQywrQ0FBZSxHQXlFakQ7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzNGOEI7QUFFRTtBQUVqQztJQUEwQix3QkFBeUI7SUFBbkQ7O0lBU0EsQ0FBQztJQVJHLHFCQUFNLEdBQU47UUFDSSxPQUFPLENBQ0gsOERBQ0ksdUJBQXVCLEVBQUUsRUFBRSxNQUFNLEVBQUUsaURBQWUsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksRUFBRSxpREFBZSxDQUFDLEdBQUcsQ0FBQyxFQUFFLEVBQzFGLFNBQVMsRUFBQyxjQUFjLEdBQ3JCLENBQ1YsQ0FBQztJQUNOLENBQUM7SUFDTCxXQUFDO0FBQUQsQ0FBQyxDQVR5QiwrQ0FBZSxHQVN4Qzs7Ozs7Ozs7Ozs7Ozs7OztBQ2JNLElBQU0sT0FBTyxHQUFHO0lBQ25CLFNBQVMsRUFBRSxXQUFXO0lBQ3RCLEtBQUssRUFBRSxPQUFPO0lBQ2QsT0FBTyxFQUFFLFNBQVM7SUFDbEIsS0FBSyxFQUFFLE9BQU87SUFDZCxVQUFVLEVBQUUsWUFBWTtJQUN4QixNQUFNLEVBQUUsUUFBUTtJQUNoQixJQUFJLEVBQUUsTUFBTTtJQUNaLFNBQVMsRUFBRSxXQUFXO0lBQ3RCLEtBQUssRUFBRSxPQUFPO0lBQ2QsSUFBSSxFQUFFLE1BQU07SUFDWixRQUFRLEVBQUUsVUFBVTtJQUNwQixJQUFJLEVBQUUsTUFBTTtJQUNaLElBQUksRUFBRSxNQUFNO0lBQ1osSUFBSSxFQUFFLE1BQU07SUFDWixLQUFLLEVBQUUsT0FBTztJQUNkLE1BQU0sRUFBRSxRQUFRO0lBQ2hCLEtBQUssRUFBRSxPQUFPO0lBQ2QsUUFBUSxFQUFFLFVBQVU7SUFDcEIsSUFBSSxFQUFFLE1BQU07SUFDWixJQUFJLEVBQUUsTUFBTTtJQUNaLE1BQU0sRUFBRSxRQUFRO0lBQ2hCLEdBQUcsRUFBRSxLQUFLO0lBQ1YsTUFBTSxFQUFFLFFBQVE7SUFDaEIsU0FBUyxFQUFFLFdBQVc7SUFDdEIsT0FBTyxFQUFFLFNBQVM7SUFDbEIsS0FBSyxFQUFFLE9BQU87SUFDZCxRQUFRLEVBQUUsVUFBVTtJQUNwQixRQUFRLEVBQUUsVUFBVTtJQUNwQixTQUFTLEVBQUUsV0FBVztJQUN0QixPQUFPLEVBQUUsU0FBUztJQUNsQixPQUFPLEVBQUUsU0FBUztJQUNsQixTQUFTLEVBQUUsV0FBVztJQUN0QixHQUFHLEVBQUUsS0FBSztJQUNWLEtBQUssRUFBRSxPQUFPO0NBQ2pCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNuQzhCO0FBQ0U7QUFFTTtBQW1CbEI7QUFDUztBQUV2QixJQUFNLE9BQU8sR0FBRyx3REFBTSxDQUFDO0lBQzFCLGFBQWEsRUFBRSxtREFBbUI7SUFDbEMsU0FBUyxZQUFDLFFBQVEsRUFBRSxJQUFJO1FBQ3BCLE9BQU8saURBQWUsQ0FBQyxJQUFJLEVBQUUsaURBQWUsQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUN0RCxDQUFDO0lBQ0QsUUFBUSxFQUFFO1FBQ04sS0FBSyxZQUFDLEVBQVU7Z0JBQVQsc0JBQVE7WUFDWCxPQUFPLG9EQUFDLGlEQUFLLElBQUMsT0FBTyxVQUFFLFFBQVEsQ0FBUztRQUM1QyxDQUFDO0tBQ0o7SUFDRCxVQUFVLEVBQUU7UUFDUixTQUFTO1FBQ1QsYUFBYTtRQUNiLEtBQUs7UUFDTCxPQUFPO1FBQ1AsS0FBSztRQUNMLFVBQVU7UUFDVixNQUFNO1FBQ04sSUFBSTtRQUNKLFFBQVE7UUFDUixVQUFVO1FBQ1YsVUFBVTtRQUNWLFNBQVM7UUFDVCxJQUFJO1FBQ0osSUFBSTtRQUNKLEdBQUc7UUFDSCxZQUFZO1FBQ1osVUFBVTtLQUNiO0NBQ0osQ0FBQyxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3RENEI7QUFFTTtBQUNHO0FBQ0w7QUFDQztBQUNEO0FBQ0k7QUFDRDtBQUd0QztJQUErQiw2QkFBZTtJQUE5Qzs7SUF3Q0EsQ0FBQztJQXZDRywwQkFBTSxHQUFOO1FBQ0ksT0FBTyxDQUNILG9EQUFDLGdEQUFJLElBQUMsU0FBUyxFQUFDLFFBQVE7WUFDcEIsb0RBQUMsaURBQUs7Z0JBQ0Ysb0RBQUMsbURBQU8sSUFBQyxLQUFLLEVBQUMsV0FBVyxFQUFDLE9BQU87b0JBQzlCLG9EQUFDLGdEQUFJLElBQUMsU0FBUyxFQUFDLFFBQVE7d0JBQ3BCLGdFQUFRLEtBQUssRUFBQyxLQUFLLEVBQUMsTUFBTSxFQUFDLEtBQUssRUFBQyxJQUFJLEVBQUMsZ0NBQWdDLEdBQUcsQ0FDdEU7b0JBQ1Asb0RBQUMsZ0RBQUksSUFBQyxTQUFTLEVBQUMsUUFBUTt3QkFDcEIsOEVBQW9CLENBQ2pCO29CQUNQLG9EQUFDLGdEQUFJLElBQUMsU0FBUyxFQUFDLFFBQVE7d0JBQ3BCLG9EQUFDLGtEQUFNLElBQUMsSUFBSSxFQUFDLE9BQU8sRUFBQyxLQUFLLEVBQUMsU0FBUyxrQkFBcUIsQ0FDdEQsQ0FDRCxDQUNOO1lBQ1Isb0RBQUMsbURBQU8sSUFBQyxJQUFJLEVBQUMsU0FBUyxFQUFDLE9BQU87Z0JBQzNCLG9EQUFDLHFEQUFTO29CQUNOLG9EQUFDLGdEQUFJLElBQUMsU0FBUyxFQUFDLFFBQVEsRUFBQyxTQUFTLEVBQUMsS0FBSzt3QkFDcEMsb0RBQUMsZ0RBQUksSUFBQyxJQUFJLEVBQUMsU0FBUzs0QkFDaEIsb0RBQUMsb0RBQVE7Z0NBQ0w7O29DQUF3TSx5SEFBOEQ7O29DQUE0RCx5SEFBOEQ7O29DQUFvTCx5SEFBOEQ7cUVBQWtDLENBQzdvQjs0QkFDWCxvREFBQyxvREFBUTtnQ0FDTDs7b0NBQXdDLHlIQUE4RDs7b0NBQXNQLHlIQUE4RDs0SEFBeUYsQ0FDNWU7NEJBQ1gsb0RBQUMsb0RBQVE7Z0NBQ0w7b0NBQUcseUhBQThEOztvQ0FBc0MsNEZBQWlDOztvQ0FBbU8sNEdBQWlEO3dRQUFxTyxDQUMxbkI7NEJBQ1gsb0RBQUMsb0RBQVE7Z0NBQ0w7O29DQUErZCwrR0FBb0Q7O29DQUF5RSxvTEFBeUg7NkZBQTBELENBQ3h3QixDQUNSLENBQ0osQ0FDQyxDQUNOLENBQ1AsQ0FDVixDQUFDO0lBQ04sQ0FBQztJQUNMLGdCQUFDO0FBQUQsQ0FBQyxDQXhDOEIsK0NBQWUsR0F3QzdDIiwiZmlsZSI6ImJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIGluc3RhbGwgYSBKU09OUCBjYWxsYmFjayBmb3IgY2h1bmsgbG9hZGluZ1xuIFx0ZnVuY3Rpb24gd2VicGFja0pzb25wQ2FsbGJhY2soZGF0YSkge1xuIFx0XHR2YXIgY2h1bmtJZHMgPSBkYXRhWzBdO1xuIFx0XHR2YXIgbW9yZU1vZHVsZXMgPSBkYXRhWzFdO1xuIFx0XHR2YXIgZXhlY3V0ZU1vZHVsZXMgPSBkYXRhWzJdO1xuXG4gXHRcdC8vIGFkZCBcIm1vcmVNb2R1bGVzXCIgdG8gdGhlIG1vZHVsZXMgb2JqZWN0LFxuIFx0XHQvLyB0aGVuIGZsYWcgYWxsIFwiY2h1bmtJZHNcIiBhcyBsb2FkZWQgYW5kIGZpcmUgY2FsbGJhY2tcbiBcdFx0dmFyIG1vZHVsZUlkLCBjaHVua0lkLCBpID0gMCwgcmVzb2x2ZXMgPSBbXTtcbiBcdFx0Zm9yKDtpIDwgY2h1bmtJZHMubGVuZ3RoOyBpKyspIHtcbiBcdFx0XHRjaHVua0lkID0gY2h1bmtJZHNbaV07XG4gXHRcdFx0aWYoaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdKSB7XG4gXHRcdFx0XHRyZXNvbHZlcy5wdXNoKGluc3RhbGxlZENodW5rc1tjaHVua0lkXVswXSk7XG4gXHRcdFx0fVxuIFx0XHRcdGluc3RhbGxlZENodW5rc1tjaHVua0lkXSA9IDA7XG4gXHRcdH1cbiBcdFx0Zm9yKG1vZHVsZUlkIGluIG1vcmVNb2R1bGVzKSB7XG4gXHRcdFx0aWYoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG1vcmVNb2R1bGVzLCBtb2R1bGVJZCkpIHtcbiBcdFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdID0gbW9yZU1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHRcdH1cbiBcdFx0fVxuIFx0XHRpZihwYXJlbnRKc29ucEZ1bmN0aW9uKSBwYXJlbnRKc29ucEZ1bmN0aW9uKGRhdGEpO1xuXG4gXHRcdHdoaWxlKHJlc29sdmVzLmxlbmd0aCkge1xuIFx0XHRcdHJlc29sdmVzLnNoaWZ0KCkoKTtcbiBcdFx0fVxuXG4gXHRcdC8vIGFkZCBlbnRyeSBtb2R1bGVzIGZyb20gbG9hZGVkIGNodW5rIHRvIGRlZmVycmVkIGxpc3RcbiBcdFx0ZGVmZXJyZWRNb2R1bGVzLnB1c2guYXBwbHkoZGVmZXJyZWRNb2R1bGVzLCBleGVjdXRlTW9kdWxlcyB8fCBbXSk7XG5cbiBcdFx0Ly8gcnVuIGRlZmVycmVkIG1vZHVsZXMgd2hlbiBhbGwgY2h1bmtzIHJlYWR5XG4gXHRcdHJldHVybiBjaGVja0RlZmVycmVkTW9kdWxlcygpO1xuIFx0fTtcbiBcdGZ1bmN0aW9uIGNoZWNrRGVmZXJyZWRNb2R1bGVzKCkge1xuIFx0XHR2YXIgcmVzdWx0O1xuIFx0XHRmb3IodmFyIGkgPSAwOyBpIDwgZGVmZXJyZWRNb2R1bGVzLmxlbmd0aDsgaSsrKSB7XG4gXHRcdFx0dmFyIGRlZmVycmVkTW9kdWxlID0gZGVmZXJyZWRNb2R1bGVzW2ldO1xuIFx0XHRcdHZhciBmdWxmaWxsZWQgPSB0cnVlO1xuIFx0XHRcdGZvcih2YXIgaiA9IDE7IGogPCBkZWZlcnJlZE1vZHVsZS5sZW5ndGg7IGorKykge1xuIFx0XHRcdFx0dmFyIGRlcElkID0gZGVmZXJyZWRNb2R1bGVbal07XG4gXHRcdFx0XHRpZihpbnN0YWxsZWRDaHVua3NbZGVwSWRdICE9PSAwKSBmdWxmaWxsZWQgPSBmYWxzZTtcbiBcdFx0XHR9XG4gXHRcdFx0aWYoZnVsZmlsbGVkKSB7XG4gXHRcdFx0XHRkZWZlcnJlZE1vZHVsZXMuc3BsaWNlKGktLSwgMSk7XG4gXHRcdFx0XHRyZXN1bHQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IGRlZmVycmVkTW9kdWxlWzBdKTtcbiBcdFx0XHR9XG4gXHRcdH1cbiBcdFx0cmV0dXJuIHJlc3VsdDtcbiBcdH1cblxuIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3NcbiBcdC8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuIFx0Ly8gUHJvbWlzZSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbiBcdHZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG4gXHRcdFwiYnVuZGxlXCI6IDBcbiBcdH07XG5cbiBcdHZhciBkZWZlcnJlZE1vZHVsZXMgPSBbXTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0dmFyIGpzb25wQXJyYXkgPSB3aW5kb3dbXCJ3ZWJwYWNrSnNvbnBcIl0gPSB3aW5kb3dbXCJ3ZWJwYWNrSnNvbnBcIl0gfHwgW107XG4gXHR2YXIgb2xkSnNvbnBGdW5jdGlvbiA9IGpzb25wQXJyYXkucHVzaC5iaW5kKGpzb25wQXJyYXkpO1xuIFx0anNvbnBBcnJheS5wdXNoID0gd2VicGFja0pzb25wQ2FsbGJhY2s7XG4gXHRqc29ucEFycmF5ID0ganNvbnBBcnJheS5zbGljZSgpO1xuIFx0Zm9yKHZhciBpID0gMDsgaSA8IGpzb25wQXJyYXkubGVuZ3RoOyBpKyspIHdlYnBhY2tKc29ucENhbGxiYWNrKGpzb25wQXJyYXlbaV0pO1xuIFx0dmFyIHBhcmVudEpzb25wRnVuY3Rpb24gPSBvbGRKc29ucEZ1bmN0aW9uO1xuXG5cbiBcdC8vIGFkZCBlbnRyeSBtb2R1bGUgdG8gZGVmZXJyZWQgbGlzdFxuIFx0ZGVmZXJyZWRNb2R1bGVzLnB1c2goW1wiLi9zcmMvYXBwLnRzeFwiLFwidmVuZG9yXCJdKTtcbiBcdC8vIHJ1biBkZWZlcnJlZCBtb2R1bGVzIHdoZW4gcmVhZHlcbiBcdHJldHVybiBjaGVja0RlZmVycmVkTW9kdWxlcygpO1xuIiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgcmVuZGVyIH0gZnJvbSAncmVhY3QtZG9tJztcbmltcG9ydCB7IEJyb3dzZXJSb3V0ZXIgYXMgUm91dGVyLCBSb3V0ZSwgTmF2TGluayB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xuaW1wb3J0ICdwcmlzbWpzJztcbmltcG9ydCAncHJpc21qcy9jb21wb25lbnRzL3ByaXNtLWphdmFzY3JpcHQubWluJztcbmltcG9ydCAncHJpc21qcy9jb21wb25lbnRzL3ByaXNtLWpzeC5taW4nO1xuaW1wb3J0ICdwcmlzbWpzL2NvbXBvbmVudHMvcHJpc20tdHN4Lm1pbic7XG5pbXBvcnQgJ3ByaXNtanMvcGx1Z2lucy90b29sYmFyL3ByaXNtLXRvb2xiYXInO1xuaW1wb3J0ICdwcmlzbWpzL3BsdWdpbnMvY29weS10by1jbGlwYm9hcmQvcHJpc20tY29weS10by1jbGlwYm9hcmQnO1xuaW1wb3J0ICdwcmlzbWpzL2NvbXBvbmVudHMvcHJpc20tY3NzLm1pbic7XG5cbmltcG9ydCB7XG4gICAgQ29udGFpbmVyLFxuICAgIExpZ2h0LFxuICAgIEljb24sXG4gICAgTGluayxcbiAgICBMaXN0LFxuICAgIExpc3RJdGVtLFxuICAgIE9mZmNhbnZhcyxcbiAgICBPZmZjYW52YXNDb250YWluZXIsXG4gICAgTmF2YmFyLFxuICAgIE5hdmJhckNvbnRhaW5lcixcbiAgICBOYXZiYXJTdGlja3ksXG4gICAgU2VjdGlvblxufSBmcm9tICd1aWtpdC1yZWFjdCc7XG5cblxuaW1wb3J0IHsgRG9jc1BhZ2UgfSBmcm9tICcuL3BhZ2VzL0RvY3MvRG9jc1BhZ2UnO1xuaW1wb3J0IHsgSW5kZXhQYWdlIH0gZnJvbSAnLi9wYWdlcy9JbmRleC9JbmRleFBhZ2UnO1xuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgKCkgPT4ge1xuICAgIGNvbnNvbGUubG9nKFNlY3Rpb24pO1xuICAgIHJlbmRlcihcbiAgICAgICAgPEV4YW1wbGVQYWdlIC8+LFxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncm9vdCcpXG4gICAgKTtcbn0sIGZhbHNlKTtcblxuY2xhc3MgRXhhbXBsZVBhZ2UgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQ8YW55LCBhbnk+IHtcbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8T2ZmY2FudmFzQ29udGFpbmVyPlxuICAgICAgICAgICAgICAgIDxSb3V0ZXI+XG4gICAgICAgICAgICAgICAgICAgIDxTZWN0aW9uIHBvc2l0aW9uPVwicmVsYXRpdmVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxTZWN0aW9uIGNvbG9yPVwic2Vjb25kYXJ5XCIgcHJlc2VydmVDb2xvcj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TmF2YmFyU3RpY2t5IG9wdGlvbnM9XCJhbmltYXRpb246IHVrLWFuaW1hdGlvbi1zbGlkZS10b3A7IGNscy1pbmFjdGl2ZTogdWstbmF2YmFyLXRyYW5zcGFyZW50IHVrLWxpZ2h0OyB0b3A6IDU1NjtcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE5hdmJhckNvbnRhaW5lciB0cmFuc3BhcmVudD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxOYXZiYXI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpc3RJdGVtPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayB0b2dnbGVPcHRpb25zPVwidGFyZ2V0OiAjbWVudTtcIiBocmVmPVwiI1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEljb24gb3B0aW9ucz1cIm1lbnVcIiBidXR0b24gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGlzdEl0ZW0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L05hdmJhcj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxOYXZiYXIgYWxpZ249XCJyaWdodFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaXN0SXRlbT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cImh0dHBzOi8vZ2l0aHViLmNvbS92YWNhcnN1L2RpbWVuc2lvbi1jbXNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJY29uIG9wdGlvbnM9XCJnaXRodWJcIiBidXR0b24gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGlzdEl0ZW0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L05hdmJhcj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9OYXZiYXJDb250YWluZXI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9OYXZiYXJTdGlja3k+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L1NlY3Rpb24+XG4gICAgICAgICAgICAgICAgICAgICAgICA8T2ZmY2FudmFzIGlkPVwibWVudVwiIG9wdGlvbnM9XCJvdmVybGF5OiB0cnVlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpc3QgdHlwZT1cImRpdmlkZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpc3RJdGVtPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE5hdkxpbmsgdG89XCIvXCI+SG9tZTwvTmF2TGluaz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaXN0SXRlbT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpc3RJdGVtPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE5hdkxpbmsgdG89XCIvZG9jcy9hY2NvcmRpb25cIj5BY2NvcmRpb248L05hdkxpbms+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGlzdEl0ZW0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaXN0SXRlbT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxOYXZMaW5rIHRvPVwiL2RvY3MvYWxlcnRcIj5BbGVydDwvTmF2TGluaz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaXN0SXRlbT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpc3RJdGVtPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE5hdkxpbmsgdG89XCIvZG9jcy9hcnRpY2xlXCI+QXJ0aWNsZTwvTmF2TGluaz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaXN0SXRlbT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpc3RJdGVtPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE5hdkxpbmsgdG89XCIvZG9jcy9iYWRnZVwiPkJhZGdlPC9OYXZMaW5rPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpc3RJdGVtPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGlzdEl0ZW0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TmF2TGluayB0bz1cIi9kb2NzL2ljb25cIj5JY29uPC9OYXZMaW5rPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpc3RJdGVtPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGlzdD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvT2ZmY2FudmFzPlxuICAgICAgICAgICAgICAgICAgICAgICAgPFJvdXRlIGV4YWN0IHBhdGg9XCIvXCIgY29tcG9uZW50PXtJbmRleFBhZ2V9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8Um91dGUgcGF0aD1cIi9kb2NzXCIgY29tcG9uZW50PXtEb2NzUGFnZX0gLz5cbiAgICAgICAgICAgICAgICAgICAgPC9TZWN0aW9uPlxuICAgICAgICAgICAgICAgIDwvUm91dGVyPlxuICAgICAgICAgICAgPC9PZmZjYW52YXNDb250YWluZXI+XG4gICAgICAgIClcbiAgICB9XG59IiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgUm91dGUsIE5hdkxpbmsgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcblxuaW1wb3J0IHtcbiAgICBDb250YWluZXIsXG4gICAgRmxleCxcbiAgICBGb3JtLFxuICAgIElucHV0Q29udGFpbmVyLFxuICAgIExhYmVsLFxuICAgIFNlbGVjdCxcbiAgICBTZWxlY3RPcHRpb24sXG4gICAgTGlzdCxcbiAgICBMaXN0SXRlbSxcbiAgICBOYXYsXG4gICAgTmF2SXRlbSxcbiAgICBTZWN0aW9uLFxuICAgIFNpZGViYXJcbn0gZnJvbSAndWlraXQtcmVhY3QnO1xuXG5pbXBvcnQgeyBEb2N1bWVudGF0aW9uIH0gZnJvbSAnLi9Eb2N1bWVudGF0aW9uJztcbmltcG9ydCB7IGRvY3NOYXYgfSBmcm9tICcuL2RvY3MtbmF2JztcblxuZXhwb3J0IGNsYXNzIERvY3NQYWdlIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50PGFueSwgYW55PiB7XG4gICAgY29uc3RydWN0b3IgKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKTtcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHsgdmVyc2lvbjogJzAuMC4xJyB9O1xuICAgIH1cblxuICAgIHByaXZhdGUgb25WZXJzaW9uQ2hhbmdlKGV2ZW50KSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgdmVyc2lvbjogZXZlbnQudGFyZ2V0LnZhbHVlXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxTZWN0aW9uPlxuICAgICAgICAgICAgICAgIDxDb250YWluZXI+XG4gICAgICAgICAgICAgICAgICAgIDxDb250YWluZXI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8U2lkZWJhciBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b3A6ICc4MHB4JyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm90dG9tOiAnMCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJveFNpemluZzogJ2JvcmRlci1ib3gnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAnNDBweCA0MHB4IDYwcHggNDBweCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlclJpZ2h0OiAnMXB4ICNlNWU1ZTUgc29saWQnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6ICdhdXRvJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3ZlcmZsb3c6ICdhdXRvJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb249XCJmaXhlZFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxOYXYgcHJlc2V0PVwiZGVmYXVsdFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7LyogPE5hdkl0ZW0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SW5wdXRDb250YWluZXI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMYWJlbCBodG1sRm9yPVwidmVyc2lvblwiPlZlcnNpb248L0xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8U2VsZWN0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD1cInZlcnNpb25cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUudmVyc2lvbn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLm9uVmVyc2lvbkNoYW5nZS5iaW5kKHRoaXMpfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxTZWxlY3RPcHRpb24gdmFsdWU9XCIwLjAuMVwiPjAuMC4xPC9TZWxlY3RPcHRpb24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8U2VsZWN0T3B0aW9uIHZhbHVlPVwiMC4wLjJcIj4wLjAuMjwvU2VsZWN0T3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1NlbGVjdD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0lucHV0Q29udGFpbmVyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Gb3JtPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L05hdkl0ZW0+ICovfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dGhpcy5yZW5kZXJNZW51KCl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9OYXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L1NpZGViYXI+XG4gICAgICAgICAgICAgICAgICAgIDwvQ29udGFpbmVyPlxuICAgICAgICAgICAgICAgICAgICA8Q29udGFpbmVyIHNpemU9XCIxLTFcIiBzdHlsZT17eyBwYWRkaW5nTGVmdDogJzIyMCcgfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8Um91dGUgcGF0aD17YCR7dGhpcy5wcm9wcy5tYXRjaC51cmx9Lzp2ZXJzaW9uLzpuYW1lYH0gY29tcG9uZW50PXtEb2N1bWVudGF0aW9ufSAvPlxuICAgICAgICAgICAgICAgICAgICA8L0NvbnRhaW5lcj5cbiAgICAgICAgICAgICAgICA8L0NvbnRhaW5lcj5cbiAgICAgICAgICAgIDwvU2VjdGlvbj5cbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIHJlbmRlck1lbnUoKSB7XG4gICAgICAgIGxldCBjb3VudCA9IDA7XG4gICAgICAgIHJldHVybiBPYmplY3Qua2V5cyhkb2NzTmF2KS5tYXAoKGspID0+IHtcbiAgICAgICAgICAgIGNvdW50Kys7XG4gICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgIDxOYXZJdGVtIGtleT17a30gdHlwZT17Y291bnQgPT09IDEgPyBcImRpdmlkZXJcIiA6IG51bGx9PlxuICAgICAgICAgICAgICAgICAgICA8TmF2TGluayB0bz17YC9kb2NzLyR7dGhpcy5zdGF0ZS52ZXJzaW9ufS8ke2RvY3NOYXZba10udG9Mb3dlckNhc2UoKX1gfT57ZG9jc05hdltrXX08L05hdkxpbms+XG4gICAgICAgICAgICAgICAgPC9OYXZJdGVtPlxuICAgICAgICAgICAgKTtcbiAgICAgICAgfSk7XG4gICAgfVxufSIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCAqIGFzIFByaXNtIGZyb20gJ3ByaXNtanMnO1xuaW1wb3J0ICogYXMgbWFya2VkIGZyb20gJ21hcmtlZCc7XG5pbXBvcnQgeyBSb3V0ZSwgTmF2TGluayB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xuaW1wb3J0IHsgTWFya2Rvd24gfSBmcm9tICcuL3BhcnNlLW1hcmtkb3duJztcbmltcG9ydCB7IGNvbXBpbGUgfSBmcm9tICcuL21hcmtzeS1jb21wb25lbnRzJztcbmltcG9ydCB7XG4gICAgQXJ0aWNsZSxcbiAgICBDb250YWluZXIsXG4gICAgRmxleCxcbiAgICBMaXN0LFxuICAgIExpc3RJdGVtLFxuICAgIE5hdixcbiAgICBOYXZJdGVtLFxuICAgIFNlY3Rpb24sXG4gICAgU2lkZWJhclxufSBmcm9tICd1aWtpdC1yZWFjdCc7XG5cbmV4cG9ydCBjbGFzcyBEb2N1bWVudGF0aW9uIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50PGFueSwgYW55PiB7XG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpO1xuICAgICAgICBjb25zdCB7IG5hbWUsIHZlcnNpb24gfSA9IHRoaXMucHJvcHMubWF0Y2gucGFyYW1zO1xuICAgICAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgICAgICAgbmFtZTogbmFtZSxcbiAgICAgICAgICAgIHZlcnNpb246IHZlcnNpb24sXG4gICAgICAgICAgICBwYXJzZWRNYXJrZG93bjogbnVsbCxcbiAgICAgICAgICAgIGlzTG9hZGluZzogdHJ1ZVxuICAgICAgICB9O1xuICAgIH1cblxuICAgIGNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMobmV4dFByb3BzKSB7XG4gICAgICAgIGNvbnN0IHsgbmFtZSwgdmVyc2lvbiB9ID0gbmV4dFByb3BzLm1hdGNoLnBhcmFtcztcbiAgICAgICAgaWYgKHRoaXMuc3RhdGUubmFtZSAhPT0gbmFtZSkge1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgICAgbmFtZTogbmFtZVxuICAgICAgICAgICAgfSwgKCkgPT4gdGhpcy5mZXRjaERvY3MoKSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5zdGF0ZS52ZXJzaW9uICE9PSB2ZXJzaW9uKSB7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgICB2ZXJzaW9uOiB2ZXJzaW9uXG4gICAgICAgICAgICB9LCAoKSA9PiB0aGlzLmZldGNoRG9jcygpKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHNob3VsZENvbXBvbmVudFVwZGF0ZShuZXh0UHJvcHMsIG5leHRTdGF0ZSk6IGJvb2xlYW4ge1xuICAgICAgICBjb25zdCB7IG5hbWUsIHZlcnNpb24gfSA9IG5leHRQcm9wcy5tYXRjaC5wYXJhbXM7XG4gICAgICAgIGlmICh0aGlzLnN0YXRlLm5hbWUgIT09IG5hbWUpIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMuc3RhdGUudmVyc2lvbiAhPT0gdmVyc2lvbikge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5zdGF0ZS5pc0xvYWRpbmcgIT09IG5leHRTdGF0ZS5pc0xvYWRpbmcpIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgICAgICB0aGlzLmZldGNoRG9jcygpO1xuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxTZWN0aW9uIHBhZGRpbmc+XG4gICAgICAgICAgICAgICAgPEFydGljbGUgdGl0bGU9e3RoaXMuc3RhdGUubmFtZS5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIHRoaXMuc3RhdGUubmFtZS5zdWJzdHIoMSl9PlxuICAgICAgICAgICAgICAgICAgICB7dGhpcy5zdGF0ZS5wYXJzZWRNYXJrZG93biA/IHRoaXMuc3RhdGUucGFyc2VkTWFya2Rvd24udHJlZSA6IG51bGx9XG4gICAgICAgICAgICAgICAgPC9BcnRpY2xlPlxuICAgICAgICAgICAgPC9TZWN0aW9uPlxuICAgICAgICApO1xuICAgIH1cblxuICAgIHByaXZhdGUgZmV0Y2hEb2NzKCkge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHsgaXNMb2FkaW5nOiB0cnVlIH0pO1xuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLnN0YXRlLm5hbWUpO1xuICAgICAgICBmZXRjaChgL3NyYy9kb2NzLyR7dGhpcy5zdGF0ZS52ZXJzaW9ufS8ke3RoaXMuc3RhdGUubmFtZX0ubWRgKVxuICAgICAgICAgICAgLnRoZW4oKHJlcykgPT4gcmVzLnRleHQoKSlcbiAgICAgICAgICAgIC50aGVuKHRleHQgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICAgICAgICBwYXJzZWRNYXJrZG93bjogY29tcGlsZSh0ZXh0KSxcbiAgICAgICAgICAgICAgICAgICAgaXNMb2FkaW5nOiBmYWxzZVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihlcnIpO1xuICAgICAgICAgICAgfSk7XG4gICAgfVxufSIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCAqIGFzIFJlYWN0RE9NIGZyb20gJ3JlYWN0LWRvbS9zZXJ2ZXInO1xuaW1wb3J0ICogYXMgUHJpc20gZnJvbSAncHJpc21qcyc7XG5cbmV4cG9ydCBjbGFzcyBDb2RlIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50PGFueSwgYW55PiB7XG4gICAgcmVuZGVyKCkge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGNvZGVcbiAgICAgICAgICAgICAgICBkYW5nZXJvdXNseVNldElubmVySFRNTD17eyBfX2h0bWw6IFByaXNtLmhpZ2hsaWdodCh0aGlzLnByb3BzLmNvZGUsIFByaXNtLmxhbmd1YWdlcy50c3gpIH19XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibGFuZ3VhZ2UtdHN4XCI+XG4gICAgICAgICAgICA8L2NvZGU+XG4gICAgICAgICk7XG4gICAgfVxufSIsImV4cG9ydCBjb25zdCBkb2NzTmF2ID0ge1xuICAgIGFjY29yZGlvbjogJ0FjY29yZGlvbicsXG4gICAgYWxlcnQ6ICdBbGVydCcsXG4gICAgYXJ0aWNsZTogJ0FydGljbGUnLFxuICAgIGJhZGdlOiAnQmFkZ2UnLFxuICAgIGJyZWFkY3J1bWI6ICdCcmVhZGNydW1iJyxcbiAgICBidXR0b246ICdCdXR0b24nLFxuICAgIGNhcmQ6ICdDYXJkJyxcbiAgICBjb250YWluZXI6ICdDb250YWluZXInLFxuICAgIGNvdmVyOiAnQ292ZXInLFxuICAgIGRhcms6ICdEYXJrJyxcbiAgICBkcm9wZG93bjogJ0Ryb3Bkb3duJyxcbiAgICBmbGV4OiAnRmxleCcsXG4gICAgZ3JpZDogJ0dyaWQnLFxuICAgIGljb246ICdJY29uJyxcbiAgICBpbWFnZTogJ0ltYWdlJyxcbiAgICBsYWJlbHM6ICdMYWJlbHMnLFxuICAgIGxpZ2h0OiAnTGlnaHQnLFxuICAgIExpZ2h0Ym94OiAnTGlnaHRib3gnLFxuICAgIGxpbms6ICdMaW5rJyxcbiAgICBsaXN0OiAnTGlzdCcsXG4gICAgbWFyZ2luOiAnTWFyZ2luJyxcbiAgICBuYXY6ICdOYXYnLFxuICAgIG5hdmJhcjogJ05hdmJhcicsXG4gICAgb2ZmY2FudmFzOiAnT2ZmY2FudmFzJyxcbiAgICBvdmVybGF5OiAnT3ZlcmxheScsXG4gICAgcGFuZWw6ICdQYW5lbCcsXG4gICAgcGFyYWxsYXg6ICdQYXJhbGxheCcsXG4gICAgcHJvZ3Jlc3M6ICdQcm9ncmVzcycsXG4gICAgc2Nyb2xsc3B5OiAnU2Nyb2xsc3B5JyxcbiAgICBzZWN0aW9uOiAnU2VjdGlvbicsXG4gICAgc2lkZWJhcjogJ1NpZGViYXInLFxuICAgIHNsaWRlc2hvdzogJ1NsaWRlc2hvdycsXG4gICAgdGFiOiAnVGFiJyxcbiAgICB0YWJsZTogJ1RhYmxlJ1xufSIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCAqIGFzIFByaXNtIGZyb20gJ3ByaXNtanMnO1xuaW1wb3J0IHsgZXNjYXBlIH0gZnJvbSAnaGUnO1xuaW1wb3J0IG1hcmtzeSBmcm9tICdtYXJrc3kvY29tcG9uZW50cyc7XG5pbXBvcnQge1xuICAgIEFjY29yZGlvbixcbiAgICBBY2NvcmRpb25JdGVtLFxuICAgIEFsZXJ0LFxuICAgIEFydGljbGUsXG4gICAgQmFkZ2UsXG4gICAgQnJlYWRjcnVtYixcbiAgICBCdXR0b24sXG4gICAgQ2FyZCxcbiAgICBDYXJkQm9keSxcbiAgICBDYXJkRm9vdGVyLFxuICAgIENhcmRIZWFkZXIsXG4gICAgQ2FyZFRpdGxlLFxuICAgIExpbmssXG4gICAgVGFiLFxuICAgIFRhYkNvbnRhaW5lcixcbiAgICBUYWJDb250ZW50LFxuICAgIFRhYmxlXG59IGZyb20gJ3Vpa2l0LXJlYWN0JztcbmltcG9ydCB7IENvZGUgfSBmcm9tICcuL2NvZGUnO1xuXG5leHBvcnQgY29uc3QgY29tcGlsZSA9IG1hcmtzeSh7XG4gICAgY3JlYXRlRWxlbWVudDogUmVhY3QuY3JlYXRlRWxlbWVudCxcbiAgICBoaWdobGlnaHQobGFuZ3VhZ2UsIGNvZGUpIHtcbiAgICAgICAgcmV0dXJuIFByaXNtLmhpZ2hsaWdodChjb2RlLCBQcmlzbS5sYW5ndWFnZXMudHN4KTtcbiAgICB9LFxuICAgIGVsZW1lbnRzOiB7XG4gICAgICAgIHRhYmxlKHtjaGlsZHJlbn0pIHtcbiAgICAgICAgICAgIHJldHVybiA8VGFibGUgZGl2aWRlcj57Y2hpbGRyZW59PC9UYWJsZT5cbiAgICAgICAgfVxuICAgIH0sXG4gICAgY29tcG9uZW50czoge1xuICAgICAgICBBY2NvcmRpb24sXG4gICAgICAgIEFjY29yZGlvbkl0ZW0sXG4gICAgICAgIEFsZXJ0LFxuICAgICAgICBBcnRpY2xlLFxuICAgICAgICBCYWRnZSxcbiAgICAgICAgQnJlYWRjcnVtYixcbiAgICAgICAgQnV0dG9uLFxuICAgICAgICBDYXJkLFxuICAgICAgICBDYXJkQm9keSxcbiAgICAgICAgQ2FyZEZvb3RlcixcbiAgICAgICAgQ2FyZEhlYWRlcixcbiAgICAgICAgQ2FyZFRpdGxlLFxuICAgICAgICBDb2RlLFxuICAgICAgICBMaW5rLFxuICAgICAgICBUYWIsXG4gICAgICAgIFRhYkNvbnRhaW5lcixcbiAgICAgICAgVGFiQ29udGVudFxuICAgIH1cbn0pOyIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0IHsgQnV0dG9uIH0gZnJvbSAndWlraXQtcmVhY3QnO1xuaW1wb3J0IHsgQ29udGFpbmVyIH0gZnJvbSAndWlraXQtcmVhY3QnO1xuaW1wb3J0IHsgRmxleCB9IGZyb20gJ3Vpa2l0LXJlYWN0JztcbmltcG9ydCB7IExpZ2h0IH0gZnJvbSAndWlraXQtcmVhY3QnO1xuaW1wb3J0IHsgTGlzdCB9IGZyb20gJ3Vpa2l0LXJlYWN0JztcbmltcG9ydCB7IExpc3RJdGVtIH0gZnJvbSAndWlraXQtcmVhY3QnO1xuaW1wb3J0IHsgU2VjdGlvbiB9IGZyb20gJ3Vpa2l0LXJlYWN0JztcbmltcG9ydCB7IEltYWdlIH0gZnJvbSAndWlraXQtcmVhY3QnO1xuXG5leHBvcnQgY2xhc3MgSW5kZXhQYWdlIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8RmxleCBkaXJlY3Rpb249XCJjb2x1bW5cIj5cbiAgICAgICAgICAgICAgICA8TGlnaHQ+XG4gICAgICAgICAgICAgICAgICAgIDxTZWN0aW9uIGNvbG9yPVwic2Vjb25kYXJ5XCIgcGFkZGluZz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxGbGV4IGFsaWdubWVudD1cImNlbnRlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvYmplY3Qgd2lkdGg9XCIzMDBcIiBoZWlnaHQ9XCIzMDBcIiBkYXRhPVwiL2NsaWVudC9pbWFnZXMvdWlraXQtcmVhY3Quc3ZnXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvRmxleD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxGbGV4IGFsaWdubWVudD1cImNlbnRlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMj5SZWFjdCBVSWtpdDwvaDI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L0ZsZXg+XG4gICAgICAgICAgICAgICAgICAgICAgICA8RmxleCBhbGlnbm1lbnQ9XCJjZW50ZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIHNpemU9XCJsYXJnZVwiIGNvbG9yPVwicHJpbWFyeVwiPkdldCBTdGFydGVkPC9CdXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L0ZsZXg+XG4gICAgICAgICAgICAgICAgICAgIDwvU2VjdGlvbj5cbiAgICAgICAgICAgICAgICA8L0xpZ2h0PlxuICAgICAgICAgICAgICAgIDxTZWN0aW9uIHNpemU9XCJkZWZhdWx0XCIgcGFkZGluZz5cbiAgICAgICAgICAgICAgICAgICAgPENvbnRhaW5lcj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxGbGV4IGFsaWdubWVudD1cImNlbnRlclwiIGRpcmVjdGlvbj1cInJvd1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaXN0IHR5cGU9XCJkaXZpZGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaXN0SXRlbT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPkxvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNjaW5nIGVsaXQuIEludGVnZXIgbmVjIG9kaW8uIFByYWVzZW50IGxpYmVyby4gU2VkIGN1cnN1cyBhbnRlIGRhcGlidXMgZGlhbS4gU2VkIG5pc2kuIE51bGxhIHF1aXMgc2VtIGF0IG5pYmggZWxlbWVudHVtIGltcGVyZGlldC4gRHVpcyBzYWdpdHRpcyBpcHN1bS4gPGI+TG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2NpbmcgZWxpdDwvYj4uIFByYWVzZW50IG1hdXJpcy4gRnVzY2UgbmVjIHRlbGx1cyBzZWQgYXVndWUgc2VtcGVyIHBvcnRhLiA8Yj5Mb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzY2luZyBlbGl0PC9iPi4gTWF1cmlzIG1hc3NhLiBWZXN0aWJ1bHVtIGxhY2luaWEgYXJjdSBlZ2V0IG51bGxhLiBDbGFzcyBhcHRlbnQgdGFjaXRpIHNvY2lvc3F1IGFkIGxpdG9yYSB0b3JxdWVudCBwZXIgY29udWJpYSBub3N0cmEsIHBlciBpbmNlcHRvcyBoaW1lbmFlb3MuIEN1cmFiaXR1ciBzb2RhbGVzIGxpZ3VsYSBpbiBsaWJlcm8uIDxiPkxvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNjaW5nIGVsaXQ8L2I+LiBTZWQgZGlnbmlzc2ltIGxhY2luaWEgbnVuYy4gPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpc3RJdGVtPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGlzdEl0ZW0+IFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+Q3VyYWJpdHVyIHRvcnRvci4gUGVsbGVudGVzcXVlIG5pYmguIDxpPkxvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNjaW5nIGVsaXQ8L2k+LiBBZW5lYW4gcXVhbS4gSW4gc2NlbGVyaXNxdWUgc2VtIGF0IGRvbG9yLiBNYWVjZW5hcyBtYXR0aXMuIFNlZCBjb252YWxsaXMgdHJpc3RpcXVlIHNlbS4gUHJvaW4gdXQgbGlndWxhIHZlbCBudW5jIGVnZXN0YXMgcG9ydHRpdG9yLiBNb3JiaSBsZWN0dXMgcmlzdXMsIGlhY3VsaXMgdmVsLCBzdXNjaXBpdCBxdWlzLCBsdWN0dXMgbm9uLCBtYXNzYS4gRnVzY2UgYWMgdHVycGlzIHF1aXMgbGlndWxhIGxhY2luaWEgYWxpcXVldC4gPGk+TG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2NpbmcgZWxpdDwvaT4uIE1hdXJpcyBpcHN1bS4gTnVsbGEgbWV0dXMgbWV0dXMsIHVsbGFtY29ycGVyIHZlbCwgdGluY2lkdW50IHNlZCwgZXVpc21vZCBpbiwgbmliaC4gPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpc3RJdGVtPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGlzdEl0ZW0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD48aT5Mb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzY2luZyBlbGl0PC9pPi4gUXVpc3F1ZSB2b2x1dHBhdCBjb25kaW1lbnR1bSB2ZWxpdC4gPGk+U2VkIGRpZ25pc3NpbSBsYWNpbmlhIG51bmM8L2k+LiBDbGFzcyBhcHRlbnQgdGFjaXRpIHNvY2lvc3F1IGFkIGxpdG9yYSB0b3JxdWVudCBwZXIgY29udWJpYSBub3N0cmEsIHBlciBpbmNlcHRvcyBoaW1lbmFlb3MuIE5hbSBuZWMgYW50ZS4gU2VkIGxhY2luaWEsIHVybmEgbm9uIHRpbmNpZHVudCBtYXR0aXMsIHRvcnRvciBuZXF1ZSBhZGlwaXNjaW5nIGRpYW0sIGEgY3Vyc3VzIGlwc3VtIGFudGUgcXVpcyB0dXJwaXMuIE51bGxhIGZhY2lsaXNpLiA8Yj5Qcm9pbiB1dCBsaWd1bGEgdmVsIG51bmMgZWdlc3RhcyBwb3J0dGl0b3I8L2I+LiBVdCBmcmluZ2lsbGEuIFN1c3BlbmRpc3NlIHBvdGVudGkuIE51bmMgZmV1Z2lhdCBtaSBhIHRlbGx1cyBjb25zZXF1YXQgaW1wZXJkaWV0LiBWZXN0aWJ1bHVtIHNhcGllbi4gUHJvaW4gcXVhbS4gRXRpYW0gdWx0cmljZXMuIFN1c3BlbmRpc3NlIGluIGp1c3RvIGV1IG1hZ25hIGx1Y3R1cyBzdXNjaXBpdC4gU2VkIGxlY3R1cy4gSW50ZWdlciBldWlzbW9kIGxhY3VzIGx1Y3R1cyBtYWduYS4gPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpc3RJdGVtPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGlzdEl0ZW0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5RdWlzcXVlIGN1cnN1cywgbWV0dXMgdml0YWUgcGhhcmV0cmEgYXVjdG9yLCBzZW0gbWFzc2EgbWF0dGlzIHNlbSwgYXQgaW50ZXJkdW0gbWFnbmEgYXVndWUgZWdldCBkaWFtLiBWZXN0aWJ1bHVtIGFudGUgaXBzdW0gcHJpbWlzIGluIGZhdWNpYnVzIG9yY2kgbHVjdHVzIGV0IHVsdHJpY2VzIHBvc3VlcmUgY3ViaWxpYSBDdXJhZTsgTW9yYmkgbGFjaW5pYSBtb2xlc3RpZSBkdWkuIFByYWVzZW50IGJsYW5kaXQgZG9sb3IuIFNlZCBub24gcXVhbS4gSW4gdmVsIG1pIHNpdCBhbWV0IGF1Z3VlIGNvbmd1ZSBlbGVtZW50dW0uIE1vcmJpIGluIGlwc3VtIHNpdCBhbWV0IHBlZGUgZmFjaWxpc2lzIGxhb3JlZXQuIERvbmVjIGxhY3VzIG51bmMsIHZpdmVycmEgbmVjLCBibGFuZGl0IHZlbCwgZWdlc3RhcyBldCwgYXVndWUuIFZlc3RpYnVsdW0gdGluY2lkdW50IG1hbGVzdWFkYSB0ZWxsdXMuIFV0IHVsdHJpY2VzIHVsdHJpY2VzIGVuaW0uIDxiPlN1c3BlbmRpc3NlIGluIGp1c3RvIGV1IG1hZ25hIGx1Y3R1cyBzdXNjaXBpdDwvYj4uIEN1cmFiaXR1ciBzaXQgYW1ldCBtYXVyaXMuIE1vcmJpIGluIGR1aSBxdWlzIGVzdCBwdWx2aW5hciB1bGxhbWNvcnBlci4gPGI+VmVzdGlidWx1bSBhbnRlIGlwc3VtIHByaW1pcyBpbiBmYXVjaWJ1cyBvcmNpIGx1Y3R1cyBldCB1bHRyaWNlcyBwb3N1ZXJlIGN1YmlsaWEgQ3VyYWU7IE1vcmJpIGxhY2luaWEgbW9sZXN0aWUgZHVpPC9iPi4gTnVsbGEgZmFjaWxpc2kuIEludGVnZXIgbGFjaW5pYSBzb2xsaWNpdHVkaW4gbWFzc2EuIDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaXN0SXRlbT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpc3Q+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L0ZsZXg+XG4gICAgICAgICAgICAgICAgICAgIDwvQ29udGFpbmVyPlxuICAgICAgICAgICAgICAgIDwvU2VjdGlvbj5cbiAgICAgICAgICAgIDwvRmxleD5cbiAgICAgICAgKTtcbiAgICB9XG59Il0sInNvdXJjZVJvb3QiOiIifQ==
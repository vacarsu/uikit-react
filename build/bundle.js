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
!(function webpackMissingModule() { var e = new Error("Cannot find module 'uikit/dist/css/uikit.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var uikit_dist_css_uikit_min_css__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! uikit/dist/css/uikit.min.css */ "./node_modules/uikit/dist/css/uikit.min.css");
/* harmony import */ var uikit_dist_css_uikit_min_css__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(uikit_dist_css_uikit_min_css__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var uikit_react__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! uikit-react */ "./node_modules/uikit-react/lib/uikit-react.js");
/* harmony import */ var _pages_Docs_DocsPage__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./pages/Docs/DocsPage */ "./src/pages/Docs/DocsPage.tsx");
/* harmony import */ var _pages_Index_IndexPage__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./pages/Index/IndexPage */ "./src/pages/Index/IndexPage.tsx");
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
    console.log(uikit_react__WEBPACK_IMPORTED_MODULE_12__["Section"]);
    Object(react_dom__WEBPACK_IMPORTED_MODULE_1__["render"])(react__WEBPACK_IMPORTED_MODULE_0__["createElement"](ExamplePage, null), document.getElementById('root'));
}, false);
var ExamplePage = /** @class */ (function (_super) {
    __extends(ExamplePage, _super);
    function ExamplePage() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ExamplePage.prototype.render = function () {
        return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](uikit_react__WEBPACK_IMPORTED_MODULE_12__["OffcanvasContainer"], null,
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_router_dom__WEBPACK_IMPORTED_MODULE_2__["BrowserRouter"], null,
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"](uikit_react__WEBPACK_IMPORTED_MODULE_12__["Section"], { position: "relative" },
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"](uikit_react__WEBPACK_IMPORTED_MODULE_12__["Section"], { color: "secondary", preserveColor: true },
                        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](uikit_react__WEBPACK_IMPORTED_MODULE_12__["NavbarSticky"], { options: "animation: uk-animation-slide-top; cls-inactive: uk-navbar-transparent uk-light; top: 556;" },
                            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](uikit_react__WEBPACK_IMPORTED_MODULE_12__["NavbarContainer"], { transparent: true },
                                react__WEBPACK_IMPORTED_MODULE_0__["createElement"](uikit_react__WEBPACK_IMPORTED_MODULE_12__["Navbar"], null,
                                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"](uikit_react__WEBPACK_IMPORTED_MODULE_12__["ListItem"], null,
                                        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](uikit_react__WEBPACK_IMPORTED_MODULE_12__["Link"], { toggleOptions: "target: #menu;", href: "#" },
                                            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](uikit_react__WEBPACK_IMPORTED_MODULE_12__["Icon"], { options: "menu", button: true })))),
                                react__WEBPACK_IMPORTED_MODULE_0__["createElement"](uikit_react__WEBPACK_IMPORTED_MODULE_12__["Navbar"], { align: "right" },
                                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"](uikit_react__WEBPACK_IMPORTED_MODULE_12__["ListItem"], null,
                                        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](uikit_react__WEBPACK_IMPORTED_MODULE_12__["Link"], { href: "https://github.com/vacarsu/dimension-cms" },
                                            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](uikit_react__WEBPACK_IMPORTED_MODULE_12__["Icon"], { options: "github", button: true }))))))),
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"](uikit_react__WEBPACK_IMPORTED_MODULE_12__["Offcanvas"], { id: "menu", options: "overlay: true" },
                        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](uikit_react__WEBPACK_IMPORTED_MODULE_12__["List"], { type: "divider" },
                            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](uikit_react__WEBPACK_IMPORTED_MODULE_12__["ListItem"], null,
                                react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_router_dom__WEBPACK_IMPORTED_MODULE_2__["NavLink"], { to: "/" }, "Home")),
                            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](uikit_react__WEBPACK_IMPORTED_MODULE_12__["ListItem"], null,
                                react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_router_dom__WEBPACK_IMPORTED_MODULE_2__["NavLink"], { to: "/docs/accordion" }, "Accordion")),
                            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](uikit_react__WEBPACK_IMPORTED_MODULE_12__["ListItem"], null,
                                react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_router_dom__WEBPACK_IMPORTED_MODULE_2__["NavLink"], { to: "/docs/alert" }, "Alert")),
                            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](uikit_react__WEBPACK_IMPORTED_MODULE_12__["ListItem"], null,
                                react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_router_dom__WEBPACK_IMPORTED_MODULE_2__["NavLink"], { to: "/docs/article" }, "Article")),
                            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](uikit_react__WEBPACK_IMPORTED_MODULE_12__["ListItem"], null,
                                react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_router_dom__WEBPACK_IMPORTED_MODULE_2__["NavLink"], { to: "/docs/badge" }, "Badge")),
                            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](uikit_react__WEBPACK_IMPORTED_MODULE_12__["ListItem"], null,
                                react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_router_dom__WEBPACK_IMPORTED_MODULE_2__["NavLink"], { to: "/docs/icon" }, "Icon")))),
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Route"], { exact: true, path: "/", component: _pages_Index_IndexPage__WEBPACK_IMPORTED_MODULE_14__["IndexPage"] }),
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Route"], { path: "/docs", component: _pages_Docs_DocsPage__WEBPACK_IMPORTED_MODULE_13__["DocsPage"] })))));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL3BhZ2VzL0RvY3MvRG9jc1BhZ2UudHN4Iiwid2VicGFjazovLy8uL3NyYy9wYWdlcy9Eb2NzL0RvY3VtZW50YXRpb24udHN4Iiwid2VicGFjazovLy8uL3NyYy9wYWdlcy9Eb2NzL2NvZGUudHN4Iiwid2VicGFjazovLy8uL3NyYy9wYWdlcy9Eb2NzL2RvY3MtbmF2LnRzIiwid2VicGFjazovLy8uL3NyYy9wYWdlcy9Eb2NzL21hcmtzeS1jb21wb25lbnRzLnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXMvSW5kZXgvSW5kZXhQYWdlLnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxnQkFBUSxvQkFBb0I7QUFDNUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBaUIsNEJBQTRCO0FBQzdDO0FBQ0E7QUFDQSwwQkFBa0IsMkJBQTJCO0FBQzdDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGtEQUEwQyxnQ0FBZ0M7QUFDMUU7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxnRUFBd0Qsa0JBQWtC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LEVBQUMsUUFBUTt3QkFDcEIsZ0VBQVEsS0FBSyxFQUFDLEtBQUssRUFBQyxNQUFNLEVBQUMsS0FBSyxFQUFDLElBQUksRUFBQyxnQ0FBZ0MsR0FBRyxDQUN0RTtvQkFDUCxvREFBQyxnREFBSSxJQUFDLFNBQVMsRUFBQyxRQUFRO3dCQUNwQiw4RUFBb0IsQ0FDakI7b0JBQ1Asb0RBQUMsZ0RBQUksSUFBQyxTQUFTLEVBQUMsUUFBUTt3QkFDcEIsb0RBQUMsa0RBQU0sSUFBQyxJQUFJLEVBQUMsT0FBTyxFQUFDLEtBQUssRUFBQyxTQUFTLGtCQUFxQixDQUN0RCxDQUNELENBQ047WUFDUixvREFBQyxtREFBTyxJQUFDLElBQUksRUFBQyxTQUFTLEVBQUMsT0FBTztnQkFDM0Isb0RBQUMscURBQVM7b0JBQ04sb0RBQUMsZ0RBQUksSUFBQyxTQUFTLEVBQUMsUUFBUSxFQUFDLFNBQVMsRUFBQyxLQUFLO3dCQUNwQyxvREFBQyxnREFBSSxJQUFDLElBQUksRUFBQyxTQUFTOzRCQUNoQixvREFBQyxvREFBUTtnQ0FDTDs7b0NBQXdNLHlIQUE4RDs7b0NBQTRELHlIQUE4RDs7b0NBQW9MLHlIQUE4RDtxRUFBa0MsQ0FDN29COzRCQUNYLG9EQUFDLG9EQUFRO2dDQUNMOztvQ0FBd0MseUhBQThEOztvQ0FBc1AseUhBQThEOzRIQUF5RixDQUM1ZTs0QkFDWCxvREFBQyxvREFBUTtnQ0FDTDtvQ0FBRyx5SEFBOEQ7O29DQUFzQyw0RkFBaUM7O29DQUFtTyw0R0FBaUQ7d1FBQXFPLENBQzFuQjs0QkFDWCxvREFBQyxvREFBUTtnQ0FDTDs7b0NBQStkLCtHQUFvRDs7b0NBQXlFLG9MQUF5SDs2RkFBMEQsQ0FDeHdCLENBQ1IsQ0FDSixDQUNDLENBQ04sQ0FDUCxDQUNWLENBQUM7SUFDTixDQUFDO0lBQ0wsZ0JBQUM7QUFBRCxDQUFDLENBeEM4QiwrQ0FBZSxHQXdDN0MiLCJmaWxlIjoiYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gaW5zdGFsbCBhIEpTT05QIGNhbGxiYWNrIGZvciBjaHVuayBsb2FkaW5nXG4gXHRmdW5jdGlvbiB3ZWJwYWNrSnNvbnBDYWxsYmFjayhkYXRhKSB7XG4gXHRcdHZhciBjaHVua0lkcyA9IGRhdGFbMF07XG4gXHRcdHZhciBtb3JlTW9kdWxlcyA9IGRhdGFbMV07XG4gXHRcdHZhciBleGVjdXRlTW9kdWxlcyA9IGRhdGFbMl07XG5cbiBcdFx0Ly8gYWRkIFwibW9yZU1vZHVsZXNcIiB0byB0aGUgbW9kdWxlcyBvYmplY3QsXG4gXHRcdC8vIHRoZW4gZmxhZyBhbGwgXCJjaHVua0lkc1wiIGFzIGxvYWRlZCBhbmQgZmlyZSBjYWxsYmFja1xuIFx0XHR2YXIgbW9kdWxlSWQsIGNodW5rSWQsIGkgPSAwLCByZXNvbHZlcyA9IFtdO1xuIFx0XHRmb3IoO2kgPCBjaHVua0lkcy5sZW5ndGg7IGkrKykge1xuIFx0XHRcdGNodW5rSWQgPSBjaHVua0lkc1tpXTtcbiBcdFx0XHRpZihpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0pIHtcbiBcdFx0XHRcdHJlc29sdmVzLnB1c2goaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdWzBdKTtcbiBcdFx0XHR9XG4gXHRcdFx0aW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdID0gMDtcbiBcdFx0fVxuIFx0XHRmb3IobW9kdWxlSWQgaW4gbW9yZU1vZHVsZXMpIHtcbiBcdFx0XHRpZihPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwobW9yZU1vZHVsZXMsIG1vZHVsZUlkKSkge1xuIFx0XHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0gPSBtb3JlTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdFx0fVxuIFx0XHR9XG4gXHRcdGlmKHBhcmVudEpzb25wRnVuY3Rpb24pIHBhcmVudEpzb25wRnVuY3Rpb24oZGF0YSk7XG5cbiBcdFx0d2hpbGUocmVzb2x2ZXMubGVuZ3RoKSB7XG4gXHRcdFx0cmVzb2x2ZXMuc2hpZnQoKSgpO1xuIFx0XHR9XG5cbiBcdFx0Ly8gYWRkIGVudHJ5IG1vZHVsZXMgZnJvbSBsb2FkZWQgY2h1bmsgdG8gZGVmZXJyZWQgbGlzdFxuIFx0XHRkZWZlcnJlZE1vZHVsZXMucHVzaC5hcHBseShkZWZlcnJlZE1vZHVsZXMsIGV4ZWN1dGVNb2R1bGVzIHx8IFtdKTtcblxuIFx0XHQvLyBydW4gZGVmZXJyZWQgbW9kdWxlcyB3aGVuIGFsbCBjaHVua3MgcmVhZHlcbiBcdFx0cmV0dXJuIGNoZWNrRGVmZXJyZWRNb2R1bGVzKCk7XG4gXHR9O1xuIFx0ZnVuY3Rpb24gY2hlY2tEZWZlcnJlZE1vZHVsZXMoKSB7XG4gXHRcdHZhciByZXN1bHQ7XG4gXHRcdGZvcih2YXIgaSA9IDA7IGkgPCBkZWZlcnJlZE1vZHVsZXMubGVuZ3RoOyBpKyspIHtcbiBcdFx0XHR2YXIgZGVmZXJyZWRNb2R1bGUgPSBkZWZlcnJlZE1vZHVsZXNbaV07XG4gXHRcdFx0dmFyIGZ1bGZpbGxlZCA9IHRydWU7XG4gXHRcdFx0Zm9yKHZhciBqID0gMTsgaiA8IGRlZmVycmVkTW9kdWxlLmxlbmd0aDsgaisrKSB7XG4gXHRcdFx0XHR2YXIgZGVwSWQgPSBkZWZlcnJlZE1vZHVsZVtqXTtcbiBcdFx0XHRcdGlmKGluc3RhbGxlZENodW5rc1tkZXBJZF0gIT09IDApIGZ1bGZpbGxlZCA9IGZhbHNlO1xuIFx0XHRcdH1cbiBcdFx0XHRpZihmdWxmaWxsZWQpIHtcbiBcdFx0XHRcdGRlZmVycmVkTW9kdWxlcy5zcGxpY2UoaS0tLCAxKTtcbiBcdFx0XHRcdHJlc3VsdCA9IF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gZGVmZXJyZWRNb2R1bGVbMF0pO1xuIFx0XHRcdH1cbiBcdFx0fVxuIFx0XHRyZXR1cm4gcmVzdWx0O1xuIFx0fVxuXG4gXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuIFx0Ly8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4gXHQvLyBQcm9taXNlID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxuIFx0dmFyIGluc3RhbGxlZENodW5rcyA9IHtcbiBcdFx0XCJidW5kbGVcIjogMFxuIFx0fTtcblxuIFx0dmFyIGRlZmVycmVkTW9kdWxlcyA9IFtdO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHR2YXIganNvbnBBcnJheSA9IHdpbmRvd1tcIndlYnBhY2tKc29ucFwiXSA9IHdpbmRvd1tcIndlYnBhY2tKc29ucFwiXSB8fCBbXTtcbiBcdHZhciBvbGRKc29ucEZ1bmN0aW9uID0ganNvbnBBcnJheS5wdXNoLmJpbmQoanNvbnBBcnJheSk7XG4gXHRqc29ucEFycmF5LnB1c2ggPSB3ZWJwYWNrSnNvbnBDYWxsYmFjaztcbiBcdGpzb25wQXJyYXkgPSBqc29ucEFycmF5LnNsaWNlKCk7XG4gXHRmb3IodmFyIGkgPSAwOyBpIDwganNvbnBBcnJheS5sZW5ndGg7IGkrKykgd2VicGFja0pzb25wQ2FsbGJhY2soanNvbnBBcnJheVtpXSk7XG4gXHR2YXIgcGFyZW50SnNvbnBGdW5jdGlvbiA9IG9sZEpzb25wRnVuY3Rpb247XG5cblxuIFx0Ly8gYWRkIGVudHJ5IG1vZHVsZSB0byBkZWZlcnJlZCBsaXN0XG4gXHRkZWZlcnJlZE1vZHVsZXMucHVzaChbXCIuL3NyYy9hcHAudHN4XCIsXCJ2ZW5kb3JcIl0pO1xuIFx0Ly8gcnVuIGRlZmVycmVkIG1vZHVsZXMgd2hlbiByZWFkeVxuIFx0cmV0dXJuIGNoZWNrRGVmZXJyZWRNb2R1bGVzKCk7XG4iLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyByZW5kZXIgfSBmcm9tICdyZWFjdC1kb20nO1xuaW1wb3J0IHsgQnJvd3NlclJvdXRlciBhcyBSb3V0ZXIsIFJvdXRlLCBOYXZMaW5rIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XG5pbXBvcnQgJ3ByaXNtanMnO1xuaW1wb3J0ICdwcmlzbWpzL2NvbXBvbmVudHMvcHJpc20tamF2YXNjcmlwdC5taW4nO1xuaW1wb3J0ICdwcmlzbWpzL2NvbXBvbmVudHMvcHJpc20tanN4Lm1pbic7XG5pbXBvcnQgJ3ByaXNtanMvY29tcG9uZW50cy9wcmlzbS10c3gubWluJztcbmltcG9ydCAncHJpc21qcy9wbHVnaW5zL3Rvb2xiYXIvcHJpc20tdG9vbGJhcic7XG5pbXBvcnQgJ3ByaXNtanMvcGx1Z2lucy9jb3B5LXRvLWNsaXBib2FyZC9wcmlzbS1jb3B5LXRvLWNsaXBib2FyZCc7XG5pbXBvcnQgJ3ByaXNtanMvY29tcG9uZW50cy9wcmlzbS1jc3MubWluJztcbmltcG9ydCAndWlraXQvZGlzdC9jc3MvdWlraXQuanMnO1xuaW1wb3J0ICd1aWtpdC9kaXN0L2Nzcy91aWtpdC5taW4uY3NzJztcblxuaW1wb3J0IHtcbiAgICBDb250YWluZXIsXG4gICAgTGlnaHQsXG4gICAgSWNvbixcbiAgICBMaW5rLFxuICAgIExpc3QsXG4gICAgTGlzdEl0ZW0sXG4gICAgT2ZmY2FudmFzLFxuICAgIE9mZmNhbnZhc0NvbnRhaW5lcixcbiAgICBOYXZiYXIsXG4gICAgTmF2YmFyQ29udGFpbmVyLFxuICAgIE5hdmJhclN0aWNreSxcbiAgICBTZWN0aW9uXG59IGZyb20gJ3Vpa2l0LXJlYWN0JztcblxuXG5pbXBvcnQgeyBEb2NzUGFnZSB9IGZyb20gJy4vcGFnZXMvRG9jcy9Eb2NzUGFnZSc7XG5pbXBvcnQgeyBJbmRleFBhZ2UgfSBmcm9tICcuL3BhZ2VzL0luZGV4L0luZGV4UGFnZSc7XG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCAoKSA9PiB7XG4gICAgY29uc29sZS5sb2coU2VjdGlvbik7XG4gICAgcmVuZGVyKFxuICAgICAgICA8RXhhbXBsZVBhZ2UgLz4sXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyb290JylcbiAgICApO1xufSwgZmFsc2UpO1xuXG5jbGFzcyBFeGFtcGxlUGFnZSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudDxhbnksIGFueT4ge1xuICAgIHJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxPZmZjYW52YXNDb250YWluZXI+XG4gICAgICAgICAgICAgICAgPFJvdXRlcj5cbiAgICAgICAgICAgICAgICAgICAgPFNlY3Rpb24gcG9zaXRpb249XCJyZWxhdGl2ZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPFNlY3Rpb24gY29sb3I9XCJzZWNvbmRhcnlcIiBwcmVzZXJ2ZUNvbG9yPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxOYXZiYXJTdGlja3kgb3B0aW9ucz1cImFuaW1hdGlvbjogdWstYW5pbWF0aW9uLXNsaWRlLXRvcDsgY2xzLWluYWN0aXZlOiB1ay1uYXZiYXItdHJhbnNwYXJlbnQgdWstbGlnaHQ7IHRvcDogNTU2O1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TmF2YmFyQ29udGFpbmVyIHRyYW5zcGFyZW50PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE5hdmJhcj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGlzdEl0ZW0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIHRvZ2dsZU9wdGlvbnM9XCJ0YXJnZXQ6ICNtZW51O1wiIGhyZWY9XCIjXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SWNvbiBvcHRpb25zPVwibWVudVwiIGJ1dHRvbiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaXN0SXRlbT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTmF2YmFyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE5hdmJhciBhbGlnbj1cInJpZ2h0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpc3RJdGVtPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiaHR0cHM6Ly9naXRodWIuY29tL3ZhY2Fyc3UvZGltZW5zaW9uLWNtc1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEljb24gb3B0aW9ucz1cImdpdGh1YlwiIGJ1dHRvbiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaXN0SXRlbT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTmF2YmFyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L05hdmJhckNvbnRhaW5lcj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L05hdmJhclN0aWNreT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvU2VjdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxPZmZjYW52YXMgaWQ9XCJtZW51XCIgb3B0aW9ucz1cIm92ZXJsYXk6IHRydWVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGlzdCB0eXBlPVwiZGl2aWRlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGlzdEl0ZW0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TmF2TGluayB0bz1cIi9cIj5Ib21lPC9OYXZMaW5rPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpc3RJdGVtPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGlzdEl0ZW0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TmF2TGluayB0bz1cIi9kb2NzL2FjY29yZGlvblwiPkFjY29yZGlvbjwvTmF2TGluaz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaXN0SXRlbT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpc3RJdGVtPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE5hdkxpbmsgdG89XCIvZG9jcy9hbGVydFwiPkFsZXJ0PC9OYXZMaW5rPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpc3RJdGVtPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGlzdEl0ZW0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TmF2TGluayB0bz1cIi9kb2NzL2FydGljbGVcIj5BcnRpY2xlPC9OYXZMaW5rPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpc3RJdGVtPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGlzdEl0ZW0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TmF2TGluayB0bz1cIi9kb2NzL2JhZGdlXCI+QmFkZ2U8L05hdkxpbms+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGlzdEl0ZW0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaXN0SXRlbT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxOYXZMaW5rIHRvPVwiL2RvY3MvaWNvblwiPkljb248L05hdkxpbms+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGlzdEl0ZW0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaXN0PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9PZmZjYW52YXM+XG4gICAgICAgICAgICAgICAgICAgICAgICA8Um91dGUgZXhhY3QgcGF0aD1cIi9cIiBjb21wb25lbnQ9e0luZGV4UGFnZX0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxSb3V0ZSBwYXRoPVwiL2RvY3NcIiBjb21wb25lbnQ9e0RvY3NQYWdlfSAvPlxuICAgICAgICAgICAgICAgICAgICA8L1NlY3Rpb24+XG4gICAgICAgICAgICAgICAgPC9Sb3V0ZXI+XG4gICAgICAgICAgICA8L09mZmNhbnZhc0NvbnRhaW5lcj5cbiAgICAgICAgKVxuICAgIH1cbn0iLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBSb3V0ZSwgTmF2TGluayB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xuXG5pbXBvcnQge1xuICAgIENvbnRhaW5lcixcbiAgICBGbGV4LFxuICAgIEZvcm0sXG4gICAgSW5wdXRDb250YWluZXIsXG4gICAgTGFiZWwsXG4gICAgU2VsZWN0LFxuICAgIFNlbGVjdE9wdGlvbixcbiAgICBMaXN0LFxuICAgIExpc3RJdGVtLFxuICAgIE5hdixcbiAgICBOYXZJdGVtLFxuICAgIFNlY3Rpb24sXG4gICAgU2lkZWJhclxufSBmcm9tICd1aWtpdC1yZWFjdCc7XG5cbmltcG9ydCB7IERvY3VtZW50YXRpb24gfSBmcm9tICcuL0RvY3VtZW50YXRpb24nO1xuaW1wb3J0IHsgZG9jc05hdiB9IGZyb20gJy4vZG9jcy1uYXYnO1xuXG5leHBvcnQgY2xhc3MgRG9jc1BhZ2UgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQ8YW55LCBhbnk+IHtcbiAgICBjb25zdHJ1Y3RvciAocHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpO1xuICAgICAgICB0aGlzLnN0YXRlID0geyB2ZXJzaW9uOiAnMC4wLjEnIH07XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBvblZlcnNpb25DaGFuZ2UoZXZlbnQpIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICB2ZXJzaW9uOiBldmVudC50YXJnZXQudmFsdWVcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPFNlY3Rpb24+XG4gICAgICAgICAgICAgICAgPENvbnRhaW5lcj5cbiAgICAgICAgICAgICAgICAgICAgPENvbnRhaW5lcj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxTaWRlYmFyIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvcDogJzgwcHgnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3R0b206ICcwJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm94U2l6aW5nOiAnYm9yZGVyLWJveCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6ICc0MHB4IDQwcHggNjBweCA0MHB4JyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyUmlnaHQ6ICcxcHggI2U1ZTVlNSBzb2xpZCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogJ2F1dG8nLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvdmVyZmxvdzogJ2F1dG8nXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbj1cImZpeGVkXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPE5hdiBwcmVzZXQ9XCJkZWZhdWx0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKiA8TmF2SXRlbT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJbnB1dENvbnRhaW5lcj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExhYmVsIGh0bWxGb3I9XCJ2ZXJzaW9uXCI+VmVyc2lvbjwvTGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxTZWxlY3RcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwidmVyc2lvblwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS52ZXJzaW9ufVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMub25WZXJzaW9uQ2hhbmdlLmJpbmQodGhpcyl9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFNlbGVjdE9wdGlvbiB2YWx1ZT1cIjAuMC4xXCI+MC4wLjE8L1NlbGVjdE9wdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxTZWxlY3RPcHRpb24gdmFsdWU9XCIwLjAuMlwiPjAuMC4yPC9TZWxlY3RPcHRpb24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvU2VsZWN0PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvSW5wdXRDb250YWluZXI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0Zvcm0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTmF2SXRlbT4gKi99XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt0aGlzLnJlbmRlck1lbnUoKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L05hdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvU2lkZWJhcj5cbiAgICAgICAgICAgICAgICAgICAgPC9Db250YWluZXI+XG4gICAgICAgICAgICAgICAgICAgIDxDb250YWluZXIgc2l6ZT1cIjEtMVwiIHN0eWxlPXt7IHBhZGRpbmdMZWZ0OiAnMjIwJyB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxSb3V0ZSBwYXRoPXtgJHt0aGlzLnByb3BzLm1hdGNoLnVybH0vOnZlcnNpb24vOm5hbWVgfSBjb21wb25lbnQ9e0RvY3VtZW50YXRpb259IC8+XG4gICAgICAgICAgICAgICAgICAgIDwvQ29udGFpbmVyPlxuICAgICAgICAgICAgICAgIDwvQ29udGFpbmVyPlxuICAgICAgICAgICAgPC9TZWN0aW9uPlxuICAgICAgICApO1xuICAgIH1cblxuICAgIHByaXZhdGUgcmVuZGVyTWVudSgpIHtcbiAgICAgICAgbGV0IGNvdW50ID0gMDtcbiAgICAgICAgcmV0dXJuIE9iamVjdC5rZXlzKGRvY3NOYXYpLm1hcCgoaykgPT4ge1xuICAgICAgICAgICAgY291bnQrKztcbiAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgPE5hdkl0ZW0ga2V5PXtrfSB0eXBlPXtjb3VudCA9PT0gMSA/IFwiZGl2aWRlclwiIDogbnVsbH0+XG4gICAgICAgICAgICAgICAgICAgIDxOYXZMaW5rIHRvPXtgL2RvY3MvJHt0aGlzLnN0YXRlLnZlcnNpb259LyR7ZG9jc05hdltrXS50b0xvd2VyQ2FzZSgpfWB9Pntkb2NzTmF2W2tdfTwvTmF2TGluaz5cbiAgICAgICAgICAgICAgICA8L05hdkl0ZW0+XG4gICAgICAgICAgICApO1xuICAgICAgICB9KTtcbiAgICB9XG59IiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0ICogYXMgUHJpc20gZnJvbSAncHJpc21qcyc7XG5pbXBvcnQgKiBhcyBtYXJrZWQgZnJvbSAnbWFya2VkJztcbmltcG9ydCB7IFJvdXRlLCBOYXZMaW5rIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XG5pbXBvcnQgeyBNYXJrZG93biB9IGZyb20gJy4vcGFyc2UtbWFya2Rvd24nO1xuaW1wb3J0IHsgY29tcGlsZSB9IGZyb20gJy4vbWFya3N5LWNvbXBvbmVudHMnO1xuaW1wb3J0IHtcbiAgICBBcnRpY2xlLFxuICAgIENvbnRhaW5lcixcbiAgICBGbGV4LFxuICAgIExpc3QsXG4gICAgTGlzdEl0ZW0sXG4gICAgTmF2LFxuICAgIE5hdkl0ZW0sXG4gICAgU2VjdGlvbixcbiAgICBTaWRlYmFyXG59IGZyb20gJ3Vpa2l0LXJlYWN0JztcblxuZXhwb3J0IGNsYXNzIERvY3VtZW50YXRpb24gZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQ8YW55LCBhbnk+IHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcyk7XG4gICAgICAgIGNvbnN0IHsgbmFtZSwgdmVyc2lvbiB9ID0gdGhpcy5wcm9wcy5tYXRjaC5wYXJhbXM7XG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAgICAgICBuYW1lOiBuYW1lLFxuICAgICAgICAgICAgdmVyc2lvbjogdmVyc2lvbixcbiAgICAgICAgICAgIHBhcnNlZE1hcmtkb3duOiBudWxsLFxuICAgICAgICAgICAgaXNMb2FkaW5nOiB0cnVlXG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyhuZXh0UHJvcHMpIHtcbiAgICAgICAgY29uc3QgeyBuYW1lLCB2ZXJzaW9uIH0gPSBuZXh0UHJvcHMubWF0Y2gucGFyYW1zO1xuICAgICAgICBpZiAodGhpcy5zdGF0ZS5uYW1lICE9PSBuYW1lKSB7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgICBuYW1lOiBuYW1lXG4gICAgICAgICAgICB9LCAoKSA9PiB0aGlzLmZldGNoRG9jcygpKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLnN0YXRlLnZlcnNpb24gIT09IHZlcnNpb24pIHtcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICAgIHZlcnNpb246IHZlcnNpb25cbiAgICAgICAgICAgIH0sICgpID0+IHRoaXMuZmV0Y2hEb2NzKCkpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgc2hvdWxkQ29tcG9uZW50VXBkYXRlKG5leHRQcm9wcywgbmV4dFN0YXRlKTogYm9vbGVhbiB7XG4gICAgICAgIGNvbnN0IHsgbmFtZSwgdmVyc2lvbiB9ID0gbmV4dFByb3BzLm1hdGNoLnBhcmFtcztcbiAgICAgICAgaWYgKHRoaXMuc3RhdGUubmFtZSAhPT0gbmFtZSkge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5zdGF0ZS52ZXJzaW9uICE9PSB2ZXJzaW9uKSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLnN0YXRlLmlzTG9hZGluZyAhPT0gbmV4dFN0YXRlLmlzTG9hZGluZykge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgICAgIHRoaXMuZmV0Y2hEb2NzKCk7XG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPFNlY3Rpb24gcGFkZGluZz5cbiAgICAgICAgICAgICAgICA8QXJ0aWNsZSB0aXRsZT17dGhpcy5zdGF0ZS5uYW1lLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsgdGhpcy5zdGF0ZS5uYW1lLnN1YnN0cigxKX0+XG4gICAgICAgICAgICAgICAgICAgIHt0aGlzLnN0YXRlLnBhcnNlZE1hcmtkb3duID8gdGhpcy5zdGF0ZS5wYXJzZWRNYXJrZG93bi50cmVlIDogbnVsbH1cbiAgICAgICAgICAgICAgICA8L0FydGljbGU+XG4gICAgICAgICAgICA8L1NlY3Rpb24+XG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBmZXRjaERvY3MoKSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBpc0xvYWRpbmc6IHRydWUgfSk7XG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMuc3RhdGUubmFtZSk7XG4gICAgICAgIGZldGNoKGAvc3JjL2RvY3MvJHt0aGlzLnN0YXRlLnZlcnNpb259LyR7dGhpcy5zdGF0ZS5uYW1lfS5tZGApXG4gICAgICAgICAgICAudGhlbigocmVzKSA9PiByZXMudGV4dCgpKVxuICAgICAgICAgICAgLnRoZW4odGV4dCA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgICAgICAgIHBhcnNlZE1hcmtkb3duOiBjb21waWxlKHRleHQpLFxuICAgICAgICAgICAgICAgICAgICBpc0xvYWRpbmc6IGZhbHNlXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLmNhdGNoKChlcnIpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKGVycik7XG4gICAgICAgICAgICB9KTtcbiAgICB9XG59IiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0ICogYXMgUmVhY3RET00gZnJvbSAncmVhY3QtZG9tL3NlcnZlcic7XG5pbXBvcnQgKiBhcyBQcmlzbSBmcm9tICdwcmlzbWpzJztcblxuZXhwb3J0IGNsYXNzIENvZGUgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQ8YW55LCBhbnk+IHtcbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8Y29kZVxuICAgICAgICAgICAgICAgIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7IF9faHRtbDogUHJpc20uaGlnaGxpZ2h0KHRoaXMucHJvcHMuY29kZSwgUHJpc20ubGFuZ3VhZ2VzLnRzeCkgfX1cbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJsYW5ndWFnZS10c3hcIj5cbiAgICAgICAgICAgIDwvY29kZT5cbiAgICAgICAgKTtcbiAgICB9XG59IiwiZXhwb3J0IGNvbnN0IGRvY3NOYXYgPSB7XG4gICAgYWNjb3JkaW9uOiAnQWNjb3JkaW9uJyxcbiAgICBhbGVydDogJ0FsZXJ0JyxcbiAgICBhcnRpY2xlOiAnQXJ0aWNsZScsXG4gICAgYmFkZ2U6ICdCYWRnZScsXG4gICAgYnJlYWRjcnVtYjogJ0JyZWFkY3J1bWInLFxuICAgIGJ1dHRvbjogJ0J1dHRvbicsXG4gICAgY2FyZDogJ0NhcmQnLFxuICAgIGNvbnRhaW5lcjogJ0NvbnRhaW5lcicsXG4gICAgY292ZXI6ICdDb3ZlcicsXG4gICAgZGFyazogJ0RhcmsnLFxuICAgIGRyb3Bkb3duOiAnRHJvcGRvd24nLFxuICAgIGZsZXg6ICdGbGV4JyxcbiAgICBncmlkOiAnR3JpZCcsXG4gICAgaWNvbjogJ0ljb24nLFxuICAgIGltYWdlOiAnSW1hZ2UnLFxuICAgIGxhYmVsczogJ0xhYmVscycsXG4gICAgbGlnaHQ6ICdMaWdodCcsXG4gICAgTGlnaHRib3g6ICdMaWdodGJveCcsXG4gICAgbGluazogJ0xpbmsnLFxuICAgIGxpc3Q6ICdMaXN0JyxcbiAgICBtYXJnaW46ICdNYXJnaW4nLFxuICAgIG5hdjogJ05hdicsXG4gICAgbmF2YmFyOiAnTmF2YmFyJyxcbiAgICBvZmZjYW52YXM6ICdPZmZjYW52YXMnLFxuICAgIG92ZXJsYXk6ICdPdmVybGF5JyxcbiAgICBwYW5lbDogJ1BhbmVsJyxcbiAgICBwYXJhbGxheDogJ1BhcmFsbGF4JyxcbiAgICBwcm9ncmVzczogJ1Byb2dyZXNzJyxcbiAgICBzY3JvbGxzcHk6ICdTY3JvbGxzcHknLFxuICAgIHNlY3Rpb246ICdTZWN0aW9uJyxcbiAgICBzaWRlYmFyOiAnU2lkZWJhcicsXG4gICAgc2xpZGVzaG93OiAnU2xpZGVzaG93JyxcbiAgICB0YWI6ICdUYWInLFxuICAgIHRhYmxlOiAnVGFibGUnXG59IiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0ICogYXMgUHJpc20gZnJvbSAncHJpc21qcyc7XG5pbXBvcnQgeyBlc2NhcGUgfSBmcm9tICdoZSc7XG5pbXBvcnQgbWFya3N5IGZyb20gJ21hcmtzeS9jb21wb25lbnRzJztcbmltcG9ydCB7XG4gICAgQWNjb3JkaW9uLFxuICAgIEFjY29yZGlvbkl0ZW0sXG4gICAgQWxlcnQsXG4gICAgQXJ0aWNsZSxcbiAgICBCYWRnZSxcbiAgICBCcmVhZGNydW1iLFxuICAgIEJ1dHRvbixcbiAgICBDYXJkLFxuICAgIENhcmRCb2R5LFxuICAgIENhcmRGb290ZXIsXG4gICAgQ2FyZEhlYWRlcixcbiAgICBDYXJkVGl0bGUsXG4gICAgTGluayxcbiAgICBUYWIsXG4gICAgVGFiQ29udGFpbmVyLFxuICAgIFRhYkNvbnRlbnQsXG4gICAgVGFibGVcbn0gZnJvbSAndWlraXQtcmVhY3QnO1xuaW1wb3J0IHsgQ29kZSB9IGZyb20gJy4vY29kZSc7XG5cbmV4cG9ydCBjb25zdCBjb21waWxlID0gbWFya3N5KHtcbiAgICBjcmVhdGVFbGVtZW50OiBSZWFjdC5jcmVhdGVFbGVtZW50LFxuICAgIGhpZ2hsaWdodChsYW5ndWFnZSwgY29kZSkge1xuICAgICAgICByZXR1cm4gUHJpc20uaGlnaGxpZ2h0KGNvZGUsIFByaXNtLmxhbmd1YWdlcy50c3gpO1xuICAgIH0sXG4gICAgZWxlbWVudHM6IHtcbiAgICAgICAgdGFibGUoe2NoaWxkcmVufSkge1xuICAgICAgICAgICAgcmV0dXJuIDxUYWJsZSBkaXZpZGVyPntjaGlsZHJlbn08L1RhYmxlPlxuICAgICAgICB9XG4gICAgfSxcbiAgICBjb21wb25lbnRzOiB7XG4gICAgICAgIEFjY29yZGlvbixcbiAgICAgICAgQWNjb3JkaW9uSXRlbSxcbiAgICAgICAgQWxlcnQsXG4gICAgICAgIEFydGljbGUsXG4gICAgICAgIEJhZGdlLFxuICAgICAgICBCcmVhZGNydW1iLFxuICAgICAgICBCdXR0b24sXG4gICAgICAgIENhcmQsXG4gICAgICAgIENhcmRCb2R5LFxuICAgICAgICBDYXJkRm9vdGVyLFxuICAgICAgICBDYXJkSGVhZGVyLFxuICAgICAgICBDYXJkVGl0bGUsXG4gICAgICAgIENvZGUsXG4gICAgICAgIExpbmssXG4gICAgICAgIFRhYixcbiAgICAgICAgVGFiQ29udGFpbmVyLFxuICAgICAgICBUYWJDb250ZW50XG4gICAgfVxufSk7IiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5pbXBvcnQgeyBCdXR0b24gfSBmcm9tICd1aWtpdC1yZWFjdCc7XG5pbXBvcnQgeyBDb250YWluZXIgfSBmcm9tICd1aWtpdC1yZWFjdCc7XG5pbXBvcnQgeyBGbGV4IH0gZnJvbSAndWlraXQtcmVhY3QnO1xuaW1wb3J0IHsgTGlnaHQgfSBmcm9tICd1aWtpdC1yZWFjdCc7XG5pbXBvcnQgeyBMaXN0IH0gZnJvbSAndWlraXQtcmVhY3QnO1xuaW1wb3J0IHsgTGlzdEl0ZW0gfSBmcm9tICd1aWtpdC1yZWFjdCc7XG5pbXBvcnQgeyBTZWN0aW9uIH0gZnJvbSAndWlraXQtcmVhY3QnO1xuaW1wb3J0IHsgSW1hZ2UgfSBmcm9tICd1aWtpdC1yZWFjdCc7XG5cbmV4cG9ydCBjbGFzcyBJbmRleFBhZ2UgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIHJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxGbGV4IGRpcmVjdGlvbj1cImNvbHVtblwiPlxuICAgICAgICAgICAgICAgIDxMaWdodD5cbiAgICAgICAgICAgICAgICAgICAgPFNlY3Rpb24gY29sb3I9XCJzZWNvbmRhcnlcIiBwYWRkaW5nPlxuICAgICAgICAgICAgICAgICAgICAgICAgPEZsZXggYWxpZ25tZW50PVwiY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9iamVjdCB3aWR0aD1cIjMwMFwiIGhlaWdodD1cIjMwMFwiIGRhdGE9XCIvY2xpZW50L2ltYWdlcy91aWtpdC1yZWFjdC5zdmdcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9GbGV4PlxuICAgICAgICAgICAgICAgICAgICAgICAgPEZsZXggYWxpZ25tZW50PVwiY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgyPlJlYWN0IFVJa2l0PC9oMj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvRmxleD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxGbGV4IGFsaWdubWVudD1cImNlbnRlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b24gc2l6ZT1cImxhcmdlXCIgY29sb3I9XCJwcmltYXJ5XCI+R2V0IFN0YXJ0ZWQ8L0J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvRmxleD5cbiAgICAgICAgICAgICAgICAgICAgPC9TZWN0aW9uPlxuICAgICAgICAgICAgICAgIDwvTGlnaHQ+XG4gICAgICAgICAgICAgICAgPFNlY3Rpb24gc2l6ZT1cImRlZmF1bHRcIiBwYWRkaW5nPlxuICAgICAgICAgICAgICAgICAgICA8Q29udGFpbmVyPlxuICAgICAgICAgICAgICAgICAgICAgICAgPEZsZXggYWxpZ25tZW50PVwiY2VudGVyXCIgZGlyZWN0aW9uPVwicm93XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpc3QgdHlwZT1cImRpdmlkZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpc3RJdGVtPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+TG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2NpbmcgZWxpdC4gSW50ZWdlciBuZWMgb2Rpby4gUHJhZXNlbnQgbGliZXJvLiBTZWQgY3Vyc3VzIGFudGUgZGFwaWJ1cyBkaWFtLiBTZWQgbmlzaS4gTnVsbGEgcXVpcyBzZW0gYXQgbmliaCBlbGVtZW50dW0gaW1wZXJkaWV0LiBEdWlzIHNhZ2l0dGlzIGlwc3VtLiA8Yj5Mb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzY2luZyBlbGl0PC9iPi4gUHJhZXNlbnQgbWF1cmlzLiBGdXNjZSBuZWMgdGVsbHVzIHNlZCBhdWd1ZSBzZW1wZXIgcG9ydGEuIDxiPkxvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNjaW5nIGVsaXQ8L2I+LiBNYXVyaXMgbWFzc2EuIFZlc3RpYnVsdW0gbGFjaW5pYSBhcmN1IGVnZXQgbnVsbGEuIENsYXNzIGFwdGVudCB0YWNpdGkgc29jaW9zcXUgYWQgbGl0b3JhIHRvcnF1ZW50IHBlciBjb251YmlhIG5vc3RyYSwgcGVyIGluY2VwdG9zIGhpbWVuYWVvcy4gQ3VyYWJpdHVyIHNvZGFsZXMgbGlndWxhIGluIGxpYmVyby4gPGI+TG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2NpbmcgZWxpdDwvYj4uIFNlZCBkaWduaXNzaW0gbGFjaW5pYSBudW5jLiA8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGlzdEl0ZW0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaXN0SXRlbT4gXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5DdXJhYml0dXIgdG9ydG9yLiBQZWxsZW50ZXNxdWUgbmliaC4gPGk+TG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2NpbmcgZWxpdDwvaT4uIEFlbmVhbiBxdWFtLiBJbiBzY2VsZXJpc3F1ZSBzZW0gYXQgZG9sb3IuIE1hZWNlbmFzIG1hdHRpcy4gU2VkIGNvbnZhbGxpcyB0cmlzdGlxdWUgc2VtLiBQcm9pbiB1dCBsaWd1bGEgdmVsIG51bmMgZWdlc3RhcyBwb3J0dGl0b3IuIE1vcmJpIGxlY3R1cyByaXN1cywgaWFjdWxpcyB2ZWwsIHN1c2NpcGl0IHF1aXMsIGx1Y3R1cyBub24sIG1hc3NhLiBGdXNjZSBhYyB0dXJwaXMgcXVpcyBsaWd1bGEgbGFjaW5pYSBhbGlxdWV0LiA8aT5Mb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzY2luZyBlbGl0PC9pPi4gTWF1cmlzIGlwc3VtLiBOdWxsYSBtZXR1cyBtZXR1cywgdWxsYW1jb3JwZXIgdmVsLCB0aW5jaWR1bnQgc2VkLCBldWlzbW9kIGluLCBuaWJoLiA8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGlzdEl0ZW0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaXN0SXRlbT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPjxpPkxvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNjaW5nIGVsaXQ8L2k+LiBRdWlzcXVlIHZvbHV0cGF0IGNvbmRpbWVudHVtIHZlbGl0LiA8aT5TZWQgZGlnbmlzc2ltIGxhY2luaWEgbnVuYzwvaT4uIENsYXNzIGFwdGVudCB0YWNpdGkgc29jaW9zcXUgYWQgbGl0b3JhIHRvcnF1ZW50IHBlciBjb251YmlhIG5vc3RyYSwgcGVyIGluY2VwdG9zIGhpbWVuYWVvcy4gTmFtIG5lYyBhbnRlLiBTZWQgbGFjaW5pYSwgdXJuYSBub24gdGluY2lkdW50IG1hdHRpcywgdG9ydG9yIG5lcXVlIGFkaXBpc2NpbmcgZGlhbSwgYSBjdXJzdXMgaXBzdW0gYW50ZSBxdWlzIHR1cnBpcy4gTnVsbGEgZmFjaWxpc2kuIDxiPlByb2luIHV0IGxpZ3VsYSB2ZWwgbnVuYyBlZ2VzdGFzIHBvcnR0aXRvcjwvYj4uIFV0IGZyaW5naWxsYS4gU3VzcGVuZGlzc2UgcG90ZW50aS4gTnVuYyBmZXVnaWF0IG1pIGEgdGVsbHVzIGNvbnNlcXVhdCBpbXBlcmRpZXQuIFZlc3RpYnVsdW0gc2FwaWVuLiBQcm9pbiBxdWFtLiBFdGlhbSB1bHRyaWNlcy4gU3VzcGVuZGlzc2UgaW4ganVzdG8gZXUgbWFnbmEgbHVjdHVzIHN1c2NpcGl0LiBTZWQgbGVjdHVzLiBJbnRlZ2VyIGV1aXNtb2QgbGFjdXMgbHVjdHVzIG1hZ25hLiA8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGlzdEl0ZW0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaXN0SXRlbT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPlF1aXNxdWUgY3Vyc3VzLCBtZXR1cyB2aXRhZSBwaGFyZXRyYSBhdWN0b3IsIHNlbSBtYXNzYSBtYXR0aXMgc2VtLCBhdCBpbnRlcmR1bSBtYWduYSBhdWd1ZSBlZ2V0IGRpYW0uIFZlc3RpYnVsdW0gYW50ZSBpcHN1bSBwcmltaXMgaW4gZmF1Y2lidXMgb3JjaSBsdWN0dXMgZXQgdWx0cmljZXMgcG9zdWVyZSBjdWJpbGlhIEN1cmFlOyBNb3JiaSBsYWNpbmlhIG1vbGVzdGllIGR1aS4gUHJhZXNlbnQgYmxhbmRpdCBkb2xvci4gU2VkIG5vbiBxdWFtLiBJbiB2ZWwgbWkgc2l0IGFtZXQgYXVndWUgY29uZ3VlIGVsZW1lbnR1bS4gTW9yYmkgaW4gaXBzdW0gc2l0IGFtZXQgcGVkZSBmYWNpbGlzaXMgbGFvcmVldC4gRG9uZWMgbGFjdXMgbnVuYywgdml2ZXJyYSBuZWMsIGJsYW5kaXQgdmVsLCBlZ2VzdGFzIGV0LCBhdWd1ZS4gVmVzdGlidWx1bSB0aW5jaWR1bnQgbWFsZXN1YWRhIHRlbGx1cy4gVXQgdWx0cmljZXMgdWx0cmljZXMgZW5pbS4gPGI+U3VzcGVuZGlzc2UgaW4ganVzdG8gZXUgbWFnbmEgbHVjdHVzIHN1c2NpcGl0PC9iPi4gQ3VyYWJpdHVyIHNpdCBhbWV0IG1hdXJpcy4gTW9yYmkgaW4gZHVpIHF1aXMgZXN0IHB1bHZpbmFyIHVsbGFtY29ycGVyLiA8Yj5WZXN0aWJ1bHVtIGFudGUgaXBzdW0gcHJpbWlzIGluIGZhdWNpYnVzIG9yY2kgbHVjdHVzIGV0IHVsdHJpY2VzIHBvc3VlcmUgY3ViaWxpYSBDdXJhZTsgTW9yYmkgbGFjaW5pYSBtb2xlc3RpZSBkdWk8L2I+LiBOdWxsYSBmYWNpbGlzaS4gSW50ZWdlciBsYWNpbmlhIHNvbGxpY2l0dWRpbiBtYXNzYS4gPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpc3RJdGVtPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGlzdD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvRmxleD5cbiAgICAgICAgICAgICAgICAgICAgPC9Db250YWluZXI+XG4gICAgICAgICAgICAgICAgPC9TZWN0aW9uPlxuICAgICAgICAgICAgPC9GbGV4PlxuICAgICAgICApO1xuICAgIH1cbn0iXSwic291cmNlUm9vdCI6IiJ9
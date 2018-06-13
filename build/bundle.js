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
        return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](uikit_react__WEBPACK_IMPORTED_MODULE_10__["OffcanvasContainer"], null,
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_router_dom__WEBPACK_IMPORTED_MODULE_2__["BrowserRouter"], { basename: "/uikit-react" },
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
        fetch("src/docs/" + this.state.version + "/" + this.state.name + ".md")
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL3BhZ2VzL0RvY3MvRG9jc1BhZ2UudHN4Iiwid2VicGFjazovLy8uL3NyYy9wYWdlcy9Eb2NzL0RvY3VtZW50YXRpb24udHN4Iiwid2VicGFjazovLy8uL3NyYy9wYWdlcy9Eb2NzL2NvZGUudHN4Iiwid2VicGFjazovLy8uL3NyYy9wYWdlcy9Eb2NzL2RvY3MtbmF2LnRzIiwid2VicGFjazovLy8uL3NyYy9wYWdlcy9Eb2NzL21hcmtzeS1jb21wb25lbnRzLnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXMvSW5kZXgvSW5kZXhQYWdlLnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxnQkFBUSxvQkFBb0I7QUFDNUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBaUIsNEJBQTRCO0FBQzdDO0FBQ0E7QUFDQSwwQkFBa0IsMkJBQTJCO0FBQzdDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGtEQUEwQyxnQ0FBZ0M7QUFDMUU7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxnRUFBd0Qsa0JBQWtC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QUFDLFNBQVMsRUFBQyxRQUFRO3dCQUNwQixnRUFBUSxLQUFLLEVBQUMsS0FBSyxFQUFDLE1BQU0sRUFBQyxLQUFLLEVBQUMsSUFBSSxFQUFDLGdDQUFnQyxHQUFHLENBQ3RFO29CQUNQLG9EQUFDLGdEQUFJLElBQUMsU0FBUyxFQUFDLFFBQVE7d0JBQ3BCLDhFQUFvQixDQUNqQjtvQkFDUCxvREFBQyxnREFBSSxJQUFDLFNBQVMsRUFBQyxRQUFRO3dCQUNwQixvREFBQyxrREFBTSxJQUFDLElBQUksRUFBQyxPQUFPLEVBQUMsS0FBSyxFQUFDLFNBQVMsa0JBQXFCLENBQ3RELENBQ0QsQ0FDTjtZQUNSLG9EQUFDLG1EQUFPLElBQUMsSUFBSSxFQUFDLFNBQVMsRUFBQyxPQUFPO2dCQUMzQixvREFBQyxxREFBUztvQkFDTixvREFBQyxnREFBSSxJQUFDLFNBQVMsRUFBQyxRQUFRLEVBQUMsU0FBUyxFQUFDLEtBQUs7d0JBQ3BDLG9EQUFDLGdEQUFJLElBQUMsSUFBSSxFQUFDLFNBQVM7NEJBQ2hCLG9EQUFDLG9EQUFRO2dDQUNMOztvQ0FBd00seUhBQThEOztvQ0FBNEQseUhBQThEOztvQ0FBb0wseUhBQThEO3FFQUFrQyxDQUM3b0I7NEJBQ1gsb0RBQUMsb0RBQVE7Z0NBQ0w7O29DQUF3Qyx5SEFBOEQ7O29DQUFzUCx5SEFBOEQ7NEhBQXlGLENBQzVlOzRCQUNYLG9EQUFDLG9EQUFRO2dDQUNMO29DQUFHLHlIQUE4RDs7b0NBQXNDLDRGQUFpQzs7b0NBQW1PLDRHQUFpRDt3UUFBcU8sQ0FDMW5COzRCQUNYLG9EQUFDLG9EQUFRO2dDQUNMOztvQ0FBK2QsK0dBQW9EOztvQ0FBeUUsb0xBQXlIOzZGQUEwRCxDQUN4d0IsQ0FDUixDQUNKLENBQ0MsQ0FDTixDQUNQLENBQ1YsQ0FBQztJQUNOLENBQUM7SUFDTCxnQkFBQztBQUFELENBQUMsQ0F4QzhCLCtDQUFlLEdBd0M3QyIsImZpbGUiOiJidW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBpbnN0YWxsIGEgSlNPTlAgY2FsbGJhY2sgZm9yIGNodW5rIGxvYWRpbmdcbiBcdGZ1bmN0aW9uIHdlYnBhY2tKc29ucENhbGxiYWNrKGRhdGEpIHtcbiBcdFx0dmFyIGNodW5rSWRzID0gZGF0YVswXTtcbiBcdFx0dmFyIG1vcmVNb2R1bGVzID0gZGF0YVsxXTtcbiBcdFx0dmFyIGV4ZWN1dGVNb2R1bGVzID0gZGF0YVsyXTtcblxuIFx0XHQvLyBhZGQgXCJtb3JlTW9kdWxlc1wiIHRvIHRoZSBtb2R1bGVzIG9iamVjdCxcbiBcdFx0Ly8gdGhlbiBmbGFnIGFsbCBcImNodW5rSWRzXCIgYXMgbG9hZGVkIGFuZCBmaXJlIGNhbGxiYWNrXG4gXHRcdHZhciBtb2R1bGVJZCwgY2h1bmtJZCwgaSA9IDAsIHJlc29sdmVzID0gW107XG4gXHRcdGZvcig7aSA8IGNodW5rSWRzLmxlbmd0aDsgaSsrKSB7XG4gXHRcdFx0Y2h1bmtJZCA9IGNodW5rSWRzW2ldO1xuIFx0XHRcdGlmKGluc3RhbGxlZENodW5rc1tjaHVua0lkXSkge1xuIFx0XHRcdFx0cmVzb2x2ZXMucHVzaChpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF1bMF0pO1xuIFx0XHRcdH1cbiBcdFx0XHRpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gPSAwO1xuIFx0XHR9XG4gXHRcdGZvcihtb2R1bGVJZCBpbiBtb3JlTW9kdWxlcykge1xuIFx0XHRcdGlmKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChtb3JlTW9kdWxlcywgbW9kdWxlSWQpKSB7XG4gXHRcdFx0XHRtb2R1bGVzW21vZHVsZUlkXSA9IG1vcmVNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0XHR9XG4gXHRcdH1cbiBcdFx0aWYocGFyZW50SnNvbnBGdW5jdGlvbikgcGFyZW50SnNvbnBGdW5jdGlvbihkYXRhKTtcblxuIFx0XHR3aGlsZShyZXNvbHZlcy5sZW5ndGgpIHtcbiBcdFx0XHRyZXNvbHZlcy5zaGlmdCgpKCk7XG4gXHRcdH1cblxuIFx0XHQvLyBhZGQgZW50cnkgbW9kdWxlcyBmcm9tIGxvYWRlZCBjaHVuayB0byBkZWZlcnJlZCBsaXN0XG4gXHRcdGRlZmVycmVkTW9kdWxlcy5wdXNoLmFwcGx5KGRlZmVycmVkTW9kdWxlcywgZXhlY3V0ZU1vZHVsZXMgfHwgW10pO1xuXG4gXHRcdC8vIHJ1biBkZWZlcnJlZCBtb2R1bGVzIHdoZW4gYWxsIGNodW5rcyByZWFkeVxuIFx0XHRyZXR1cm4gY2hlY2tEZWZlcnJlZE1vZHVsZXMoKTtcbiBcdH07XG4gXHRmdW5jdGlvbiBjaGVja0RlZmVycmVkTW9kdWxlcygpIHtcbiBcdFx0dmFyIHJlc3VsdDtcbiBcdFx0Zm9yKHZhciBpID0gMDsgaSA8IGRlZmVycmVkTW9kdWxlcy5sZW5ndGg7IGkrKykge1xuIFx0XHRcdHZhciBkZWZlcnJlZE1vZHVsZSA9IGRlZmVycmVkTW9kdWxlc1tpXTtcbiBcdFx0XHR2YXIgZnVsZmlsbGVkID0gdHJ1ZTtcbiBcdFx0XHRmb3IodmFyIGogPSAxOyBqIDwgZGVmZXJyZWRNb2R1bGUubGVuZ3RoOyBqKyspIHtcbiBcdFx0XHRcdHZhciBkZXBJZCA9IGRlZmVycmVkTW9kdWxlW2pdO1xuIFx0XHRcdFx0aWYoaW5zdGFsbGVkQ2h1bmtzW2RlcElkXSAhPT0gMCkgZnVsZmlsbGVkID0gZmFsc2U7XG4gXHRcdFx0fVxuIFx0XHRcdGlmKGZ1bGZpbGxlZCkge1xuIFx0XHRcdFx0ZGVmZXJyZWRNb2R1bGVzLnNwbGljZShpLS0sIDEpO1xuIFx0XHRcdFx0cmVzdWx0ID0gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBkZWZlcnJlZE1vZHVsZVswXSk7XG4gXHRcdFx0fVxuIFx0XHR9XG4gXHRcdHJldHVybiByZXN1bHQ7XG4gXHR9XG5cbiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4gXHQvLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbiBcdC8vIFByb21pc2UgPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG4gXHR2YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuIFx0XHRcImJ1bmRsZVwiOiAwXG4gXHR9O1xuXG4gXHR2YXIgZGVmZXJyZWRNb2R1bGVzID0gW107XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdHZhciBqc29ucEFycmF5ID0gd2luZG93W1wid2VicGFja0pzb25wXCJdID0gd2luZG93W1wid2VicGFja0pzb25wXCJdIHx8IFtdO1xuIFx0dmFyIG9sZEpzb25wRnVuY3Rpb24gPSBqc29ucEFycmF5LnB1c2guYmluZChqc29ucEFycmF5KTtcbiBcdGpzb25wQXJyYXkucHVzaCA9IHdlYnBhY2tKc29ucENhbGxiYWNrO1xuIFx0anNvbnBBcnJheSA9IGpzb25wQXJyYXkuc2xpY2UoKTtcbiBcdGZvcih2YXIgaSA9IDA7IGkgPCBqc29ucEFycmF5Lmxlbmd0aDsgaSsrKSB3ZWJwYWNrSnNvbnBDYWxsYmFjayhqc29ucEFycmF5W2ldKTtcbiBcdHZhciBwYXJlbnRKc29ucEZ1bmN0aW9uID0gb2xkSnNvbnBGdW5jdGlvbjtcblxuXG4gXHQvLyBhZGQgZW50cnkgbW9kdWxlIHRvIGRlZmVycmVkIGxpc3RcbiBcdGRlZmVycmVkTW9kdWxlcy5wdXNoKFtcIi4vc3JjL2FwcC50c3hcIixcInZlbmRvclwiXSk7XG4gXHQvLyBydW4gZGVmZXJyZWQgbW9kdWxlcyB3aGVuIHJlYWR5XG4gXHRyZXR1cm4gY2hlY2tEZWZlcnJlZE1vZHVsZXMoKTtcbiIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHJlbmRlciB9IGZyb20gJ3JlYWN0LWRvbSc7XG5pbXBvcnQgeyBCcm93c2VyUm91dGVyIGFzIFJvdXRlciwgUm91dGUsIE5hdkxpbmsgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcbmltcG9ydCAncHJpc21qcyc7XG5pbXBvcnQgJ3ByaXNtanMvY29tcG9uZW50cy9wcmlzbS1qYXZhc2NyaXB0Lm1pbic7XG5pbXBvcnQgJ3ByaXNtanMvY29tcG9uZW50cy9wcmlzbS1qc3gubWluJztcbmltcG9ydCAncHJpc21qcy9jb21wb25lbnRzL3ByaXNtLXRzeC5taW4nO1xuaW1wb3J0ICdwcmlzbWpzL3BsdWdpbnMvdG9vbGJhci9wcmlzbS10b29sYmFyJztcbmltcG9ydCAncHJpc21qcy9wbHVnaW5zL2NvcHktdG8tY2xpcGJvYXJkL3ByaXNtLWNvcHktdG8tY2xpcGJvYXJkJztcbmltcG9ydCAncHJpc21qcy9jb21wb25lbnRzL3ByaXNtLWNzcy5taW4nO1xuXG5pbXBvcnQge1xuICAgIENvbnRhaW5lcixcbiAgICBMaWdodCxcbiAgICBJY29uLFxuICAgIExpbmssXG4gICAgTGlzdCxcbiAgICBMaXN0SXRlbSxcbiAgICBPZmZjYW52YXMsXG4gICAgT2ZmY2FudmFzQ29udGFpbmVyLFxuICAgIE5hdmJhcixcbiAgICBOYXZiYXJDb250YWluZXIsXG4gICAgTmF2YmFyU3RpY2t5LFxuICAgIFNlY3Rpb25cbn0gZnJvbSAndWlraXQtcmVhY3QnO1xuXG5cbmltcG9ydCB7IERvY3NQYWdlIH0gZnJvbSAnLi9wYWdlcy9Eb2NzL0RvY3NQYWdlJztcbmltcG9ydCB7IEluZGV4UGFnZSB9IGZyb20gJy4vcGFnZXMvSW5kZXgvSW5kZXhQYWdlJztcblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsICgpID0+IHtcbiAgICBjb25zb2xlLmxvZyhTZWN0aW9uKTtcbiAgICByZW5kZXIoXG4gICAgICAgIDxFeGFtcGxlUGFnZSAvPixcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Jvb3QnKVxuICAgICk7XG59LCBmYWxzZSk7XG5cbmNsYXNzIEV4YW1wbGVQYWdlIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50PGFueSwgYW55PiB7XG4gICAgcmVuZGVyKCkge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPE9mZmNhbnZhc0NvbnRhaW5lcj5cbiAgICAgICAgICAgICAgICA8Um91dGVyIGJhc2VuYW1lPVwiL3Vpa2l0LXJlYWN0XCI+XG4gICAgICAgICAgICAgICAgICAgIDxTZWN0aW9uIHBvc2l0aW9uPVwicmVsYXRpdmVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxTZWN0aW9uIGNvbG9yPVwic2Vjb25kYXJ5XCIgcHJlc2VydmVDb2xvcj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TmF2YmFyU3RpY2t5IG9wdGlvbnM9XCJhbmltYXRpb246IHVrLWFuaW1hdGlvbi1zbGlkZS10b3A7IGNscy1pbmFjdGl2ZTogdWstbmF2YmFyLXRyYW5zcGFyZW50IHVrLWxpZ2h0OyB0b3A6IDU1NjtcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE5hdmJhckNvbnRhaW5lciB0cmFuc3BhcmVudD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxOYXZiYXI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpc3RJdGVtPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayB0b2dnbGVPcHRpb25zPVwidGFyZ2V0OiAjbWVudTtcIiBocmVmPVwiI1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEljb24gb3B0aW9ucz1cIm1lbnVcIiBidXR0b24gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGlzdEl0ZW0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L05hdmJhcj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxOYXZiYXIgYWxpZ249XCJyaWdodFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaXN0SXRlbT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cImh0dHBzOi8vZ2l0aHViLmNvbS92YWNhcnN1L2RpbWVuc2lvbi1jbXNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJY29uIG9wdGlvbnM9XCJnaXRodWJcIiBidXR0b24gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGlzdEl0ZW0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L05hdmJhcj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9OYXZiYXJDb250YWluZXI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9OYXZiYXJTdGlja3k+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L1NlY3Rpb24+XG4gICAgICAgICAgICAgICAgICAgICAgICA8T2ZmY2FudmFzIGlkPVwibWVudVwiIG9wdGlvbnM9XCJvdmVybGF5OiB0cnVlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpc3QgdHlwZT1cImRpdmlkZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpc3RJdGVtPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE5hdkxpbmsgdG89XCIvXCI+SG9tZTwvTmF2TGluaz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaXN0SXRlbT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpc3RJdGVtPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE5hdkxpbmsgdG89XCIvZG9jcy9hY2NvcmRpb25cIj5BY2NvcmRpb248L05hdkxpbms+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGlzdEl0ZW0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaXN0SXRlbT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxOYXZMaW5rIHRvPVwiL2RvY3MvYWxlcnRcIj5BbGVydDwvTmF2TGluaz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaXN0SXRlbT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpc3RJdGVtPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE5hdkxpbmsgdG89XCIvZG9jcy9hcnRpY2xlXCI+QXJ0aWNsZTwvTmF2TGluaz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaXN0SXRlbT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpc3RJdGVtPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE5hdkxpbmsgdG89XCIvZG9jcy9iYWRnZVwiPkJhZGdlPC9OYXZMaW5rPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpc3RJdGVtPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGlzdEl0ZW0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TmF2TGluayB0bz1cIi9kb2NzL2ljb25cIj5JY29uPC9OYXZMaW5rPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpc3RJdGVtPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGlzdD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvT2ZmY2FudmFzPlxuICAgICAgICAgICAgICAgICAgICAgICAgPFJvdXRlIGV4YWN0IHBhdGg9XCIvXCIgY29tcG9uZW50PXtJbmRleFBhZ2V9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8Um91dGUgcGF0aD1cIi9kb2NzXCIgY29tcG9uZW50PXtEb2NzUGFnZX0gLz5cbiAgICAgICAgICAgICAgICAgICAgPC9TZWN0aW9uPlxuICAgICAgICAgICAgICAgIDwvUm91dGVyPlxuICAgICAgICAgICAgPC9PZmZjYW52YXNDb250YWluZXI+XG4gICAgICAgIClcbiAgICB9XG59IiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgUm91dGUsIE5hdkxpbmsgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcblxuaW1wb3J0IHtcbiAgICBDb250YWluZXIsXG4gICAgRmxleCxcbiAgICBGb3JtLFxuICAgIElucHV0Q29udGFpbmVyLFxuICAgIExhYmVsLFxuICAgIFNlbGVjdCxcbiAgICBTZWxlY3RPcHRpb24sXG4gICAgTGlzdCxcbiAgICBMaXN0SXRlbSxcbiAgICBOYXYsXG4gICAgTmF2SXRlbSxcbiAgICBTZWN0aW9uLFxuICAgIFNpZGViYXJcbn0gZnJvbSAndWlraXQtcmVhY3QnO1xuXG5pbXBvcnQgeyBEb2N1bWVudGF0aW9uIH0gZnJvbSAnLi9Eb2N1bWVudGF0aW9uJztcbmltcG9ydCB7IGRvY3NOYXYgfSBmcm9tICcuL2RvY3MtbmF2JztcblxuZXhwb3J0IGNsYXNzIERvY3NQYWdlIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50PGFueSwgYW55PiB7XG4gICAgY29uc3RydWN0b3IgKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKTtcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHsgdmVyc2lvbjogJzAuMC4xJyB9O1xuICAgIH1cblxuICAgIHByaXZhdGUgb25WZXJzaW9uQ2hhbmdlKGV2ZW50KSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgdmVyc2lvbjogZXZlbnQudGFyZ2V0LnZhbHVlXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxTZWN0aW9uPlxuICAgICAgICAgICAgICAgIDxDb250YWluZXI+XG4gICAgICAgICAgICAgICAgICAgIDxDb250YWluZXI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8U2lkZWJhciBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b3A6ICc4MHB4JyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm90dG9tOiAnMCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJveFNpemluZzogJ2JvcmRlci1ib3gnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAnNDBweCA0MHB4IDYwcHggNDBweCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlclJpZ2h0OiAnMXB4ICNlNWU1ZTUgc29saWQnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6ICdhdXRvJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3ZlcmZsb3c6ICdhdXRvJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb249XCJmaXhlZFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxOYXYgcHJlc2V0PVwiZGVmYXVsdFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7LyogPE5hdkl0ZW0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SW5wdXRDb250YWluZXI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMYWJlbCBodG1sRm9yPVwidmVyc2lvblwiPlZlcnNpb248L0xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8U2VsZWN0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD1cInZlcnNpb25cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUudmVyc2lvbn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLm9uVmVyc2lvbkNoYW5nZS5iaW5kKHRoaXMpfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxTZWxlY3RPcHRpb24gdmFsdWU9XCIwLjAuMVwiPjAuMC4xPC9TZWxlY3RPcHRpb24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8U2VsZWN0T3B0aW9uIHZhbHVlPVwiMC4wLjJcIj4wLjAuMjwvU2VsZWN0T3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1NlbGVjdD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0lucHV0Q29udGFpbmVyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Gb3JtPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L05hdkl0ZW0+ICovfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dGhpcy5yZW5kZXJNZW51KCl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9OYXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L1NpZGViYXI+XG4gICAgICAgICAgICAgICAgICAgIDwvQ29udGFpbmVyPlxuICAgICAgICAgICAgICAgICAgICA8Q29udGFpbmVyIHNpemU9XCIxLTFcIiBzdHlsZT17eyBwYWRkaW5nTGVmdDogJzIyMCcgfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8Um91dGUgcGF0aD17YCR7dGhpcy5wcm9wcy5tYXRjaC51cmx9Lzp2ZXJzaW9uLzpuYW1lYH0gY29tcG9uZW50PXtEb2N1bWVudGF0aW9ufSAvPlxuICAgICAgICAgICAgICAgICAgICA8L0NvbnRhaW5lcj5cbiAgICAgICAgICAgICAgICA8L0NvbnRhaW5lcj5cbiAgICAgICAgICAgIDwvU2VjdGlvbj5cbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIHJlbmRlck1lbnUoKSB7XG4gICAgICAgIGxldCBjb3VudCA9IDA7XG4gICAgICAgIHJldHVybiBPYmplY3Qua2V5cyhkb2NzTmF2KS5tYXAoKGspID0+IHtcbiAgICAgICAgICAgIGNvdW50Kys7XG4gICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgIDxOYXZJdGVtIGtleT17a30gdHlwZT17Y291bnQgPT09IDEgPyBcImRpdmlkZXJcIiA6IG51bGx9PlxuICAgICAgICAgICAgICAgICAgICA8TmF2TGluayB0bz17YC9kb2NzLyR7dGhpcy5zdGF0ZS52ZXJzaW9ufS8ke2RvY3NOYXZba10udG9Mb3dlckNhc2UoKX1gfT57ZG9jc05hdltrXX08L05hdkxpbms+XG4gICAgICAgICAgICAgICAgPC9OYXZJdGVtPlxuICAgICAgICAgICAgKTtcbiAgICAgICAgfSk7XG4gICAgfVxufSIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCAqIGFzIFByaXNtIGZyb20gJ3ByaXNtanMnO1xuaW1wb3J0ICogYXMgbWFya2VkIGZyb20gJ21hcmtlZCc7XG5pbXBvcnQgeyBSb3V0ZSwgTmF2TGluayB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xuaW1wb3J0IHsgTWFya2Rvd24gfSBmcm9tICcuL3BhcnNlLW1hcmtkb3duJztcbmltcG9ydCB7IGNvbXBpbGUgfSBmcm9tICcuL21hcmtzeS1jb21wb25lbnRzJztcbmltcG9ydCB7XG4gICAgQXJ0aWNsZSxcbiAgICBDb250YWluZXIsXG4gICAgRmxleCxcbiAgICBMaXN0LFxuICAgIExpc3RJdGVtLFxuICAgIE5hdixcbiAgICBOYXZJdGVtLFxuICAgIFNlY3Rpb24sXG4gICAgU2lkZWJhclxufSBmcm9tICd1aWtpdC1yZWFjdCc7XG5cbmV4cG9ydCBjbGFzcyBEb2N1bWVudGF0aW9uIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50PGFueSwgYW55PiB7XG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpO1xuICAgICAgICBjb25zdCB7IG5hbWUsIHZlcnNpb24gfSA9IHRoaXMucHJvcHMubWF0Y2gucGFyYW1zO1xuICAgICAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgICAgICAgbmFtZTogbmFtZSxcbiAgICAgICAgICAgIHZlcnNpb246IHZlcnNpb24sXG4gICAgICAgICAgICBwYXJzZWRNYXJrZG93bjogbnVsbCxcbiAgICAgICAgICAgIGlzTG9hZGluZzogdHJ1ZVxuICAgICAgICB9O1xuICAgIH1cblxuICAgIGNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMobmV4dFByb3BzKSB7XG4gICAgICAgIGNvbnN0IHsgbmFtZSwgdmVyc2lvbiB9ID0gbmV4dFByb3BzLm1hdGNoLnBhcmFtcztcbiAgICAgICAgaWYgKHRoaXMuc3RhdGUubmFtZSAhPT0gbmFtZSkge1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgICAgbmFtZTogbmFtZVxuICAgICAgICAgICAgfSwgKCkgPT4gdGhpcy5mZXRjaERvY3MoKSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5zdGF0ZS52ZXJzaW9uICE9PSB2ZXJzaW9uKSB7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgICB2ZXJzaW9uOiB2ZXJzaW9uXG4gICAgICAgICAgICB9LCAoKSA9PiB0aGlzLmZldGNoRG9jcygpKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHNob3VsZENvbXBvbmVudFVwZGF0ZShuZXh0UHJvcHMsIG5leHRTdGF0ZSk6IGJvb2xlYW4ge1xuICAgICAgICBjb25zdCB7IG5hbWUsIHZlcnNpb24gfSA9IG5leHRQcm9wcy5tYXRjaC5wYXJhbXM7XG4gICAgICAgIGlmICh0aGlzLnN0YXRlLm5hbWUgIT09IG5hbWUpIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMuc3RhdGUudmVyc2lvbiAhPT0gdmVyc2lvbikge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5zdGF0ZS5pc0xvYWRpbmcgIT09IG5leHRTdGF0ZS5pc0xvYWRpbmcpIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgICAgICB0aGlzLmZldGNoRG9jcygpO1xuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxTZWN0aW9uIHBhZGRpbmc+XG4gICAgICAgICAgICAgICAgPEFydGljbGUgdGl0bGU9e3RoaXMuc3RhdGUubmFtZS5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIHRoaXMuc3RhdGUubmFtZS5zdWJzdHIoMSl9PlxuICAgICAgICAgICAgICAgICAgICB7dGhpcy5zdGF0ZS5wYXJzZWRNYXJrZG93biA/IHRoaXMuc3RhdGUucGFyc2VkTWFya2Rvd24udHJlZSA6IG51bGx9XG4gICAgICAgICAgICAgICAgPC9BcnRpY2xlPlxuICAgICAgICAgICAgPC9TZWN0aW9uPlxuICAgICAgICApO1xuICAgIH1cblxuICAgIHByaXZhdGUgZmV0Y2hEb2NzKCkge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHsgaXNMb2FkaW5nOiB0cnVlIH0pO1xuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLnN0YXRlLm5hbWUpO1xuICAgICAgICBmZXRjaChgc3JjL2RvY3MvJHt0aGlzLnN0YXRlLnZlcnNpb259LyR7dGhpcy5zdGF0ZS5uYW1lfS5tZGApXG4gICAgICAgICAgICAudGhlbigocmVzKSA9PiByZXMudGV4dCgpKVxuICAgICAgICAgICAgLnRoZW4odGV4dCA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgICAgICAgIHBhcnNlZE1hcmtkb3duOiBjb21waWxlKHRleHQpLFxuICAgICAgICAgICAgICAgICAgICBpc0xvYWRpbmc6IGZhbHNlXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLmNhdGNoKChlcnIpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKGVycik7XG4gICAgICAgICAgICB9KTtcbiAgICB9XG59IiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0ICogYXMgUmVhY3RET00gZnJvbSAncmVhY3QtZG9tL3NlcnZlcic7XG5pbXBvcnQgKiBhcyBQcmlzbSBmcm9tICdwcmlzbWpzJztcblxuZXhwb3J0IGNsYXNzIENvZGUgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQ8YW55LCBhbnk+IHtcbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8Y29kZVxuICAgICAgICAgICAgICAgIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7IF9faHRtbDogUHJpc20uaGlnaGxpZ2h0KHRoaXMucHJvcHMuY29kZSwgUHJpc20ubGFuZ3VhZ2VzLnRzeCkgfX1cbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJsYW5ndWFnZS10c3hcIj5cbiAgICAgICAgICAgIDwvY29kZT5cbiAgICAgICAgKTtcbiAgICB9XG59IiwiZXhwb3J0IGNvbnN0IGRvY3NOYXYgPSB7XG4gICAgYWNjb3JkaW9uOiAnQWNjb3JkaW9uJyxcbiAgICBhbGVydDogJ0FsZXJ0JyxcbiAgICBhcnRpY2xlOiAnQXJ0aWNsZScsXG4gICAgYmFkZ2U6ICdCYWRnZScsXG4gICAgYnJlYWRjcnVtYjogJ0JyZWFkY3J1bWInLFxuICAgIGJ1dHRvbjogJ0J1dHRvbicsXG4gICAgY2FyZDogJ0NhcmQnLFxuICAgIGNvbnRhaW5lcjogJ0NvbnRhaW5lcicsXG4gICAgY292ZXI6ICdDb3ZlcicsXG4gICAgZGFyazogJ0RhcmsnLFxuICAgIGRyb3Bkb3duOiAnRHJvcGRvd24nLFxuICAgIGZsZXg6ICdGbGV4JyxcbiAgICBncmlkOiAnR3JpZCcsXG4gICAgaWNvbjogJ0ljb24nLFxuICAgIGltYWdlOiAnSW1hZ2UnLFxuICAgIGxhYmVsczogJ0xhYmVscycsXG4gICAgbGlnaHQ6ICdMaWdodCcsXG4gICAgTGlnaHRib3g6ICdMaWdodGJveCcsXG4gICAgbGluazogJ0xpbmsnLFxuICAgIGxpc3Q6ICdMaXN0JyxcbiAgICBtYXJnaW46ICdNYXJnaW4nLFxuICAgIG5hdjogJ05hdicsXG4gICAgbmF2YmFyOiAnTmF2YmFyJyxcbiAgICBvZmZjYW52YXM6ICdPZmZjYW52YXMnLFxuICAgIG92ZXJsYXk6ICdPdmVybGF5JyxcbiAgICBwYW5lbDogJ1BhbmVsJyxcbiAgICBwYXJhbGxheDogJ1BhcmFsbGF4JyxcbiAgICBwcm9ncmVzczogJ1Byb2dyZXNzJyxcbiAgICBzY3JvbGxzcHk6ICdTY3JvbGxzcHknLFxuICAgIHNlY3Rpb246ICdTZWN0aW9uJyxcbiAgICBzaWRlYmFyOiAnU2lkZWJhcicsXG4gICAgc2xpZGVzaG93OiAnU2xpZGVzaG93JyxcbiAgICB0YWI6ICdUYWInLFxuICAgIHRhYmxlOiAnVGFibGUnXG59IiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0ICogYXMgUHJpc20gZnJvbSAncHJpc21qcyc7XG5pbXBvcnQgeyBlc2NhcGUgfSBmcm9tICdoZSc7XG5pbXBvcnQgbWFya3N5IGZyb20gJ21hcmtzeS9jb21wb25lbnRzJztcbmltcG9ydCB7XG4gICAgQWNjb3JkaW9uLFxuICAgIEFjY29yZGlvbkl0ZW0sXG4gICAgQWxlcnQsXG4gICAgQXJ0aWNsZSxcbiAgICBCYWRnZSxcbiAgICBCcmVhZGNydW1iLFxuICAgIEJ1dHRvbixcbiAgICBDYXJkLFxuICAgIENhcmRCb2R5LFxuICAgIENhcmRGb290ZXIsXG4gICAgQ2FyZEhlYWRlcixcbiAgICBDYXJkVGl0bGUsXG4gICAgTGluayxcbiAgICBUYWIsXG4gICAgVGFiQ29udGFpbmVyLFxuICAgIFRhYkNvbnRlbnQsXG4gICAgVGFibGVcbn0gZnJvbSAndWlraXQtcmVhY3QnO1xuaW1wb3J0IHsgQ29kZSB9IGZyb20gJy4vY29kZSc7XG5cbmV4cG9ydCBjb25zdCBjb21waWxlID0gbWFya3N5KHtcbiAgICBjcmVhdGVFbGVtZW50OiBSZWFjdC5jcmVhdGVFbGVtZW50LFxuICAgIGhpZ2hsaWdodChsYW5ndWFnZSwgY29kZSkge1xuICAgICAgICByZXR1cm4gUHJpc20uaGlnaGxpZ2h0KGNvZGUsIFByaXNtLmxhbmd1YWdlcy50c3gpO1xuICAgIH0sXG4gICAgZWxlbWVudHM6IHtcbiAgICAgICAgdGFibGUoe2NoaWxkcmVufSkge1xuICAgICAgICAgICAgcmV0dXJuIDxUYWJsZSBkaXZpZGVyPntjaGlsZHJlbn08L1RhYmxlPlxuICAgICAgICB9XG4gICAgfSxcbiAgICBjb21wb25lbnRzOiB7XG4gICAgICAgIEFjY29yZGlvbixcbiAgICAgICAgQWNjb3JkaW9uSXRlbSxcbiAgICAgICAgQWxlcnQsXG4gICAgICAgIEFydGljbGUsXG4gICAgICAgIEJhZGdlLFxuICAgICAgICBCcmVhZGNydW1iLFxuICAgICAgICBCdXR0b24sXG4gICAgICAgIENhcmQsXG4gICAgICAgIENhcmRCb2R5LFxuICAgICAgICBDYXJkRm9vdGVyLFxuICAgICAgICBDYXJkSGVhZGVyLFxuICAgICAgICBDYXJkVGl0bGUsXG4gICAgICAgIENvZGUsXG4gICAgICAgIExpbmssXG4gICAgICAgIFRhYixcbiAgICAgICAgVGFiQ29udGFpbmVyLFxuICAgICAgICBUYWJDb250ZW50XG4gICAgfVxufSk7IiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5pbXBvcnQgeyBCdXR0b24gfSBmcm9tICd1aWtpdC1yZWFjdCc7XG5pbXBvcnQgeyBDb250YWluZXIgfSBmcm9tICd1aWtpdC1yZWFjdCc7XG5pbXBvcnQgeyBGbGV4IH0gZnJvbSAndWlraXQtcmVhY3QnO1xuaW1wb3J0IHsgTGlnaHQgfSBmcm9tICd1aWtpdC1yZWFjdCc7XG5pbXBvcnQgeyBMaXN0IH0gZnJvbSAndWlraXQtcmVhY3QnO1xuaW1wb3J0IHsgTGlzdEl0ZW0gfSBmcm9tICd1aWtpdC1yZWFjdCc7XG5pbXBvcnQgeyBTZWN0aW9uIH0gZnJvbSAndWlraXQtcmVhY3QnO1xuaW1wb3J0IHsgSW1hZ2UgfSBmcm9tICd1aWtpdC1yZWFjdCc7XG5cbmV4cG9ydCBjbGFzcyBJbmRleFBhZ2UgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIHJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxGbGV4IGRpcmVjdGlvbj1cImNvbHVtblwiPlxuICAgICAgICAgICAgICAgIDxMaWdodD5cbiAgICAgICAgICAgICAgICAgICAgPFNlY3Rpb24gY29sb3I9XCJzZWNvbmRhcnlcIiBwYWRkaW5nPlxuICAgICAgICAgICAgICAgICAgICAgICAgPEZsZXggYWxpZ25tZW50PVwiY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9iamVjdCB3aWR0aD1cIjMwMFwiIGhlaWdodD1cIjMwMFwiIGRhdGE9XCIvY2xpZW50L2ltYWdlcy91aWtpdC1yZWFjdC5zdmdcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9GbGV4PlxuICAgICAgICAgICAgICAgICAgICAgICAgPEZsZXggYWxpZ25tZW50PVwiY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgyPlJlYWN0IFVJa2l0PC9oMj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvRmxleD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxGbGV4IGFsaWdubWVudD1cImNlbnRlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b24gc2l6ZT1cImxhcmdlXCIgY29sb3I9XCJwcmltYXJ5XCI+R2V0IFN0YXJ0ZWQ8L0J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvRmxleD5cbiAgICAgICAgICAgICAgICAgICAgPC9TZWN0aW9uPlxuICAgICAgICAgICAgICAgIDwvTGlnaHQ+XG4gICAgICAgICAgICAgICAgPFNlY3Rpb24gc2l6ZT1cImRlZmF1bHRcIiBwYWRkaW5nPlxuICAgICAgICAgICAgICAgICAgICA8Q29udGFpbmVyPlxuICAgICAgICAgICAgICAgICAgICAgICAgPEZsZXggYWxpZ25tZW50PVwiY2VudGVyXCIgZGlyZWN0aW9uPVwicm93XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpc3QgdHlwZT1cImRpdmlkZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpc3RJdGVtPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+TG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2NpbmcgZWxpdC4gSW50ZWdlciBuZWMgb2Rpby4gUHJhZXNlbnQgbGliZXJvLiBTZWQgY3Vyc3VzIGFudGUgZGFwaWJ1cyBkaWFtLiBTZWQgbmlzaS4gTnVsbGEgcXVpcyBzZW0gYXQgbmliaCBlbGVtZW50dW0gaW1wZXJkaWV0LiBEdWlzIHNhZ2l0dGlzIGlwc3VtLiA8Yj5Mb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzY2luZyBlbGl0PC9iPi4gUHJhZXNlbnQgbWF1cmlzLiBGdXNjZSBuZWMgdGVsbHVzIHNlZCBhdWd1ZSBzZW1wZXIgcG9ydGEuIDxiPkxvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNjaW5nIGVsaXQ8L2I+LiBNYXVyaXMgbWFzc2EuIFZlc3RpYnVsdW0gbGFjaW5pYSBhcmN1IGVnZXQgbnVsbGEuIENsYXNzIGFwdGVudCB0YWNpdGkgc29jaW9zcXUgYWQgbGl0b3JhIHRvcnF1ZW50IHBlciBjb251YmlhIG5vc3RyYSwgcGVyIGluY2VwdG9zIGhpbWVuYWVvcy4gQ3VyYWJpdHVyIHNvZGFsZXMgbGlndWxhIGluIGxpYmVyby4gPGI+TG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2NpbmcgZWxpdDwvYj4uIFNlZCBkaWduaXNzaW0gbGFjaW5pYSBudW5jLiA8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGlzdEl0ZW0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaXN0SXRlbT4gXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5DdXJhYml0dXIgdG9ydG9yLiBQZWxsZW50ZXNxdWUgbmliaC4gPGk+TG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2NpbmcgZWxpdDwvaT4uIEFlbmVhbiBxdWFtLiBJbiBzY2VsZXJpc3F1ZSBzZW0gYXQgZG9sb3IuIE1hZWNlbmFzIG1hdHRpcy4gU2VkIGNvbnZhbGxpcyB0cmlzdGlxdWUgc2VtLiBQcm9pbiB1dCBsaWd1bGEgdmVsIG51bmMgZWdlc3RhcyBwb3J0dGl0b3IuIE1vcmJpIGxlY3R1cyByaXN1cywgaWFjdWxpcyB2ZWwsIHN1c2NpcGl0IHF1aXMsIGx1Y3R1cyBub24sIG1hc3NhLiBGdXNjZSBhYyB0dXJwaXMgcXVpcyBsaWd1bGEgbGFjaW5pYSBhbGlxdWV0LiA8aT5Mb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzY2luZyBlbGl0PC9pPi4gTWF1cmlzIGlwc3VtLiBOdWxsYSBtZXR1cyBtZXR1cywgdWxsYW1jb3JwZXIgdmVsLCB0aW5jaWR1bnQgc2VkLCBldWlzbW9kIGluLCBuaWJoLiA8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGlzdEl0ZW0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaXN0SXRlbT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPjxpPkxvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNjaW5nIGVsaXQ8L2k+LiBRdWlzcXVlIHZvbHV0cGF0IGNvbmRpbWVudHVtIHZlbGl0LiA8aT5TZWQgZGlnbmlzc2ltIGxhY2luaWEgbnVuYzwvaT4uIENsYXNzIGFwdGVudCB0YWNpdGkgc29jaW9zcXUgYWQgbGl0b3JhIHRvcnF1ZW50IHBlciBjb251YmlhIG5vc3RyYSwgcGVyIGluY2VwdG9zIGhpbWVuYWVvcy4gTmFtIG5lYyBhbnRlLiBTZWQgbGFjaW5pYSwgdXJuYSBub24gdGluY2lkdW50IG1hdHRpcywgdG9ydG9yIG5lcXVlIGFkaXBpc2NpbmcgZGlhbSwgYSBjdXJzdXMgaXBzdW0gYW50ZSBxdWlzIHR1cnBpcy4gTnVsbGEgZmFjaWxpc2kuIDxiPlByb2luIHV0IGxpZ3VsYSB2ZWwgbnVuYyBlZ2VzdGFzIHBvcnR0aXRvcjwvYj4uIFV0IGZyaW5naWxsYS4gU3VzcGVuZGlzc2UgcG90ZW50aS4gTnVuYyBmZXVnaWF0IG1pIGEgdGVsbHVzIGNvbnNlcXVhdCBpbXBlcmRpZXQuIFZlc3RpYnVsdW0gc2FwaWVuLiBQcm9pbiBxdWFtLiBFdGlhbSB1bHRyaWNlcy4gU3VzcGVuZGlzc2UgaW4ganVzdG8gZXUgbWFnbmEgbHVjdHVzIHN1c2NpcGl0LiBTZWQgbGVjdHVzLiBJbnRlZ2VyIGV1aXNtb2QgbGFjdXMgbHVjdHVzIG1hZ25hLiA8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGlzdEl0ZW0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaXN0SXRlbT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPlF1aXNxdWUgY3Vyc3VzLCBtZXR1cyB2aXRhZSBwaGFyZXRyYSBhdWN0b3IsIHNlbSBtYXNzYSBtYXR0aXMgc2VtLCBhdCBpbnRlcmR1bSBtYWduYSBhdWd1ZSBlZ2V0IGRpYW0uIFZlc3RpYnVsdW0gYW50ZSBpcHN1bSBwcmltaXMgaW4gZmF1Y2lidXMgb3JjaSBsdWN0dXMgZXQgdWx0cmljZXMgcG9zdWVyZSBjdWJpbGlhIEN1cmFlOyBNb3JiaSBsYWNpbmlhIG1vbGVzdGllIGR1aS4gUHJhZXNlbnQgYmxhbmRpdCBkb2xvci4gU2VkIG5vbiBxdWFtLiBJbiB2ZWwgbWkgc2l0IGFtZXQgYXVndWUgY29uZ3VlIGVsZW1lbnR1bS4gTW9yYmkgaW4gaXBzdW0gc2l0IGFtZXQgcGVkZSBmYWNpbGlzaXMgbGFvcmVldC4gRG9uZWMgbGFjdXMgbnVuYywgdml2ZXJyYSBuZWMsIGJsYW5kaXQgdmVsLCBlZ2VzdGFzIGV0LCBhdWd1ZS4gVmVzdGlidWx1bSB0aW5jaWR1bnQgbWFsZXN1YWRhIHRlbGx1cy4gVXQgdWx0cmljZXMgdWx0cmljZXMgZW5pbS4gPGI+U3VzcGVuZGlzc2UgaW4ganVzdG8gZXUgbWFnbmEgbHVjdHVzIHN1c2NpcGl0PC9iPi4gQ3VyYWJpdHVyIHNpdCBhbWV0IG1hdXJpcy4gTW9yYmkgaW4gZHVpIHF1aXMgZXN0IHB1bHZpbmFyIHVsbGFtY29ycGVyLiA8Yj5WZXN0aWJ1bHVtIGFudGUgaXBzdW0gcHJpbWlzIGluIGZhdWNpYnVzIG9yY2kgbHVjdHVzIGV0IHVsdHJpY2VzIHBvc3VlcmUgY3ViaWxpYSBDdXJhZTsgTW9yYmkgbGFjaW5pYSBtb2xlc3RpZSBkdWk8L2I+LiBOdWxsYSBmYWNpbGlzaS4gSW50ZWdlciBsYWNpbmlhIHNvbGxpY2l0dWRpbiBtYXNzYS4gPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpc3RJdGVtPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGlzdD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvRmxleD5cbiAgICAgICAgICAgICAgICAgICAgPC9Db250YWluZXI+XG4gICAgICAgICAgICAgICAgPC9TZWN0aW9uPlxuICAgICAgICAgICAgPC9GbGV4PlxuICAgICAgICApO1xuICAgIH1cbn0iXSwic291cmNlUm9vdCI6IiJ9
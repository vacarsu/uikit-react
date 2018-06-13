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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL3BhZ2VzL0RvY3MvRG9jc1BhZ2UudHN4Iiwid2VicGFjazovLy8uL3NyYy9wYWdlcy9Eb2NzL0RvY3VtZW50YXRpb24udHN4Iiwid2VicGFjazovLy8uL3NyYy9wYWdlcy9Eb2NzL2NvZGUudHN4Iiwid2VicGFjazovLy8uL3NyYy9wYWdlcy9Eb2NzL2RvY3MtbmF2LnRzIiwid2VicGFjazovLy8uL3NyYy9wYWdlcy9Eb2NzL21hcmtzeS1jb21wb25lbnRzLnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXMvSW5kZXgvSW5kZXhQYWdlLnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxnQkFBUSxvQkFBb0I7QUFDNUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBaUIsNEJBQTRCO0FBQzdDO0FBQ0E7QUFDQSwwQkFBa0IsMkJBQTJCO0FBQzdDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGtEQUEwQyxnQ0FBZ0M7QUFDMUU7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxnRUFBd0Qsa0JBQWtC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QUNwQixnRUFBUSxLQUFLLEVBQUMsS0FBSyxFQUFDLE1BQU0sRUFBQyxLQUFLLEVBQUMsSUFBSSxFQUFDLGdDQUFnQyxHQUFHLENBQ3RFO29CQUNQLG9EQUFDLGdEQUFJLElBQUMsU0FBUyxFQUFDLFFBQVE7d0JBQ3BCLDhFQUFvQixDQUNqQjtvQkFDUCxvREFBQyxnREFBSSxJQUFDLFNBQVMsRUFBQyxRQUFRO3dCQUNwQixvREFBQyxrREFBTSxJQUFDLElBQUksRUFBQyxPQUFPLEVBQUMsS0FBSyxFQUFDLFNBQVMsa0JBQXFCLENBQ3RELENBQ0QsQ0FDTjtZQUNSLG9EQUFDLG1EQUFPLElBQUMsSUFBSSxFQUFDLFNBQVMsRUFBQyxPQUFPO2dCQUMzQixvREFBQyxxREFBUztvQkFDTixvREFBQyxnREFBSSxJQUFDLFNBQVMsRUFBQyxRQUFRLEVBQUMsU0FBUyxFQUFDLEtBQUs7d0JBQ3BDLG9EQUFDLGdEQUFJLElBQUMsSUFBSSxFQUFDLFNBQVM7NEJBQ2hCLG9EQUFDLG9EQUFRO2dDQUNMOztvQ0FBd00seUhBQThEOztvQ0FBNEQseUhBQThEOztvQ0FBb0wseUhBQThEO3FFQUFrQyxDQUM3b0I7NEJBQ1gsb0RBQUMsb0RBQVE7Z0NBQ0w7O29DQUF3Qyx5SEFBOEQ7O29DQUFzUCx5SEFBOEQ7NEhBQXlGLENBQzVlOzRCQUNYLG9EQUFDLG9EQUFRO2dDQUNMO29DQUFHLHlIQUE4RDs7b0NBQXNDLDRGQUFpQzs7b0NBQW1PLDRHQUFpRDt3UUFBcU8sQ0FDMW5COzRCQUNYLG9EQUFDLG9EQUFRO2dDQUNMOztvQ0FBK2QsK0dBQW9EOztvQ0FBeUUsb0xBQXlIOzZGQUEwRCxDQUN4d0IsQ0FDUixDQUNKLENBQ0MsQ0FDTixDQUNQLENBQ1YsQ0FBQztJQUNOLENBQUM7SUFDTCxnQkFBQztBQUFELENBQUMsQ0F4QzhCLCtDQUFlLEdBd0M3QyIsImZpbGUiOiJidW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBpbnN0YWxsIGEgSlNPTlAgY2FsbGJhY2sgZm9yIGNodW5rIGxvYWRpbmdcbiBcdGZ1bmN0aW9uIHdlYnBhY2tKc29ucENhbGxiYWNrKGRhdGEpIHtcbiBcdFx0dmFyIGNodW5rSWRzID0gZGF0YVswXTtcbiBcdFx0dmFyIG1vcmVNb2R1bGVzID0gZGF0YVsxXTtcbiBcdFx0dmFyIGV4ZWN1dGVNb2R1bGVzID0gZGF0YVsyXTtcblxuIFx0XHQvLyBhZGQgXCJtb3JlTW9kdWxlc1wiIHRvIHRoZSBtb2R1bGVzIG9iamVjdCxcbiBcdFx0Ly8gdGhlbiBmbGFnIGFsbCBcImNodW5rSWRzXCIgYXMgbG9hZGVkIGFuZCBmaXJlIGNhbGxiYWNrXG4gXHRcdHZhciBtb2R1bGVJZCwgY2h1bmtJZCwgaSA9IDAsIHJlc29sdmVzID0gW107XG4gXHRcdGZvcig7aSA8IGNodW5rSWRzLmxlbmd0aDsgaSsrKSB7XG4gXHRcdFx0Y2h1bmtJZCA9IGNodW5rSWRzW2ldO1xuIFx0XHRcdGlmKGluc3RhbGxlZENodW5rc1tjaHVua0lkXSkge1xuIFx0XHRcdFx0cmVzb2x2ZXMucHVzaChpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF1bMF0pO1xuIFx0XHRcdH1cbiBcdFx0XHRpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gPSAwO1xuIFx0XHR9XG4gXHRcdGZvcihtb2R1bGVJZCBpbiBtb3JlTW9kdWxlcykge1xuIFx0XHRcdGlmKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChtb3JlTW9kdWxlcywgbW9kdWxlSWQpKSB7XG4gXHRcdFx0XHRtb2R1bGVzW21vZHVsZUlkXSA9IG1vcmVNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0XHR9XG4gXHRcdH1cbiBcdFx0aWYocGFyZW50SnNvbnBGdW5jdGlvbikgcGFyZW50SnNvbnBGdW5jdGlvbihkYXRhKTtcblxuIFx0XHR3aGlsZShyZXNvbHZlcy5sZW5ndGgpIHtcbiBcdFx0XHRyZXNvbHZlcy5zaGlmdCgpKCk7XG4gXHRcdH1cblxuIFx0XHQvLyBhZGQgZW50cnkgbW9kdWxlcyBmcm9tIGxvYWRlZCBjaHVuayB0byBkZWZlcnJlZCBsaXN0XG4gXHRcdGRlZmVycmVkTW9kdWxlcy5wdXNoLmFwcGx5KGRlZmVycmVkTW9kdWxlcywgZXhlY3V0ZU1vZHVsZXMgfHwgW10pO1xuXG4gXHRcdC8vIHJ1biBkZWZlcnJlZCBtb2R1bGVzIHdoZW4gYWxsIGNodW5rcyByZWFkeVxuIFx0XHRyZXR1cm4gY2hlY2tEZWZlcnJlZE1vZHVsZXMoKTtcbiBcdH07XG4gXHRmdW5jdGlvbiBjaGVja0RlZmVycmVkTW9kdWxlcygpIHtcbiBcdFx0dmFyIHJlc3VsdDtcbiBcdFx0Zm9yKHZhciBpID0gMDsgaSA8IGRlZmVycmVkTW9kdWxlcy5sZW5ndGg7IGkrKykge1xuIFx0XHRcdHZhciBkZWZlcnJlZE1vZHVsZSA9IGRlZmVycmVkTW9kdWxlc1tpXTtcbiBcdFx0XHR2YXIgZnVsZmlsbGVkID0gdHJ1ZTtcbiBcdFx0XHRmb3IodmFyIGogPSAxOyBqIDwgZGVmZXJyZWRNb2R1bGUubGVuZ3RoOyBqKyspIHtcbiBcdFx0XHRcdHZhciBkZXBJZCA9IGRlZmVycmVkTW9kdWxlW2pdO1xuIFx0XHRcdFx0aWYoaW5zdGFsbGVkQ2h1bmtzW2RlcElkXSAhPT0gMCkgZnVsZmlsbGVkID0gZmFsc2U7XG4gXHRcdFx0fVxuIFx0XHRcdGlmKGZ1bGZpbGxlZCkge1xuIFx0XHRcdFx0ZGVmZXJyZWRNb2R1bGVzLnNwbGljZShpLS0sIDEpO1xuIFx0XHRcdFx0cmVzdWx0ID0gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBkZWZlcnJlZE1vZHVsZVswXSk7XG4gXHRcdFx0fVxuIFx0XHR9XG4gXHRcdHJldHVybiByZXN1bHQ7XG4gXHR9XG5cbiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4gXHQvLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbiBcdC8vIFByb21pc2UgPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG4gXHR2YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuIFx0XHRcImJ1bmRsZVwiOiAwXG4gXHR9O1xuXG4gXHR2YXIgZGVmZXJyZWRNb2R1bGVzID0gW107XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdHZhciBqc29ucEFycmF5ID0gd2luZG93W1wid2VicGFja0pzb25wXCJdID0gd2luZG93W1wid2VicGFja0pzb25wXCJdIHx8IFtdO1xuIFx0dmFyIG9sZEpzb25wRnVuY3Rpb24gPSBqc29ucEFycmF5LnB1c2guYmluZChqc29ucEFycmF5KTtcbiBcdGpzb25wQXJyYXkucHVzaCA9IHdlYnBhY2tKc29ucENhbGxiYWNrO1xuIFx0anNvbnBBcnJheSA9IGpzb25wQXJyYXkuc2xpY2UoKTtcbiBcdGZvcih2YXIgaSA9IDA7IGkgPCBqc29ucEFycmF5Lmxlbmd0aDsgaSsrKSB3ZWJwYWNrSnNvbnBDYWxsYmFjayhqc29ucEFycmF5W2ldKTtcbiBcdHZhciBwYXJlbnRKc29ucEZ1bmN0aW9uID0gb2xkSnNvbnBGdW5jdGlvbjtcblxuXG4gXHQvLyBhZGQgZW50cnkgbW9kdWxlIHRvIGRlZmVycmVkIGxpc3RcbiBcdGRlZmVycmVkTW9kdWxlcy5wdXNoKFtcIi4vc3JjL2FwcC50c3hcIixcInZlbmRvclwiXSk7XG4gXHQvLyBydW4gZGVmZXJyZWQgbW9kdWxlcyB3aGVuIHJlYWR5XG4gXHRyZXR1cm4gY2hlY2tEZWZlcnJlZE1vZHVsZXMoKTtcbiIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHJlbmRlciB9IGZyb20gJ3JlYWN0LWRvbSc7XG5pbXBvcnQgeyBCcm93c2VyUm91dGVyIGFzIFJvdXRlciwgUm91dGUsIE5hdkxpbmsgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcbmltcG9ydCAncHJpc21qcyc7XG5pbXBvcnQgJ3ByaXNtanMvY29tcG9uZW50cy9wcmlzbS1qYXZhc2NyaXB0Lm1pbic7XG5pbXBvcnQgJ3ByaXNtanMvY29tcG9uZW50cy9wcmlzbS1qc3gubWluJztcbmltcG9ydCAncHJpc21qcy9jb21wb25lbnRzL3ByaXNtLXRzeC5taW4nO1xuaW1wb3J0ICdwcmlzbWpzL3BsdWdpbnMvdG9vbGJhci9wcmlzbS10b29sYmFyJztcbmltcG9ydCAncHJpc21qcy9wbHVnaW5zL2NvcHktdG8tY2xpcGJvYXJkL3ByaXNtLWNvcHktdG8tY2xpcGJvYXJkJztcbmltcG9ydCAncHJpc21qcy9jb21wb25lbnRzL3ByaXNtLWNzcy5taW4nO1xuXG5pbXBvcnQge1xuICAgIENvbnRhaW5lcixcbiAgICBMaWdodCxcbiAgICBJY29uLFxuICAgIExpbmssXG4gICAgTGlzdCxcbiAgICBMaXN0SXRlbSxcbiAgICBPZmZjYW52YXMsXG4gICAgT2ZmY2FudmFzQ29udGFpbmVyLFxuICAgIE5hdmJhcixcbiAgICBOYXZiYXJDb250YWluZXIsXG4gICAgTmF2YmFyU3RpY2t5LFxuICAgIFNlY3Rpb25cbn0gZnJvbSAndWlraXQtcmVhY3QnO1xuXG5cbmltcG9ydCB7IERvY3NQYWdlIH0gZnJvbSAnLi9wYWdlcy9Eb2NzL0RvY3NQYWdlJztcbmltcG9ydCB7IEluZGV4UGFnZSB9IGZyb20gJy4vcGFnZXMvSW5kZXgvSW5kZXhQYWdlJztcblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsICgpID0+IHtcbiAgICBjb25zb2xlLmxvZyhTZWN0aW9uKTtcbiAgICByZW5kZXIoXG4gICAgICAgIDxFeGFtcGxlUGFnZSAvPixcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Jvb3QnKVxuICAgICk7XG59LCBmYWxzZSk7XG5cbmNsYXNzIEV4YW1wbGVQYWdlIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50PGFueSwgYW55PiB7XG4gICAgcmVuZGVyKCkge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPE9mZmNhbnZhc0NvbnRhaW5lcj5cbiAgICAgICAgICAgICAgICA8Um91dGVyPlxuICAgICAgICAgICAgICAgICAgICA8U2VjdGlvbiBwb3NpdGlvbj1cInJlbGF0aXZlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8U2VjdGlvbiBjb2xvcj1cInNlY29uZGFyeVwiIHByZXNlcnZlQ29sb3I+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPE5hdmJhclN0aWNreSBvcHRpb25zPVwiYW5pbWF0aW9uOiB1ay1hbmltYXRpb24tc2xpZGUtdG9wOyBjbHMtaW5hY3RpdmU6IHVrLW5hdmJhci10cmFuc3BhcmVudCB1ay1saWdodDsgdG9wOiA1NTY7XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxOYXZiYXJDb250YWluZXIgdHJhbnNwYXJlbnQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TmF2YmFyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaXN0SXRlbT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgdG9nZ2xlT3B0aW9ucz1cInRhcmdldDogI21lbnU7XCIgaHJlZj1cIiNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJY29uIG9wdGlvbnM9XCJtZW51XCIgYnV0dG9uIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpc3RJdGVtPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9OYXZiYXI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TmF2YmFyIGFsaWduPVwicmlnaHRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGlzdEl0ZW0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCJodHRwczovL2dpdGh1Yi5jb20vdmFjYXJzdS9kaW1lbnNpb24tY21zXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SWNvbiBvcHRpb25zPVwiZ2l0aHViXCIgYnV0dG9uIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpc3RJdGVtPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9OYXZiYXI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTmF2YmFyQ29udGFpbmVyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTmF2YmFyU3RpY2t5PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9TZWN0aW9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgPE9mZmNhbnZhcyBpZD1cIm1lbnVcIiBvcHRpb25zPVwib3ZlcmxheTogdHJ1ZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaXN0IHR5cGU9XCJkaXZpZGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaXN0SXRlbT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxOYXZMaW5rIHRvPVwiL1wiPkhvbWU8L05hdkxpbms+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGlzdEl0ZW0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaXN0SXRlbT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxOYXZMaW5rIHRvPVwiL2RvY3MvYWNjb3JkaW9uXCI+QWNjb3JkaW9uPC9OYXZMaW5rPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpc3RJdGVtPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGlzdEl0ZW0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TmF2TGluayB0bz1cIi9kb2NzL2FsZXJ0XCI+QWxlcnQ8L05hdkxpbms+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGlzdEl0ZW0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaXN0SXRlbT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxOYXZMaW5rIHRvPVwiL2RvY3MvYXJ0aWNsZVwiPkFydGljbGU8L05hdkxpbms+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGlzdEl0ZW0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaXN0SXRlbT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxOYXZMaW5rIHRvPVwiL2RvY3MvYmFkZ2VcIj5CYWRnZTwvTmF2TGluaz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaXN0SXRlbT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpc3RJdGVtPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE5hdkxpbmsgdG89XCIvZG9jcy9pY29uXCI+SWNvbjwvTmF2TGluaz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaXN0SXRlbT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpc3Q+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L09mZmNhbnZhcz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxSb3V0ZSBleGFjdCBwYXRoPVwiL1wiIGNvbXBvbmVudD17SW5kZXhQYWdlfSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPFJvdXRlIHBhdGg9XCIvZG9jc1wiIGNvbXBvbmVudD17RG9jc1BhZ2V9IC8+XG4gICAgICAgICAgICAgICAgICAgIDwvU2VjdGlvbj5cbiAgICAgICAgICAgICAgICA8L1JvdXRlcj5cbiAgICAgICAgICAgIDwvT2ZmY2FudmFzQ29udGFpbmVyPlxuICAgICAgICApXG4gICAgfVxufSIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IFJvdXRlLCBOYXZMaW5rIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XG5cbmltcG9ydCB7XG4gICAgQ29udGFpbmVyLFxuICAgIEZsZXgsXG4gICAgRm9ybSxcbiAgICBJbnB1dENvbnRhaW5lcixcbiAgICBMYWJlbCxcbiAgICBTZWxlY3QsXG4gICAgU2VsZWN0T3B0aW9uLFxuICAgIExpc3QsXG4gICAgTGlzdEl0ZW0sXG4gICAgTmF2LFxuICAgIE5hdkl0ZW0sXG4gICAgU2VjdGlvbixcbiAgICBTaWRlYmFyXG59IGZyb20gJ3Vpa2l0LXJlYWN0JztcblxuaW1wb3J0IHsgRG9jdW1lbnRhdGlvbiB9IGZyb20gJy4vRG9jdW1lbnRhdGlvbic7XG5pbXBvcnQgeyBkb2NzTmF2IH0gZnJvbSAnLi9kb2NzLW5hdic7XG5cbmV4cG9ydCBjbGFzcyBEb2NzUGFnZSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudDxhbnksIGFueT4ge1xuICAgIGNvbnN0cnVjdG9yIChwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcyk7XG4gICAgICAgIHRoaXMuc3RhdGUgPSB7IHZlcnNpb246ICcwLjAuMScgfTtcbiAgICB9XG5cbiAgICBwcml2YXRlIG9uVmVyc2lvbkNoYW5nZShldmVudCkge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIHZlcnNpb246IGV2ZW50LnRhcmdldC52YWx1ZVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8U2VjdGlvbj5cbiAgICAgICAgICAgICAgICA8Q29udGFpbmVyPlxuICAgICAgICAgICAgICAgICAgICA8Q29udGFpbmVyPlxuICAgICAgICAgICAgICAgICAgICAgICAgPFNpZGViYXIgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9wOiAnODBweCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvdHRvbTogJzAnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3hTaXppbmc6ICdib3JkZXItYm94JyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogJzQwcHggNDBweCA2MHB4IDQwcHgnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXJSaWdodDogJzFweCAjZTVlNWU1IHNvbGlkJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAnYXV0bycsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG92ZXJmbG93OiAnYXV0bydcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uPVwiZml4ZWRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TmF2IHByZXNldD1cImRlZmF1bHRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qIDxOYXZJdGVtPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPElucHV0Q29udGFpbmVyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGFiZWwgaHRtbEZvcj1cInZlcnNpb25cIj5WZXJzaW9uPC9MYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFNlbGVjdFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJ2ZXJzaW9uXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLnZlcnNpb259XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5vblZlcnNpb25DaGFuZ2UuYmluZCh0aGlzKX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8U2VsZWN0T3B0aW9uIHZhbHVlPVwiMC4wLjFcIj4wLjAuMTwvU2VsZWN0T3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFNlbGVjdE9wdGlvbiB2YWx1ZT1cIjAuMC4yXCI+MC4wLjI8L1NlbGVjdE9wdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9TZWxlY3Q+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9JbnB1dENvbnRhaW5lcj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvRm9ybT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9OYXZJdGVtPiAqL31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3RoaXMucmVuZGVyTWVudSgpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTmF2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9TaWRlYmFyPlxuICAgICAgICAgICAgICAgICAgICA8L0NvbnRhaW5lcj5cbiAgICAgICAgICAgICAgICAgICAgPENvbnRhaW5lciBzaXplPVwiMS0xXCIgc3R5bGU9e3sgcGFkZGluZ0xlZnQ6ICcyMjAnIH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgPFJvdXRlIHBhdGg9e2Ake3RoaXMucHJvcHMubWF0Y2gudXJsfS86dmVyc2lvbi86bmFtZWB9IGNvbXBvbmVudD17RG9jdW1lbnRhdGlvbn0gLz5cbiAgICAgICAgICAgICAgICAgICAgPC9Db250YWluZXI+XG4gICAgICAgICAgICAgICAgPC9Db250YWluZXI+XG4gICAgICAgICAgICA8L1NlY3Rpb24+XG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSByZW5kZXJNZW51KCkge1xuICAgICAgICBsZXQgY291bnQgPSAwO1xuICAgICAgICByZXR1cm4gT2JqZWN0LmtleXMoZG9jc05hdikubWFwKChrKSA9PiB7XG4gICAgICAgICAgICBjb3VudCsrO1xuICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICA8TmF2SXRlbSBrZXk9e2t9IHR5cGU9e2NvdW50ID09PSAxID8gXCJkaXZpZGVyXCIgOiBudWxsfT5cbiAgICAgICAgICAgICAgICAgICAgPE5hdkxpbmsgdG89e2AvZG9jcy8ke3RoaXMuc3RhdGUudmVyc2lvbn0vJHtkb2NzTmF2W2tdLnRvTG93ZXJDYXNlKCl9YH0+e2RvY3NOYXZba119PC9OYXZMaW5rPlxuICAgICAgICAgICAgICAgIDwvTmF2SXRlbT5cbiAgICAgICAgICAgICk7XG4gICAgICAgIH0pO1xuICAgIH1cbn0iLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgKiBhcyBQcmlzbSBmcm9tICdwcmlzbWpzJztcbmltcG9ydCAqIGFzIG1hcmtlZCBmcm9tICdtYXJrZWQnO1xuaW1wb3J0IHsgUm91dGUsIE5hdkxpbmsgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcbmltcG9ydCB7IE1hcmtkb3duIH0gZnJvbSAnLi9wYXJzZS1tYXJrZG93bic7XG5pbXBvcnQgeyBjb21waWxlIH0gZnJvbSAnLi9tYXJrc3ktY29tcG9uZW50cyc7XG5pbXBvcnQge1xuICAgIEFydGljbGUsXG4gICAgQ29udGFpbmVyLFxuICAgIEZsZXgsXG4gICAgTGlzdCxcbiAgICBMaXN0SXRlbSxcbiAgICBOYXYsXG4gICAgTmF2SXRlbSxcbiAgICBTZWN0aW9uLFxuICAgIFNpZGViYXJcbn0gZnJvbSAndWlraXQtcmVhY3QnO1xuXG5leHBvcnQgY2xhc3MgRG9jdW1lbnRhdGlvbiBleHRlbmRzIFJlYWN0LkNvbXBvbmVudDxhbnksIGFueT4ge1xuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKTtcbiAgICAgICAgY29uc3QgeyBuYW1lLCB2ZXJzaW9uIH0gPSB0aGlzLnByb3BzLm1hdGNoLnBhcmFtcztcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgICAgIG5hbWU6IG5hbWUsXG4gICAgICAgICAgICB2ZXJzaW9uOiB2ZXJzaW9uLFxuICAgICAgICAgICAgcGFyc2VkTWFya2Rvd246IG51bGwsXG4gICAgICAgICAgICBpc0xvYWRpbmc6IHRydWVcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICBjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzKG5leHRQcm9wcykge1xuICAgICAgICBjb25zdCB7IG5hbWUsIHZlcnNpb24gfSA9IG5leHRQcm9wcy5tYXRjaC5wYXJhbXM7XG4gICAgICAgIGlmICh0aGlzLnN0YXRlLm5hbWUgIT09IG5hbWUpIHtcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICAgIG5hbWU6IG5hbWVcbiAgICAgICAgICAgIH0sICgpID0+IHRoaXMuZmV0Y2hEb2NzKCkpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMuc3RhdGUudmVyc2lvbiAhPT0gdmVyc2lvbikge1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgICAgdmVyc2lvbjogdmVyc2lvblxuICAgICAgICAgICAgfSwgKCkgPT4gdGhpcy5mZXRjaERvY3MoKSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBzaG91bGRDb21wb25lbnRVcGRhdGUobmV4dFByb3BzLCBuZXh0U3RhdGUpOiBib29sZWFuIHtcbiAgICAgICAgY29uc3QgeyBuYW1lLCB2ZXJzaW9uIH0gPSBuZXh0UHJvcHMubWF0Y2gucGFyYW1zO1xuICAgICAgICBpZiAodGhpcy5zdGF0ZS5uYW1lICE9PSBuYW1lKSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLnN0YXRlLnZlcnNpb24gIT09IHZlcnNpb24pIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMuc3RhdGUuaXNMb2FkaW5nICE9PSBuZXh0U3RhdGUuaXNMb2FkaW5nKSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAgICAgdGhpcy5mZXRjaERvY3MoKTtcbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8U2VjdGlvbiBwYWRkaW5nPlxuICAgICAgICAgICAgICAgIDxBcnRpY2xlIHRpdGxlPXt0aGlzLnN0YXRlLm5hbWUuY2hhckF0KDApLnRvVXBwZXJDYXNlKCkgKyB0aGlzLnN0YXRlLm5hbWUuc3Vic3RyKDEpfT5cbiAgICAgICAgICAgICAgICAgICAge3RoaXMuc3RhdGUucGFyc2VkTWFya2Rvd24gPyB0aGlzLnN0YXRlLnBhcnNlZE1hcmtkb3duLnRyZWUgOiBudWxsfVxuICAgICAgICAgICAgICAgIDwvQXJ0aWNsZT5cbiAgICAgICAgICAgIDwvU2VjdGlvbj5cbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIGZldGNoRG9jcygpIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGlzTG9hZGluZzogdHJ1ZSB9KTtcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5zdGF0ZS5uYW1lKTtcbiAgICAgICAgZmV0Y2goYHNyYy9kb2NzLyR7dGhpcy5zdGF0ZS52ZXJzaW9ufS8ke3RoaXMuc3RhdGUubmFtZX0ubWRgKVxuICAgICAgICAgICAgLnRoZW4oKHJlcykgPT4gcmVzLnRleHQoKSlcbiAgICAgICAgICAgIC50aGVuKHRleHQgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICAgICAgICBwYXJzZWRNYXJrZG93bjogY29tcGlsZSh0ZXh0KSxcbiAgICAgICAgICAgICAgICAgICAgaXNMb2FkaW5nOiBmYWxzZVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihlcnIpO1xuICAgICAgICAgICAgfSk7XG4gICAgfVxufSIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCAqIGFzIFJlYWN0RE9NIGZyb20gJ3JlYWN0LWRvbS9zZXJ2ZXInO1xuaW1wb3J0ICogYXMgUHJpc20gZnJvbSAncHJpc21qcyc7XG5cbmV4cG9ydCBjbGFzcyBDb2RlIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50PGFueSwgYW55PiB7XG4gICAgcmVuZGVyKCkge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGNvZGVcbiAgICAgICAgICAgICAgICBkYW5nZXJvdXNseVNldElubmVySFRNTD17eyBfX2h0bWw6IFByaXNtLmhpZ2hsaWdodCh0aGlzLnByb3BzLmNvZGUsIFByaXNtLmxhbmd1YWdlcy50c3gpIH19XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibGFuZ3VhZ2UtdHN4XCI+XG4gICAgICAgICAgICA8L2NvZGU+XG4gICAgICAgICk7XG4gICAgfVxufSIsImV4cG9ydCBjb25zdCBkb2NzTmF2ID0ge1xuICAgIGFjY29yZGlvbjogJ0FjY29yZGlvbicsXG4gICAgYWxlcnQ6ICdBbGVydCcsXG4gICAgYXJ0aWNsZTogJ0FydGljbGUnLFxuICAgIGJhZGdlOiAnQmFkZ2UnLFxuICAgIGJyZWFkY3J1bWI6ICdCcmVhZGNydW1iJyxcbiAgICBidXR0b246ICdCdXR0b24nLFxuICAgIGNhcmQ6ICdDYXJkJyxcbiAgICBjb250YWluZXI6ICdDb250YWluZXInLFxuICAgIGNvdmVyOiAnQ292ZXInLFxuICAgIGRhcms6ICdEYXJrJyxcbiAgICBkcm9wZG93bjogJ0Ryb3Bkb3duJyxcbiAgICBmbGV4OiAnRmxleCcsXG4gICAgZ3JpZDogJ0dyaWQnLFxuICAgIGljb246ICdJY29uJyxcbiAgICBpbWFnZTogJ0ltYWdlJyxcbiAgICBsYWJlbHM6ICdMYWJlbHMnLFxuICAgIGxpZ2h0OiAnTGlnaHQnLFxuICAgIExpZ2h0Ym94OiAnTGlnaHRib3gnLFxuICAgIGxpbms6ICdMaW5rJyxcbiAgICBsaXN0OiAnTGlzdCcsXG4gICAgbWFyZ2luOiAnTWFyZ2luJyxcbiAgICBuYXY6ICdOYXYnLFxuICAgIG5hdmJhcjogJ05hdmJhcicsXG4gICAgb2ZmY2FudmFzOiAnT2ZmY2FudmFzJyxcbiAgICBvdmVybGF5OiAnT3ZlcmxheScsXG4gICAgcGFuZWw6ICdQYW5lbCcsXG4gICAgcGFyYWxsYXg6ICdQYXJhbGxheCcsXG4gICAgcHJvZ3Jlc3M6ICdQcm9ncmVzcycsXG4gICAgc2Nyb2xsc3B5OiAnU2Nyb2xsc3B5JyxcbiAgICBzZWN0aW9uOiAnU2VjdGlvbicsXG4gICAgc2lkZWJhcjogJ1NpZGViYXInLFxuICAgIHNsaWRlc2hvdzogJ1NsaWRlc2hvdycsXG4gICAgdGFiOiAnVGFiJyxcbiAgICB0YWJsZTogJ1RhYmxlJ1xufSIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCAqIGFzIFByaXNtIGZyb20gJ3ByaXNtanMnO1xuaW1wb3J0IHsgZXNjYXBlIH0gZnJvbSAnaGUnO1xuaW1wb3J0IG1hcmtzeSBmcm9tICdtYXJrc3kvY29tcG9uZW50cyc7XG5pbXBvcnQge1xuICAgIEFjY29yZGlvbixcbiAgICBBY2NvcmRpb25JdGVtLFxuICAgIEFsZXJ0LFxuICAgIEFydGljbGUsXG4gICAgQmFkZ2UsXG4gICAgQnJlYWRjcnVtYixcbiAgICBCdXR0b24sXG4gICAgQ2FyZCxcbiAgICBDYXJkQm9keSxcbiAgICBDYXJkRm9vdGVyLFxuICAgIENhcmRIZWFkZXIsXG4gICAgQ2FyZFRpdGxlLFxuICAgIExpbmssXG4gICAgVGFiLFxuICAgIFRhYkNvbnRhaW5lcixcbiAgICBUYWJDb250ZW50LFxuICAgIFRhYmxlXG59IGZyb20gJ3Vpa2l0LXJlYWN0JztcbmltcG9ydCB7IENvZGUgfSBmcm9tICcuL2NvZGUnO1xuXG5leHBvcnQgY29uc3QgY29tcGlsZSA9IG1hcmtzeSh7XG4gICAgY3JlYXRlRWxlbWVudDogUmVhY3QuY3JlYXRlRWxlbWVudCxcbiAgICBoaWdobGlnaHQobGFuZ3VhZ2UsIGNvZGUpIHtcbiAgICAgICAgcmV0dXJuIFByaXNtLmhpZ2hsaWdodChjb2RlLCBQcmlzbS5sYW5ndWFnZXMudHN4KTtcbiAgICB9LFxuICAgIGVsZW1lbnRzOiB7XG4gICAgICAgIHRhYmxlKHtjaGlsZHJlbn0pIHtcbiAgICAgICAgICAgIHJldHVybiA8VGFibGUgZGl2aWRlcj57Y2hpbGRyZW59PC9UYWJsZT5cbiAgICAgICAgfVxuICAgIH0sXG4gICAgY29tcG9uZW50czoge1xuICAgICAgICBBY2NvcmRpb24sXG4gICAgICAgIEFjY29yZGlvbkl0ZW0sXG4gICAgICAgIEFsZXJ0LFxuICAgICAgICBBcnRpY2xlLFxuICAgICAgICBCYWRnZSxcbiAgICAgICAgQnJlYWRjcnVtYixcbiAgICAgICAgQnV0dG9uLFxuICAgICAgICBDYXJkLFxuICAgICAgICBDYXJkQm9keSxcbiAgICAgICAgQ2FyZEZvb3RlcixcbiAgICAgICAgQ2FyZEhlYWRlcixcbiAgICAgICAgQ2FyZFRpdGxlLFxuICAgICAgICBDb2RlLFxuICAgICAgICBMaW5rLFxuICAgICAgICBUYWIsXG4gICAgICAgIFRhYkNvbnRhaW5lcixcbiAgICAgICAgVGFiQ29udGVudFxuICAgIH1cbn0pOyIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0IHsgQnV0dG9uIH0gZnJvbSAndWlraXQtcmVhY3QnO1xuaW1wb3J0IHsgQ29udGFpbmVyIH0gZnJvbSAndWlraXQtcmVhY3QnO1xuaW1wb3J0IHsgRmxleCB9IGZyb20gJ3Vpa2l0LXJlYWN0JztcbmltcG9ydCB7IExpZ2h0IH0gZnJvbSAndWlraXQtcmVhY3QnO1xuaW1wb3J0IHsgTGlzdCB9IGZyb20gJ3Vpa2l0LXJlYWN0JztcbmltcG9ydCB7IExpc3RJdGVtIH0gZnJvbSAndWlraXQtcmVhY3QnO1xuaW1wb3J0IHsgU2VjdGlvbiB9IGZyb20gJ3Vpa2l0LXJlYWN0JztcbmltcG9ydCB7IEltYWdlIH0gZnJvbSAndWlraXQtcmVhY3QnO1xuXG5leHBvcnQgY2xhc3MgSW5kZXhQYWdlIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8RmxleCBkaXJlY3Rpb249XCJjb2x1bW5cIj5cbiAgICAgICAgICAgICAgICA8TGlnaHQ+XG4gICAgICAgICAgICAgICAgICAgIDxTZWN0aW9uIGNvbG9yPVwic2Vjb25kYXJ5XCIgcGFkZGluZz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxGbGV4IGFsaWdubWVudD1cImNlbnRlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvYmplY3Qgd2lkdGg9XCIzMDBcIiBoZWlnaHQ9XCIzMDBcIiBkYXRhPVwiL2NsaWVudC9pbWFnZXMvdWlraXQtcmVhY3Quc3ZnXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvRmxleD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxGbGV4IGFsaWdubWVudD1cImNlbnRlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMj5SZWFjdCBVSWtpdDwvaDI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L0ZsZXg+XG4gICAgICAgICAgICAgICAgICAgICAgICA8RmxleCBhbGlnbm1lbnQ9XCJjZW50ZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIHNpemU9XCJsYXJnZVwiIGNvbG9yPVwicHJpbWFyeVwiPkdldCBTdGFydGVkPC9CdXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L0ZsZXg+XG4gICAgICAgICAgICAgICAgICAgIDwvU2VjdGlvbj5cbiAgICAgICAgICAgICAgICA8L0xpZ2h0PlxuICAgICAgICAgICAgICAgIDxTZWN0aW9uIHNpemU9XCJkZWZhdWx0XCIgcGFkZGluZz5cbiAgICAgICAgICAgICAgICAgICAgPENvbnRhaW5lcj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxGbGV4IGFsaWdubWVudD1cImNlbnRlclwiIGRpcmVjdGlvbj1cInJvd1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaXN0IHR5cGU9XCJkaXZpZGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaXN0SXRlbT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPkxvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNjaW5nIGVsaXQuIEludGVnZXIgbmVjIG9kaW8uIFByYWVzZW50IGxpYmVyby4gU2VkIGN1cnN1cyBhbnRlIGRhcGlidXMgZGlhbS4gU2VkIG5pc2kuIE51bGxhIHF1aXMgc2VtIGF0IG5pYmggZWxlbWVudHVtIGltcGVyZGlldC4gRHVpcyBzYWdpdHRpcyBpcHN1bS4gPGI+TG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2NpbmcgZWxpdDwvYj4uIFByYWVzZW50IG1hdXJpcy4gRnVzY2UgbmVjIHRlbGx1cyBzZWQgYXVndWUgc2VtcGVyIHBvcnRhLiA8Yj5Mb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzY2luZyBlbGl0PC9iPi4gTWF1cmlzIG1hc3NhLiBWZXN0aWJ1bHVtIGxhY2luaWEgYXJjdSBlZ2V0IG51bGxhLiBDbGFzcyBhcHRlbnQgdGFjaXRpIHNvY2lvc3F1IGFkIGxpdG9yYSB0b3JxdWVudCBwZXIgY29udWJpYSBub3N0cmEsIHBlciBpbmNlcHRvcyBoaW1lbmFlb3MuIEN1cmFiaXR1ciBzb2RhbGVzIGxpZ3VsYSBpbiBsaWJlcm8uIDxiPkxvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNjaW5nIGVsaXQ8L2I+LiBTZWQgZGlnbmlzc2ltIGxhY2luaWEgbnVuYy4gPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpc3RJdGVtPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGlzdEl0ZW0+IFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+Q3VyYWJpdHVyIHRvcnRvci4gUGVsbGVudGVzcXVlIG5pYmguIDxpPkxvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNjaW5nIGVsaXQ8L2k+LiBBZW5lYW4gcXVhbS4gSW4gc2NlbGVyaXNxdWUgc2VtIGF0IGRvbG9yLiBNYWVjZW5hcyBtYXR0aXMuIFNlZCBjb252YWxsaXMgdHJpc3RpcXVlIHNlbS4gUHJvaW4gdXQgbGlndWxhIHZlbCBudW5jIGVnZXN0YXMgcG9ydHRpdG9yLiBNb3JiaSBsZWN0dXMgcmlzdXMsIGlhY3VsaXMgdmVsLCBzdXNjaXBpdCBxdWlzLCBsdWN0dXMgbm9uLCBtYXNzYS4gRnVzY2UgYWMgdHVycGlzIHF1aXMgbGlndWxhIGxhY2luaWEgYWxpcXVldC4gPGk+TG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2NpbmcgZWxpdDwvaT4uIE1hdXJpcyBpcHN1bS4gTnVsbGEgbWV0dXMgbWV0dXMsIHVsbGFtY29ycGVyIHZlbCwgdGluY2lkdW50IHNlZCwgZXVpc21vZCBpbiwgbmliaC4gPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpc3RJdGVtPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGlzdEl0ZW0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD48aT5Mb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzY2luZyBlbGl0PC9pPi4gUXVpc3F1ZSB2b2x1dHBhdCBjb25kaW1lbnR1bSB2ZWxpdC4gPGk+U2VkIGRpZ25pc3NpbSBsYWNpbmlhIG51bmM8L2k+LiBDbGFzcyBhcHRlbnQgdGFjaXRpIHNvY2lvc3F1IGFkIGxpdG9yYSB0b3JxdWVudCBwZXIgY29udWJpYSBub3N0cmEsIHBlciBpbmNlcHRvcyBoaW1lbmFlb3MuIE5hbSBuZWMgYW50ZS4gU2VkIGxhY2luaWEsIHVybmEgbm9uIHRpbmNpZHVudCBtYXR0aXMsIHRvcnRvciBuZXF1ZSBhZGlwaXNjaW5nIGRpYW0sIGEgY3Vyc3VzIGlwc3VtIGFudGUgcXVpcyB0dXJwaXMuIE51bGxhIGZhY2lsaXNpLiA8Yj5Qcm9pbiB1dCBsaWd1bGEgdmVsIG51bmMgZWdlc3RhcyBwb3J0dGl0b3I8L2I+LiBVdCBmcmluZ2lsbGEuIFN1c3BlbmRpc3NlIHBvdGVudGkuIE51bmMgZmV1Z2lhdCBtaSBhIHRlbGx1cyBjb25zZXF1YXQgaW1wZXJkaWV0LiBWZXN0aWJ1bHVtIHNhcGllbi4gUHJvaW4gcXVhbS4gRXRpYW0gdWx0cmljZXMuIFN1c3BlbmRpc3NlIGluIGp1c3RvIGV1IG1hZ25hIGx1Y3R1cyBzdXNjaXBpdC4gU2VkIGxlY3R1cy4gSW50ZWdlciBldWlzbW9kIGxhY3VzIGx1Y3R1cyBtYWduYS4gPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpc3RJdGVtPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGlzdEl0ZW0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5RdWlzcXVlIGN1cnN1cywgbWV0dXMgdml0YWUgcGhhcmV0cmEgYXVjdG9yLCBzZW0gbWFzc2EgbWF0dGlzIHNlbSwgYXQgaW50ZXJkdW0gbWFnbmEgYXVndWUgZWdldCBkaWFtLiBWZXN0aWJ1bHVtIGFudGUgaXBzdW0gcHJpbWlzIGluIGZhdWNpYnVzIG9yY2kgbHVjdHVzIGV0IHVsdHJpY2VzIHBvc3VlcmUgY3ViaWxpYSBDdXJhZTsgTW9yYmkgbGFjaW5pYSBtb2xlc3RpZSBkdWkuIFByYWVzZW50IGJsYW5kaXQgZG9sb3IuIFNlZCBub24gcXVhbS4gSW4gdmVsIG1pIHNpdCBhbWV0IGF1Z3VlIGNvbmd1ZSBlbGVtZW50dW0uIE1vcmJpIGluIGlwc3VtIHNpdCBhbWV0IHBlZGUgZmFjaWxpc2lzIGxhb3JlZXQuIERvbmVjIGxhY3VzIG51bmMsIHZpdmVycmEgbmVjLCBibGFuZGl0IHZlbCwgZWdlc3RhcyBldCwgYXVndWUuIFZlc3RpYnVsdW0gdGluY2lkdW50IG1hbGVzdWFkYSB0ZWxsdXMuIFV0IHVsdHJpY2VzIHVsdHJpY2VzIGVuaW0uIDxiPlN1c3BlbmRpc3NlIGluIGp1c3RvIGV1IG1hZ25hIGx1Y3R1cyBzdXNjaXBpdDwvYj4uIEN1cmFiaXR1ciBzaXQgYW1ldCBtYXVyaXMuIE1vcmJpIGluIGR1aSBxdWlzIGVzdCBwdWx2aW5hciB1bGxhbWNvcnBlci4gPGI+VmVzdGlidWx1bSBhbnRlIGlwc3VtIHByaW1pcyBpbiBmYXVjaWJ1cyBvcmNpIGx1Y3R1cyBldCB1bHRyaWNlcyBwb3N1ZXJlIGN1YmlsaWEgQ3VyYWU7IE1vcmJpIGxhY2luaWEgbW9sZXN0aWUgZHVpPC9iPi4gTnVsbGEgZmFjaWxpc2kuIEludGVnZXIgbGFjaW5pYSBzb2xsaWNpdHVkaW4gbWFzc2EuIDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaXN0SXRlbT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpc3Q+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L0ZsZXg+XG4gICAgICAgICAgICAgICAgICAgIDwvQ29udGFpbmVyPlxuICAgICAgICAgICAgICAgIDwvU2VjdGlvbj5cbiAgICAgICAgICAgIDwvRmxleD5cbiAgICAgICAgKTtcbiAgICB9XG59Il0sInNvdXJjZVJvb3QiOiIifQ==
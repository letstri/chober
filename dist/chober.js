(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["_c"] = factory();
	else
		root["_c"] = factory();
})(window, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/*! exports provided: VERSION, isset, isEmpty, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VERSION", function() { return VERSION; });
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js");
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _package__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./package */ "./package.json");
var _package__WEBPACK_IMPORTED_MODULE_2___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./package */ "./package.json", 1);
/* harmony import */ var _lib_isset__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./lib/isset */ "./lib/isset.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isset", function() { return _lib_isset__WEBPACK_IMPORTED_MODULE_3__["default"]; });

/* harmony import */ var _lib_isEmpty__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./lib/isEmpty */ "./lib/isEmpty.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isEmpty", function() { return _lib_isEmpty__WEBPACK_IMPORTED_MODULE_4__["default"]; });



/**
 * Chober.js - is a collection of methods that are used by programmers every day.
 * We decided to put all the methods together so as not to copy them from project to project.
 *
 * @author Valery Strelets
 * @see https://github.com/BrooonS/chober
 * @license https://github.com/BrooonS/chober/blob/master/LICENSE
 */

 // Import all methods.


 // Set versio to constant.

var VERSION = _package__WEBPACK_IMPORTED_MODULE_2__["version"]; // Export all methods as a separate modules.

 // Export one module with all methods.

var Chober = function Chober() {
  _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default()(this, Chober);

  _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()(this, {
    VERSION: VERSION,
    isset: _lib_isset__WEBPACK_IMPORTED_MODULE_3__["default"],
    isEmpty: _lib_isEmpty__WEBPACK_IMPORTED_MODULE_4__["default"]
  });
};

/* harmony default export */ __webpack_exports__["default"] = (new Chober());

/***/ }),

/***/ "./lib/isEmpty.js":
/*!************************!*\
  !*** ./lib/isEmpty.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _isset__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./isset */ "./lib/isset.js");

/* harmony default export */ __webpack_exports__["default"] = (function (item) {
  return !Object(_isset__WEBPACK_IMPORTED_MODULE_0__["default"])(item);
});

/***/ }),

/***/ "./lib/isset.js":
/*!**********************!*\
  !*** ./lib/isset.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function (item) {
  return Boolean(Object.keys(item).length);
});

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/classCallCheck.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/classCallCheck.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

module.exports = _classCallCheck;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/extends.js":
/*!********************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/extends.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _extends() {
  module.exports = _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

module.exports = _extends;

/***/ }),

/***/ "./package.json":
/*!**********************!*\
  !*** ./package.json ***!
  \**********************/
/*! exports provided: name, version, description, main, private, scripts, repository, keywords, author, license, bugs, homepage, devDependencies, default */
/***/ (function(module) {

module.exports = {"name":"chober","version":"0.1.0","description":"Chober.js - is a collection of methods that are used by programmers every day. We decided to put all the methods together so as not to copy them from project to project.","main":"dist/chober.js","private":true,"scripts":{"prod":"webpack --env production --config webpack.config.js","dev":"webpack --env development --config webpack.config.js","watch":"webpack --env development --config webpack.config.js --watch","build":"npm run prod && npm run dev"},"repository":{"type":"git","url":"git+https://github.com/BrooonS/chober.js.git"},"keywords":["webpack","js","javascript","library","methods","chober","isset","isEmpty"],"author":"Valery Strelets","license":"MIT","bugs":{"url":"https://github.com/BrooonS/chober.js/issues"},"homepage":"https://github.com/BrooonS/chober.js#readme","devDependencies":{"@babel/core":"^7.1.2","@babel/plugin-proposal-object-rest-spread":"^7.0.0","@babel/plugin-transform-object-assign":"^7.0.0","@babel/plugin-transform-runtime":"^7.1.0","@babel/preset-env":"^7.1.0","@babel/runtime":"^7.1.2","babel-eslint":"^10.0.1","babel-loader":"^8.0.4","eslint":"^5.6.1","eslint-config-airbnb":"^17.1.0","eslint-loader":"^2.1.1","eslint-plugin-import":"^2.14.0","eslint-plugin-jsx-a11y":"^6.1.2","eslint-plugin-react":"^7.11.1","uglifyjs-webpack-plugin":"^2.0.1","webpack":"^4.20.2","webpack-cli":"^3.1.2"}};

/***/ })

/******/ });
});
//# sourceMappingURL=chober.js.map
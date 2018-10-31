(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("_c", [], factory);
	else if(typeof exports === 'object')
		exports["_c"] = factory();
	else
		root["_c"] = factory();
})(typeof self !== 'undefined' ? self : this, function() {
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
/*! exports provided: VERSION, isEmpty, isArray, isNumber, isString, isObject, isBoolean, getQuery, getNumbers, getScrollbarWidth, getCookie, getOffset, getType, setQuery, setCookie, removeCookie, clone, invertObject, first, formatNumber, debounce, scrollTo, uniq, default */
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
/* harmony import */ var _lib_isEmpty__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./lib/isEmpty */ "./lib/isEmpty.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isEmpty", function() { return _lib_isEmpty__WEBPACK_IMPORTED_MODULE_3__["default"]; });

/* harmony import */ var _lib_isArray__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./lib/isArray */ "./lib/isArray.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isArray", function() { return _lib_isArray__WEBPACK_IMPORTED_MODULE_4__["default"]; });

/* harmony import */ var _lib_isNumber__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./lib/isNumber */ "./lib/isNumber.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isNumber", function() { return _lib_isNumber__WEBPACK_IMPORTED_MODULE_5__["default"]; });

/* harmony import */ var _lib_isString__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./lib/isString */ "./lib/isString.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isString", function() { return _lib_isString__WEBPACK_IMPORTED_MODULE_6__["default"]; });

/* harmony import */ var _lib_isObject__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./lib/isObject */ "./lib/isObject.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isObject", function() { return _lib_isObject__WEBPACK_IMPORTED_MODULE_7__["default"]; });

/* harmony import */ var _lib_isBoolean__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./lib/isBoolean */ "./lib/isBoolean.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isBoolean", function() { return _lib_isBoolean__WEBPACK_IMPORTED_MODULE_8__["default"]; });

/* harmony import */ var _lib_getQuery__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./lib/getQuery */ "./lib/getQuery.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getQuery", function() { return _lib_getQuery__WEBPACK_IMPORTED_MODULE_9__["default"]; });

/* harmony import */ var _lib_getNumbers__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./lib/getNumbers */ "./lib/getNumbers.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getNumbers", function() { return _lib_getNumbers__WEBPACK_IMPORTED_MODULE_10__["default"]; });

/* harmony import */ var _lib_getScrollbarWidth__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./lib/getScrollbarWidth */ "./lib/getScrollbarWidth.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getScrollbarWidth", function() { return _lib_getScrollbarWidth__WEBPACK_IMPORTED_MODULE_11__["default"]; });

/* harmony import */ var _lib_getCookie__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./lib/getCookie */ "./lib/getCookie.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getCookie", function() { return _lib_getCookie__WEBPACK_IMPORTED_MODULE_12__["default"]; });

/* harmony import */ var _lib_getOffset__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./lib/getOffset */ "./lib/getOffset.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getOffset", function() { return _lib_getOffset__WEBPACK_IMPORTED_MODULE_13__["default"]; });

/* harmony import */ var _lib_getType__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./lib/getType */ "./lib/getType.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getType", function() { return _lib_getType__WEBPACK_IMPORTED_MODULE_14__["default"]; });

/* harmony import */ var _lib_setQuery__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./lib/setQuery */ "./lib/setQuery.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setQuery", function() { return _lib_setQuery__WEBPACK_IMPORTED_MODULE_15__["default"]; });

/* harmony import */ var _lib_setCookie__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./lib/setCookie */ "./lib/setCookie.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setCookie", function() { return _lib_setCookie__WEBPACK_IMPORTED_MODULE_16__["default"]; });

/* harmony import */ var _lib_removeCookie__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./lib/removeCookie */ "./lib/removeCookie.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "removeCookie", function() { return _lib_removeCookie__WEBPACK_IMPORTED_MODULE_17__["default"]; });

/* harmony import */ var _lib_clone__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./lib/clone */ "./lib/clone.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "clone", function() { return _lib_clone__WEBPACK_IMPORTED_MODULE_18__["default"]; });

/* harmony import */ var _lib_invertObject__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./lib/invertObject */ "./lib/invertObject.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "invertObject", function() { return _lib_invertObject__WEBPACK_IMPORTED_MODULE_19__["default"]; });

/* harmony import */ var _lib_first__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./lib/first */ "./lib/first.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "first", function() { return _lib_first__WEBPACK_IMPORTED_MODULE_20__["default"]; });

/* harmony import */ var _lib_formatNumber__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./lib/formatNumber */ "./lib/formatNumber.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "formatNumber", function() { return _lib_formatNumber__WEBPACK_IMPORTED_MODULE_21__["default"]; });

/* harmony import */ var _lib_debounce__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./lib/debounce */ "./lib/debounce.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "debounce", function() { return _lib_debounce__WEBPACK_IMPORTED_MODULE_22__["default"]; });

/* harmony import */ var _lib_scrollTo__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./lib/scrollTo */ "./lib/scrollTo.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "scrollTo", function() { return _lib_scrollTo__WEBPACK_IMPORTED_MODULE_23__["default"]; });

/* harmony import */ var _lib_uniq__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./lib/uniq */ "./lib/uniq.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "uniq", function() { return _lib_uniq__WEBPACK_IMPORTED_MODULE_24__["default"]; });



/**
 * Chober.js - is a collection of useful methods that are used by programmers every day.
 * We decided to put all the methods together so as not to copy them from project to project.
 *
 * @author Valery Strelets
 * @see https://github.com/BrooonS/chober
 * @license https://github.com/BrooonS/chober/blob/master/LICENSE
 */


/**
 * Import all methods.
 */























/**
 * Set version to constant.
 *
 * @constant
 */

var VERSION = _package__WEBPACK_IMPORTED_MODULE_2__["version"];
/**
 * Export all methods as a separate modules.
 */


/**
 * Export one module with all methods.
 */

var Chober = function Chober() {
  _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default()(this, Chober);

  _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()(this, {
    VERSION: VERSION,
    isEmpty: _lib_isEmpty__WEBPACK_IMPORTED_MODULE_3__["default"],
    isArray: _lib_isArray__WEBPACK_IMPORTED_MODULE_4__["default"],
    isNumber: _lib_isNumber__WEBPACK_IMPORTED_MODULE_5__["default"],
    isString: _lib_isString__WEBPACK_IMPORTED_MODULE_6__["default"],
    isObject: _lib_isObject__WEBPACK_IMPORTED_MODULE_7__["default"],
    isBoolean: _lib_isBoolean__WEBPACK_IMPORTED_MODULE_8__["default"],
    getQuery: _lib_getQuery__WEBPACK_IMPORTED_MODULE_9__["default"],
    getNumbers: _lib_getNumbers__WEBPACK_IMPORTED_MODULE_10__["default"],
    getScrollbarWidth: _lib_getScrollbarWidth__WEBPACK_IMPORTED_MODULE_11__["default"],
    getCookie: _lib_getCookie__WEBPACK_IMPORTED_MODULE_12__["default"],
    getOffset: _lib_getOffset__WEBPACK_IMPORTED_MODULE_13__["default"],
    getType: _lib_getType__WEBPACK_IMPORTED_MODULE_14__["default"],
    setQuery: _lib_setQuery__WEBPACK_IMPORTED_MODULE_15__["default"],
    setCookie: _lib_setCookie__WEBPACK_IMPORTED_MODULE_16__["default"],
    removeCookie: _lib_removeCookie__WEBPACK_IMPORTED_MODULE_17__["default"],
    clone: _lib_clone__WEBPACK_IMPORTED_MODULE_18__["default"],
    invertObject: _lib_invertObject__WEBPACK_IMPORTED_MODULE_19__["default"],
    first: _lib_first__WEBPACK_IMPORTED_MODULE_20__["default"],
    formatNumber: _lib_formatNumber__WEBPACK_IMPORTED_MODULE_21__["default"],
    debounce: _lib_debounce__WEBPACK_IMPORTED_MODULE_22__["default"],
    scrollTo: _lib_scrollTo__WEBPACK_IMPORTED_MODULE_23__["default"],
    uniq: _lib_uniq__WEBPACK_IMPORTED_MODULE_24__["default"]
  });
};

/* harmony default export */ __webpack_exports__["default"] = (new Chober());

/***/ }),

/***/ "./lib/clone.js":
/*!**********************!*\
  !*** ./lib/clone.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * Clone any item.
 *
 * @since 0.1.0
 * @param {Any} item Some item to clone.
 * @returns {Any}
 *
 * @example
 * clone([1, null, '3'])
 * // => [1, null, '3']
 */
function clone(item) {
  if (!item) {
    throw new Error('[chober]: nothing to clone.');
  }

  return item && JSON.parse(JSON.stringify(item));
}

/* harmony default export */ __webpack_exports__["default"] = (clone);

/***/ }),

/***/ "./lib/debounce.js":
/*!*************************!*\
  !*** ./lib/debounce.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * Useful for implementing behavior that should only happen after a repeated action has completed.
 *
 * @since 0.1.0
 * @param {Function} func
 * @param {Number} delay
 * @returns {Function}
 *
 * @example
 * window.addEventListener('scroll', debounce(() => {
 *   console.log(Math.random());
 * }, 100));
 */
function debounce(func, delay) {
  var _this = this;

  if (!(func || delay)) {
    throw new Error('[chober]: function or delay is not passed.');
  }

  var timer = null;
  return function () {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    var onComplete = function onComplete() {
      func.apply(_this, args);
      timer = null;
    };

    if (timer) clearTimeout(timer);
    timer = setTimeout(onComplete, delay);
  };
}

/* harmony default export */ __webpack_exports__["default"] = (debounce);

/***/ }),

/***/ "./lib/first.js":
/*!**********************!*\
  !*** ./lib/first.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _isArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./isArray */ "./lib/isArray.js");

/**
 * Returns the first item of array or `number` items.
 *
 * @since 0.1.0
 * @param {Array} array
 * @param {Number} number Number of items to returns.
 * @returns {Array}
 *
 * @example
 * first([1, null, '3'])
 * // => [1]
 *
 * first([1, null, '3'], 2)
 * // => [1, null]
 */

function first(array) {
  var number = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;

  if (!array) {
    throw new Error('[chober]: array is not passed.');
  }

  return Object(_isArray__WEBPACK_IMPORTED_MODULE_0__["default"])(array) ? array.slice(0, number) : [];
}

/* harmony default export */ __webpack_exports__["default"] = (first);

/***/ }),

/***/ "./lib/formatNumber.js":
/*!*****************************!*\
  !*** ./lib/formatNumber.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * Format number.
 *
 * @since 0.1.0
 * @param {Number|String} number
 * @param {String} symbol Symbol to be inserted. Default ` `.
 * @returns {Number}
 *
 * @example
 * formatNumer(1234)
 * // => '1 234'
 *
 * formatNumer('1234', ',')
 * // => '1,234'
 */
function formatNumber(number) {
  var symbol = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : ' ';
  return String(number || 0).replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, "$1".concat(symbol));
}

/* harmony default export */ __webpack_exports__["default"] = (formatNumber);

/***/ }),

/***/ "./lib/getCookie.js":
/*!**************************!*\
  !*** ./lib/getCookie.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * Get cookie.
 *
 * @since 0.1.0
 * @param {String} key Cookie name.
 * @returns {String}
 *
 * @example
 * getCookie('someCookie')
 */
function getCookie(key) {
  if (!key) {
    throw new Error('[chober]: key is not passed.');
  }

  var value = "; ".concat(document.cookie);
  var parts = value.split("; ".concat(key, "="));

  if (parts.length === 2) {
    return parts.pop().split(';').shift();
  }

  return '';
}

/* harmony default export */ __webpack_exports__["default"] = (getCookie);

/***/ }),

/***/ "./lib/getNumbers.js":
/*!***************************!*\
  !*** ./lib/getNumbers.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * Get only numbers from string.
 *
 * @since 0.1.0
 * @param {String|Number} string Some string or number, which from to pick only numbers.
 * @returns {String}
 *
 * @example
 * getNumbers('+7 (123) 456-78-90')
 * // => '71234567890'
 */
function getNumbers(string) {
  if (!string) {
    throw new Error('[chober]: string or number is not passed.');
  }

  return String(string).replace(/\D+/g, '');
}

/* harmony default export */ __webpack_exports__["default"] = (getNumbers);

/***/ }),

/***/ "./lib/getOffset.js":
/*!**************************!*\
  !*** ./lib/getOffset.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * Get absolute coordinates of an element.
 *
 * @since 0.1.0
 * @param {String} selector Selector of HTML element to get coordinates of.
 * @returns {Object}
 *
 * @example
 * getOffset('#element').left
 * // => 8
 */
function getOffset(selector) {
  if (!selector) {
    throw new Error('[chober]: selector is not passed.');
  }

  var element = document.querySelector(selector);
  var rect = element.getBoundingClientRect();
  var scrollLeft = window.pageXOffset;
  var scrollTop = window.pageYOffset;
  return {
    x: rect.left + scrollLeft,
    y: rect.top + scrollTop,
    left: rect.left + scrollLeft,
    top: rect.top + scrollTop,
    right: rect.right + scrollLeft,
    bottom: rect.bottom + scrollTop
  };
}

/* harmony default export */ __webpack_exports__["default"] = (getOffset);

/***/ }),

/***/ "./lib/getQuery.js":
/*!*************************!*\
  !*** ./lib/getQuery.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/objectSpread */ "./node_modules/@babel/runtime/helpers/objectSpread.js");
/* harmony import */ var _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js");
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _isArray__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./isArray */ "./lib/isArray.js");




/**
 * Get query from url.
 *
 * @since 0.1.0
 * @param {Array} arrayFields Fields that must be an arrays.
 * @returns {Object}
 *
 * @example
 * // http://github.com/?value=test&field=hi&field=hello
 *
 * getQuery()
 * // => { value: 'test', field: ['hi', 'hello'] }
 */

function getQuery() {
  var arrayFields = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var query = window.location.search.substr(1);
  var objectUrl = {};
  if (!query) return {}; // Set default array fields to objectUrl

  if (arrayFields.length) {
    _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_2___default()(objectUrl, arrayFields.reduce(function (object, field) {
      return _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_1___default()({}, object, _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({}, field, []));
    }, {}));
  }

  query.split('&').forEach(function (part) {
    if (!part) return;
    var item = part.split('='); // If item already exists, create an array with this item.

    if (Object.prototype.hasOwnProperty.call(objectUrl, item[0])) {
      if (Object(_isArray__WEBPACK_IMPORTED_MODULE_3__["default"])(objectUrl[item[0]])) {
        objectUrl[item[0]].push(item[1]);
      } else {
        objectUrl[item[0]] = [objectUrl[item[0]], item[1]];
      }
    } // Decode URI if array and if only one key.


    if (Object(_isArray__WEBPACK_IMPORTED_MODULE_3__["default"])(objectUrl[item[0]])) {
      objectUrl[item[0]].forEach(function (url, index) {
        objectUrl[item[0]][index] = decodeURIComponent(url);
      });
    } else {
      objectUrl[item[0]] = decodeURIComponent(item[1]);
    }
  });
  return objectUrl;
}

/* harmony default export */ __webpack_exports__["default"] = (getQuery);

/***/ }),

/***/ "./lib/getScrollbarWidth.js":
/*!**********************************!*\
  !*** ./lib/getScrollbarWidth.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * Get scrollbar width.
 *
 * @since 0.1.0
 * @returns {Number}
 */
function getScrollbarWidth() {
  return window.innerWidth - document.documentElement.clientWidth;
}

/* harmony default export */ __webpack_exports__["default"] = (getScrollbarWidth);

/***/ }),

/***/ "./lib/getType.js":
/*!************************!*\
  !*** ./lib/getType.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * Get object type.
 *
 * @since 0.2.0
 * @param {Any} object Any type.
 * @returns {String}
 *
 * @example
 * getType({})
 * // => 'object'
 *
 * getType([])
 * // => 'array'
 */
function getType(object) {
  return Object.prototype.toString.call(object).replace(/^\[object (.+)\]$/, '$1').toLowerCase();
}

/* harmony default export */ __webpack_exports__["default"] = (getType);

/***/ }),

/***/ "./lib/invertObject.js":
/*!*****************************!*\
  !*** ./lib/invertObject.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/objectSpread */ "./node_modules/@babel/runtime/helpers/objectSpread.js");
/* harmony import */ var _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_1__);


/**
 * Invert object.
 *
 * @since 0.1.0
 * @param {Object} object Some object to invert.
 * @returns {Object}
 *
 * @example
 * invertObject({ key: 'value' })
 * // => { value: 'key' }
 */

function invertObject(object) {
  if (!object) {
    throw new Error('[chober]: object is not passed.');
  }

  return object && Object.entries(object).reduce(function (newObject, item) {
    return _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_1___default()({}, newObject, _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({}, item[1], item[0]));
  }, {});
}

/* harmony default export */ __webpack_exports__["default"] = (invertObject);

/***/ }),

/***/ "./lib/isArray.js":
/*!************************!*\
  !*** ./lib/isArray.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _getType__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getType */ "./lib/getType.js");

/**
 * Checking the item for is an array.
 *
 * @since 1.0.0
 * @param {Any} item Item to check.
 *
 * @example
 * isArray([])
 * // => true
 *
 * isArray({})
 * // => false
 */

function isArray(item) {
  return Object(_getType__WEBPACK_IMPORTED_MODULE_0__["default"])(item) === 'array';
}

/* harmony default export */ __webpack_exports__["default"] = (isArray);

/***/ }),

/***/ "./lib/isBoolean.js":
/*!**************************!*\
  !*** ./lib/isBoolean.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _getType__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getType */ "./lib/getType.js");

/**
 * Checking the item for is a boolean.
 *
 * @since 1.0.0
 * @param {Any} item Item to check.
 *
 * @example
 * isBoolean(true)
 * // => true
 *
 * isBoolean([])
 * // => false
 */

function isBoolean(item) {
  return Object(_getType__WEBPACK_IMPORTED_MODULE_0__["default"])(item) === 'boolean';
}

/* harmony default export */ __webpack_exports__["default"] = (isBoolean);

/***/ }),

/***/ "./lib/isEmpty.js":
/*!************************!*\
  !*** ./lib/isEmpty.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * Check is empty object, string, array or other type.
 *
 * @since 0.1.0
 * @param {Any} item Some item to check.
 * @return {Boolean}
 *
 * @example
 * isEmpty({ test: 'some value' })
 * // => false
 *
 * isEmpty([1, null, '3'])
 * // => false
 *
 * isEmpty('qwe')
 * // => false
 *
 * isEmpty(true)
 * // => true
 *
 * isEmpty(1)
 * // => true
 *
 * isEmpty(undefined)
 * // => true
 *
 * isEmpty(null)
 * // => true
 */
function isEmpty(item) {
  return !(item && (item.length || Object.keys(item).length));
}

/* harmony default export */ __webpack_exports__["default"] = (isEmpty);

/***/ }),

/***/ "./lib/isNumber.js":
/*!*************************!*\
  !*** ./lib/isNumber.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _getType__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getType */ "./lib/getType.js");

/**
 * Checking the item for is a number.
 *
 * @since 1.0.0
 * @param {Any} item Item to check.
 *
 * @example
 * isNumber(123)
 * // => true
 *
 * isNumber([])
 * // => false
 */

function isNumber(item) {
  return Object(_getType__WEBPACK_IMPORTED_MODULE_0__["default"])(item) === 'number';
}

/* harmony default export */ __webpack_exports__["default"] = (isNumber);

/***/ }),

/***/ "./lib/isObject.js":
/*!*************************!*\
  !*** ./lib/isObject.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _getType__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getType */ "./lib/getType.js");

/**
 * Checking the item for is an object.
 *
 * @since 1.0.0
 * @param {Any} item Item to check.
 *
 * @example
 * isObject({})
 * // => true
 *
 * isObject(123)
 * // => false
 */

function isObject(item) {
  return Object(_getType__WEBPACK_IMPORTED_MODULE_0__["default"])(item) === 'object';
}

/* harmony default export */ __webpack_exports__["default"] = (isObject);

/***/ }),

/***/ "./lib/isString.js":
/*!*************************!*\
  !*** ./lib/isString.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _getType__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getType */ "./lib/getType.js");

/**
 * Checking the item for is a string.
 *
 * @since 1.0.0
 * @param {Any} item Item to check.
 *
 * @example
 * isString('string')
 * // => true
 *
 * isString([])
 * // => false
 */

function isString(item) {
  return Object(_getType__WEBPACK_IMPORTED_MODULE_0__["default"])(item) === 'string';
}

/* harmony default export */ __webpack_exports__["default"] = (isString);

/***/ }),

/***/ "./lib/removeCookie.js":
/*!*****************************!*\
  !*** ./lib/removeCookie.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * Remove cookie.
 *
 * @since 0.1.0
 * @param {String} key Cookie name.
 *
 * @example
 * removeCookie('testCookie')
 */
function removeCookie(key) {
  if (!key) {
    throw new Error('[chober]: key is not passed.');
  }

  document.cookie = "".concat(key, "=; path=/; expires=Thu, 01 Jan 1970 00:00:01 GMT;");
}

/* harmony default export */ __webpack_exports__["default"] = (removeCookie);

/***/ }),

/***/ "./lib/scrollTo.js":
/*!*************************!*\
  !*** ./lib/scrollTo.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * Scroll to element in DOM.
 *
 * @since 0.2.0
 * @param {DOMElement} element Element to which to scroll.
 *
 * @example
 * scrollTo(document.querySelector('.j-block'))
 */
function scrollTo(element) {
  if (!element) {
    throw new Error('[chober]: element is not passed.');
  }

  element.scrollIntoView({
    behavior: 'smooth'
  });
}

/* harmony default export */ __webpack_exports__["default"] = (scrollTo);

/***/ }),

/***/ "./lib/setCookie.js":
/*!**************************!*\
  !*** ./lib/setCookie.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * Set cookie.
 *
 * @since 0.1.0
 * @param {String} key Cookie name.
 * @param {String} value Cookie value.
 * @param {?Number} expireIn Time in milliseconds to expire cookie.
 *
 * @example
 * setCookie('name', 'value', 60000) // 60000 - one minute
 */
function setCookie(key, value) {
  var expireIn = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

  if (!(key || value)) {
    throw new Error('[chober]: key or value is not passed.');
  }

  var expirationDate = expireIn && new Date().getTime() + expireIn;
  var expirationDateString = expireIn && new Date(expirationDate).toUTCString();
  var mainPartCookie = "".concat(key, "=").concat(value, "; path=/");
  var expirationPartCookie = "; expires=".concat(expirationDateString);
  document.cookie = expireIn ? mainPartCookie : mainPartCookie + expirationPartCookie;
}

/* harmony default export */ __webpack_exports__["default"] = (setCookie);

/***/ }),

/***/ "./lib/setQuery.js":
/*!*************************!*\
  !*** ./lib/setQuery.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/objectSpread */ "./node_modules/@babel/runtime/helpers/objectSpread.js");
/* harmony import */ var _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _getQuery__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./getQuery */ "./lib/getQuery.js");
/* harmony import */ var _isEmpty__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./isEmpty */ "./lib/isEmpty.js");
/* harmony import */ var _getType__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./getType */ "./lib/getType.js");
/* harmony import */ var _uniq__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./uniq */ "./lib/uniq.js");






/**
 * Set query to url.
 *
 * @since 0.3.0
 * @param {Object} query Object to parse in url.
 * @param {?Boolean} doesSaveOldQuery Whether to save the old query. Default: false.
 *
 * @example
 * setQuery({ test: 'value' })
 * // => /?test=value
 *
 * setQuery({ test: ['12', '34'] })
 * // => /?test=12&test=34
 *
 * // https://github.com/?test=value&field=test
 * setQuery({ test: 'field' }, true)
 * // => https://github.com/?test=value&test=field&field=test
 */

function setQuery(query) {
  var doesSaveOldQuery = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  var localQuery = query || {};
  var oldQuery = doesSaveOldQuery && Object(_getQuery__WEBPACK_IMPORTED_MODULE_2__["default"])();
  var mergedQueries = Object.entries(localQuery).concat(Object.entries(oldQuery));
  var newQueryObject = doesSaveOldQuery && !Object(_isEmpty__WEBPACK_IMPORTED_MODULE_3__["default"])(oldQuery) ? mergedQueries.reduce(function (newQuery, field) {
    var fieldName = field[0];
    var fieldValue = field[1];
    var isFieldExist = Object.prototype.hasOwnProperty.call(newQuery, fieldName);

    if (isFieldExist) {
      var textValue = newQuery[fieldName] === fieldValue ? fieldValue : [newQuery[fieldName], fieldValue];
      var arrayValue = Object(_getType__WEBPACK_IMPORTED_MODULE_4__["default"])(newQuery[fieldName]) === 'array' ? Object(_uniq__WEBPACK_IMPORTED_MODULE_5__["default"])(newQuery[fieldName].concat(fieldValue)) : textValue;
      var newValue = Object(_getType__WEBPACK_IMPORTED_MODULE_4__["default"])(fieldValue) === 'array' ? Object(_uniq__WEBPACK_IMPORTED_MODULE_5__["default"])(fieldValue.concat(newQuery[fieldName])) : arrayValue;
      return _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_1___default()({}, newQuery, _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({}, fieldName, newValue));
    }

    return _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_1___default()({}, newQuery, _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({}, fieldName, fieldValue));
  }, {}) : localQuery;
  var newQueryString = Object.keys(newQueryObject).map(function (key) {
    if (key === '&') return '';
    var fieldValue = key && newQueryObject[key] ? "".concat(encodeURIComponent(key), "=").concat(encodeURIComponent(newQueryObject[key])) : '';
    return Array.isArray(newQueryObject[key]) ? newQueryObject[key].map(function (value) {
      return value && key ? "".concat(encodeURIComponent(key), "=").concat(encodeURIComponent(value)) : '';
    }).join('&') : fieldValue;
  }).filter(function (queryItem) {
    return queryItem;
  }) // Remove empty queries
  .join('&');
  window.history.pushState({}, document.title, newQueryString ? "?".concat(decodeURIComponent(newQueryString)) : window.location.href.split('?')[0]);
}

/* harmony default export */ __webpack_exports__["default"] = (setQuery);

/***/ }),

/***/ "./lib/uniq.js":
/*!*********************!*\
  !*** ./lib/uniq.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * Remove same values.
 *
 * @since 0.3.0
 * @param {Array} array Array of strings.
 * @return {Array}
 *
 * @example
 * uniq(['test', 'field', 'test'])
 * // => ['test', 'field']
 */
function uniq(array) {
  if (!array) {
    throw new Error('[chober]: array is not passed.');
  }

  return array.filter(function (item, index, currentArray) {
    return currentArray.indexOf(item) === index;
  });
}

/* harmony default export */ __webpack_exports__["default"] = (uniq);

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

/***/ "./node_modules/@babel/runtime/helpers/defineProperty.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/defineProperty.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

module.exports = _defineProperty;

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

/***/ "./node_modules/@babel/runtime/helpers/objectSpread.js":
/*!*************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/objectSpread.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var defineProperty = __webpack_require__(/*! ./defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");

function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};
    var ownKeys = Object.keys(source);

    if (typeof Object.getOwnPropertySymbols === 'function') {
      ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) {
        return Object.getOwnPropertyDescriptor(source, sym).enumerable;
      }));
    }

    ownKeys.forEach(function (key) {
      defineProperty(target, key, source[key]);
    });
  }

  return target;
}

module.exports = _objectSpread;

/***/ }),

/***/ "./package.json":
/*!**********************!*\
  !*** ./package.json ***!
  \**********************/
/*! exports provided: name, version, description, main, scripts, repository, keywords, author, license, bugs, homepage, devDependencies, default */
/***/ (function(module) {

module.exports = {"name":"chober","version":"1.0.4","description":"Chober.js - is a collection of methods that are used by programmers every day. We decided to put all the methods together so as not to copy them from project to project.","main":"dist/chober.js","scripts":{"prod":"webpack --env production --config webpack.config.js","dev":"webpack --env development --config webpack.config.js","watch":"webpack --env development --config webpack.config.js --watch","build":"npm run docs && npm run prod && npm run dev","docs":"jsdoc2md --template README.hbs --files lib/*.js > docs/README.md","docs-server":"docsify serve docs -p 35730"},"repository":{"type":"git","url":"git+https://github.com/BrooonS/chober.js.git"},"keywords":["webpack","js","javascript","library","es6","commonjs","methods","chober","isEmpty","isArray","isNumber","isString","isObject","isBoolean","getQuery","getNumbers","getScrollbarWidth","getCookie","getOffset","getType","setQuery","setCookie","removeCookie","clone","invertObject","first","formatNumber","debounce","scrollTo","uniq"],"author":"Valery Strelets","license":"MIT","bugs":{"url":"https://github.com/BrooonS/chober.js/issues"},"homepage":"https://github.com/BrooonS/chober.js#readme","devDependencies":{"@babel/core":"^7.1.2","@babel/plugin-proposal-object-rest-spread":"^7.0.0","@babel/plugin-transform-object-assign":"^7.0.0","@babel/plugin-transform-runtime":"^7.1.0","@babel/preset-env":"^7.1.0","@babel/runtime":"^7.1.2","babel-eslint":"^10.0.1","babel-loader":"^8.0.4","docsify-cli":"^4.2.1","eslint":"^5.6.1","eslint-config-airbnb":"^17.1.0","eslint-loader":"^2.1.1","eslint-plugin-import":"^2.14.0","eslint-plugin-jsx-a11y":"^6.1.2","eslint-plugin-react":"^7.11.1","jsdoc-to-markdown":"^4.0.1","uglifyjs-webpack-plugin":"^2.0.1","webpack":"^4.23.1","webpack-cli":"^3.1.2"}};

/***/ })

/******/ });
});
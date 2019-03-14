(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("_c", [], factory);
	else if(typeof exports === 'object')
		exports["_c"] = factory();
	else
		root["_c"] = factory();
})(typeof self === 'undefined' ? this : self, function() {
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
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _package__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./package */ "./package.json");
var _package__WEBPACK_IMPORTED_MODULE_0___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./package */ "./package.json", 1);
/* harmony import */ var _lib_isEmpty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lib/isEmpty */ "./lib/isEmpty.js");
/* harmony import */ var _lib_isArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./lib/isArray */ "./lib/isArray.js");
/* harmony import */ var _lib_isNumber__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./lib/isNumber */ "./lib/isNumber.js");
/* harmony import */ var _lib_isString__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./lib/isString */ "./lib/isString.js");
/* harmony import */ var _lib_isObject__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./lib/isObject */ "./lib/isObject.js");
/* harmony import */ var _lib_isBoolean__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./lib/isBoolean */ "./lib/isBoolean.js");
/* harmony import */ var _lib_isEqual__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./lib/isEqual */ "./lib/isEqual.js");
/* harmony import */ var _lib_isUndefined__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./lib/isUndefined */ "./lib/isUndefined.js");
/* harmony import */ var _lib_isNil__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./lib/isNil */ "./lib/isNil.js");
/* harmony import */ var _lib_isFunction__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./lib/isFunction */ "./lib/isFunction.js");
/* harmony import */ var _lib_getQuery__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./lib/getQuery */ "./lib/getQuery.js");
/* harmony import */ var _lib_getNumbers__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./lib/getNumbers */ "./lib/getNumbers.js");
/* harmony import */ var _lib_getScrollbarWidth__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./lib/getScrollbarWidth */ "./lib/getScrollbarWidth.js");
/* harmony import */ var _lib_getCookie__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./lib/getCookie */ "./lib/getCookie.js");
/* harmony import */ var _lib_getOffset__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./lib/getOffset */ "./lib/getOffset.js");
/* harmony import */ var _lib_getType__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./lib/getType */ "./lib/getType.js");
/* harmony import */ var _lib_setQuery__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./lib/setQuery */ "./lib/setQuery.js");
/* harmony import */ var _lib_setCookie__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./lib/setCookie */ "./lib/setCookie.js");
/* harmony import */ var _lib_removeCookie__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./lib/removeCookie */ "./lib/removeCookie.js");
/* harmony import */ var _lib_decondeHtml__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./lib/decondeHtml */ "./lib/decondeHtml.js");
/* harmony import */ var _lib_clone__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./lib/clone */ "./lib/clone.js");
/* harmony import */ var _lib_invertObject__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./lib/invertObject */ "./lib/invertObject.js");
/* harmony import */ var _lib_first__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./lib/first */ "./lib/first.js");
/* harmony import */ var _lib_flattenDeep__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./lib/flattenDeep */ "./lib/flattenDeep.js");
/* harmony import */ var _lib_formatNumber__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./lib/formatNumber */ "./lib/formatNumber.js");
/* harmony import */ var _lib_debounce__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./lib/debounce */ "./lib/debounce.js");
/* harmony import */ var _lib_scrollTo__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./lib/scrollTo */ "./lib/scrollTo.js");
/* harmony import */ var _lib_uniq__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./lib/uniq */ "./lib/uniq.js");
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

var VERSION = _package__WEBPACK_IMPORTED_MODULE_0__["version"];
/**
 * Export one module with all methods.
 */

/* harmony default export */ __webpack_exports__["default"] = ({
  VERSION: VERSION,
  isEmpty: _lib_isEmpty__WEBPACK_IMPORTED_MODULE_1__["default"],
  isArray: _lib_isArray__WEBPACK_IMPORTED_MODULE_2__["default"],
  isNumber: _lib_isNumber__WEBPACK_IMPORTED_MODULE_3__["default"],
  isString: _lib_isString__WEBPACK_IMPORTED_MODULE_4__["default"],
  isObject: _lib_isObject__WEBPACK_IMPORTED_MODULE_5__["default"],
  isBoolean: _lib_isBoolean__WEBPACK_IMPORTED_MODULE_6__["default"],
  isEqual: _lib_isEqual__WEBPACK_IMPORTED_MODULE_7__["default"],
  isUndefined: _lib_isUndefined__WEBPACK_IMPORTED_MODULE_8__["default"],
  isNil: _lib_isNil__WEBPACK_IMPORTED_MODULE_9__["default"],
  isFunction: _lib_isFunction__WEBPACK_IMPORTED_MODULE_10__["default"],
  getQuery: _lib_getQuery__WEBPACK_IMPORTED_MODULE_11__["default"],
  getNumbers: _lib_getNumbers__WEBPACK_IMPORTED_MODULE_12__["default"],
  getScrollbarWidth: _lib_getScrollbarWidth__WEBPACK_IMPORTED_MODULE_13__["default"],
  getCookie: _lib_getCookie__WEBPACK_IMPORTED_MODULE_14__["default"],
  getOffset: _lib_getOffset__WEBPACK_IMPORTED_MODULE_15__["default"],
  getType: _lib_getType__WEBPACK_IMPORTED_MODULE_16__["default"],
  setQuery: _lib_setQuery__WEBPACK_IMPORTED_MODULE_17__["default"],
  setCookie: _lib_setCookie__WEBPACK_IMPORTED_MODULE_18__["default"],
  removeCookie: _lib_removeCookie__WEBPACK_IMPORTED_MODULE_19__["default"],
  decodeHtml: _lib_decondeHtml__WEBPACK_IMPORTED_MODULE_20__["default"],
  clone: _lib_clone__WEBPACK_IMPORTED_MODULE_21__["default"],
  invertObject: _lib_invertObject__WEBPACK_IMPORTED_MODULE_22__["default"],
  first: _lib_first__WEBPACK_IMPORTED_MODULE_23__["default"],
  flattenDeep: _lib_flattenDeep__WEBPACK_IMPORTED_MODULE_24__["default"],
  formatNumber: _lib_formatNumber__WEBPACK_IMPORTED_MODULE_25__["default"],
  debounce: _lib_debounce__WEBPACK_IMPORTED_MODULE_26__["default"],
  scrollTo: _lib_scrollTo__WEBPACK_IMPORTED_MODULE_27__["default"],
  uniq: _lib_uniq__WEBPACK_IMPORTED_MODULE_28__["default"]
});

/***/ }),

/***/ "./lib/clone.js":
/*!**********************!*\
  !*** ./lib/clone.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/objectSpread */ "./node_modules/@babel/runtime/helpers/objectSpread.js");
/* harmony import */ var _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ "./node_modules/@babel/runtime/helpers/toConsumableArray.js");
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _isEmpty__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./isEmpty */ "./lib/isEmpty.js");
/* harmony import */ var _isUndefined__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./isUndefined */ "./lib/isUndefined.js");
/* harmony import */ var _isObject__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./isObject */ "./lib/isObject.js");
/* harmony import */ var _isArray__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./isArray */ "./lib/isArray.js");







var CIRCULAR_NAME = '[Circular]';
/**
 * Clone any item with nested items.
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
  if (Object(_isUndefined__WEBPACK_IMPORTED_MODULE_4__["default"])(item)) {
    throw new Error('[chober]: nothing to clone.');
  }

  var cloneObject = function cloneObject(object) {
    var circularKeys = Object.keys(object).reduce(function (acc, key) {
      try {
        JSON.stringify(object[key]);
        return acc;
      } catch (error) {
        return _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_2___default()(acc).concat([key]);
      }
    }, []);
    var fixedObject = circularKeys.reduce(function (acc, key) {
      return _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_1___default()({}, acc, _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({}, key, CIRCULAR_NAME));
    }, object);
    return JSON.parse(JSON.stringify(fixedObject));
  };

  var cloneArray = function cloneArray(array) {
    var circularIndexes = array.reduce(function (acc, arrayItem, index) {
      try {
        JSON.stringify(arrayItem);
        return acc;
      } catch (error) {
        return _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_2___default()(acc).concat([index]);
      }
    }, []);
    var fixedArray = circularIndexes.reduce(function (acc, index) {
      acc[index] = CIRCULAR_NAME;
      return acc;
    }, array);
    return JSON.parse(JSON.stringify(fixedArray));
  };

  try {
    return JSON.parse(JSON.stringify(item));
  } catch (error) {
    if (Object(_isObject__WEBPACK_IMPORTED_MODULE_5__["default"])(item)) {
      var fixedObject = cloneObject(item);

      if (!Object(_isEmpty__WEBPACK_IMPORTED_MODULE_3__["default"])(fixedObject)) {
        return fixedObject;
      }
    }

    if (Object(_isArray__WEBPACK_IMPORTED_MODULE_6__["default"])(item)) {
      var fixedArray = cloneArray(item);

      if (!Object(_isEmpty__WEBPACK_IMPORTED_MODULE_3__["default"])(fixedArray)) {
        return fixedArray;
      }
    }

    throw new Error(error);
  }
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
 * window.addEventListener('scroll', debounce(() => console.log(Math.random()), 100))
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

/***/ "./lib/decondeHtml.js":
/*!****************************!*\
  !*** ./lib/decondeHtml.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * Decode a string that has special HTML entities
 *
 * @since 1.1.0
 * @param {String} html Html to decode.
 * @returns {String}
 *
 * @example
 * decodeHtml('<h1>Hi&nbsp;my&nbsp;friend!</h1>')
 * // => '<h1>Hi my friend!</h1>'
 */
function decodeHtml(html) {
  var text = document.createElement('textarea');
  text.innerHTML = html;
  return text.value;
}

/* harmony default export */ __webpack_exports__["default"] = (decodeHtml);

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
  return Object(_isArray__WEBPACK_IMPORTED_MODULE_0__["default"])(array) ? array.slice(0, number) : [];
}

/* harmony default export */ __webpack_exports__["default"] = (first);

/***/ }),

/***/ "./lib/flattenDeep.js":
/*!****************************!*\
  !*** ./lib/flattenDeep.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _isArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./isArray */ "./lib/isArray.js");

/**
 * Flatten an array.
 *
 * @since 1.2.0
 * @param {Array} array Array for flat.
 * @returns {Array}
 *
 * @example
 * flattenDeep([123, [456, [567, [890]]]])
 * // => [123, 456, 567, 890]
 */

function flattenDeep(array) {
  if (Object(_isArray__WEBPACK_IMPORTED_MODULE_0__["default"])(array)) {
    return array.reduce(function (acc, value) {
      return Object(_isArray__WEBPACK_IMPORTED_MODULE_0__["default"])(value) ? acc.concat(flattenDeep(value)) : acc.concat(value);
    }, []);
  }

  return [];
}

/* harmony default export */ __webpack_exports__["default"] = (flattenDeep);

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
/* harmony import */ var _isString__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./isString */ "./lib/isString.js");
/* harmony import */ var _isUndefined__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./isUndefined */ "./lib/isUndefined.js");


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
  if (Object(_isUndefined__WEBPACK_IMPORTED_MODULE_1__["default"])(key)) {
    throw new Error('[chober]: key is not passed.');
  }

  if (!Object(_isString__WEBPACK_IMPORTED_MODULE_0__["default"])(key)) {
    throw new Error('[chober]: key must to be a string.');
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
/* harmony import */ var _isUndefined__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./isUndefined */ "./lib/isUndefined.js");
/* harmony import */ var _isString__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./isString */ "./lib/isString.js");


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
  if (Object(_isUndefined__WEBPACK_IMPORTED_MODULE_0__["default"])(string) || !Object(_isString__WEBPACK_IMPORTED_MODULE_1__["default"])(string)) {
    return '';
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
/* harmony import */ var _isUndefined__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./isUndefined */ "./lib/isUndefined.js");

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
  if (Object(_isUndefined__WEBPACK_IMPORTED_MODULE_0__["default"])(selector)) {
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
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/slicedToArray.js");
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/objectSpread */ "./node_modules/@babel/runtime/helpers/objectSpread.js");
/* harmony import */ var _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _isArray__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./isArray */ "./lib/isArray.js");




/**
 * Get query from url.
 *
 * @since 0.1.0
 * @param {?Array} arrayFields Fields that must be arrays.
 * @returns {Object}
 *
 * @example
 * // /?value=test&field=hi&field=hello
 * getQuery()
 * // => { value: 'test', field: ['hi', 'hello'] }
 *
 * // /?value=test&field=hi
 * getQuery(['value'])
 * // => { value: ['test'], field: 'hi' }
 */

function getQuery() {
  var arrayFields = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var query = window.location.search.substr(1);
  var objectUrl = {};
  if (query === '') return {}; // Set default array fields to objectUrl

  if (arrayFields.length !== 0) {
    objectUrl = arrayFields.reduce(function (object, field) {
      return _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_2___default()({}, object, _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()({}, field, []));
    }, {});
  }

  query.split('&').forEach(function (part) {
    if (!part) return;

    var _part$split = part.split('='),
        _part$split2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_part$split, 2),
        key = _part$split2[0],
        value = _part$split2[1]; // If item already exists, create an array with this item.


    if (Object.prototype.hasOwnProperty.call(objectUrl, key)) {
      if (Object(_isArray__WEBPACK_IMPORTED_MODULE_3__["default"])(objectUrl[key])) {
        objectUrl[key].push(value);
      } else {
        objectUrl[key] = [objectUrl[key], value];
      }
    } // Decode URI if array and if only one key.


    if (Object(_isArray__WEBPACK_IMPORTED_MODULE_3__["default"])(objectUrl[key])) {
      objectUrl[key].forEach(function (url, index) {
        objectUrl[key][index] = decodeURIComponent(url);
      });
    } else {
      objectUrl[key] = decodeURIComponent(value);
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
/* harmony import */ var _isUndefined__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./isUndefined */ "./lib/isUndefined.js");



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
  if (Object(_isUndefined__WEBPACK_IMPORTED_MODULE_2__["default"])(object)) {
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
 * @returns {Boolean}
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
 * @returns {Boolean}
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

/***/ "./lib/isEqual.js":
/*!************************!*\
  !*** ./lib/isEqual.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _clone__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./clone */ "./lib/clone.js");

/**
 * Checking is equal items.
 *
 * @since 1.1.0
 * @param {Any} firstItem First item to check.
 * @param {Any} secondItem Second item to check.
 * @returns {Boolean}
 *
 * @example
 * isEqual([], [])
 * // => true
 *
 * isEqual({ test: 'value' }, { test: 'value' })
 * // => true
 *
 * isEqual(true, false)
 * // => false
 */

function isEqual(firstItem, secondItem) {
  return JSON.stringify(Object(_clone__WEBPACK_IMPORTED_MODULE_0__["default"])(firstItem)) === JSON.stringify(Object(_clone__WEBPACK_IMPORTED_MODULE_0__["default"])(secondItem));
}

/* harmony default export */ __webpack_exports__["default"] = (isEqual);

/***/ }),

/***/ "./lib/isFunction.js":
/*!***************************!*\
  !*** ./lib/isFunction.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _getType__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getType */ "./lib/getType.js");

/**
 * Checking the item for is a function.
 *
 * @since 1.3.0
 * @param {Any} item Item to check.
 * @returns {Boolean}
 *
 * @example
 * isFunction(() => {})
 * // => true
 *
 * isFunction(null)
 * // => false
 *
 * isFunction(false)
 * // => false
 *
 * isFunction([])
 * // => false
 */

function isFunction(item) {
  return Object(_getType__WEBPACK_IMPORTED_MODULE_0__["default"])(item) === 'function';
}

/* harmony default export */ __webpack_exports__["default"] = (isFunction);

/***/ }),

/***/ "./lib/isNil.js":
/*!**********************!*\
  !*** ./lib/isNil.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * Checking the item for is a null or undefined.
 *
 * @since 1.3.0
 * @param {Any} item Item to check.
 * @returns {Boolean}
 *
 * @example
 * isNil(undefined)
 * // => true
 *
 * isNil(null)
 * // => true
 *
 * isNil(false)
 * // => false
 *
 * isNil('')
 * // => false
 */
function isNil(item) {
  return item === undefined || item === null;
}

/* harmony default export */ __webpack_exports__["default"] = (isNil);

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
 * @returns {Boolean}
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
 * @returns {Boolean}
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
 * @returns {Boolean}
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

/***/ "./lib/isUndefined.js":
/*!****************************!*\
  !*** ./lib/isUndefined.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _getType__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getType */ "./lib/getType.js");

/**
 * Checking the item for is a undefined.
 *
 * @since 1.2.0
 * @param {Any} item Item to check.
 * @returns {Boolean}
 *
 * @example
 * isUndefined(undefined)
 * // => true
 *
 * isUndefined('testValue')
 * // => false
 */

function isUndefined(item) {
  return Object(_getType__WEBPACK_IMPORTED_MODULE_0__["default"])(item) === 'undefined';
}

/* harmony default export */ __webpack_exports__["default"] = (isUndefined);

/***/ }),

/***/ "./lib/removeCookie.js":
/*!*****************************!*\
  !*** ./lib/removeCookie.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _isUndefined__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./isUndefined */ "./lib/isUndefined.js");

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
  if (Object(_isUndefined__WEBPACK_IMPORTED_MODULE_0__["default"])(key)) {
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
/* harmony import */ var _isUndefined__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./isUndefined */ "./lib/isUndefined.js");

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
  if (Object(_isUndefined__WEBPACK_IMPORTED_MODULE_0__["default"])(element)) {
    throw new Error('[chober]: element is not passed.');
  }

  element.scrollIntoView({
    block: 'center',
    behavior: 'smooth',
    inline: 'end'
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
/* harmony import */ var _isUndefined__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./isUndefined */ "./lib/isUndefined.js");

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

  if (Object(_isUndefined__WEBPACK_IMPORTED_MODULE_0__["default"])(key) || Object(_isUndefined__WEBPACK_IMPORTED_MODULE_0__["default"])(value)) {
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
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ "./node_modules/@babel/runtime/helpers/toConsumableArray.js");
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/objectSpread */ "./node_modules/@babel/runtime/helpers/objectSpread.js");
/* harmony import */ var _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _getQuery__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./getQuery */ "./lib/getQuery.js");
/* harmony import */ var _isEmpty__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./isEmpty */ "./lib/isEmpty.js");
/* harmony import */ var _isArray__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./isArray */ "./lib/isArray.js");
/* harmony import */ var _uniq__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./uniq */ "./lib/uniq.js");
/* harmony import */ var _flattenDeep__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./flattenDeep */ "./lib/flattenDeep.js");








/**
 * Set query to url.
 *
 * @since 0.3.0
 * @param {Object} query Object to parse in url.
 * @param {?Object} params Object with params.
 * @param {?Boolean} params.isSaveOld Does save old query. Default: false.
 * @param {?Boolean} params.isSaveHash Does save hash. Default: true.
 * @param {?Boolean} params.isSaveEmptyFields Does save empty fields. Default: false.
 *
 * @example
 * setQuery({ test: 'value' })
 * // => /?test=value
 *
 * setQuery({ test: ['12', '34'] })
 * // => /?test=12&test=34
 *
 * // /?test=value&field=test
 * setQuery({ test: 'field' }, { isSaveOld: true })
 * // => /?test=value&test=field&field=test
 *
 * // /?test=value#someHash
 * setQuery({ test: 'value' }, { isSaveHash: false })
 * // => /?test=value
 */

function setQuery(query) {
  var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
      _ref$isSaveOld = _ref.isSaveOld,
      isSaveOld = _ref$isSaveOld === void 0 ? false : _ref$isSaveOld,
      _ref$isSaveHash = _ref.isSaveHash,
      isSaveHash = _ref$isSaveHash === void 0 ? true : _ref$isSaveHash,
      _ref$isSaveEmptyField = _ref.isSaveEmptyFields,
      isSaveEmptyFields = _ref$isSaveEmptyField === void 0 ? false : _ref$isSaveEmptyField;

  var hasOwnProperty = Object.prototype.hasOwnProperty;
  var localQuery = query ? Object.entries(query).reduce(function (acc, field) {
    var fieldName = field[0];
    var fieldValue = Object(_isArray__WEBPACK_IMPORTED_MODULE_5__["default"])(field[1]) ? Object(_uniq__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_flattenDeep__WEBPACK_IMPORTED_MODULE_7__["default"])(field[1]).map(function (value) {
      return String(value);
    })) : field[1];
    return _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_2___default()({}, acc, _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()({}, fieldName, fieldValue));
  }, {}) : {};
  var oldQuery = isSaveOld && Object(_getQuery__WEBPACK_IMPORTED_MODULE_3__["default"])();
  var mergedQueries = isSaveOld && Object.entries(localQuery).concat(Object.entries(oldQuery));
  var hash = isSaveHash && window.location.href.split('#')[1];
  var newQueryObject = isSaveOld && !Object(_isEmpty__WEBPACK_IMPORTED_MODULE_4__["default"])(oldQuery) ? mergedQueries.reduce(function (newQuery, field) {
    var fieldName = field[0];
    var fieldValue = field[1];
    var isFieldExistInNewQuery = hasOwnProperty.call(newQuery, fieldName);
    var isFieldExistInOldQuery = hasOwnProperty.call(oldQuery, fieldName);

    if (isFieldExistInNewQuery && !isFieldExistInOldQuery) {
      var textValue = newQuery[fieldName] === fieldValue ? fieldValue : [newQuery[fieldName], fieldValue];
      var arrayValue = Object(_isArray__WEBPACK_IMPORTED_MODULE_5__["default"])(newQuery[fieldName]) ? Object(_uniq__WEBPACK_IMPORTED_MODULE_6__["default"])(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default()(newQuery[fieldName]).concat(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default()(fieldValue))) : textValue;
      var newValue = Object(_isArray__WEBPACK_IMPORTED_MODULE_5__["default"])(fieldValue) ? Object(_uniq__WEBPACK_IMPORTED_MODULE_6__["default"])(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default()(fieldValue).concat(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default()(newQuery[fieldName]))) : arrayValue;
      return _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_2___default()({}, newQuery, _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()({}, fieldName, newValue));
    }

    if (isFieldExistInNewQuery && isFieldExistInOldQuery) {
      return newQuery;
    }

    return _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_2___default()({}, newQuery, _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()({}, fieldName, fieldValue));
  }, {}) : localQuery;
  var newQueryString = Object.keys(newQueryObject).map(function (key) {
    if (key === '&') return '';
    var value = newQueryObject[key];
    var fieldValue;

    if (isSaveEmptyFields) {
      fieldValue = key ? "".concat(encodeURIComponent(key), "=").concat(encodeURIComponent(value)) : '';
    } else {
      fieldValue = key && value ? "".concat(encodeURIComponent(key), "=").concat(encodeURIComponent(value)) : '';
    }

    return Object(_isArray__WEBPACK_IMPORTED_MODULE_5__["default"])(value) ? value.map(function (arrayValue) {
      if (isSaveEmptyFields) {
        return key ? "".concat(encodeURIComponent(key), "=").concat(encodeURIComponent(arrayValue)) : '';
      }

      return key && arrayValue ? "".concat(encodeURIComponent(key), "=").concat(encodeURIComponent(arrayValue)) : '';
    }).filter(function (queryItem) {
      return queryItem;
    }) // Remove empty queries
    .join('&') : fieldValue;
  }).filter(function (queryItem) {
    return queryItem;
  }) // Remove empty queries
  .join('&');
  window.history.pushState({}, document.title, newQueryString ? "?".concat(newQueryString).concat(hash ? "#".concat(hash) : '') : window.location.href.split('?')[0].split('#')[0] + (hash ? "#".concat(hash) : ''));
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
/* harmony import */ var _isArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./isArray */ "./lib/isArray.js");
/* harmony import */ var _clone__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./clone */ "./lib/clone.js");


/**
 * Remove same values from array.
 *
 * @since 0.3.0
 * @param {Array} array Array of values.
 * @return {Array}
 *
 * @example
 * uniq(['test', 'field', 'test'])
 * // => ['test', 'field']
 *
 * uniq([{ test: 'value' }, { test: 'value' }])
 * // => [{ test: 'value' }]
 *
 * uniq([['someValue'], ['someOtherValue'], ['someValue']])
 * // => [['someValue'], ['someOtherValue']]
 */

function uniq() {
  var array = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];

  if (!Object(_isArray__WEBPACK_IMPORTED_MODULE_0__["default"])(array)) {
    throw new Error('[chober]: param must to be an array.');
  }

  var arrayOfStrings = Object(_clone__WEBPACK_IMPORTED_MODULE_1__["default"])(array).map(function (item) {
    return JSON.stringify(item);
  });
  var filteredArray = arrayOfStrings.filter(function (item, index, currentArray) {
    return currentArray.indexOf(item) === index;
  });
  return filteredArray.map(function (item) {
    return JSON.parse(item);
  });
}

/* harmony default export */ __webpack_exports__["default"] = (uniq);

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/arrayWithHoles.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/arrayWithHoles.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

module.exports = _arrayWithHoles;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/arrayWithoutHoles.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/arrayWithoutHoles.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) {
      arr2[i] = arr[i];
    }

    return arr2;
  }
}

module.exports = _arrayWithoutHoles;

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

/***/ "./node_modules/@babel/runtime/helpers/iterableToArray.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/iterableToArray.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _iterableToArray(iter) {
  if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter);
}

module.exports = _iterableToArray;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/iterableToArrayLimit.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/iterableToArrayLimit.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _iterableToArrayLimit(arr, i) {
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

module.exports = _iterableToArrayLimit;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/nonIterableRest.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/nonIterableRest.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance");
}

module.exports = _nonIterableRest;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/nonIterableSpread.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/nonIterableSpread.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance");
}

module.exports = _nonIterableSpread;

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

/***/ "./node_modules/@babel/runtime/helpers/slicedToArray.js":
/*!**************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/slicedToArray.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayWithHoles = __webpack_require__(/*! ./arrayWithHoles */ "./node_modules/@babel/runtime/helpers/arrayWithHoles.js");

var iterableToArrayLimit = __webpack_require__(/*! ./iterableToArrayLimit */ "./node_modules/@babel/runtime/helpers/iterableToArrayLimit.js");

var nonIterableRest = __webpack_require__(/*! ./nonIterableRest */ "./node_modules/@babel/runtime/helpers/nonIterableRest.js");

function _slicedToArray(arr, i) {
  return arrayWithHoles(arr) || iterableToArrayLimit(arr, i) || nonIterableRest();
}

module.exports = _slicedToArray;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/toConsumableArray.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/toConsumableArray.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayWithoutHoles = __webpack_require__(/*! ./arrayWithoutHoles */ "./node_modules/@babel/runtime/helpers/arrayWithoutHoles.js");

var iterableToArray = __webpack_require__(/*! ./iterableToArray */ "./node_modules/@babel/runtime/helpers/iterableToArray.js");

var nonIterableSpread = __webpack_require__(/*! ./nonIterableSpread */ "./node_modules/@babel/runtime/helpers/nonIterableSpread.js");

function _toConsumableArray(arr) {
  return arrayWithoutHoles(arr) || iterableToArray(arr) || nonIterableSpread();
}

module.exports = _toConsumableArray;

/***/ }),

/***/ "./package.json":
/*!**********************!*\
  !*** ./package.json ***!
  \**********************/
/*! exports provided: name, version, description, main, scripts, repository, keywords, author, license, bugs, homepage, devDependencies, default */
/***/ (function(module) {

module.exports = {"name":"chober","version":"1.3.2","description":"Chober.js - is a collection of methods that are used by programmers every day. We decided to put all the methods together so as not to copy them from project to project.","main":"dist/chober.js","scripts":{"prod":"webpack --env production --config webpack.config.js","dev":"webpack --env development --config webpack.config.js","watch":"webpack --env development --config webpack.config.js --watch","build":"npm run docs && npm run prod && npm run dev","docs":"jsdoc2md --template README.hbs --files lib/*.js > docs/README.md","docs-server":"docsify serve docs -p 35730"},"repository":{"type":"git","url":"git+https://github.com/BrooonS/chober.git"},"keywords":["webpack","js","javascript","library","es6","commonjs","methods","chober","isEmpty","isArray","isNumber","isString","isObject","isBoolean","isEqual","isUndefined","isNil","isFunction","getQuery","getNumbers","getScrollbarWidth","getCookie","getOffset","getType","setQuery","setCookie","removeCookie","decodeHtml","clone","invertObject","first","flatten","formatNumber","debounce","scrollTo","uniq"],"author":"Valery Strelets","license":"MIT","bugs":{"url":"https://github.com/BrooonS/chober/issues"},"homepage":"https://github.com/BrooonS/chober#readme","devDependencies":{"@babel/core":"^7.1.6","@babel/plugin-proposal-object-rest-spread":"^7.0.0","@babel/plugin-transform-object-assign":"^7.0.0","@babel/plugin-transform-runtime":"^7.1.0","@babel/preset-env":"^7.1.6","@babel/runtime":"^7.1.5","babel-eslint":"^10.0.1","babel-loader":"^8.0.4","docsify-cli":"^4.3.0","eslint":"^5.9.0","eslint-config-airbnb":"^17.1.0","eslint-loader":"^2.1.1","eslint-plugin-import":"^2.14.0","eslint-plugin-jsx-a11y":"^6.1.2","eslint-plugin-react":"^7.11.1","jsdoc-to-markdown":"^4.0.1","uglifyjs-webpack-plugin":"^2.0.1","webpack":"^4.26.0","webpack-cli":"^3.1.2"}};

/***/ })

/******/ })["default"];
});
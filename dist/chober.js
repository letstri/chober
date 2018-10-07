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
/*! exports provided: VERSION, isEmpty, getQuery, clone, default */
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

/* harmony import */ var _lib_getQuery__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./lib/getQuery */ "./lib/getQuery.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getQuery", function() { return _lib_getQuery__WEBPACK_IMPORTED_MODULE_4__["default"]; });

/* harmony import */ var _lib_clone__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./lib/clone */ "./lib/clone.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "clone", function() { return _lib_clone__WEBPACK_IMPORTED_MODULE_5__["default"]; });



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
    isEmpty: _lib_isEmpty__WEBPACK_IMPORTED_MODULE_3__["default"],
    getQuery: _lib_getQuery__WEBPACK_IMPORTED_MODULE_4__["default"],
    clone: _lib_clone__WEBPACK_IMPORTED_MODULE_5__["default"]
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
 * @param {Any} item Some item to clone
 * @return {Any}
 *
 * @example
 *
 * clone([1, null, '3']) // [1, null, '3']
 */
/* harmony default export */ __webpack_exports__["default"] = (function (item) {
  return item && JSON.parse(JSON.stringify(item));
});

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



/* harmony default export */ __webpack_exports__["default"] = (function () {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      _ref$arrayFields = _ref.arrayFields,
      arrayFields = _ref$arrayFields === void 0 ? [] : _ref$arrayFields;

  var query = window.location.search.substr(1);
  var objectUrl = {};
  if (!query) return {}; // Set default array fields to objectUrl

  if (arrayFields.length) {
    _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_2___default()(objectUrl, arrayFields.reduce(function (object, field) {
      return _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_1___default()({}, object, _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({}, field, []));
    }, {}));
  }

  query.split('&').forEach(function (part) {
    var item = part.split('=');
    /**
     * If item already exists,
     * create an array with this item.
     */

    if (Object.prototype.hasOwnProperty.call(objectUrl, item[0])) {
      if (Array.isArray(objectUrl[item[0]])) {
        objectUrl[item[0]].push(item[1]);
      } else {
        objectUrl[item[0]] = [objectUrl[item[0]], item[1]];
      }
    }
    /**
     * Decode URI if array and if only one key.
     */


    if (Array.isArray(objectUrl[item[0]])) {
      objectUrl[item[0]].forEach(function (url, index) {
        objectUrl[item[0]][index] = decodeURIComponent(objectUrl[item[0]][index]);
      });
    } else {
      objectUrl[item[0]] = decodeURIComponent(item[1]);
    }
  });
  return objectUrl;
});

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
 * Check is empty object or other type.
 *
 * @param {Any} item Some item to check
 * @return {Boolean}
 *
 * @example
 *
 * isEmpty({ test: 'some value' }) // false
 * isEmpty([1, null, '3']) // false
 * isEmpty('qwe') // false
 * isEmpty(true) // true
 * isEmpty(1) // true
 * isEmpty(undefined) // true
 * isEmpty(null) // true
 */
/* harmony default export */ __webpack_exports__["default"] = (function (item) {
  return !(item && Object.keys(item).length);
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
/*! exports provided: name, version, description, main, private, scripts, repository, keywords, author, license, bugs, homepage, devDependencies, default */
/***/ (function(module) {

module.exports = {"name":"chober","version":"0.1.0","description":"Chober.js - is a collection of methods that are used by programmers every day. We decided to put all the methods together so as not to copy them from project to project.","main":"dist/chober.js","private":true,"scripts":{"prod":"webpack --env production --config webpack.config.js","dev":"webpack --env development --config webpack.config.js","watch":"webpack --env development --config webpack.config.js --watch","build":"npm run prod && npm run dev"},"repository":{"type":"git","url":"git+https://github.com/BrooonS/chober.js.git"},"keywords":["webpack","js","javascript","library","methods","chober","isset","isEmpty"],"author":"Valery Strelets","license":"MIT","bugs":{"url":"https://github.com/BrooonS/chober.js/issues"},"homepage":"https://github.com/BrooonS/chober.js#readme","devDependencies":{"@babel/core":"^7.1.2","@babel/plugin-proposal-object-rest-spread":"^7.0.0","@babel/plugin-transform-object-assign":"^7.0.0","@babel/plugin-transform-runtime":"^7.1.0","@babel/preset-env":"^7.1.0","@babel/runtime":"^7.1.2","babel-eslint":"^10.0.1","babel-loader":"^8.0.4","eslint":"^5.6.1","eslint-config-airbnb":"^17.1.0","eslint-loader":"^2.1.1","eslint-plugin-import":"^2.14.0","eslint-plugin-jsx-a11y":"^6.1.2","eslint-plugin-react":"^7.11.1","uglifyjs-webpack-plugin":"^2.0.1","webpack":"^4.20.2","webpack-cli":"^3.1.2"}};

/***/ })

/******/ });
});
//# sourceMappingURL=chober.js.map
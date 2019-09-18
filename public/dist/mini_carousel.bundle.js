/******/ (function(modules) { // webpackBootstrap
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/entry/mini_carousel.entry.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./public/stylesheets/mini_carousel.sass":
/*!****************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./public/stylesheets/mini_carousel.sass ***!
  \****************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\")(false);\n// Module\nexports.push([module.i, \"#video-benefit-container {\\n  width: 90%;\\n  position: absolute;\\n  top: 50%;\\n  left: 50%;\\n  transform: translate(-50%, -50%);\\n  display: flex;\\n  flex-direction: row; }\\n\\n.mini-carousel-scroller {\\n  width: 50%; }\\n\\n.mini-carousel-container {\\n  display: flex;\\n  flex-direction: row;\\n  justify-content: center;\\n  margin-left: 100px;\\n  padding-top: 20px; }\\n\\n.mini-carousel-col {\\n  display: flex;\\n  flex-direction: column;\\n  justify-content: center; }\\n  .mini-carousel-col .mini-carousel-arrow {\\n    width: 13px;\\n    height: 20px;\\n    background-size: 158px auto;\\n    background-image: url(\\\"/images/Sub_Element/Sub_SpriteSheet_Arrow.png\\\");\\n    background-color: transparent;\\n    cursor: pointer; }\\n  .mini-carousel-col #left-arrow {\\n    background-position: -79px -208px; }\\n  .mini-carousel-col #right-arrow {\\n    background-position: -92px -208px; }\\n\\n.mini-carousel-left {\\n  align-items: flex-start; }\\n\\n.mini-carousel-center {\\n  padding-left: 20px;\\n  padding-right: 20px;\\n  position: relative; }\\n\\n.mini-carousel-center::before {\\n  z-index: -1;\\n  width: 10px;\\n  height: 100px;\\n  content: \\\"\\\";\\n  box-shadow: 0 -15px 25px 7px #222;\\n  position: absolute;\\n  transform: rotate(-8deg);\\n  top: 30px;\\n  left: 30px; }\\n\\n.mini-carousel-center::after {\\n  z-index: -1;\\n  width: 10px;\\n  height: 100px;\\n  content: \\\"\\\";\\n  box-shadow: 0 -15px 25px 7px #222;\\n  position: absolute;\\n  transform: rotate(8deg);\\n  top: 30px;\\n  right: 30px; }\\n\\n.mini-carousel-right {\\n  align-items: flex-end; }\\n\\n.mini-carousel-viewport {\\n  width: 280px;\\n  height: 210px;\\n  overflow: hidden;\\n  position: relative; }\\n\\n.mini-carousel-row {\\n  width: 1120px;\\n  height: 100%; }\\n  .mini-carousel-row .mini-carousel-card {\\n    width: 25%;\\n    height: 100%;\\n    display: inline-block; }\\n\\na.img-link img {\\n  width: 280px;\\n  height: 210px; }\\n\", \"\"]);\n\n\n//# sourceURL=webpack:///./public/stylesheets/mini_carousel.sass?./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./public/stylesheets/mini_carousel_benefit.sass":
/*!************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./public/stylesheets/mini_carousel_benefit.sass ***!
  \************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\")(false);\n// Module\nexports.push([module.i, \".benefit {\\n  width: 50%;\\n  height: 100%; }\\n  .benefit h2, .benefit div {\\n    margin-bottom: 20px;\\n    line-height: 1.5; }\\n  .benefit div.benefit-header {\\n    font-size: 4.8em;\\n    line-height: 1.2; }\\n  .benefit div.benefit-blurb {\\n    font-size: 1.8em; }\\n  .benefit a.benefit-cta {\\n    font-size: 1.8em;\\n    font-weight: 600;\\n    cursor: pointer; }\\n  .benefit a.benefit-cta:hover {\\n    text-decoration: underline; }\\n\", \"\"]);\n\n\n//# sourceURL=webpack:///./public/stylesheets/mini_carousel_benefit.sass?./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./public/stylesheets/reset.sass":
/*!********************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./public/stylesheets/reset.sass ***!
  \********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\")(false);\n// Imports\nexports.push([module.i, \"@import url(https://fonts.googleapis.com/css?family=Noto+Sans:400,700&display=block);\", \"\"]);\n// Module\nexports.push([module.i, \"html, body, div, span, applet, object, iframe,\\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\\na, abbr, acronym, address, big, cite, code,\\ndel, dfn, em, img, ins, kbd, q, s, samp,\\nsmall, strike, strong, sub, sup, tt, var,\\nb, u, i, center,\\ndl, dt, dd, ol, ul, li,\\nfieldset, form, label, legend,\\ntable, caption, tbody, tfoot, thead, tr, th, td,\\narticle, aside, canvas, details, embed,\\nfigure, figcaption, footer, header, hgroup,\\nmenu, nav, output, ruby, section, summary,\\ntime, mark, audio, video {\\n  margin: 0;\\n  padding: 0;\\n  border: 0;\\n  vertical-align: baseline; }\\n\\nhtml {\\n  width: 100%;\\n  height: 100%; }\\n\\nbody {\\n  width: 100%;\\n  height: 100%;\\n  font-family: \\\"Noto Sans\\\", sans-serif;\\n  font-weight: normal;\\n  font-size: 10px;\\n  line-height: 1; }\\n\\n/* HTML5 display-role reset for older browsers */\\narticle, aside, details, figcaption, figure,\\nfooter, header, hgroup, menu, nav, section {\\n  display: block; }\\n\\nol, ul {\\n  list-style: none; }\\n\\nblockquote, q {\\n  quotes: none; }\\n\\nblockquote:before, blockquote:after,\\nq:before, q:after {\\n  content: '';\\n  content: none; }\\n\\ntable {\\n  border-collapse: collapse;\\n  border-spacing: 0; }\\n\\n/* Header tag default size by KKambi */\\nh1 {\\n  font-size: 4.5em; }\\n\\nh2 {\\n  font-size: 3.5em; }\\n\\nh3 {\\n  font-size: 2.5em; }\\n\\n/* a none tag */\\na, a:link, a:hover, a:active, a:visited {\\n  color: #000000;\\n  text-decoration: none; }\\n\", \"\"]);\n\n\n//# sourceURL=webpack:///./public/stylesheets/reset.sass?./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\n// eslint-disable-next-line func-names\nmodule.exports = function (useSourceMap) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = cssWithMappingToString(item, useSourceMap);\n\n      if (item[2]) {\n        return \"@media \".concat(item[2], \"{\").concat(content, \"}\");\n      }\n\n      return content;\n    }).join('');\n  }; // import a list of modules into the list\n  // eslint-disable-next-line func-names\n\n\n  list.i = function (modules, mediaQuery) {\n    if (typeof modules === 'string') {\n      // eslint-disable-next-line no-param-reassign\n      modules = [[null, modules, '']];\n    }\n\n    var alreadyImportedModules = {};\n\n    for (var i = 0; i < this.length; i++) {\n      // eslint-disable-next-line prefer-destructuring\n      var id = this[i][0];\n\n      if (id != null) {\n        alreadyImportedModules[id] = true;\n      }\n    }\n\n    for (var _i = 0; _i < modules.length; _i++) {\n      var item = modules[_i]; // skip already imported module\n      // this implementation is not 100% perfect for weird media query combinations\n      // when a module is imported multiple times with different media queries.\n      // I hope this will never occur (Hey this way we have smaller bundles)\n\n      if (item[0] == null || !alreadyImportedModules[item[0]]) {\n        if (mediaQuery && !item[2]) {\n          item[2] = mediaQuery;\n        } else if (mediaQuery) {\n          item[2] = \"(\".concat(item[2], \") and (\").concat(mediaQuery, \")\");\n        }\n\n        list.push(item);\n      }\n    }\n  };\n\n  return list;\n};\n\nfunction cssWithMappingToString(item, useSourceMap) {\n  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring\n\n  var cssMapping = item[3];\n\n  if (!cssMapping) {\n    return content;\n  }\n\n  if (useSourceMap && typeof btoa === 'function') {\n    var sourceMapping = toComment(cssMapping);\n    var sourceURLs = cssMapping.sources.map(function (source) {\n      return \"/*# sourceURL=\".concat(cssMapping.sourceRoot).concat(source, \" */\");\n    });\n    return [content].concat(sourceURLs).concat([sourceMapping]).join('\\n');\n  }\n\n  return [content].join('\\n');\n} // Adapted from convert-source-map (MIT)\n\n\nfunction toComment(sourceMap) {\n  // eslint-disable-next-line no-undef\n  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));\n  var data = \"sourceMappingURL=data:application/json;charset=utf-8;base64,\".concat(base64);\n  return \"/*# \".concat(data, \" */\");\n}\n\n//# sourceURL=webpack:///./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar stylesInDom = {};\n\nvar isOldIE = function isOldIE() {\n  var memo;\n  return function memorize() {\n    if (typeof memo === 'undefined') {\n      // Test for IE <= 9 as proposed by Browserhacks\n      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805\n      // Tests for existence of standard globals is to allow style-loader\n      // to operate correctly into non-standard environments\n      // @see https://github.com/webpack-contrib/style-loader/issues/177\n      memo = Boolean(window && document && document.all && !window.atob);\n    }\n\n    return memo;\n  };\n}();\n\nvar getTarget = function getTarget() {\n  var memo = {};\n  return function memorize(target) {\n    if (typeof memo[target] === 'undefined') {\n      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n        try {\n          // This will throw an exception if access to iframe is blocked\n          // due to cross-origin restrictions\n          styleTarget = styleTarget.contentDocument.head;\n        } catch (e) {\n          // istanbul ignore next\n          styleTarget = null;\n        }\n      }\n\n      memo[target] = styleTarget;\n    }\n\n    return memo[target];\n  };\n}();\n\nfunction listToStyles(list, options) {\n  var styles = [];\n  var newStyles = {};\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var css = item[1];\n    var media = item[2];\n    var sourceMap = item[3];\n    var part = {\n      css: css,\n      media: media,\n      sourceMap: sourceMap\n    };\n\n    if (!newStyles[id]) {\n      styles.push(newStyles[id] = {\n        id: id,\n        parts: [part]\n      });\n    } else {\n      newStyles[id].parts.push(part);\n    }\n  }\n\n  return styles;\n}\n\nfunction addStylesToDom(styles, options) {\n  for (var i = 0; i < styles.length; i++) {\n    var item = styles[i];\n    var domStyle = stylesInDom[item.id];\n    var j = 0;\n\n    if (domStyle) {\n      domStyle.refs++;\n\n      for (; j < domStyle.parts.length; j++) {\n        domStyle.parts[j](item.parts[j]);\n      }\n\n      for (; j < item.parts.length; j++) {\n        domStyle.parts.push(addStyle(item.parts[j], options));\n      }\n    } else {\n      var parts = [];\n\n      for (; j < item.parts.length; j++) {\n        parts.push(addStyle(item.parts[j], options));\n      }\n\n      stylesInDom[item.id] = {\n        id: item.id,\n        refs: 1,\n        parts: parts\n      };\n    }\n  }\n}\n\nfunction insertStyleElement(options) {\n  var style = document.createElement('style');\n\n  if (typeof options.attributes.nonce === 'undefined') {\n    var nonce =  true ? __webpack_require__.nc : undefined;\n\n    if (nonce) {\n      options.attributes.nonce = nonce;\n    }\n  }\n\n  Object.keys(options.attributes).forEach(function (key) {\n    style.setAttribute(key, options.attributes[key]);\n  });\n\n  if (typeof options.insert === 'function') {\n    options.insert(style);\n  } else {\n    var target = getTarget(options.insert || 'head');\n\n    if (!target) {\n      throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n    }\n\n    target.appendChild(style);\n  }\n\n  return style;\n}\n\nfunction removeStyleElement(style) {\n  // istanbul ignore if\n  if (style.parentNode === null) {\n    return false;\n  }\n\n  style.parentNode.removeChild(style);\n}\n/* istanbul ignore next  */\n\n\nvar replaceText = function replaceText() {\n  var textStore = [];\n  return function replace(index, replacement) {\n    textStore[index] = replacement;\n    return textStore.filter(Boolean).join('\\n');\n  };\n}();\n\nfunction applyToSingletonTag(style, index, remove, obj) {\n  var css = remove ? '' : obj.css; // For old IE\n\n  /* istanbul ignore if  */\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = replaceText(index, css);\n  } else {\n    var cssNode = document.createTextNode(css);\n    var childNodes = style.childNodes;\n\n    if (childNodes[index]) {\n      style.removeChild(childNodes[index]);\n    }\n\n    if (childNodes.length) {\n      style.insertBefore(cssNode, childNodes[index]);\n    } else {\n      style.appendChild(cssNode);\n    }\n  }\n}\n\nfunction applyToTag(style, options, obj) {\n  var css = obj.css;\n  var media = obj.media;\n  var sourceMap = obj.sourceMap;\n\n  if (media) {\n    style.setAttribute('media', media);\n  }\n\n  if (sourceMap && btoa) {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = css;\n  } else {\n    while (style.firstChild) {\n      style.removeChild(style.firstChild);\n    }\n\n    style.appendChild(document.createTextNode(css));\n  }\n}\n\nvar singleton = null;\nvar singletonCounter = 0;\n\nfunction addStyle(obj, options) {\n  var style;\n  var update;\n  var remove;\n\n  if (options.singleton) {\n    var styleIndex = singletonCounter++;\n    style = singleton || (singleton = insertStyleElement(options));\n    update = applyToSingletonTag.bind(null, style, styleIndex, false);\n    remove = applyToSingletonTag.bind(null, style, styleIndex, true);\n  } else {\n    style = insertStyleElement(options);\n    update = applyToTag.bind(null, style, options);\n\n    remove = function remove() {\n      removeStyleElement(style);\n    };\n  }\n\n  update(obj);\n  return function updateStyle(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {\n        return;\n      }\n\n      update(obj = newObj);\n    } else {\n      remove();\n    }\n  };\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  options.attributes = typeof options.attributes === 'object' ? options.attributes : {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>\n  // tags it will allow on a page\n\n  if (!options.singleton && typeof options.singleton !== 'boolean') {\n    options.singleton = isOldIE();\n  }\n\n  var styles = listToStyles(list, options);\n  addStylesToDom(styles, options);\n  return function update(newList) {\n    var mayRemove = [];\n\n    for (var i = 0; i < styles.length; i++) {\n      var item = styles[i];\n      var domStyle = stylesInDom[item.id];\n\n      if (domStyle) {\n        domStyle.refs--;\n        mayRemove.push(domStyle);\n      }\n    }\n\n    if (newList) {\n      var newStyles = listToStyles(newList, options);\n      addStylesToDom(newStyles, options);\n    }\n\n    for (var _i = 0; _i < mayRemove.length; _i++) {\n      var _domStyle = mayRemove[_i];\n\n      if (_domStyle.refs === 0) {\n        for (var j = 0; j < _domStyle.parts.length; j++) {\n          _domStyle.parts[j]();\n        }\n\n        delete stylesInDom[_domStyle.id];\n      }\n    }\n  };\n};\n\n//# sourceURL=webpack:///./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./public/javascripts/dom_util.js":
/*!****************************************!*\
  !*** ./public/javascripts/dom_util.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("var dom_util = {\n  /** Enable element  */\n  enableElement: function enableElement(element) {\n    element.removeAttribute(\"disabled\");\n  },\n\n  /** Disable element */\n  disableElement: function disableElement(element) {\n    element.setAttribute(\"disabled\", \"\");\n  }\n};\nmodule.exports = {\n  dom_util: dom_util\n};\n\n//# sourceURL=webpack:///./public/javascripts/dom_util.js?");

/***/ }),

/***/ "./public/javascripts/is_util.js":
/*!***************************************!*\
  !*** ./public/javascripts/is_util.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("var is_util = {\n  isWorking: function isWorking(intervalId) {\n    return !(intervalId === undefined || intervalId === \"\");\n  },\n  isNotWorking: function isNotWorking(intervalId) {\n    return intervalId === undefined || intervalId === \"\";\n  }\n};\nmodule.exports = {\n  is_util: is_util\n};\n\n//# sourceURL=webpack:///./public/javascripts/is_util.js?");

/***/ }),

/***/ "./public/javascripts/mini_carousel.js":
/*!*********************************************!*\
  !*** ./public/javascripts/mini_carousel.js ***!
  \*********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _is_util_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./is_util.js */ \"./public/javascripts/is_util.js\");\n/* harmony import */ var _is_util_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_is_util_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _dom_util_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dom_util.js */ \"./public/javascripts/dom_util.js\");\n/* harmony import */ var _dom_util_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_dom_util_js__WEBPACK_IMPORTED_MODULE_1__);\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n\n\nvar WIDTH = 280;\nvar HEIGHT = 210;\nvar SECOND_3 = 3000;\n\nvar MiniCarousel =\n/*#__PURE__*/\nfunction () {\n  function MiniCarousel(imageWidth, imageHeight, interval) {\n    _classCallCheck(this, MiniCarousel);\n\n    this.html = \"\\n            <div class=\\\"mini-carousel-scroller\\\">\\n                <div class=\\\"mini-carousel-container\\\">\\n                    <div class=\\\"mini-carousel-col mini-carousel-left\\\"> \\n                        <a class=\\\"mini-carousel-arrow\\\" id=\\\"left-arrow\\\"></a></div><div class=\\\"mini-carousel-col mini-carousel-center\\\"><div class=\\\"mini-carousel-viewport\\\"><ol class=\\\"mini-carousel-row\\\" style=\\\"transform: translateX(-280px);\\\"><li class=\\\"mini-carousel-card\\\"><a class=\\\"img-link\\\"><img src=\\\"/images/Sub_Card_A/Sub_Card_A01.jpg\\\" alt=\\\"Homecoming New Series\\\"></a></li><li class=\\\"mini-carousel-card\\\"><a class=\\\"img-link\\\"><img src=\\\"/images/Sub_Card_A/Sub_Card_A02.jpg\\\" alt=\\\"The Man in the High Castle\\\"></a></li><li class=\\\"mini-carousel-card\\\"><a class=\\\"img-link\\\"><img src=\\\"/images/Sub_Card_A/Sub_Card_A03.jpg\\\" alt=\\\"The Marvelous Mrs.Meisel\\\"></a></li><li class=\\\"mini-carousel-card\\\"><a class=\\\"img-link\\\"><img src=\\\"/images/Sub_Card_A/Sub_Card_A04.jpg\\\" alt=\\\"Tom Clansy's Jack Lyan\\\"></a></li></ol></div></div><div class=\\\"mini-carousel-col mini-carousel-right\\\"><a class=\\\"mini-carousel-arrow\\\" id=\\\"right-arrow\\\"></a></div></div></div>\";\n    this.imageWidth = imageWidth || 300;\n    this.imageHeight = imageHeight || 300;\n    this.interval = interval || SECOND_3;\n    this.intervalId = \"\";\n    this.direction = \"right\";\n    this.elements = {\n      leftArrow: document.getElementById(\"left-arrow\"),\n      rightArrow: document.getElementById(\"right-arrow\"),\n      miniCarouselRow: document.querySelector(\".mini-carousel-row\"),\n      button: document.querySelector(\".mini-carousel-arrow\")\n    };\n    this.map = {\n      childMap: {\n        \"left\": \"lastChild\",\n        \"right\": \"firstChild\"\n      },\n      insertMap: {\n        \"left\": \"afterbegin\",\n        \"right\": \"beforeend\"\n      }\n    };\n  }\n\n  _createClass(MiniCarousel, [{\n    key: \"getHTML\",\n    value: function getHTML() {\n      return this.html;\n    }\n  }, {\n    key: \"init\",\n    value: function init(container) {\n      var _this = this;\n\n      //Start Auto Sliding\n      this.intervalId = this.startAutoSlide(this.interval); //Check State Cyclically -> Restart Auto sliding\n\n      setInterval(function () {\n        if (_is_util_js__WEBPACK_IMPORTED_MODULE_0__[\"is_util\"].isNotWorking(_this.intervalId)) {\n          _this.intervalId = _this.startAutoSlide(_this.interval);\n          _dom_util_js__WEBPACK_IMPORTED_MODULE_1__[\"dom_util\"].disableElement(_this.elements.button);\n        }\n      }, this.interval * 4); //Add arrow click event handler\n      // this.addArrowEventHandler(this.elements.leftArrow, \"left\")\n      // this.addArrowEventHandler(this.elements.rightArrow, \"right\")\n\n      this.addArrowEventHandler(container, \"left\"); // this.addArrowEventHandler(container, \"right\")\n      //Add carousel card transition end event handler\n      // this.addTransitionEndEventHandler(this.elements.miniCarouselRow)\n\n      this.addTransitionEndEventHandler(container);\n    }\n    /** Set direction */\n\n  }, {\n    key: \"setDirection\",\n    value: function setDirection(direction) {\n      this.direction = direction;\n    }\n    /** Initialize intervalId */\n\n  }, {\n    key: \"initializeIntervalId\",\n    value: function initializeIntervalId() {\n      this.intervalId = \"\";\n    }\n    /** \r\n     * Start Auto Slide card to right\r\n     *\r\n     * @param {string} interval sliding interval (ms)\r\n     * @return {number} intervalId \r\n     */\n\n  }, {\n    key: \"startAutoSlide\",\n    value: function startAutoSlide(interval) {\n      var _this2 = this;\n\n      return setInterval(function () {\n        _this2.setDirection(\"right\");\n\n        _this2.slideCard(\"right\");\n\n        _dom_util_js__WEBPACK_IMPORTED_MODULE_1__[\"dom_util\"].disableElement(_this2.elements.button);\n      }, interval);\n    }\n    /** \r\n     * Slide carousel card to left/right\r\n     *\r\n     * @param {string} direction sliding direction [\"left\"/\"right\"]\r\n     * @return {void} \r\n     */\n\n  }, {\n    key: \"slideCard\",\n    value: function slideCard(direction) {\n      var miniCarouselRow = this.elements.miniCarouselRow;\n      var translate = miniCarouselRow.style.transform;\n      var currentSign = translate.includes('-') ? -1 : 1;\n      var currentPixel = Number(translate.replace(/[^0-9]/g, ''));\n      var slidePixel = direction === \"left\" ? this.imageWidth : -this.imageWidth;\n      miniCarouselRow.style.transition = 'all 0.1s ease-out';\n      miniCarouselRow.style.transform = \"translateX(\".concat(currentSign * currentPixel + slidePixel, \"px)\");\n    }\n    /** \r\n     * Move carousel [first/last] card to [last/first] \r\n     *\r\n     * @param {string} direction sliding direction [\"left\"/\"right\"]\r\n     * @return {void} \r\n     */\n\n  }, {\n    key: \"relocateCard\",\n    value: function relocateCard(direction) {\n      var card = this.elements.miniCarouselRow[this.map.childMap[direction]];\n      this.elements.miniCarouselRow.removeChild(card);\n      this.elements.miniCarouselRow.insertAdjacentElement(this.map.insertMap[direction], card);\n      this.elements.miniCarouselRow.style.transition = '';\n      this.elements.miniCarouselRow.style.transform = \"translateX(\".concat(-this.imageWidth, \"px)\");\n    }\n    /** \r\n     * Add carousel arrow click event handler to element\r\n     *\r\n     * @param {element} element arrow\r\n     * @return {void}\r\n     */\n\n  }, {\n    key: \"addArrowEventHandler\",\n    value: function addArrowEventHandler(element) {\n      var _this3 = this;\n\n      var direction = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : \"left\";\n      element.addEventListener(\"click\", function (event) {\n        if (_is_util_js__WEBPACK_IMPORTED_MODULE_0__[\"is_util\"].isWorking(_this3.intervalId)) {\n          clearInterval(_this3.intervalId);\n\n          _this3.initializeIntervalId();\n        }\n\n        if (event.target && event.target.id == \"left-arrow\") {\n          _this3.setDirection(direction);\n\n          _this3.slideCard(direction);\n\n          _dom_util_js__WEBPACK_IMPORTED_MODULE_1__[\"dom_util\"].disableElement(_this3.elements.button);\n        }\n      });\n    }\n    /** \r\n     * Add carousel transition end event to element\r\n     *\r\n     * @param {element} element carousel row\r\n     * @return {void}\r\n     */\n\n  }, {\n    key: \"addTransitionEndEventHandler\",\n    value: function addTransitionEndEventHandler(element) {\n      var _this4 = this;\n\n      element.addEventListener(\"transitionend\", function () {\n        _this4.relocateCard(_this4.direction);\n\n        _dom_util_js__WEBPACK_IMPORTED_MODULE_1__[\"dom_util\"].enableElement(_this4.elements.button);\n      });\n    }\n  }]);\n\n  return MiniCarousel;\n}();\n\nvar mini = new MiniCarousel(WIDTH, HEIGHT, SECOND_3);\nvar container = document.getElementById(\"video-benefit-container\");\ncontainer.insertAdjacentHTML('afterbegin', mini.getHTML());\nmini.init(container);\nconsole.log(container);\n\n//# sourceURL=webpack:///./public/javascripts/mini_carousel.js?");

/***/ }),

/***/ "./public/stylesheets/mini_carousel.sass":
/*!***********************************************!*\
  !*** ./public/stylesheets/mini_carousel.sass ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./mini_carousel.sass */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./public/stylesheets/mini_carousel.sass\");\n\nif (typeof content === 'string') {\n  content = [[module.i, content, '']];\n}\n\nvar options = {}\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = __webpack_require__(/*! ../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\")(content, options);\n\nif (content.locals) {\n  module.exports = content.locals;\n}\n\n\n//# sourceURL=webpack:///./public/stylesheets/mini_carousel.sass?");

/***/ }),

/***/ "./public/stylesheets/mini_carousel_benefit.sass":
/*!*******************************************************!*\
  !*** ./public/stylesheets/mini_carousel_benefit.sass ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./mini_carousel_benefit.sass */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./public/stylesheets/mini_carousel_benefit.sass\");\n\nif (typeof content === 'string') {\n  content = [[module.i, content, '']];\n}\n\nvar options = {}\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = __webpack_require__(/*! ../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\")(content, options);\n\nif (content.locals) {\n  module.exports = content.locals;\n}\n\n\n//# sourceURL=webpack:///./public/stylesheets/mini_carousel_benefit.sass?");

/***/ }),

/***/ "./public/stylesheets/reset.sass":
/*!***************************************!*\
  !*** ./public/stylesheets/reset.sass ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./reset.sass */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./public/stylesheets/reset.sass\");\n\nif (typeof content === 'string') {\n  content = [[module.i, content, '']];\n}\n\nvar options = {}\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = __webpack_require__(/*! ../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\")(content, options);\n\nif (content.locals) {\n  module.exports = content.locals;\n}\n\n\n//# sourceURL=webpack:///./public/stylesheets/reset.sass?");

/***/ }),

/***/ "./src/entry/mini_carousel.entry.js":
/*!******************************************!*\
  !*** ./src/entry/mini_carousel.entry.js ***!
  \******************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _public_stylesheets_reset_sass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../public/stylesheets/reset.sass */ \"./public/stylesheets/reset.sass\");\n/* harmony import */ var _public_stylesheets_reset_sass__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_public_stylesheets_reset_sass__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _public_stylesheets_mini_carousel_sass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../public/stylesheets/mini_carousel.sass */ \"./public/stylesheets/mini_carousel.sass\");\n/* harmony import */ var _public_stylesheets_mini_carousel_sass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_public_stylesheets_mini_carousel_sass__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _public_stylesheets_mini_carousel_benefit_sass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../public/stylesheets/mini_carousel_benefit.sass */ \"./public/stylesheets/mini_carousel_benefit.sass\");\n/* harmony import */ var _public_stylesheets_mini_carousel_benefit_sass__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_public_stylesheets_mini_carousel_benefit_sass__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _public_javascripts_mini_carousel_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../public/javascripts/mini_carousel.js */ \"./public/javascripts/mini_carousel.js\");\n\n\n\n\n\n//# sourceURL=webpack:///./src/entry/mini_carousel.entry.js?");

/***/ })

/******/ });
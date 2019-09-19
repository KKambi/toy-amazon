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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/entry/index.entry.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./public/stylesheets/benefit_card.sass":
/*!***************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./public/stylesheets/benefit_card.sass ***!
  \***************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\")(false);\n// Module\nexports.push([module.i, \".benefit {\\n  width: 50%;\\n  height: 100%; }\\n  .benefit h2, .benefit div {\\n    margin-bottom: 20px;\\n    line-height: 1.5; }\\n  .benefit div.benefit-header {\\n    font-size: 4.8em;\\n    line-height: 1.2; }\\n  .benefit div.benefit-blurb {\\n    font-size: 1.8em; }\\n  .benefit a.benefit-cta {\\n    font-size: 1.8em;\\n    font-weight: 600;\\n    cursor: pointer; }\\n  .benefit a.benefit-cta:hover {\\n    text-decoration: underline; }\\n\", \"\"]);\n\n\n//# sourceURL=webpack:///./public/stylesheets/benefit_card.sass?./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./public/stylesheets/index.sass":
/*!********************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./public/stylesheets/index.sass ***!
  \********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\")(false);\n// Module\nexports.push([module.i, \".container {\\n  margin-bottom: 20px; }\\n\", \"\"]);\n\n\n//# sourceURL=webpack:///./public/stylesheets/index.sass?./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./public/stylesheets/mini_carousel.sass":
/*!****************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./public/stylesheets/mini_carousel.sass ***!
  \****************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\")(false);\n// Module\nexports.push([module.i, \".mini-carousel-scroller {\\n  width: 50%; }\\n\\n.mini-carousel-container {\\n  display: flex;\\n  flex-direction: row;\\n  justify-content: center;\\n  padding-left: 100px;\\n  padding-top: 20px; }\\n\\n.mini-carousel-col {\\n  display: flex;\\n  flex-direction: column;\\n  justify-content: center; }\\n  .mini-carousel-col .mini-carousel-arrow {\\n    width: 13px;\\n    height: 20px;\\n    background-size: 158px auto;\\n    background-image: url(\\\"/images/Sub_Element/Sub_SpriteSheet_Arrow.png\\\");\\n    background-color: transparent;\\n    cursor: pointer; }\\n  .mini-carousel-col #left-arrow {\\n    background-position: -79px -208px; }\\n  .mini-carousel-col #right-arrow {\\n    background-position: -92px -208px; }\\n\\n.mini-carousel-left {\\n  align-items: flex-start; }\\n\\n.mini-carousel-center {\\n  padding-left: 20px;\\n  padding-right: 20px;\\n  position: relative; }\\n\\n.mini-carousel-center::before {\\n  z-index: -1;\\n  width: 10px;\\n  height: 100px;\\n  content: \\\"\\\";\\n  box-shadow: 0 -15px 25px 7px #222;\\n  position: absolute;\\n  transform: rotate(-8deg);\\n  top: 30px;\\n  left: 30px; }\\n\\n.mini-carousel-center::after {\\n  z-index: -1;\\n  width: 10px;\\n  height: 100px;\\n  content: \\\"\\\";\\n  box-shadow: 0 -15px 25px 7px #222;\\n  position: absolute;\\n  transform: rotate(8deg);\\n  top: 30px;\\n  right: 30px; }\\n\\n.mini-carousel-right {\\n  align-items: flex-end; }\\n\\n.mini-carousel-viewport {\\n  overflow: hidden;\\n  position: relative; }\\n\\n.mini-carousel-row {\\n  height: 100%; }\\n  .mini-carousel-row .mini-carousel-card {\\n    width: 25%;\\n    height: 100%;\\n    display: inline-block; }\\n\", \"\"]);\n\n\n//# sourceURL=webpack:///./public/stylesheets/mini_carousel.sass?./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./public/stylesheets/reset.sass":
/*!********************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./public/stylesheets/reset.sass ***!
  \********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\")(false);\n// Imports\nexports.push([module.i, \"@import url(https://fonts.googleapis.com/css?family=Noto+Sans:400,700&display=block);\", \"\"]);\n// Module\nexports.push([module.i, \"html, body, div, span, applet, object, iframe,\\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\\na, abbr, acronym, address, big, cite, code,\\ndel, dfn, em, img, ins, kbd, q, s, samp,\\nsmall, strike, strong, sub, sup, tt, var,\\nb, u, i, center,\\ndl, dt, dd, ol, ul, li,\\nfieldset, form, label, legend,\\ntable, caption, tbody, tfoot, thead, tr, th, td,\\narticle, aside, canvas, details, embed,\\nfigure, figcaption, footer, header, hgroup,\\nmenu, nav, output, ruby, section, summary,\\ntime, mark, audio, video {\\n  margin: 0;\\n  padding: 0;\\n  border: 0;\\n  vertical-align: baseline; }\\n\\nhtml {\\n  width: 100%;\\n  height: 100%; }\\n\\nbody {\\n  width: 100%;\\n  height: 100%;\\n  font-family: \\\"Noto Sans\\\", sans-serif;\\n  font-weight: normal;\\n  font-size: 10px;\\n  line-height: 1; }\\n\\n/* HTML5 display-role reset for older browsers */\\narticle, aside, details, figcaption, figure,\\nfooter, header, hgroup, menu, nav, section {\\n  display: block; }\\n\\nol, ul {\\n  list-style: none;\\n  font-size: 0; }\\n\\nblockquote, q {\\n  quotes: none; }\\n\\nblockquote:before, blockquote:after,\\nq:before, q:after {\\n  content: '';\\n  content: none; }\\n\\ntable {\\n  border-collapse: collapse;\\n  border-spacing: 0; }\\n\\n/* Header tag default size by KKambi */\\nh1 {\\n  font-size: 4.5em; }\\n\\nh2 {\\n  font-size: 3.5em; }\\n\\nh3 {\\n  font-size: 2.5em; }\\n\\n/* a none tag */\\na, a:link, a:hover, a:active, a:visited {\\n  color: #000000;\\n  text-decoration: none; }\\n\", \"\"]);\n\n\n//# sourceURL=webpack:///./public/stylesheets/reset.sass?./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js");

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

/***/ "./node_modules/node-fetch/browser.js":
/*!********************************************!*\
  !*** ./node_modules/node-fetch/browser.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n// ref: https://github.com/tc39/proposal-global\nvar getGlobal = function () {\n\t// the only reliable means to get the global object is\n\t// `Function('return this')()`\n\t// However, this causes CSP violations in Chrome apps.\n\tif (typeof self !== 'undefined') { return self; }\n\tif (typeof window !== 'undefined') { return window; }\n\tif (typeof global !== 'undefined') { return global; }\n\tthrow new Error('unable to locate global object');\n}\n\nvar global = getGlobal();\n\nmodule.exports = exports = global.fetch;\n\n// Needed for TypeScript and Webpack.\nexports.default = global.fetch.bind(global);\n\nexports.Headers = global.Headers;\nexports.Request = global.Request;\nexports.Response = global.Response;\n\n//# sourceURL=webpack:///./node_modules/node-fetch/browser.js?");

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

/***/ "./public/javascripts/benefit_card.js":
/*!********************************************!*\
  !*** ./public/javascripts/benefit_card.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _public_stylesheets_benefit_card_sass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../public/stylesheets/benefit_card.sass */ \"./public/stylesheets/benefit_card.sass\");\n/* harmony import */ var _public_stylesheets_benefit_card_sass__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_public_stylesheets_benefit_card_sass__WEBPACK_IMPORTED_MODULE_0__);\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n\n\nvar BenefitCard =\n/*#__PURE__*/\nfunction () {\n  function BenefitCard(container, header, blurb, cta, ctaURL) {\n    _classCallCheck(this, BenefitCard);\n\n    this.container = container;\n    this.header = header;\n    this.blurb = blurb;\n    this.cta = cta;\n    this.ctaURL = ctaURL;\n    this.html = \"<div class=\\\"benefit\\\">\\n                <div class=\\\"benefit-header\\\">\\n                    \".concat(this.header, \"\\n                </div>\\n                <div class=\\\"benefit-blurb\\\">\\n                    \").concat(this.blurb, \"\\n                </div>\\n                <a class=\\\"benefit-cta\\\" href=\\\"\").concat(ctaURL, \"\\\">\\n                    \").concat(this.cta, \"\\n                </a>\\n            </div>\");\n  }\n\n  _createClass(BenefitCard, [{\n    key: \"insertHTML\",\n    value: function insertHTML(position, container) {\n      container.insertAdjacentHTML(position, this.html);\n    }\n  }, {\n    key: \"init\",\n    value: function init(position) {\n      this.insertHTML(position, this.container);\n    }\n  }]);\n\n  return BenefitCard;\n}();\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (BenefitCard);\n\n//# sourceURL=webpack:///./public/javascripts/benefit_card.js?");

/***/ }),

/***/ "./public/javascripts/dom_util.js":
/*!****************************************!*\
  !*** ./public/javascripts/dom_util.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nvar dom_util = {\n  /** Enable element  */\n  enableElement: function enableElement(element) {\n    element.removeAttribute(\"disabled\");\n  },\n\n  /** Disable element */\n  disableElement: function disableElement(element) {\n    element.setAttribute(\"disabled\", \"\");\n  }\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (dom_util);\n\n//# sourceURL=webpack:///./public/javascripts/dom_util.js?");

/***/ }),

/***/ "./public/javascripts/index.js":
/*!*************************************!*\
  !*** ./public/javascripts/index.js ***!
  \*************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _mini_carousel_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mini_carousel.js */ \"./public/javascripts/mini_carousel.js\");\n/* harmony import */ var _benefit_card_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./benefit_card.js */ \"./public/javascripts/benefit_card.js\");\n\n\nvar SECOND = 1000; //main-carousel insert\n// const main_carousel_container = document.getElementById(\"main-beneift-container\")\n//video-carousel insert\n\nvar video_carousel_container = document.getElementById(\"video-benefit-container\");\nvar video_carousel_imageURL = \"http://localhost:3000/images/sub/A\";\nvar video_carousel = new _mini_carousel_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"](video_carousel_container, video_carousel_imageURL, 280, 210, SECOND * 3);\nvideo_carousel.init('afterbegin'); //video-carousel-benefit insert\n\nvar video_carousel_header = \"Amazon Originals, <br>exclusively on Prime Video\";\nvar video_carousel_blurb = \"Prime Video is the only place \\n    where you can watch Amazon Original series \\n    like \\\"The Marvelous Mrs. Maisel\\\", \\\"Tom Clancy's Jack Ryan\\\", \\\"Homecoming\\\", and \\\"The Man in the High Castle\\\".\";\nvar video_carousel_cta = \"Explore Prime Video&#9656;\";\nvar video_carousel_ctaURL = \"https://www.amazon.com/gp/video/storefront/ref=dvm_us_aq_np_dhb_be_optorigt1?ie=UTF8&amp;merchId=originals1\";\nvar video_benefit_card = new _benefit_card_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"](video_carousel_container, video_carousel_header, video_carousel_blurb, video_carousel_cta, video_carousel_ctaURL);\nvideo_benefit_card.init('beforeend'); //music-carousel insert\n\nvar music_carousel_container = document.getElementById(\"music-benefit-container\");\nvar music_carousel_imageURL = \"http://localhost:3000/images/sub/B\";\nvar music_carousel = new _mini_carousel_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"](music_carousel_container, music_carousel_imageURL, 218, 218, SECOND * 3);\nmusic_carousel.init('afterbegin'); //music-carousel-benefit insert\n\nvar music_carousel_header = \"Stay on top of the<br>hottest music\";\nvar music_carousel_blurb = \"These songs and artists are the cream of this month's crop of new music. Check out the latest from Taylor Swift, Old Dominion, Kesha, and Brett Young.\";\nvar music_carousel_cta = \"Explore Prime Music&#9656;\";\nvar music_carousel_ctaURL = \"https://www.amazon.com/gp/dmusic/promotions/PrimeMusic?ref=hawkfire_prime_detail_page_benefit_desc\";\nvar music_benefit_card = new _benefit_card_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"](music_carousel_container, music_carousel_header, music_carousel_blurb, music_carousel_cta, music_carousel_ctaURL);\nmusic_benefit_card.init('beforeend');\n\n//# sourceURL=webpack:///./public/javascripts/index.js?");

/***/ }),

/***/ "./public/javascripts/is_util.js":
/*!***************************************!*\
  !*** ./public/javascripts/is_util.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nvar is_util = {\n  isWorking: function isWorking(intervalId) {\n    return !(intervalId === undefined || intervalId === \"\");\n  },\n  isNotWorking: function isNotWorking(intervalId) {\n    return intervalId === undefined || intervalId === \"\";\n  }\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (is_util);\n\n//# sourceURL=webpack:///./public/javascripts/is_util.js?");

/***/ }),

/***/ "./public/javascripts/mini_carousel.js":
/*!*********************************************!*\
  !*** ./public/javascripts/mini_carousel.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _is_util_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./is_util.js */ \"./public/javascripts/is_util.js\");\n/* harmony import */ var _dom_util_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dom_util.js */ \"./public/javascripts/dom_util.js\");\n/* harmony import */ var node_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! node-fetch */ \"./node_modules/node-fetch/browser.js\");\n/* harmony import */ var node_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(node_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _public_stylesheets_mini_carousel_sass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../public/stylesheets/mini_carousel.sass */ \"./public/stylesheets/mini_carousel.sass\");\n/* harmony import */ var _public_stylesheets_mini_carousel_sass__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_public_stylesheets_mini_carousel_sass__WEBPACK_IMPORTED_MODULE_3__);\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n\n\n\n\n\nvar MiniCarousel =\n/*#__PURE__*/\nfunction () {\n  function MiniCarousel(container, imageURL, imageWidth, imageHeight, interval) {\n    _classCallCheck(this, MiniCarousel);\n\n    this.imageWidth = imageWidth || 300;\n    this.imageHeight = imageHeight || 300;\n    this.imageURL = imageURL || \"\";\n    this.imageNumber = 4; //FIXME: 이후 fetch API와 연동하여 수정\n\n    this.interval = interval || 1000;\n    this.intervalId = \"\";\n    this.direction = \"right\";\n    this.elements = {};\n    this.container = container;\n    this.map = {\n      childMap: {\n        \"left\": \"lastElementChild\",\n        \"right\": \"firstElementChild\"\n      },\n      insertMap: {\n        \"left\": \"afterbegin\",\n        \"right\": \"beforeend\"\n      }\n    };\n    this.cards = {};\n  }\n\n  _createClass(MiniCarousel, [{\n    key: \"init\",\n    value: function init() {\n      var _this = this;\n\n      this.makeCard(this.imageURL).then(function () {\n        _this.insertHTML(_this.container);\n\n        _this.setElements();\n\n        _this.setViewSize(_this.imageWidth, _this.imageHeight, _this.imageNumber);\n\n        _this.intervalId = _this.startAutoSlide(_this.interval);\n        setInterval(function () {\n          if (_is_util_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].isNotWorking(_this.intervalId)) {\n            _this.intervalId = _this.startAutoSlide(_this.interval);\n            _dom_util_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].disableElement(_this.elements.button);\n          }\n        }, _this.interval * 3);\n\n        _this.addArrowEventHandler(_this.elements.leftArrow, \"left\");\n\n        _this.addArrowEventHandler(_this.elements.rightArrow, \"right\");\n\n        _this.addTransitionEndEventHandler(_this.elements.miniCarouselRow);\n      });\n    }\n  }, {\n    key: \"insertHTML\",\n    value: function insertHTML(container) {\n      var html = \"<div class=\\\"mini-carousel-scroller\\\">\\n            <div class=\\\"mini-carousel-container\\\">\\n                <div class=\\\"mini-carousel-col mini-carousel-left\\\"> \\n                    <a class=\\\"mini-carousel-arrow\\\" id=\\\"left-arrow\\\"></a>\\n                </div>\\n                <div class=\\\"mini-carousel-col mini-carousel-center\\\">\\n                    <div class=\\\"mini-carousel-viewport\\\">\\n                        <ol class=\\\"mini-carousel-row\\\">\\n                            \".concat(this.cards, \"\\n                        </ol>\\n                    </div>\\n                </div>\\n                <div class=\\\"mini-carousel-col mini-carousel-right\\\">\\n                    <a class=\\\"mini-carousel-arrow\\\" id=\\\"right-arrow\\\"></a>\\n                </div>\\n            </div>\\n        </div>\");\n      container.insertAdjacentHTML('afterbegin', html);\n    }\n  }, {\n    key: \"getImagePath\",\n    value: function getImagePath(imageURL) {\n      return node_fetch__WEBPACK_IMPORTED_MODULE_2___default()(imageURL).then(function (res) {\n        if (/(4..)|(5..)/.test(res.status) === true) {\n          console.error(res.statusText);\n        } else {\n          return res.json();\n        }\n      }).then(function (list) {\n        return list;\n      })[\"catch\"](function (err) {\n        return console.log(err);\n      });\n    }\n  }, {\n    key: \"makeCard\",\n    value: function makeCard(imageURL) {\n      var _this2 = this;\n\n      return this.getImagePath(imageURL).then(function (list) {\n        var html = \"\";\n        list.forEach(function (imagePath) {\n          var cardHTML = \"<li class=\\\"mini-carousel-card\\\">\\n                        <a class=\\\"img-link\\\">\\n                            <img src=\\\"\".concat(imagePath, \"\\\">\\n                        </a>\\n                    </li>\\n                    \");\n          html += cardHTML;\n        });\n        _this2.cards = html;\n        _this2.imageNumber = list.length;\n      });\n    }\n  }, {\n    key: \"setElements\",\n    value: function setElements() {\n      this.container.setAttribute(\"style\", \"width: 90%; display: flex;\");\n      this.elements = {\n        view: this.container.querySelector(\".mini-carousel-viewport\"),\n        leftArrow: this.container.querySelector(\"#left-arrow\"),\n        rightArrow: this.container.querySelector(\"#right-arrow\"),\n        miniCarouselRow: this.container.querySelector(\".mini-carousel-row\"),\n        button: this.container.querySelector(\".mini-carousel-arrow\")\n      };\n    }\n  }, {\n    key: \"setViewSize\",\n    value: function setViewSize(imageWidth, imageHeight, imageNumber) {\n      this.elements.view.style.width = \"\".concat(imageWidth, \"px\");\n      this.elements.view.style.height = \"\".concat(imageHeight, \"px\");\n      this.elements.view.querySelectorAll(\"img\").forEach(function (imgTag) {\n        imgTag.style.width = \"\".concat(imageWidth, \"px\");\n        imgTag.style.height = \"\".concat(imageHeight, \"px\");\n      });\n      var row = this.elements.view.querySelector(\"ol\");\n      row.style.transform = \"translateX(-\".concat(this.imageWidth, \"px)\");\n      row.style.width = \"\".concat(imageWidth * imageNumber, \"px\");\n    }\n  }, {\n    key: \"setDirection\",\n    value: function setDirection(direction) {\n      this.direction = direction;\n    }\n  }, {\n    key: \"initializeIntervalId\",\n    value: function initializeIntervalId() {\n      this.intervalId = \"\";\n    }\n    /** \r\n     * Start Auto Slide card to right\r\n     *\r\n     * @param {string} interval sliding interval (ms)\r\n     * @return {number} intervalId \r\n     */\n\n  }, {\n    key: \"startAutoSlide\",\n    value: function startAutoSlide(interval) {\n      var _this3 = this;\n\n      return setInterval(function () {\n        _this3.setDirection(\"right\");\n\n        _this3.slideCard(\"right\");\n\n        _dom_util_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].disableElement(_this3.elements.button);\n      }, interval);\n    }\n    /** \r\n     * Slide carousel card to left/right\r\n     *\r\n     * @param {string} direction sliding direction [\"left\"/\"right\"]\r\n     * @return {void} \r\n     */\n\n  }, {\n    key: \"slideCard\",\n    value: function slideCard(direction) {\n      var miniCarouselRow = this.elements.miniCarouselRow;\n      var translate = miniCarouselRow.style.transform;\n      var currentSign = translate.includes('-') ? -1 : 1;\n      var currentPixel = Number(translate.replace(/[^0-9]/g, ''));\n      var slidePixel = direction === \"left\" ? this.imageWidth : -this.imageWidth;\n      miniCarouselRow.style.transition = 'all 0.1s ease-out';\n      miniCarouselRow.style.transform = \"translateX(\".concat(currentSign * currentPixel + slidePixel, \"px)\");\n    }\n    /** \r\n     * Move carousel [first/last] card to [last/first] \r\n     *\r\n     * @param {string} direction sliding direction [\"left\"/\"right\"]\r\n     * @return {void} \r\n     */\n\n  }, {\n    key: \"relocateCard\",\n    value: function relocateCard(direction) {\n      var card = this.elements.miniCarouselRow[this.map.childMap[direction]];\n      this.elements.miniCarouselRow.removeChild(card);\n      this.elements.miniCarouselRow.insertAdjacentElement(this.map.insertMap[direction], card);\n      this.elements.miniCarouselRow.style.transition = '';\n      this.elements.miniCarouselRow.style.transform = \"translateX(\".concat(-this.imageWidth, \"px)\");\n    }\n    /** \r\n     * Add carousel arrow click event handler to element\r\n     *\r\n     * @param {element} element arrow\r\n     * @return {void}\r\n     */\n\n  }, {\n    key: \"addArrowEventHandler\",\n    value: function addArrowEventHandler(element) {\n      var _this4 = this;\n\n      var direction = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : \"left\";\n      element.addEventListener(\"click\", function () {\n        if (_is_util_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].isWorking(_this4.intervalId)) {\n          clearInterval(_this4.intervalId);\n\n          _this4.initializeIntervalId();\n        }\n\n        _this4.setDirection(direction);\n\n        _this4.slideCard(direction);\n\n        _dom_util_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].disableElement(_this4.elements.button);\n      });\n    }\n    /** \r\n     * Add carousel transition end event to element\r\n     *\r\n     * @param {element} element carousel row\r\n     * @return {void}\r\n     */\n\n  }, {\n    key: \"addTransitionEndEventHandler\",\n    value: function addTransitionEndEventHandler(element) {\n      var _this5 = this;\n\n      element.addEventListener(\"transitionend\", function () {\n        _this5.relocateCard(_this5.direction);\n\n        _dom_util_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].enableElement(_this5.elements.button);\n      });\n    }\n  }]);\n\n  return MiniCarousel;\n}();\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (MiniCarousel);\n\n//# sourceURL=webpack:///./public/javascripts/mini_carousel.js?");

/***/ }),

/***/ "./public/stylesheets/benefit_card.sass":
/*!**********************************************!*\
  !*** ./public/stylesheets/benefit_card.sass ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./benefit_card.sass */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./public/stylesheets/benefit_card.sass\");\n\nif (typeof content === 'string') {\n  content = [[module.i, content, '']];\n}\n\nvar options = {}\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = __webpack_require__(/*! ../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\")(content, options);\n\nif (content.locals) {\n  module.exports = content.locals;\n}\n\n\n//# sourceURL=webpack:///./public/stylesheets/benefit_card.sass?");

/***/ }),

/***/ "./public/stylesheets/index.sass":
/*!***************************************!*\
  !*** ./public/stylesheets/index.sass ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./index.sass */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./public/stylesheets/index.sass\");\n\nif (typeof content === 'string') {\n  content = [[module.i, content, '']];\n}\n\nvar options = {}\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = __webpack_require__(/*! ../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\")(content, options);\n\nif (content.locals) {\n  module.exports = content.locals;\n}\n\n\n//# sourceURL=webpack:///./public/stylesheets/index.sass?");

/***/ }),

/***/ "./public/stylesheets/mini_carousel.sass":
/*!***********************************************!*\
  !*** ./public/stylesheets/mini_carousel.sass ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./mini_carousel.sass */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./public/stylesheets/mini_carousel.sass\");\n\nif (typeof content === 'string') {\n  content = [[module.i, content, '']];\n}\n\nvar options = {}\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = __webpack_require__(/*! ../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\")(content, options);\n\nif (content.locals) {\n  module.exports = content.locals;\n}\n\n\n//# sourceURL=webpack:///./public/stylesheets/mini_carousel.sass?");

/***/ }),

/***/ "./public/stylesheets/reset.sass":
/*!***************************************!*\
  !*** ./public/stylesheets/reset.sass ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./reset.sass */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./public/stylesheets/reset.sass\");\n\nif (typeof content === 'string') {\n  content = [[module.i, content, '']];\n}\n\nvar options = {}\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = __webpack_require__(/*! ../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\")(content, options);\n\nif (content.locals) {\n  module.exports = content.locals;\n}\n\n\n//# sourceURL=webpack:///./public/stylesheets/reset.sass?");

/***/ }),

/***/ "./src/entry/index.entry.js":
/*!**********************************!*\
  !*** ./src/entry/index.entry.js ***!
  \**********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _public_stylesheets_reset_sass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../public/stylesheets/reset.sass */ \"./public/stylesheets/reset.sass\");\n/* harmony import */ var _public_stylesheets_reset_sass__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_public_stylesheets_reset_sass__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _public_stylesheets_index_sass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../public/stylesheets/index.sass */ \"./public/stylesheets/index.sass\");\n/* harmony import */ var _public_stylesheets_index_sass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_public_stylesheets_index_sass__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _public_javascripts_mini_carousel_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../public/javascripts/mini_carousel.js */ \"./public/javascripts/mini_carousel.js\");\n/* harmony import */ var _public_javascripts_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../public/javascripts/index.js */ \"./public/javascripts/index.js\");\n\n\n\n\n\n//# sourceURL=webpack:///./src/entry/index.entry.js?");

/***/ })

/******/ });
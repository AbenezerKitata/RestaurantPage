/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"* {\\n    margin: 0;\\n    box-sizing: border-box;\\n}\\n\\n#main {\\n    display: flex;\\n    flex-direction: column;\\n\\n}\\n\\n.btnContainer {\\n    height: 60px;\\n    background-color: royalblue;\\n    display: flex;\\n    align-items: center;\\n    justify-content: center;\\n    gap: 60px;\\n}\\n\\n.content {\\n    display: grid;\\n    grid-template-rows: 2fr 1fr;\\n\\n}\\n\\n.titleBox {\\n    background-color: wheat;\\n    display: grid;\\n    grid-template-rows: 150px 500px;\\n    justify-items: center;\\n}\\n\\n.title {\\n    background-color: aqua;\\n    color: black;    \\n    width: 40%;\\n    display: flex;\\n    text-align: center;\\n    justify-content: center;\\n    align-items: center;\\n\\n}\\n\\n.exp {\\n    background-color: blueviolet;\\n    color: black;\\n    width: 40%;\\n    padding: 40px;\\n    display: flex;\\n    text-align: center;\\n    align-items: center;\\n\\n}\\n\\n.locationsBox {\\n    background-color: brown;\\n    color: aliceblue;\\n    display: flex;\\n    flex-direction: column;\\n    justify-content: center;\\n    width: 100vw;\\n    padding-left: 700px;\\n    \\n}\\n.locationsBox>h1{\\n    position: relative;\\n    left: 40px;\\n    margin-bottom: 10px;\\n}\\n.locationsBox>ul{\\n    list-style: none;\\n}\\n\\nfooter {\\n    background-color: rgb(59, 58, 58);\\n    color: white;\\n}\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://restorant-page/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n\n      content += cssWithMappingToString(item);\n\n      if (needLayer) {\n        content += \"}\";\n      }\n\n      if (item[2]) {\n        content += \"}\";\n      }\n\n      if (item[4]) {\n        content += \"}\";\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n\n\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://restorant-page/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://restorant-page/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://restorant-page/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://restorant-page/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://restorant-page/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://restorant-page/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://restorant-page/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://restorant-page/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://restorant-page/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/aboutus.js":
/*!************************!*\
  !*** ./src/aboutus.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"whoWeAre\": () => (/* binding */ whoWeAre)\n/* harmony export */ });\nconst whoWeAre = () => {\n\n  const div = document.createElement(\"div\");\n  const title = document.createElement(\"h1\");\n  title.textContent = \"Who We Are!\";\n  div.appendChild(title);\n  const content = document.createElement(\"p\");\n  div.appendChild(content);\n  content.textContent =\n    'Helen Slaughterhouse was thinking about Roger Smart again. Roger was a popular rover with skinny fingers and chubby ankles.Helen walked over to the window and reflected on her old-fashioned surroundings. She had always loved cosy Athens with its unkempt, united umbrellas. It was a place that encouraged her tendency to feel barmy.Then she saw something in the distance, or rather someone. It was the a popular figure of Roger Smart.Helen gulped. She glanced at her own reflection. She was a sinister, tight-fisted, tea drinker with spiky fingers and wide ankles. Her friends saw her as a breakable, brawny brute. Once, she had even helped a purring old lady cross the road.But not even a sinister person who had once helped a purring old lady cross the road, was prepared for what Roger had in store today.The rain hammered like chatting monkeys, making Helen ecstatic. Helen grabbed a tattered newspaper that had been strewn nearby; she massaged it with her fingers.As Helen stepped outside and Roger came closer, she could see the excited glint in his eye.\"Look Helen,\"growled Roger, with an intelligent glare that reminded Helen of popular toads. \"It\\'s not that I don\\'t love you, but I want equality. You owe me 2707 gold pieces.\"Helen looked back, even more ecstatic and still fingering the tattered newspaper. \"Roger, get out of my house,\"she replied.They looked at each other with concerned feelings, like two rich, racid rabbits drinking at a very generous birthday party, which had jazz music playing in the background and two scheming uncles smiling to the beat.Helen regarded Roger\\'s skinny fingers and chubby ankles. \"I don\\'t have the funds ...\" she lied.Roger glared. \"Do you want me to shove that tattered newspaper where the sun don\\'t shine?\"Helen promptly remembered her sinister and tight-fisted values. \"Actually, I do have the funds,\" she admitted. She reached into her pockets. \"Here\\'s what I owe you.\"Roger looked sleepy, his wallet blushing like a knowing, knobby kettle.Then Roger came inside for a nice cup of tea.THE END ';\n    return{\n      about: div\n    }\n};\n\n\n\n//# sourceURL=webpack://restorant-page/./src/aboutus.js?");

/***/ }),

/***/ "./src/book.js":
/*!*********************!*\
  !*** ./src/book.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"createBook\": () => (/* binding */ createBook)\n/* harmony export */ });\nfunction insertAfter(newNode, existingNode) {\n  existingNode.parentNode.insertBefore(newNode, existingNode.nextSibling);\n}\nconst createBook = ()=>{\n\n//book field\n  const bookField = document.createElement(\"div\");\n  // title\n  const bookTitle = document.createElement(\"h2\");\n  bookTitle.textContent = \"Book an Appointment\";\n  bookField.appendChild(bookTitle);\n  //form element\n\n  const bookForm = document.createElement(\"form\");\n  insertAfter(bookForm, bookTitle);\n\n  //input elements\n  const bookFName = document.createElement(\"input\");\n  bookFName.setAttribute(\"placeholder\", \"First Name\");\n  bookForm.appendChild(bookFName);\n  const bookLName = document.createElement(\"input\");\n  bookLName.setAttribute(\"placeholder\", \"Last Name\");\n  bookForm.appendChild(bookLName);\n    //email\n    const usremail = document.createElement(\"input\");\n    usremail.setAttribute(\"type\", \"email\");\n    usremail.setAttribute(\"placeholder\", \"yourName@something.com\");\n    bookForm.appendChild(usremail);\n  \n    //submit\n    const submitbtn = document.createElement(\"button\");\n    submitbtn.textContent = \"Submit\";\n    bookForm.appendChild(submitbtn);\n    return {\n      bookfield: bookField\n    }\n  \n  }\n\n    \n\n//# sourceURL=webpack://restorant-page/./src/book.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _pageLd__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pageLd */ \"./src/pageLd.js\");\n/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu */ \"./src/menu.js\");\n/* harmony import */ var _aboutus__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./aboutus */ \"./src/aboutus.js\");\n/* harmony import */ var _book__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./book */ \"./src/book.js\");\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n\n\n\n\n\n\n//helper\nfunction insertAfter(newNode, existingNode) {\n  existingNode.parentNode.insertBefore(newNode, existingNode.nextSibling);\n}\n\n//-----------\n\nlet test = (0,_pageLd__WEBPACK_IMPORTED_MODULE_0__.pgLd)();\nconst removeNextContent = (node) => {\n    if (document.body.contains(node.nextSibling)) {\n        \n        node.nextSibling.parentNode.removeChild(node.nextSibling);\n    }\n};\nlet bringMenu = (0,_menu__WEBPACK_IMPORTED_MODULE_1__.createMenu)();\nlet bringAboutUs = (0,_aboutus__WEBPACK_IMPORTED_MODULE_2__.whoWeAre)();\nlet bringBook = (0,_book__WEBPACK_IMPORTED_MODULE_3__.createBook)();\n\nfunction insertFn(item, item2) {\n  item.addEventListener(\"click\", (e) => {\n    removeNextContent(test.btnContainer);\n    insertAfter(item2, test.btnContainer);  \n    e.preventDefault();     \n  });\n}\n\ninsertFn(test.menu, bringMenu.menu);\ninsertFn(test.aboutUs, bringAboutUs.about);\ninsertFn(test.bookAppointment, bringBook.bookfield);\ninsertFn(test.home, test.content)\ntest.home.addEventListener(\"click\", (e) => {\n  e.preventDefault();\n  console.log();\n});\n\n\n//# sourceURL=webpack://restorant-page/./src/index.js?");

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"createMenu\": () => (/* binding */ createMenu)\n/* harmony export */ });\nconst createMenu = () => {\n\n  const menuVar = document.createElement(\"div\");\n  menuVar.classList.add(\"menuContainer\");\n  const div = document.createElement('div');\n  div.classList.add('menu')\n  menuVar.appendChild(div);\n\n  const createMenuItems = (name, description, price, cal) => {\n    const calories = document.createElement('span');\n    div.appendChild(calories);\n    calories.textContent = cal;\n\n    const names = document.createElement('span');\n    div.appendChild(names);\n    names.textContent = name;\n\n    const describe = document.createElement('p');\n    div.appendChild(describe);\n    describe.textContent = description;\n\n    const prices = document.createElement('span');\n    div.appendChild(prices);\n    prices.textContent = price;\n\n  };\n\ncreateMenuItems('MicBag','Mouthwatering perfection starts with two 100% pure beef patties and MicBag sauce sandwiched between a sesame seed bun. It’s topped off with pickles, crisp shredded lettuce, finely chopped onion and American cheese for a 100% beef burger with a taste like no other.','$8.99', '550 Cal')\ncreateMenuItems('DcMubble', 'A slice of cheese! It’s topped with tangy pickles, chopped onions, ketchup, mustard and a melty slice of American chees','2.99', '400Cal');\ncreateMenuItems('Double CheeseBurger', 'features two 100% pure beef burger patties seasoned with just a pinch of salt and pepper. Its topped with tangy pickles, chopped onions, ketchup, mustard and two slices of melty American cheese. ','$3.45', '450 Cal');\nconst getMenu = ()=>{\n  return menuVar\n}\nreturn{\n  menu: getMenu()\n}\n\n};\n\n\n\n//# sourceURL=webpack://restorant-page/./src/menu.js?");

/***/ }),

/***/ "./src/pageLd.js":
/*!***********************!*\
  !*** ./src/pageLd.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"pgLd\": () => (/* binding */ pgLd)\n/* harmony export */ });\nconst pgLd = () => {\n  //insertAfter function\n  function insertAfter(newNode, existingNode) {\n    existingNode.parentNode.insertBefore(newNode, existingNode.nextSibling);\n  }\n  const main = document.getElementById(\"main\");\n\n\n\n  //buttonsContainer\n  const buttonsContainer = document.createElement(\"div\");\n  buttonsContainer.classList.add(\"btnContainer\");\n  main.appendChild(buttonsContainer);\n\n  // home\n  const home = document.createElement(\"button\");\n  home.textContent = `Home`;\n  buttonsContainer.appendChild(home);\n\n  //Menu\n  const menu = document.createElement(\"button\");\n  menu.textContent = \"Menu\";\n  buttonsContainer.appendChild(menu);\n\n  // About Us\n  const aboutUs = document.createElement(\"button\");\n  aboutUs.textContent = \"Who We Are\";\n  buttonsContainer.appendChild(aboutUs);\n  // book\n  const book = document.createElement(\"button\");\n  book.textContent = \"Book an Appointment\";\n  buttonsContainer.appendChild(book);\n\n  const content = document.createElement(\"div\");\n  main.appendChild(content);\n  content.classList.add(\"content\");\n  //--------------------------------------------------------------------------//\n\n  //titleBox\n  const titleBox = document.createElement(\"div\");\n  content.appendChild(titleBox)\n  titleBox.classList.add('titleBox')\n\n  //Title\n  const title = document.createElement(\"h1\");\n  title.textContent = `This is my Restaurant...`;\n  titleBox.appendChild(title);\n  title.classList.add('title');\n\n\n  // Explanation\n  const exp = document.createElement(\"p\");\n  exp.textContent =\n    \"Zach Ramsbottom looked at the tiny blade in his hands and felt concerned He walked over to the window and reflected on his noisy surroundings. He had always loved picturesque Newton Abbot with its jealous, jittery jungle. It was a place that encouraged his tendency to feel concerned Then he saw something in the distance, or rather someone. It was the figure of Josh Parkes. Josh was a cute ogre with ginger fingers and beautiful eyebrows.Zach gulped. He glanced at his own reflection. He was a proud, bold, brandy drinker with ugly fingers and squat eyebrows. His friends saw him as a kindhearted, keen knight. Once, he had even saved a glamorous injured bird that was stuck in a drain.   But not even a proud person who had once saved a glamorous injured bird that was stuck in a drain, was prepared for what Josh had in store today. \";\n  insertAfter(exp, title);\n  exp.classList.add('exp')\n\n  // Locations\n  const locationBox = document.createElement(\"div\");\n  insertAfter(locationBox, titleBox);\n  locationBox.classList.add('locationsBox')\n  const locationText = document.createElement(\"h1\");\n  locationText.textContent = \"Locations\";\n  locationBox.appendChild(locationText);\n\n  const createLocations = (adress, tel, email) => {\n    const firstLocation = document.createElement(\"ul\");\n    locationBox.appendChild(firstLocation);\n    const locAddress = document.createElement(\"li\");\n    firstLocation.appendChild(locAddress);\n    locAddress.textContent = adress;\n    const locTel = document.createElement(\"li\");\n    insertAfter(locTel, locAddress);\n    locTel.textContent = tel;\n    const locEmail = document.createElement(\"li\");\n    insertAfter(locEmail, locTel);\n    locEmail.textContent = email;\n  };\n  createLocations(\"12345 harmon Ave\", \"888-888-8888\", \"harmonRest@gmail.com\");\n  createLocations(\"7894 rastoma sss\", \"999-966-3212\", \"rastoma@gmail.com\");\n  const footer = document.createElement(\"footer\");\n  insertAfter(footer, content);\n  const footerContent = document.createElement(\"p\");\n  footer.appendChild(footerContent);\n  footerContent.textContent = `© Abenezer Kitata for the Odin Project`;\n  return {\n    content: content,\n    home: home,\n    menu: menu,\n    aboutUs: aboutUs,\n    btnContainer: buttonsContainer,\n    main: main,\n    title: titleBox,\n    location: locationBox,\n    bookAppointment: book,\n  };\n};\n\n\n\n//# sourceURL=webpack://restorant-page/./src/pageLd.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;
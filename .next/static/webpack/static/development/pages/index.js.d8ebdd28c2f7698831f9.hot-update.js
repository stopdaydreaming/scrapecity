webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/Data.js":
/*!****************************!*\
  !*** ./components/Data.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Data; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ScrapeContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ScrapeContext */ "./components/ScrapeContext.js");
var _jsxFileName = "/Users/lcopeland1/SANDBOX/scrapecity/components/Data.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


function Data() {
  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_ScrapeContext__WEBPACK_IMPORTED_MODULE_1__["ScrapeContext"]),
      scrapes = _useContext.scrapes;

  console.log(scrapes);
  return __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, __jsx("h2", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, "your data:"), scrapeData.twitter.length);
}

/***/ })

})
//# sourceMappingURL=index.js.d8ebdd28c2f7698831f9.hot-update.js.map
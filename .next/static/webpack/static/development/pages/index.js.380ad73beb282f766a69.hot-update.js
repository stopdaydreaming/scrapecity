webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/Page.js":
/*!****************************!*\
  !*** ./components/Page.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Page; });
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _ScrapeContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ScrapeContext */ "./components/ScrapeContext.js");


var _jsxFileName = "/Users/lcopeland1/SANDBOX/scrapecity/components/Page.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;



function useScrapes() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])({}),
      scrapes = _useState[0],
      setScrapes = _useState[1];

  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(
  /*#__PURE__*/
  Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
  /*#__PURE__*/
  _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
    var res, data;
    return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            console.log('mounting or updating');
            _context.next = 3;
            return fetch('http://localhost:3000/data');

          case 3:
            res = _context.sent;
            _context.next = 6;
            return res.json();

          case 6:
            data = _context.sent;
            console.log(data);
            setScrapes(data);

          case 9:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  })), []);
  return scrapes;
}

function Page(_ref2) {
  var children = _ref2.children;
  return __jsx(_ScrapeContext__WEBPACK_IMPORTED_MODULE_3__["ScrapeProvider"], {
    value: {
      scrapes: scrapes
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, __jsx("div", {
    className: "page",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }, children));
}

/***/ })

})
//# sourceMappingURL=index.js.380ad73beb282f766a69.hot-update.js.map
"use strict";
(self["webpackChunkkatalog_restaurant_pwa_to"] = self["webpackChunkkatalog_restaurant_pwa_to"] || []).push([[299],{

/***/ 886:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _data_restaurantDb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(91);
/* harmony import */ var _routes_url_parser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(668);
/* harmony import */ var _detailRestaurantView__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(851);
/* harmony import */ var _utils_date_helper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(798);
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }




var reviewer = new _detailRestaurantView__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A();
var ReviewerPresenter = {
  init: function init(_ref) {
    var _this = this;
    return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
      var review, reviewForm;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            review = _ref.review, reviewForm = _ref.reviewForm;
            _this._review = review;
            _this._reviewForm = reviewForm;
            _context.next = 5;
            return _this._renderForm();
          case 5:
          case "end":
            return _context.stop();
        }
      }, _callee);
    }))();
  },
  _renderForm: function _renderForm() {
    var _this2 = this;
    return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
      return _regeneratorRuntime().wrap(function _callee2$(_context2) {
        while (1) switch (_context2.prev = _context2.next) {
          case 0:
            _this2._reviewForm.innerHTML = reviewer.createFormReviwerDetailRestaurant();
            _this2._isFormSubmitted();
          case 2:
          case "end":
            return _context2.stop();
        }
      }, _callee2);
    }))();
  },
  _isFormSubmitted: function _isFormSubmitted() {
    var _this3 = this;
    var reviewFormElement = document.querySelector('#form-reviewer');
    reviewFormElement.addEventListener('submit', function (e) {
      e.preventDefault();
      var url = _routes_url_parser__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A.parseActiveUrlWithoutCombiner();
      var inputReviewer = document.querySelector('#reviewer');
      var inputReview = document.querySelector('#review');
      var data = {
        id: url.id,
        name: inputReviewer.value,
        review: inputReview.value
      };
      _this3.request(data);
    });
  },
  request: function request(data) {
    var _this4 = this;
    return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
      var inputReviewer, inputReview, responseJSON, date, id, name, review;
      return _regeneratorRuntime().wrap(function _callee3$(_context3) {
        while (1) switch (_context3.prev = _context3.next) {
          case 0:
            inputReviewer = document.querySelector('#reviewer');
            inputReview = document.querySelector('#review');
            _context3.next = 4;
            return _data_restaurantDb__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A.reviewRestaurant(data);
          case 4:
            responseJSON = _context3.sent;
            date = new Date();
            id = data.id;
            name = data.name;
            review = data.review;
            _context3.next = 11;
            return responseJSON.error;
          case 11:
            _context3.t0 = _context3.sent;
            if (!(_context3.t0 === false)) {
              _context3.next = 19;
              break;
            }
            _this4._review.innerHTML += reviewer.getReviewDetailRestaurant({
              id: id,
              name: name,
              review: review,
              date: "\n        ".concat(_utils_date_helper__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A.formatLongDateId(date), "\n         ")
            });
            inputReviewer.value = '';
            inputReview.value = '';
            alert('Review successfully added!');
            _context3.next = 24;
            break;
          case 19:
            _context3.t1 = alert;
            _context3.next = 22;
            return responseJSON.message;
          case 22:
            _context3.t2 = _context3.sent;
            (0, _context3.t1)('Failed to add a review', _context3.t2);
          case 24:
          case "end":
            return _context3.stop();
        }
      }, _callee3);
    }))();
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ReviewerPresenter);

/***/ }),

/***/ 851:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _globals_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(733);
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }

var DetailRestaurantView = /*#__PURE__*/function () {
  function DetailRestaurantView() {
    var _this = this;
    _classCallCheck(this, DetailRestaurantView);
    _defineProperty(this, "getDetailRestaurantContainer", function () {
      return "\n      <loading-component></loading-component>\n      <div class=\"label text-shadow \" id=\"label\">Restaurant Detail</div>\n      <section id=\"restaurant-detail\" class=\"restaurant-detail content gold\" tabindex=\"0\"></section>  \n      \n      <div id=\"customer-review-form-container\"></div>\n      <div id=\"like-button-container\"></div>  \n    ";
    });
    _defineProperty(this, "getDetailRestaurant", function (restaurant) {
      return "\n    <div class=\"box-img h-500\">\n      <img class=\"pic lazyload\" crossorigin=\"anonymous\" data-src=\"".concat(_globals_config__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A.BASE_IMAGE_URL + restaurant.pictureId, "\" alt=\"image ").concat(restaurant.name, "\">  \n      <div class=\"bottom \">\n        <div class=\"restaurant-name\"><i class=\"fa-solid fa-store\"></i> ").concat(restaurant.name, "</div>\n        <div class=\"restaurant-address\"><i class=\"fa-solid fa-compass\"></i> Address in ").concat(restaurant.address, ", ").concat(restaurant.city, "</div>\n        <div class=\"restaurant-rate\"><i class=\"fa-solid fa-star\"></i> Rating ").concat(restaurant.rating, "</div>\n      </div>\n    </div>\n    <div class=\"wrapper\">\n      <h2 class=\"text-shadow label\">Description</h2>\n      <p class=\"box-content-description restaurant-description justify\">").concat(restaurant.description, "</p>\n      <div class=\"categories\">\n        <h2 class=\"text-shadow label\">Categories</h2>\n        <div>\n          ").concat(restaurant.categories.map(function (categori) {
        return "\n          <div class=\"name\">".concat(categori.name, "</div>\n          ");
      }).join(''), "\n        </div>\n      </div>\n      <h2 class=\"detail-restaurant-menu-title text-shadow label\">Menu</h2>\n      <div class=\"menu-foods-drinks\">\n        <div class=\"detail-restaurant-menu-foods\">\n          <h3 class=\"text-shadow label\">Foods</h3>\n          ").concat(restaurant.menus.foods.map(function (food) {
        return "\n          <p class=\"box-content-description menu-foods\"><i class=\"fa-solid fa-utensils\"></i> ".concat(food.name, "</p>\n          ");
      }).join(''), "\n        </div>\n        <div class=\"detail-restaurant-menu-drinks\">\n          <h3 class=\"text-shadow label\">Drinks</h3>\n          ").concat(restaurant.menus.drinks.map(function (drink) {
        return "\n          <p class=\"box-content-description menu-drinks\"><i class=\"fa-solid fa-martini-glass-citrus\"></i> ".concat(drink.name, "</p>\n          ");
      }).join(''), "\n        </div>\n      </div>    \n      <div class=\"restaurant-review wrapper\">\n        <h2 class=\"restaurant-customers-review text-shadow label\">Customers Review</h2>\n        ").concat(restaurant.customerReviews.map(function (review) {
        return _this.getReviewDetailRestaurant(review);
      }).join(''), "\n      </div> \n    </div>  \n    ");
    });
    _defineProperty(this, "getReviewDetailRestaurant", function (review) {
      return "\n      <div class=\"restaurant-review-content\">\n        <div class=\"restaurant-review-fist-row\">\n          <p class=\"restaurant-review-fist-row-name\"><i class=\"fa-solid fa-user\"></i> ".concat(review.name, "</p>\n          <p class=\"restaurant-review-fist-row-date\"><i class=\"fa-solid fa-calendar-days\"></i> ").concat(review.date, "</p>\n        </div>\n        <div div class=\"restaurant-review-second-row\">\n          <p><i class=\"fa-solid fa-comment\"></i> ").concat(review.review, "</p>\n        </div>\n      </div>\n    ");
    });
    _defineProperty(this, "createFormReviwerDetailRestaurant", function () {
      return "\n    <div class=\"restaurant-detail gold\">\n      <div class=\"wrapper content \">  \n        <h2 class=\"text-shadow label\">Submit Your Review</h2>\n        <form class=\"form-reviewer\" id=\"form-reviewer\">\n          <label for=\"reviewer\">Name :</label>\n          <input type=\"text\" name=\"reviewer\" id=\"reviewer\" class=\"reviewer\">\n          <label for=\"review\">Review :</label>\n          <input type=\"text\" name=\"review\" id=\"review\" class=\"review\">\n          <button type=\"submit\" id=\"submit\" class=\"submit\">Submit</button>\n        </form>\n      </div>\n    </div>\n    ";
    });
    _defineProperty(this, "createLikeButton", function () {
      return "\n    <button aria-label=\"like this restaurant\" id=\"like-button\" class=\"like\">\n      <i class=\"fa fa-heart-o\" aria-hidden=\"true\"></i>\n    </button>\n    ";
    });
    _defineProperty(this, "createUnlikeButton", function () {
      return "\n    <button aria-label=\"unlike this restaurant\" id=\"like-button\" class=\"like\">\n      <i class=\"fa fa-heart\" aria-hidden=\"true\"></i>\n    </button>\n    ";
    });
  }
  return _createClass(DetailRestaurantView, [{
    key: "showDetailRestaurant",
    value: function showDetailRestaurant(restaurants) {
      var detailRestaurant = document.querySelector('#restaurant-detail');
      detailRestaurant.innerHTML = this.getDetailRestaurant(restaurants);
      detailRestaurant.dispatchEvent(new Event('restaurant-detail:updated'));
    }
  }]);
}();
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DetailRestaurantView);

/***/ })

}]);
//# sourceMappingURL=app~c71db204.bundle.js.map
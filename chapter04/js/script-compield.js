"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
var HelloWorld = /*#__PURE__*/function (_React$Component) {
  _inherits(HelloWorld, _React$Component);
  function HelloWorld() {
    _classCallCheck(this, HelloWorld);
    return _callSuper(this, HelloWorld, arguments);
  }
  _createClass(HelloWorld, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/React.createElement("h1", null, "hello world");
    }
  }]);
  return HelloWorld;
}(React.Component);
var Clock = /*#__PURE__*/function (_React$Component2) {
  _inherits(Clock, _React$Component2);
  function Clock(props) {
    var _this;
    _classCallCheck(this, Clock);
    _this = _callSuper(this, Clock, [props]);
    _this.launchClock();
    _this.state = {
      currentTime: new Date().toLocaleString('kr'),
      testState: 'testState'
    };
    return _this;
  }
  _createClass(Clock, [{
    key: "launchClock",
    value: function launchClock() {
      var _this2 = this;
      setInterval(function () {
        console.log('updating time...');
        _this2.setState({
          currentTime: new Date().toLocaleString('kr')
        });
      }, 1000);
    }
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/React.createElement("div", {
        className: "block"
      }, "// setState\uB97C \uD1B5\uD574 \uC0C1\uD0DC\uBCC0\uACBD", /*#__PURE__*/React.createElement("span", {
        className: "block"
      }, this.state.testState), /*#__PURE__*/React.createElement("span", {
        className: "block"
      }, "Current Time is : ", this.state.currentTime, "... "));
    }
  }]);
  return Clock;
}(React.Component);
var NameComponent = /*#__PURE__*/function (_React$Component3) {
  _inherits(NameComponent, _React$Component3);
  function NameComponent(props) {
    var _this3;
    _classCallCheck(this, NameComponent);
    _this3 = _callSuper(this, NameComponent, [props]);
    _this3.state = {
      inputName: ''
    };
    return _this3;
  }
  _createClass(NameComponent, [{
    key: "updateValue",
    value: function updateValue() {
      this.setState({
        inputName: '김만기'
      });
    }
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/React.createElement("div", {
        className: "block"
      }, /*#__PURE__*/React.createElement("input", {
        type: "text",
        value: this.state.inputName
      }), /*#__PURE__*/React.createElement("input", {
        type: "submit",
        onClick: this.updateValue.bind(this)
      }));
    }
  }]);
  return NameComponent;
}(React.Component);
var el = document.getElementById('content');
var root = ReactDOM.createRoot(el);
root.render( /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(HelloWorld, null), /*#__PURE__*/React.createElement(Clock, null), /*#__PURE__*/React.createElement(NameComponent, null)));

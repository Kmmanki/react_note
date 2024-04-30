"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
var TimerWrapper = /*#__PURE__*/function (_React$Component) {
  _inherits(TimerWrapper, _React$Component);
  function TimerWrapper(props) {
    var _this;
    _classCallCheck(this, TimerWrapper);
    _this = _callSuper(this, TimerWrapper, [props]);
    _this.state = {
      timeLeft: null,
      timer: null
    };
    _this.startTimer = _this.startTimer.bind(_assertThisInitialized(_this));
    return _this;
  }
  _createClass(TimerWrapper, [{
    key: "startTimer",
    value: function startTimer(timeLeft) {
      var _this2 = this;
      clearInterval(this.state.timer);
      var timer = setInterval(function () {
        var timeLeft = _this2.state.timeLeft - 1;
        if (timeLeft <= 0) {
          clearInterval(_this2.state.timer);
        }
        _this2.setState({
          timeLeft: timeLeft
        });
        console.log("running");
      }, 1000);
      console.log("start");
      return this.setState({
        timeLeft: timeLeft,
        timer: timer
      });
    }
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h2", null, "Timer"), /*#__PURE__*/React.createElement(Button, {
        time: "5",
        startTimer: this.startTimer
      }), /*#__PURE__*/React.createElement(Button, {
        time: "10",
        startTimer: this.startTimer
      }), /*#__PURE__*/React.createElement(Button, {
        time: "15",
        startTimer: this.startTimer
      }), /*#__PURE__*/React.createElement(Timer, {
        timeLeft: this.state.timeLeft
      }));
    }
  }]);
  return TimerWrapper;
}(React.Component);
var Button = /*#__PURE__*/function (_React$Component2) {
  _inherits(Button, _React$Component2);
  function Button() {
    _classCallCheck(this, Button);
    return _callSuper(this, Button, arguments);
  }
  _createClass(Button, [{
    key: "render",
    value: function render() {
      var _this3 = this;
      return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("button", {
        onClick: function onClick() {
          _this3.props.startTimer(_this3.props.time);
        }
      }, this.props.time));
    }
  }]);
  return Button;
}(React.Component);
var Timer = /*#__PURE__*/function (_React$Component3) {
  _inherits(Timer, _React$Component3);
  function Timer(props) {
    _classCallCheck(this, Timer);
    return _callSuper(this, Timer, [props]);
  }
  _createClass(Timer, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/React.createElement("div", null, "'", /*#__PURE__*/React.createElement("h2", null, this.props.timeLeft));
    }
  }]);
  return Timer;
}(React.Component);
var timer = document.getElementById('timer');
var root = ReactDOM.createRoot(timer);
root.render( /*#__PURE__*/React.createElement(TimerWrapper, null));
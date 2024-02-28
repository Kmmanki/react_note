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
      testState: 'testState',
      counter: 0
    };
    return _this;
  }
  _createClass(Clock, [{
    key: "launchClock",
    value: function launchClock() {
      var _this2 = this;
      setInterval(function () {
        _this2.setState({
          currentTime: new Date().toLocaleString('kr'),
          counter: ++_this2.state.counter
        });
      }, 1000);
    }
  }, {
    key: "render",
    value: function render() {
      if (this.state.counter > 2) {
        return /*#__PURE__*/React.createElement(Logger, {
          time: this.state.currentTime
        });
      }
    }
  }]);
  return Clock;
}(React.Component);
var Logger = /*#__PURE__*/function (_React$Component3) {
  _inherits(Logger, _React$Component3);
  function Logger(props) {
    var _this3;
    _classCallCheck(this, Logger);
    _this3 = _callSuper(this, Logger, [props]);
    console.log('constructor 실행');
    return _this3;
  }
  _createClass(Logger, [{
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      console.log('componentWillUnmount 실행');
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      console.log('componentDidMount 실행');
    }
  }, {
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(nextProps) {
      console.log('componentWillReceiveProps 실행');
      console.log('새로운 속성', nextProps);
    }
  }, {
    key: "shoudComponentUpdate",
    value: function shoudComponentUpdate(nextProps, nextState) {
      console.log('shoudComponentUpdate 실행');
      console.log('새로운 속성', nextProps);
      console.log('새로운 상태', nextState);
    }
  }, {
    key: "componentWillUpdate",
    value: function componentWillUpdate(nextProps, nextState) {
      console.log('componentWillUpdate 실행');
      console.log('새로운 속성', nextProps);
      console.log('새로운 상태', nextState);
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps, prevState) {
      console.log('componentDidUpdate 실행');
      console.log('이전 속성', prevProps);
      console.log('이전 상태', prevState);
    }
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/React.createElement("div", null, this.props.time);
    }
  }]);
  return Logger;
}(React.Component);
var UserList = /*#__PURE__*/function (_React$Component4) {
  _inherits(UserList, _React$Component4);
  function UserList(props) {
    var _this4;
    _classCallCheck(this, UserList);
    _this4 = _callSuper(this, UserList, [props]);
    _this4.state = {
      userList: [{
        id: '1',
        username: '1'
      }]
    };
    return _this4;
  }
  _createClass(UserList, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.getUserList();
    }
  }, {
    key: "getUserList",
    value: function getUserList() {
      var _this5 = this;
      fetch('https://jsonplaceholder.typicode.com/users/').then(function (response) {
        return response.json();
      }).then(function (users) {
        _this5.setState({
          userList: [{
            id: '1'
          }]
        });
      });
    }
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("table", null, /*#__PURE__*/React.createElement("tbody", null, this.state.userList.map(function (user) {
        return /*#__PURE__*/React.createElement("tr", {
          key: user.id,
          id: user.id
        }, /*#__PURE__*/React.createElement("td", null, user.username), /*#__PURE__*/React.createElement("td", null, user.email));
      }))));
    }
  }]);
  return UserList;
}(React.Component);
var el = document.getElementById('content');
var root = ReactDOM.createRoot(el);
root.render( /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(UserList, null)));

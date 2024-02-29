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
var HelloWorld = /*#__PURE__*/function (_React$Component) {
  _inherits(HelloWorld, _React$Component);
  function HelloWorld(prop) {
    var _this;
    _classCallCheck(this, HelloWorld);
    _this = _callSuper(this, HelloWorld, [prop]);
    _this.state = {
      count: 0
    };
    _this.minusBtn = _this.minusBtn.bind(_assertThisInitialized(_this));
    return _this;
  }
  _createClass(HelloWorld, [{
    key: "plusBtn",
    value: function plusBtn(event) {
      this.setState({
        count: ++this.state.count
      });
    }
  }, {
    key: "minusBtn",
    value: function minusBtn(event) {
      this.setState({
        count: --this.state.count
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;
      return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", null, this.state.count), /*#__PURE__*/React.createElement("button", {
        onClick: this.plusBtn.bind(this)
      }, "+"), /*#__PURE__*/React.createElement("button", {
        onClick: this.minusBtn
      }, "-"), /*#__PURE__*/React.createElement("button", {
        onClick: function onClick(event) {
          _this2.setState({
            count: 0
          });
        }
      }, "clear"));
    }
  }]);
  return HelloWorld;
}(React.Component);
var Parent = /*#__PURE__*/function (_React$Component2) {
  _inherits(Parent, _React$Component2);
  function Parent(prop) {
    var _this3;
    _classCallCheck(this, Parent);
    _this3 = _callSuper(this, Parent, [prop]);
    _this3.state = {
      counter: 0
    };
    return _this3;
  }
  _createClass(Parent, [{
    key: "updateCounter",
    value: function updateCounter(e) {
      console.log('wow');
      this.setState({
        counter: ++this.state.counter
      });
    }
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(ChildContent, {
        counter: this.state.counter
      }), /*#__PURE__*/React.createElement(ChildBtn, {
        updateCounter: this.updateCounter.bind(this)
      }));
    }
  }]);
  return Parent;
}(React.Component);
var ChildContent = /*#__PURE__*/function (_React$Component3) {
  _inherits(ChildContent, _React$Component3);
  function ChildContent() {
    _classCallCheck(this, ChildContent);
    return _callSuper(this, ChildContent, arguments);
  }
  _createClass(ChildContent, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/React.createElement("span", null, this.props.counter);
    }
  }]);
  return ChildContent;
}(React.Component);
var ChildBtn = /*#__PURE__*/function (_React$Component4) {
  _inherits(ChildBtn, _React$Component4);
  function ChildBtn() {
    _classCallCheck(this, ChildBtn);
    return _callSuper(this, ChildBtn, arguments);
  }
  _createClass(ChildBtn, [{
    key: "render",
    value: function render() {
      console.log(this.props);
      return /*#__PURE__*/React.createElement("button", {
        onClick: this.props.updateCounter
      }, "+");
    }
  }]);
  return ChildBtn;
}(React.Component);
var Radio = /*#__PURE__*/function (_React$Component5) {
  _inherits(Radio, _React$Component5);
  function Radio(prop) {
    var _this4;
    _classCallCheck(this, Radio);
    _this4 = _callSuper(this, Radio, [prop]);
    _this4.handleResize = _this4.handleResize.bind(_assertThisInitialized(_this4));
    var i = 1;
    _this4.state = {
      outerStyle: _this4.getStyle(4, i),
      innerStyle: _this4.getStyle(1, i),
      selectedStyle: _this4.getStyle(2, i),
      taggerStyle: {
        top: 20,
        width: 25,
        height: 25
      }
    };
    return _this4;
  }
  _createClass(Radio, [{
    key: "getStyle",
    value: function getStyle(i, m) {
      var value = i * m;
      return {
        top: value,
        bottom: value,
        left: value,
        right: value
      };
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      window.addEventListener('resize', this.handleResize);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      window.removeEventListener('resize', this.handleResize);
    }
  }, {
    key: "handleResize",
    value: function handleResize() {
      var w = 1 + Math.round(window.innerWidth / 300);
      this.setState({
        taggerStyle: {
          top: w * 10,
          width: w * 10,
          height: w * 10
        },
        textStyle: {
          left: w * 13,
          fontSize: 7 * w
        }
      });
    }
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
        className: "radio-tagger",
        style: this.state.taggerStyle
      }, /*#__PURE__*/React.createElement("input", {
        type: "radio",
        name: this.props.name,
        id: this.props.id
      }), /*#__PURE__*/React.createElement("label", {
        htmlFor: this.props.id
      }, /*#__PURE__*/React.createElement("div", {
        className: "radio-text",
        style: this.state.textStyle
      }, this.props.label), /*#__PURE__*/React.createElement("div", {
        className: "radio-outer",
        style: this.state.outerStyle
      }, /*#__PURE__*/React.createElement("div", {
        className: "radio-inner",
        style: this.state.innerStyle
      }, /*#__PURE__*/React.createElement("div", {
        className: "radio-selected",
        style: this.state.selectedStyle
      }))))));
    }
  }]);
  return Radio;
}(React.Component);
var el = document.getElementById('content');
var root = ReactDOM.createRoot(el);
root.render( /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(HelloWorld, null), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement(Parent, null), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement(Radio, {
  label: "Ract",
  id: "Ract",
  name: "Ract"
}), /*#__PURE__*/React.createElement(Radio, {
  label: "vue",
  id: "vue",
  name: "vue"
})));

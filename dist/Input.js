'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _FormControl = require('@material-ui/core/FormControl');

var _FormControl2 = _interopRequireDefault(_FormControl);

var _FormHelperText = require('@material-ui/core/FormHelperText');

var _FormHelperText2 = _interopRequireDefault(_FormHelperText);

var _InputLabel = require('@material-ui/core/InputLabel');

var _InputLabel2 = _interopRequireDefault(_InputLabel);

var _InputAdornment = require('@material-ui/core/InputAdornment');

var _InputAdornment2 = _interopRequireDefault(_InputAdornment);

var _Input = require('@material-ui/core/Input');

var _Input2 = _interopRequireDefault(_Input);

var _LinearProgress = require('@material-ui/core/LinearProgress');

var _LinearProgress2 = _interopRequireDefault(_LinearProgress);

var _IconButton = require('@material-ui/core/IconButton');

var _IconButton2 = _interopRequireDefault(_IconButton);

var _ArrowDropDown = require('@material-ui/icons/ArrowDropDown');

var _ArrowDropDown2 = _interopRequireDefault(_ArrowDropDown);

var _ArrowDropUp = require('@material-ui/icons/ArrowDropUp');

var _ArrowDropUp2 = _interopRequireDefault(_ArrowDropUp);

var _Clear = require('@material-ui/icons/Clear');

var _Clear2 = _interopRequireDefault(_Clear);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Input = function (_Component) {
  _inherits(Input, _Component);

  function Input() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Input);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Input.__proto__ || Object.getPrototypeOf(Input)).call.apply(_ref, [this].concat(args))), _this), _this.handleClearSelection = function (e) {
      var _this$props = _this.props,
          downshiftProps = _this$props.downshiftProps,
          focusOnClear = _this$props.focusOnClear;

      downshiftProps.clearSelection();

      if (focusOnClear) {
        _this.input.focus();
      }
    }, _this.handleToggleMenu = function (e) {
      var _this$props$downshift = _this.props.downshiftProps,
          isOpen = _this$props$downshift.isOpen,
          openMenu = _this$props$downshift.openMenu,
          closeMenu = _this$props$downshift.closeMenu;


      if (!isOpen) {
        _this.input.focus();
        openMenu();
      } else {
        closeMenu();
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Input, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          _inputRef = _props.inputRef,
          getInputProps = _props.getInputProps,
          loading = _props.loading,
          downshiftProps = _props.downshiftProps;

      var _ref2 = getInputProps ? getInputProps(downshiftProps) : {},
          label = _ref2.label,
          labelProps = _ref2.labelProps,
          disabled = _ref2.disabled,
          required = _ref2.required,
          error = _ref2.error,
          helperText = _ref2.helperText,
          inputProps = _objectWithoutProperties(_ref2, ['label', 'labelProps', 'disabled', 'required', 'error', 'helperText']);

      return _react2.default.createElement(
        _FormControl2.default,
        { disabled: disabled, required: required, error: error, fullWidth: true },
        label && _react2.default.createElement(
          _InputLabel2.default,
          _extends({ shrink: downshiftProps.isOpen || downshiftProps.inputValue || inputProps.startAdornment ? true : undefined }, downshiftProps.getLabelProps()),
          label
        ),
        _react2.default.createElement(_Input2.default, _extends({
          inputRef: function inputRef(input) {
            _this2.input = input;
            _inputRef && _inputRef(input);
          },
          endAdornment: !disabled && _react2.default.createElement(
            _InputAdornment2.default,
            { position: 'end' },
            !!downshiftProps.selectedItem && _react2.default.createElement(
              _IconButton2.default,
              { onClick: this.handleClearSelection, 'aria-label': 'Clear selection' },
              _react2.default.createElement(_Clear2.default, null)
            ),
            _react2.default.createElement(
              _IconButton2.default,
              { onClick: this.handleToggleMenu, 'aria-label': 'Toggle menu open' },
              downshiftProps.isOpen ? _react2.default.createElement(_ArrowDropUp2.default, null) : _react2.default.createElement(_ArrowDropDown2.default, null)
            )
          ),
          onFocus: downshiftProps.openMenu
        }, downshiftProps.getInputProps(inputProps))),
        loading && _react2.default.createElement(_LinearProgress2.default, {
          style: {
            position: 'relative',
            bottom: 2,
            height: 2,
            marginBottom: -2
          }
        }),
        helperText && _react2.default.createElement(
          _FormHelperText2.default,
          null,
          helperText
        )
      );
    }
  }]);

  return Input;
}(_react.Component);

exports.default = Input;
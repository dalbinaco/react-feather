'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var Check = function Check(props) {
  var color = props.color,
      size = props.size,
      otherProps = _objectWithoutProperties(props, ['color', 'size']);

  return _react2.default.createElement(
    'svg',
    _extends({
      id: 'svg1121',
      version: '1.1',
      viewBox: '0 0 24 24',
      height: size,
      width: size
    }, otherProps),
    _react2.default.createElement(
      'g',
      {
        transform: 'matrix(0.98537266,0,0,0.98537266,-0.80986405,-1.9847913)',
        id: 'g1674'
      },
      _react2.default.createElement('rect', {
        width: '1',
        height: '9.9877901',
        rx: '0.5',
        transform: 'rotate(-45)',
        id: 'rect1117',
        x: '-11.106573',
        y: '11.976645',
        fill: '#000'
      }),
      _react2.default.createElement('rect', {
        width: '1',
        height: '25',
        rx: '0.5',
        transform: 'rotate(45)',
        id: 'rect1119',
        x: '20.985302',
        y: '-13.914234',
        fill: '#000'
      })
    )
  );
};

Check.propTypes = {
  color: _propTypes2.default.string,
  size: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number])
};

Check.defaultProps = {
  color: 'currentColor',
  size: '24'
};

exports.default = Check;
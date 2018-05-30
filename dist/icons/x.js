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

var X = function X(props) {
  var color = props.color,
      size = props.size,
      otherProps = _objectWithoutProperties(props, ['color', 'size']);

  return _react2.default.createElement(
    'svg',
    _extends({
      xmlns: 'http://www.w3.org/2000/svg',
      width: size,
      height: size,
      viewBox: '0 0 24 24',
      version: '1.1',
      id: 'svg885',
      style: 'fill:none'
    }, otherProps),
    _react2.default.createElement('rect', {
      width: '1.3631455',
      height: '32.715492',
      rx: '0.68157274',
      transform: 'matrix(0.72111313,-0.69281733,0.72111313,0.69281733,0,0)',
      id: 'rect881',
      style: 'fill:#000000;stroke-width:1.36314547',
      x: '-0.68157274',
      y: '0.28319347'
    }),
    _react2.default.createElement('rect', {
      width: '1.3631455',
      height: '32.715492',
      rx: '0.68157274',
      transform: 'matrix(0.72111313,0.69281733,-0.72111313,0.69281733,0,0)',
      id: 'rect883',
      style: 'fill:#000000;stroke-width:1.36314547',
      x: '16.448416',
      y: '-16.846687'
    })
  );
};

X.propTypes = {
  color: _propTypes2.default.string,
  size: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number])
};

X.defaultProps = {
  color: 'currentColor',
  size: '24'
};

exports.default = X;
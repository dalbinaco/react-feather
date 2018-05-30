import React from 'react';
import PropTypes from 'prop-types';

const X = props => {
  const { color, size, ...otherProps } = props;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      version="1.1"
      id="svg885"
      style="fill:none"
      {...otherProps}
    >
      <rect
        width="1.3631455"
        height="32.715492"
        rx="0.68157274"
        transform="matrix(0.72111313,-0.69281733,0.72111313,0.69281733,0,0)"
        id="rect881"
        style="fill:#000000;stroke-width:1.36314547"
        x="-0.68157274"
        y="0.28319347"
      />
      <rect
        width="1.3631455"
        height="32.715492"
        rx="0.68157274"
        transform="matrix(0.72111313,0.69281733,-0.72111313,0.69281733,0,0)"
        id="rect883"
        style="fill:#000000;stroke-width:1.36314547"
        x="16.448416"
        y="-16.846687"
      />
    </svg>
  );
};

X.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

X.defaultProps = {
  color: 'currentColor',
  size: '24',
};

export default X;

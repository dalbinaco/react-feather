import React from 'react';
import PropTypes from 'prop-types';

const X = props => {
  const { color, size, ...otherProps } = props;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      style="fill:none"
      id="svg885"
      version="1.1"
      viewBox="0 0 24.000001 24"
      height={size}
      width={size}
      {...otherProps}
    >
      <rect
        y="0.62301511"
        x="-1.0213944"
        style="fill:#000000;stroke-width:1.36314547"
        id="rect881"
        transform="matrix(0.72111313,-0.69281733,0.72111313,0.69281733,0,0)"
        rx="0.68157274"
        height="32.715492"
        width="1.3631455"
      />
      <rect
        y="-16.017925"
        x="16.299189"
        style="fill:#000000;stroke-width:1.36314547"
        id="rect883"
        transform="matrix(0.72111313,0.69281733,-0.72111313,0.69281733,0,0)"
        rx="0.68157274"
        height="32.715492"
        width="1.3631455"
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

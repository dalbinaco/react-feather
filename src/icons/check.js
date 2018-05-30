import React from 'react';
import PropTypes from 'prop-types';

const Check = props => {
  const { color, size, ...otherProps } = props;
  return (
    <svg
      id="svg1121"
      version="1.1"
      viewBox="0 0 24 24"
      height={size}
      width={size}
      {...otherProps}
    >
      <g
        transform="matrix(0.98537266,0,0,0.98537266,-0.80986405,-1.9847913)"
        id="g1674"
      >
        <rect
          width="1"
          height="9.9877901"
          rx="0.5"
          transform="rotate(-45)"
          id="rect1117"
          x="-11.106573"
          y="11.976645"
          fill="#000"
        />
        <rect
          width="1"
          height="25"
          rx="0.5"
          transform="rotate(45)"
          id="rect1119"
          x="20.985302"
          y="-13.914234"
          fill="#000"
        />
      </g>
    </svg>
  );
};

Check.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Check.defaultProps = {
  color: 'currentColor',
  size: '24',
};

export default Check;

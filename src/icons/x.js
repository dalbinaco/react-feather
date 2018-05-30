import React from 'react';
import PropTypes from 'prop-types';

const X = props => {
  const { color, size, ...otherProps } = props;
  return (
    <svg
      width="19"
      height="19"
      viewBox="0 0 19 19"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...otherProps}
    >
      <rect
        width="1"
        height="25"
        rx="0.5"
        transform="translate(0.00195312 0.707031) rotate(-45)"
      />
      <rect
        width="1"
        height="25"
        rx="0.5"
        transform="translate(17.6777) rotate(45)"
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

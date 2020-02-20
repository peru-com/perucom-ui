import React from "react";
import PropTypes from 'prop-types';

interface Props {
  color?: string;
  width?: string;
  height?: string;
}

export const IconClose: React.FC<Props> = ({ 
  color,
  width,
  height
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width}
    height={height}
    fill="none"
    viewBox="0 0 20 20"
  >
    <path
      fill={color}
      d="M11.769 10l7.865-7.864A1.25 1.25 0 1017.865.367L10 8.232 2.135.367A1.25 1.25 0 10.366 2.136l7.866 7.865-7.866 7.865a1.25 1.25 0 101.769 1.768L10 11.769l7.865 7.865a1.247 1.247 0 001.769 0 1.25 1.25 0 000-1.769l-7.865-7.864z"
    ></path>
  </svg>
);

IconClose.propTypes = {
  color: PropTypes.string,
  width: PropTypes.string,
  height: PropTypes.string
};

IconClose.defaultProps = {
  color: '#000000',
  width: '20',
  height: '20',
};

IconClose.displayName = 'IconClose';
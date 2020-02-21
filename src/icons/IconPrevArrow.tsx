import React from "react";
import PropTypes from 'prop-types';

interface Props {
  color?: string;
  width?: string;
  height?: string;
}

export const IconPrevArrow: React.FC<Props> = ({ 
  color,
  width,
  height
}) => (
  <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      fill="none"
      viewBox="0 0 38 72"
    >
      <path
        fill={color}
        d="M36.927 70.47a2.016 2.016 0 01-1.42.597 1.945 1.945 0 01-1.42-.597L.593 36.977a1.994 1.994 0 010-2.84L34.086.637a2.01 2.01 0 112.841 2.84L4.855 35.558 36.927 67.63a2.001 2.001 0 010 2.841z"
      ></path>
  </svg>
);

IconPrevArrow.propTypes = {
  color: PropTypes.string,
  width: PropTypes.string,
  height: PropTypes.string
};

IconPrevArrow.defaultProps = {
  color: '#000000',
  width: '20',
  height: '20',
};

IconPrevArrow.displayName = 'IconPrevArrow';


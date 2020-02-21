import React from "react";
import PropTypes from 'prop-types';

interface Props {
  color?: string;
  width?: string;
  height?: string;
}

export const IconNextArrow: React.FC<Props> = ({ 
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
        d="M.637 70.47c.376.38.886.594 1.42.597a1.945 1.945 0 001.42-.597L36.97 36.977a1.994 1.994 0 000-2.84L3.478.637a2.01 2.01 0 10-2.841 2.84l32.072 32.08L.637 67.63a2.002 2.002 0 000 2.841z"
      ></path>
  </svg>
);

IconNextArrow.propTypes = {
  color: PropTypes.string,
  width: PropTypes.string,
  height: PropTypes.string
};

IconNextArrow.defaultProps = {
  color: '#000000',
  width: '20',
  height: '20',
};

IconNextArrow.displayName = 'IconNextArrow';


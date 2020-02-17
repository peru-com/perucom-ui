import React from "react";
import PropTypes from 'prop-types';

interface Props {
  color?: string;
  width?: string;
  height?: string;
}

export const IconSearch: React.FC<Props> = ({ 
  color,
  width,
  height
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width}
    height={height}
    fill="none"
    viewBox="0 0 19 18"
  >
    <path
      fill={color}
      fillRule="evenodd"
      d="M12.169 12.168a6.426 6.426 0 01-4.573 1.894 6.423 6.423 0 01-4.572-1.894 6.474 6.474 0 010-9.145 6.444 6.444 0 014.572-1.891c1.656 0 3.312.631 4.573 1.89a6.474 6.474 0 010 9.146zm5.666 4.866l-4.485-4.485c2.57-2.983 2.447-7.499-.38-10.327-2.963-2.963-7.785-2.963-10.747 0-2.964 2.963-2.964 7.785 0 10.747a7.548 7.548 0 005.373 2.226c1.84 0 3.576-.655 4.954-1.845l4.485 4.485a.564.564 0 00.8 0c.221-.221.221-.58 0-.801z"
      clipRule="evenodd"
    ></path>
  </svg>
);

IconSearch.propTypes = {
  color: PropTypes.string,
  width: PropTypes.string,
  height: PropTypes.string
};

IconSearch.defaultProps = {
  color: '#000000',
  width: '20',
  height: '20',
};

IconSearch.displayName = 'IconSearch';


import React from "react";
import PropTypes from 'prop-types';

interface Props {
  color?: string;
  width?: string;
  height?: string;
}

export const IconInstagram: React.FC<Props> = ({ 
  color,
  width,
  height
}) => (
  <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      fill="none"
      viewBox="0 0 36 36"
  >
    <path
      fill={color}
      d="M27.844 9.563a1.406 1.406 0 100-2.813 1.406 1.406 0 000 2.813zM18 8.297c-5.35 0-9.703 4.353-9.703 9.703S12.65 27.703 18 27.703 27.703 23.35 27.703 18 23.35 8.297 18 8.297zm0 16.594c-3.8 0-6.89-3.091-6.89-6.891s3.09-6.89 6.89-6.89 6.89 3.09 6.89 6.89-3.09 6.89-6.89 6.89z"
    ></path>
    <path
      fill={color}
      d="M25.543 0H10.457C4.691 0 0 4.691 0 10.457v15.086C0 31.309 4.691 36 10.457 36h15.086C31.309 36 36 31.309 36 25.543V10.457C36 4.691 31.309 0 25.543 0zm7.645 25.543c0 4.215-3.43 7.645-7.645 7.645H10.457c-4.215 0-7.645-3.43-7.645-7.645V10.457c0-4.215 3.43-7.645 7.645-7.645h15.086c4.215 0 7.645 3.43 7.645 7.645v15.086z"
    ></path>
  </svg>
);

IconInstagram.propTypes = {
  color: PropTypes.string,
  width: PropTypes.string,
  height: PropTypes.string
};

IconInstagram.defaultProps = {
  color: '#000000',
  width: '20',
  height: '20',
};

IconInstagram.displayName = 'IconInstagram';


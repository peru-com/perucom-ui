import React from "react";
import PropTypes from 'prop-types';

interface Props {
  color?: string;
  width?: string;
  height?: string;
}

export const IconMenu: React.FC<Props> = ({ 
  color,
  width,
  height
}) => (
  <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      fill="none"
      viewBox="0 0 22 20"
  >
    <path
      fill={color}
      d="M2.257.572c-.852 0-1.543.723-1.543 1.616 0 .892.69 1.616 1.543 1.616h17.485c.852 0 1.543-.724 1.543-1.616 0-.893-.69-1.616-1.543-1.616H2.257zm0 7.812C1.405 8.384.714 9.107.714 10c0 .893.69 1.616 1.543 1.616h17.485c.852 0 1.543-.723 1.543-1.616 0-.893-.69-1.616-1.543-1.616H2.257zm0 7.812c-.852 0-1.543.724-1.543 1.616 0 .893.69 1.617 1.543 1.617h17.485c.852 0 1.543-.724 1.543-1.617 0-.892-.69-1.616-1.543-1.616H2.257z"
    ></path>
  </svg>
);

IconMenu.propTypes = {
  color: PropTypes.string,
  width: PropTypes.string,
  height: PropTypes.string
};

IconMenu.defaultProps = {
  color: '#000000',
  width: '20',
  height: '20',
};

IconMenu.displayName = 'IconMenu';
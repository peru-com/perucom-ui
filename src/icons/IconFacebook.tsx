import React from "react";
import PropTypes from 'prop-types';

interface Props {
  color?: string;
  width?: string;
  height?: string;
}

export const IconFacebook: React.FC<Props> = ({ 
  color,
  width,
  height
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width}
    height={height}
    fill="none"
    viewBox="0 0 23 36"
  >
    <path
      fill={color}
      d="M13.865 36H7.532c-1.058 0-1.919-.783-1.919-1.746V21.25H1.918C.861 21.25 0 20.467 0 19.504v-5.572c0-.963.86-1.746 1.918-1.746h3.695v-2.79c0-2.767.955-5.121 2.76-6.807C10.186.895 12.721 0 15.702 0l4.83.007c1.056.002 1.915.785 1.915 1.746v5.174c0 .963-.86 1.746-1.918 1.746l-3.252.001c-.992 0-1.244.181-1.298.237-.09.092-.195.352-.195 1.07v2.204h4.5c.34 0 .668.077.95.22.609.31.987.895.987 1.527l-.003 5.572c0 .963-.86 1.746-1.918 1.746h-4.516v13.004c0 .963-.861 1.746-1.919 1.746zm-5.933-2.11h5.533V20.304c0-.642.575-1.165 1.28-1.165H19.9l.002-4.844h-5.156c-.707 0-1.281-.523-1.281-1.166V9.981c0-.824.092-1.762.776-2.467.826-.852 2.128-.95 3.035-.95l2.852-.001V2.117L15.7 2.11c-4.79 0-7.768 2.792-7.768 7.286v3.734c0 .643-.575 1.166-1.28 1.166H2.317v4.844h4.333c.706 0 1.28.523 1.28 1.165V33.89zM20.527 2.117z"
    ></path>
  </svg>
);

IconFacebook.propTypes = {
  color: PropTypes.string,
  width: PropTypes.string,
  height: PropTypes.string
};

IconFacebook.defaultProps = {
  color: '#000000',
  width: '20',
  height: '20',
};

IconFacebook.displayName = 'IconFacebook';


import React from "react";
import PropTypes from 'prop-types';

interface Props {
  color?: string;
  width?: string;
  height?: string;
}

export const IconTwitter: React.FC<Props> = ({ 
  color,
  width,
  height
}) => (
  <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      fill="none"
      viewBox="0 0 40 33"
  >
    <path
      fill={color}
      d="M.587 29.21c3.742 2.374 8.098 3.629 12.594 3.629 6.585 0 12.62-2.53 16.994-7.123 4.185-4.395 6.487-10.302 6.372-16.296C38.135 8.063 40 5.47 40 2.945c0-.969-1.05-1.583-1.903-1.09-1.49.876-2.85 1.105-4.248.712C30.995-.215 26.746-.8 23.165 1.13c-3.13 1.684-4.869 4.766-4.712 8.135A20.93 20.93 0 014.877 1.848a1.265 1.265 0 00-2.065.169c-1.64 2.809-1.624 6.064-.197 8.693-.679.12-1.098.69-1.098 1.309 0 2.642 1.189 5.071 3.104 6.728a1.261 1.261 0 00-.324 1.309 9.067 9.067 0 005.132 5.497c-2.592 1.238-5.458 1.65-8.01 1.337-1.32-.178-1.972 1.597-.832 2.32zm12.94-3.224c.944-.726.443-2.239-.743-2.264a6.588 6.588 0 01-5.174-2.691 8.903 8.903 0 001.725-.276c1.281-.347 1.22-2.196-.081-2.457a6.483 6.483 0 01-4.913-4.413 8.72 8.72 0 001.927.256c1.278.007 1.761-1.632.719-2.317-2.35-1.548-3.352-4.282-2.688-6.852a23.483 23.483 0 0015.557 6.944c.843.052 1.477-.74 1.291-1.544-.8-3.468 1.137-5.898 3.217-7.018 2.058-1.112 5.363-1.459 7.896 1.199.752.793 3.292.824 4.584.522-.58 1.091-1.47 2.127-2.304 2.71-.355.25-.56.663-.537 1.096.27 5.533-1.79 11.033-5.656 15.09-3.894 4.088-9.278 6.34-15.164 6.34a21.21 21.21 0 01-6.806-1.115 17.057 17.057 0 007.15-3.21z"
    ></path>
  </svg>
);

IconTwitter.propTypes = {
  color: PropTypes.string,
  width: PropTypes.string,
  height: PropTypes.string
};

IconTwitter.defaultProps = {
  color: '#000000',
  width: '20',
  height: '20',
};

IconTwitter.displayName = 'IconTwitter';


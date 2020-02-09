import React from 'react';
import PropTypes from 'prop-types';

interface Props {
  children?: any;
}

export const Button: React.FC<Props> = ({ children }) => {
  return <button>{children}</button>;
};

Button.propTypes = {
  children: PropTypes.any
};

Button.displayName = 'Button';
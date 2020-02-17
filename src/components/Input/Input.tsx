import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { 
  Wrapper,
  InputStyled,
  IconWrapper
} from './styled';
import { formatValueToNumber } from './utils';

interface Props {
  type?: string;
  name: string;
  value?: string;
  onChange?: Function;
  onKeyDown?: Function;
  width?: number;
  fullWidth?: boolean;
  isDisabled?: boolean;
  icon?: React.ReactNode;
  iconPos?: string;
  iconClick?: Function;
}

export const Input: React.FC<Props> = ({
  type,
  name,
  value = '',
  placeholder,
  onChange,
  onKeyDown,
  width,
  fullWidth,
  isDisabled,
  icon,
  iconPos,
  iconClick
}) => {
  const isTypeNumber: boolean = type === 'number';
  const [ val, setVal ] = useState(value);

  const handleChange = (e: React.SyntheticEvent) => {
    const value: string = e.target.value;
    isTypeNumber 
      ? setVal(formatValueToNumber(value))
      : setVal(value);
    onChange && onChange(value);
  };

  const handleKeyDown = (e: React.SyntheticEvent) => {
    const value: string = e.target.value;
    if(e.key === 'Enter') onKeyDown && onKeyDown(value);
  };

  if(icon) {
    return(
      <Wrapper width={width} fullWidth={fullWidth}>
        <InputStyled
          type={isTypeNumber ? 'text' : type}
          name={name}
          placeholder={placeholder}
          value={val}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
          isDisabled={isDisabled}
          iconPos={iconPos}
        />
        <IconWrapper 
          iconPos={iconPos} 
          onClick={() => iconClick(val)}
        >
          {icon}
        </IconWrapper>
      </Wrapper>
    );
  }

  return(
    <Wrapper width={width} fullWidth={fullWidth}>
      <InputStyled
        type={isTypeNumber ? 'text' : type}
        name={name}
        placeholder={placeholder}
        value={val}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        isDisabled={isDisabled}
      />
    </Wrapper>
  );
};

Input.propTypes = {
  type: PropTypes.string,
  name: PropTypes.string.isRequired,
  value: PropTypes.string,
  placeholder: PropTypes.string,
  onChange: PropTypes.func,
  onKeyDown: PropTypes.func,
  width: PropTypes.number,
  fullWidth: PropTypes.bool,
  isDisabled: PropTypes.bool,
  icon: PropTypes.node,
  iconPos: PropTypes.string,
  iconClick: PropTypes.func
}

Input.defaultProps = {
  type: 'text',
  iconPos: 'left'
};

Input.displayName = 'Input';
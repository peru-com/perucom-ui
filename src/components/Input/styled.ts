import styled, { css } from 'styled-components';
import { COLORS } from './../../ui';
import { getPaddingByPosition, getLocationByPosition } from './utils';

interface Props {
  width?: number;
  fullWidth?: boolean;
  isDisabled?: boolean;
  iconPos?: string;
}

export const Wrapper = styled.div`
  display: inline-flex;
  flex-wrap: wrap;
  align-items: center;
  position: relative;
  z-index: 0;
  width: ${(props: Props) => props.fullWidth && '100%'};
  width: ${(props: Props) => props.width && `${props.width}px`};
`;

export const InputStyled = styled.input`
  width: 100%;
  background-color: rgba(255, 255, 255, 0.74);
  color: ${COLORS.TEXT};
  height: 40px;
  border: 1.5px solid ${COLORS.DEFAULT};
  border-radius: 24px;
  box-sizing: border-box;
  padding: 12px 16px;
  outline: none;
  font-size: 16px;
  ${(props: Props) => props.iconPos &&
    getPaddingByPosition(props.iconPos)};

  ${(props: Props) => props.isDisabled && css`
    opacity: 0.5;
    pointer-events: none;
    user-select: none;
  `}
`;

export const IconWrapper = styled.div`
  position: absolute;
  cursor: pointer;
  ${(props: Props) => props.iconPos &&
    getLocationByPosition(props.iconPos)};
`;

export const InputGroups = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;

  div{
    margin: 8px;
  }
`;

Wrapper.displayName = 'Wrapper';
InputStyled.displayName = 'InputStyled';
IconWrapper.displayName = 'IconWrapper';
InputGroups.displayName = 'InputGroups';
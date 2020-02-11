import styled, { css, keyframes  } from 'styled-components';
import { SIZES, COLORS, VARIANTS } from './constants';

interface Props {
  width?: number;
  fullWidth?: boolean;
  isLoading?: boolean;
  isDisabled?: boolean;
  isOutlined?: boolean;
  size?: string;
  variant?: string;
}

export const ButtonGroups = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  
  button {
    margin: 5px;
  }
`;

export const ButtonStyled = styled.button`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  border: none;
  padding: 0 25px;
  border-radius: 6px;
  cursor: pointer;
  outline: none;
  font-weight: bold;
  min-height: 2.5em;
  width: ${(props: Props) => props.fullWidth && '100%'};
  width: ${(props: Props) => props.width && `${props.width}px`};
  font-size: ${(props: Props) => props.size
    && SIZES[props.size]};

  ${(props: Props) => VARIANTS.includes(props.variant) && css`
    background-color: ${COLORS[props.variant].background};
    border: 1px solid ${COLORS[props.variant].border};
    color: ${COLORS[props.variant].text};

    &:hover {
      background-color: ${COLORS[props.variant].hover};
      transition: linear .4s;
    }
  `}

  ${(props: Props) => (VARIANTS.includes(props.variant) && props.isOutlined) && css`
    background-color: ${COLORS[props.variant].text};
    border: 1px solid ${COLORS[props.variant].border};
    color: ${COLORS[props.variant].background};

    &:hover {
      background-color: ${COLORS[props.variant].background};
      border: 1px solid ${COLORS[props.variant].border};
      color: ${COLORS[props.variant].text};
      transition: linear .4s;
    }
  `}

  ${(props: Props) => props.isLoading && css`
    pointer-events: none;
    user-select: none;
  `}

  ${(props: Props) => props.isDisabled && css`
    opacity: 0.5;
    pointer-events: none;
    user-select: none;
  `}
`;

const animationLoading = keyframes`
  to {transform: rotate(360deg);}
`;

export const Loading = styled.div`
  display: inline-block;
  box-sizing: border-box;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  border: 2px solid black;
  border-top: 2px solid white;
  animation: ${animationLoading} .6s linear infinite;

  ${(props: Props) => props.variant && css`
    border: 2px solid ${COLORS[props.variant].text};
    border-top: 2px solid ${COLORS[props.variant].background};
  `}
`;

ButtonGroups.displayName = 'ButtonGroups';
ButtonStyled.displayName = 'ButtonStyled';
Loading.displayName = 'Loading';
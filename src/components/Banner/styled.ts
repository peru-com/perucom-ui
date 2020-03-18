import styled, { css } from 'styled-components';
import { COLORS } from './../../ui';

interface Props {
  width?: string;
  offset?: number;
  transition?: string;
  isDisabled?: boolean;
}

interface DotProps {
  isSelected?: boolean;
}

export const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  height: 500px;
  position: relative;
  align-items: center;
  overflow: hidden;
  margin: 0 auto;
  width: ${(props: Props) => props.width
    ? props.width
    : '100%'};

  @media(min-width: 768px) {
    height: 600px;
  }
`;

export const Content = styled.div`
  display: flex;
  height: 100%;
  width: ${(props: Props) => props.width
    ? props.width
    : '100%'};
  transform: ${(props: Props) => props.offset > 0
    ? `translate3d(-${(props.offset)}px, 0px, 0px)`
    : `translate3d(0px, 0px, 0px)`};
  transition: ${(props: Props) => props.transition
    ? props.transition
    : 'none'};
`;

export const ActionPrev = styled.div`
  position: absolute;
  left: 10px;
  cursor: pointer;
  transition: all 0.3s;
  padding: 5px;

  ${(props: Props) => props.isDisabled && css`
    opacity: 0.3;
    user-select: none;
    cursor: initial;
  `}
`;

export const ActionNext = styled.div`
  position: absolute;
  right: 15px;
  cursor: pointer;
  transition: all 0.3s;
  padding: 5px;

  ${(props: Props) => props.isDisabled && css`
    opacity: 0.3;
    user-select: none;
    cursor: default;
  `}
`;

export const DotsGroup = styled.div`
  display: flex;
  flex-wrap: wrap;
  position: absolute;
  right: 0;
  bottom: 12px;
  left: 0px;
  justify-content: center;
`;

export const Dot = styled.div`
  cursor: pointer;
  width: 12px;
  height: 12px;
  border-radius: 50%;
  margin: 0 3px;
  background-color: ${COLORS.WHITE};
  transition: all 0.3s;

  &:hover {
    background-color: ${COLORS.PRIMARY100};
  }

  ${(props: DotProps) => props.isSelected && css`
    background-color: ${COLORS.PRIMARY};
    box-shadow: 0px 4px 6px rgba(243, 17, 6, 0.4);
  `}
`;

Wrapper.displayName = 'Wrapper';
Content.displayName = 'Content';
ActionPrev.displayName = 'ActionPrev';
ActionNext.displayName = 'ActionNext';
DotsGroup.displayName = 'DotsGroup';
Dot.displayName = 'Dot';

import styled, { css } from 'styled-components';
import { COLORS } from './../../../ui';

interface Props {
  isSelected?: boolean;
}

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 0;
  margin: 0;
  box-sizing: border-box;

  @media(min-width: 768px) {
    padding: 10px 15px;
  }
`;

export const BarSelected = styled.div`
  display: none;
  margin: 0 auto;
  width: 85%;
  height: 2px;
  border-radius: 4px;
  background-color: red;
`;

export const ItemWrapper = styled.div`
  display: none;
  list-style: none;
  margin: 0 15px;
  cursor: pointer;
  min-height: 24px;

  &:hover {
    ${BarSelected} {
      display: block;
    }
  }

  ${(props: Props) => props.isSelected && css`
    ${BarSelected} {
      display: block;
    }
  `}

  @media(min-width: 960px) {
    display: inline-block;
  }
`;

export const ButtonWrapper = styled.div`
  display: none;

  @media(min-width: 768px) {
    display: block;
  }
`;

Wrapper.displayName = 'Wrapper';
BarSelected.displayName = 'BarSelected';
ItemWrapper.displayName = 'ItemWrapper';
ButtonWrapper.displayName = 'ButtonWrapper';

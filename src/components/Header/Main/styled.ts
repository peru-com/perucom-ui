import styled from 'styled-components';
import { COLORS } from './../../../ui';

export const Wrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  padding: 10px 15px;
  box-sizing: border-box;

  @media(min-width: 768px) {
    width: 35%;
  }

  @media(min-width: 960px) {
    width: auto;
    justify-content: flex-start;
  }
`;

export const Toggle = styled.div`
  position: absolute;
  left: 15px;

  @media(min-width: 960px) {
    display: none;
  }
`;

export const SearchWrapper = styled.div`
  display: none;

  @media(min-width: 960px) {
    display: block;
  }
`;

export const Logo = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  margin-right: 15px;
  cursor: pointer;
`;

export const IconWrapper = styled.div`
  display: flex;
  position: absolute;
  right: 15px;
  border-radius: 50%;
  background-color: ${COLORS.WHITE};
  padding: 8px;
  box-sizing: border-box;

  svg path {
    stroke: ${COLORS.PRIMARY};
    stroke-width: 0.4;
  }

  @media(min-width: 768px) {
    display: none;
  } 
`;

Wrapper.displayName = 'ButtonWrapper';
Toggle.displayName = 'Toggle';
SearchWrapper.displayName = 'SearchWrapper';
Logo.displayName = 'Logo';
IconWrapper.displayName = 'IconWrapper';
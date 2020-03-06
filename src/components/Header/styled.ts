import styled from 'styled-components';
import { COLORS } from './../../ui';
import { MainWrapper } from './Main';
import { NavBarWrapper } from './NavBar';

interface Props {
  isFixed?: boolean;
  isDarkMode?: boolean;
  isSelected?: boolean;
}

export const HeaderContent = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 1600px;
  position: sticky;
  top: 0;
  z-index: 1;
  margin: 0 auto;
`;


export const Wrapper = styled.div`
  width: 100%;
  z-index: 1000;
  box-shadow: ${(props: Props) => !props.isDarkMode 
    && '0px 1px 6px rgba(0, 0, 0, 0.21)'};
  position: ${(props: Props) => props.isFixed 
    ? 'fixed'
    : 'sticky'};
  background-color: ${(props: Props) => props.isDarkMode 
    ? 'transparent'
    : `${COLORS.WHITE}`};

  ${HeaderContent} {
    background-color: ${(props: Props) => props.isDarkMode 
      ? 'transparent'
      : `${COLORS.WHITE}`};
  }

  ${MainWrapper} {
    background-color: ${(props: Props) => props.isDarkMode 
      ? 'transparent'
      : `${COLORS.WHITE}`};
  }

  ${NavBarWrapper} {
    color: ${(props: Props) => props.isDarkMode 
      ? `${COLORS.WHITE}`
      : `${COLORS.TEXT}`};
  }
`;

export const Overlay = styled.div`
  display: block;
  background-color: rgba(0, 0, 0, 0.4);
  position: fixed;
  width: 100vw;
  top: 0px;
  bottom: 0px;
  left: 0px;
  right: 0px;
  cursor: pointer;
  z-index: 2;

  @media(min-width: 960px) {
    display: none;
  } 
`;

Wrapper.displayName = 'Wrapper';
HeaderContent.displayName = 'HeaderContent';
Overlay.displayName = 'Overlay';
import styled, { css } from 'styled-components';
import { COLORS } from './../../ui';

interface Props {
  isDarkMode?: boolean;
  isSelected?: boolean;
}

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 1600px;
  position: sticky;
  top: 0;
  z-index: 1;
  background-color: ${(props: Props) => props.isDarkMode && COLORS.WHITE};

  ${(props: Props) => props.isDarkMode && css`
    ${ItemWrapper} {
      color: ${COLORS.TEXT};
    }
  `}
`;

export const Toogle = styled.div`
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

export const Main = styled.div`
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

export const Logo = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  margin-right: 15px;
  cursor: pointer;
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

export const ButtonWrapper = styled.div`
  display: none;
  
  @media(min-width: 768px) {
    display: block;
  } 
`;

export const IconWrapper = styled.div`
  position: absolute;
  right: 15px;
  border-radius: 50%;

  svg path {
    stroke: ${COLORS.PRIMARY};
    stroke-width: 0.4;
  }

  @media(min-width: 768px) {
    display: none;
  } 
`;

export const NavBar = styled.ul`
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

export const ItemWrapper = styled.li`
  display: none;
  list-style: none;
  margin: 0 15px;
  cursor: pointer;
  min-height: 24px;
  color: ${COLORS.WHITE};

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


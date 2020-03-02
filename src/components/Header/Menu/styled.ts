import styled, { css } from 'styled-components';
import { COLORS } from './../../../ui';

interface Props {
  isOpen?: boolean;
  isSelected?: boolean;
}

export const Wrapper = styled.div`
  width: 100%;
  max-width: 360px;
  height: 100vh;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  z-index: 3;
  transition: .2s linear;
  transform: translateX(-100%);

  ${(props: Props) => props.isOpen && css`
    transform: translateX(0px);
  `}

  @media(min-width: 960px) {
    display: none;
  }
`;

export const MenuStyled = styled.ul`
  padding: 0;
  margin: 0;
  width: 100%;
  height: 100%;
  background-color: ${COLORS.WHITE};
  font-size: 20px;
  overflow-y: auto;
`;

export const Header = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  width: 100%;
  border-bottom: 1px solid ${COLORS.DEFAULT};
  padding: 10px 15px;
  box-sizing: border-box;
  position: sticky;
  top: 0;
  z-index: 1;
  background-color: ${COLORS.WHITE};
`;

export const IconWrapper = styled.div`
  position: absolute;
  left: 18px;
`;

export const Logo = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  cursor: pointer;
`;

export const Search = styled.div`
  width: 100%;
  padding: 18px 15px 8px;
  box-sizing: border-box;
`;

export const BarSelected = styled.div`
  display: none;
  margin: 0 auto;
  width: 100%;
  height: 2px;
  border-radius: 4px;
  background-color: red;
`;

export const ItemWrapper = styled.li`
  display: flex;
  flex-wrap: wrap;
  list-style: none;
  width: 100%;
  color: ${COLORS.TEXT};
  cursor: pointer;
  padding: 18px;
  box-sizing: border-box;
  min-height: 62px;

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
`;

export const ButtonWrapper = styled.div`
  text-align: center;
  padding: 8px 0;
  box-sizing: border-box;
`;

Wrapper.displayName = 'Wrapper';
MenuStyled.displayName = 'MenuStyled';
Header.displayName = 'Header';
IconWrapper.displayName = 'IconWrapper';
Logo.displayName = 'Logo';
Search.displayName = 'Search';
BarSelected.displayName = 'BarSelected';
ItemWrapper.displayName = 'ItemWrapper';
ButtonWrapper.displayName = 'ButtonWrapper';
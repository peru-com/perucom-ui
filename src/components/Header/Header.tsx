import React from 'react';
import PropTypes from 'prop-types'
import {
  Wrapper,
  HeaderContent,
  Overlay
} from './styled';
import { Menu } from './Menu';
import { Main } from './Main';
import { NavBar } from './NavBar';
import { useToggle } from './hooks';

interface Props {
  items?: any;
  isDarkMode?: boolean;
  isFixed?: boolean;
  children?: any;
}

export const Header: React.FC<Props> = ({
  items,
  isFixed,
  isDarkMode,
  children
}) => {
  const toggle = useToggle();

  const handleClickHome = () => {
    window.location.href = 'https://peru.com';
  };

  const searchByInputValue = (value: string) => {
    const isNotEmpty = !!value;
    if(isNotEmpty) {
      window.location.href = `http://peru.buscamas.pe/${value}`;
    }
  };

  const handleClickButton = () => {
    window.open('https://turismoi.pe');
  };

  if(children) {
    return(
      <Wrapper
        isFixed={isFixed}
        isDarkMode={isDarkMode}>
        { children }
      </Wrapper>
    );
  }

  return(
    <Wrapper
      isFixed={isFixed}
      isDarkMode={isDarkMode}
    >
      <Menu
        items={items}
        isOpen={toggle.isOpen}
        setIsOpen={toggle.onClick}
        onClickLogo={handleClickHome}
        onSearch={(value) => searchByInputValue(value)}
        onClickButton={handleClickButton} />
      <HeaderContent>
        <Main
          isDarkMode={isDarkMode}
          onClickToggle={toggle.onClick}
          onClickLogo={handleClickHome}
          onSearch={(value) => searchByInputValue(value)}
          onClickButton={handleClickButton} />
        <NavBar
          items={items}
          onClickButton={handleClickButton} />
      </HeaderContent>
      { toggle.isOpen && <Overlay onClick={toggle.onClick} /> }
    </Wrapper>
  );
};

Header.propTypes = {
  items: PropTypes.any,
  isFixed: PropTypes.bool,
  isDarkMode: PropTypes.bool,
  children: PropTypes.any
};

Header.displayName = 'Header';

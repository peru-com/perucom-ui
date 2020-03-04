import React from 'react';
import {
  Wrapper,
  ItemWrapper,
  BarSelected,
  ButtonWrapper
} from './styled';
import { Button } from './../../Button';
import { IconAirplane } from '../../../icons';

export const NavBar: React.FC = ({ 
  items,
  onClickButton,
  children
}) => {
  const ROOT = 'header-navbar';

  if(children) {
    <Wrapper>
      { children }
    </Wrapper>
  }
  
  return(
    <Wrapper>
      { items 
        && items.map((item, index) => (
          <ItemWrapper
            key={index}
            data-id={`${ROOT}-nav-item-${index}`}
            isSelected={item.isSelected}
            onClick={item.onClick}>
            <span>{item.text}</span>
            <BarSelected />
          </ItemWrapper>)) }
      <ButtonWrapper data-id={`${ROOT}-btn-desktop`}>
        <Button
          variant="primary"
          icon={<IconAirplane />}
          iconPos="left"
          onClick={onClickButton}>
          COMPRAR PAQUETES
        </Button>
      </ButtonWrapper>
    </Wrapper>
  );
};
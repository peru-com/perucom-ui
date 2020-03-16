import React from 'react';
import PropTypes from 'prop-types';
import {
  Wrapper,
  ImgWrapper,
  Img,
  ImgOverlay,
  ImgDescription,
  ImgPrice,
  ImgButton,
  Description
} from './styled';

interface Props {
  image?: string;
  price?: string;
  description?: string;
}

export const CardPackage: React.FC<Props> = ({
  image,
  price,
  description
}) => {
  return(
    <Wrapper>
      <ImgWrapper>
        <Img src={image} />
        <ImgOverlay />
        <ImgDescription>
          <div>
            <ImgPrice>{price}</ImgPrice>
            <div>POR PERSONA</div>
          </div>
          <ImgButton>COMPRAR</ImgButton>
        </ImgDescription>
      </ImgWrapper>
      <Description>{description}</Description>
    </Wrapper>
  );
};

CardPackage.propTypes = {
  image: PropTypes.string,
  price: PropTypes.string,
  description: PropTypes.string
};

CardPackage.displayName = 'CardPackage';

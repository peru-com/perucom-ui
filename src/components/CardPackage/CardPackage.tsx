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

interface Image {
  default?: string;
  class?: string;
  main?: string;
}

interface Props {
  link?: string;
  image: Image;
  price?: string;
  description?: string;
  onClick?: Function;
}

export const CardPackage: React.FC<Props> = ({
  link,
  image,
  price,
  description,
  onClick
}) => {
  return(
    <Wrapper
      href={link}
      target="_blank"
      rel="noopener"
      onClick={onClick}>
      <ImgWrapper>
        <Img
          className={image.class}
          src={image.default}
          alt={description}
          data-src={image.main} />
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
  link: PropTypes.string,
  image: PropTypes.objectOf(PropTypes.string),
  price: PropTypes.string,
  description: PropTypes.string,
  onClick: PropTypes.func
};

CardPackage.displayName = 'CardPackage';

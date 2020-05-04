import React from 'react';
import PropTypes from 'prop-types';
import {
  Wrapper,
  ImgWrapper,
  Img,
  BreadCrumb,
  Category,
  PublicationDate,
  Description
} from './styled';

interface Image {
  default: string;
  class?: string;
  mobile?: string;
  tablet?: string;
  laptop?: string;
  desktop?: string;
  description?: string;
}

interface Props {
  image: Image;
  category?: string;
  date?: string;
  title?: string;
  onClick?: Function;
}

export const CardNote: React.FC<Props> = ({
  image,
  category,
  date,
  title,
  link,
  onClick
}) => (
  <Wrapper
    href={link}
    rel="noopener"
    onClick={onClick}>
    <ImgWrapper>
      <Img
          className={image.class}
          src={image.default}
          alt={image.description}
          data-src={image.mobile}
          data-srcset={`
            ${image.mobile} 744w,
            ${image.tablet} 1128w,
            ${image.laptop} 1440w`} />
    </ImgWrapper>
    <BreadCrumb>
      { category && <Category>{category}</Category> }
      { date && <PublicationDate>/ {date}</PublicationDate> }
    </BreadCrumb>
    { title && <Description>{title}</Description> }
  </Wrapper>
);

CardNote.propTypes = {
  image: PropTypes.objectOf(PropTypes.string),
  category: PropTypes.string,
  date: PropTypes.string,
  title: PropTypes.string,
  onClick: PropTypes.func
};

CardNote.displayName = 'CardNote';

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
  mobile?: string;
  tablet?: string;
  laptop?: string;
  desktop?: string;
}

interface Props {
  image?: Image;
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
    onClick={onClick}>
    <ImgWrapper>
      <Img
          src={image.mobile}
          srcSet={`
            ${image.mobile} 744w,
            ${image.tablet} 1128w,
            ${image.laptop} 1440w`}
          alt={image.description} />
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

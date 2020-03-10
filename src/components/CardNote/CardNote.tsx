import React from 'react';
import PropTypes from 'prop-types';
import {
  Wrapper,
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
  description?: string;
}

export const CardNote: React.FC<Props> = ({
  image,
  category,
  date,
  description
}) => (
  <Wrapper>
    <Img 
        src={image.desktop}
        srcSet={`
          ${image.mobile} 480w,
          ${image.tablet} 768w,
          ${image.laptop} 960w,
          ${image.desktop} 1024w`}
        alt={image.description} />
    <BreadCrumb>
      { category && <Category>{category}</Category> }
      { date && <PublicationDate>/ {date}</PublicationDate> }
    </BreadCrumb>
    { description && <Description>{description}</Description> }
  </Wrapper>
);

CardNote.propTypes = {
  image: PropTypes.objectOf(PropTypes.string),
  category: PropTypes.string,
  date: PropTypes.string,
  description: PropTypes.string
};

CardNote.displayName = 'CardNote';
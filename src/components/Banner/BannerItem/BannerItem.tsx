import React from 'react';
import PropTypes from 'prop-types';
import {
  Item,
  Link,
  Img,
  Description,
  Content,
  Category,
  Title,
  PublicationDate,
  Overlay
} from './styled';

interface Image {
  description?: string;
  sizes?: any;
}

interface Item {
  title?: string;
  link?: string;
  date?: string;
  image?: Image;
}

interface Props {
  item?: Item;
  onClick?: Function;
}

export const BannerItem: React.FC<Props> = ({ item, onClick }) => (
  <Item onClick={onClick}>
    <Link href={item.link}>
      <Img
        src={item.image.sizes.desktop}
        srcSet={`
          ${item.image.sizes.mobile} 480w,
          ${item.image.sizes.tablet} 768w,
          ${item.image.sizes.laptop} 960w,
          ${item.image.sizes.desktop} 1024w`}
        alt={item.image.description} />
      <Overlay />
      <Description>
        <Content>
          <Category>{item.category}</Category>
          <Title>{item.title}</Title>
          <PublicationDate>{item.date}</PublicationDate>
        </Content>
      </Description>
    </Link>

  </Item>
);

BannerItem.propTypes = {
  item: PropTypes.any,
  onClick: PropTypes.func
};

BannerItem.displayName = 'BannerItem';

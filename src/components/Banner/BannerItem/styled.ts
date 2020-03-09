import styled from 'styled-components';
import { COLORS } from './../../../ui';

export const Item = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: flex-end;
  flex: 0 0 100%;
  position: relative;
`;

export const Link = styled.a`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  height: 100%;
`;

export const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center center;
`;

export const Description = styled.div`
  width: 100%;
  position: absolute;
  bottom: 0;
  padding: 0 20px 70px;
  box-sizing: border-box;
  color: ${COLORS.WHITE};

  @media(min-width: 768px) {
    padding: 0 70px 70px;
  }
`;

export const Content = styled.div`
  max-width: 1600px;
  margin: 0 auto;
`;

export const Category = styled.div`
  font-family: montserrat-regular;
  font-size: 16px;

  @media(min-width: 768px) {
    font-size: 24px;
  }
`;

export const Title = styled.div`
  font-family: montserrat-black;
  font-size: 20px;

  @media(min-width: 768px) {
    font-size: 40px;
  }
`;

export const PublicationDate = styled.div`
  font-family: montserrat-extralight;
  font-size: 12px;

  @media(min-width: 768px) {
    font-size: 16px;
  }
`;

export const Overlay = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background: linear-gradient(180deg, rgba(0, 0, 0, 0.8) 0%, rgba(0, 0, 0, 0.45) 100%);
`;

Item.displayName = 'Item';
Link.displayName = 'Link';
Img.displayName = 'Img';
Description.displayName = 'Description';
Content.displayName = 'Content';
Category.displayName = 'Category';
Title.displayName = 'Title';
PublicationDate.displayName = 'PublicationDate';
Overlay.displayName = 'Overlay';
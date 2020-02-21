import styled from 'styled-components';
import { COLORS } from './../../../ui';

interface Props {
  image?: string;
}

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

export const Content = styled.div`
  color: ${COLORS.WHITE};
  position: absolute;
  max-width: 1600px;
  padding: 0 20px 70px;
  box-sizing: border-box;
  margin: 0 auto;

  @media(min-width: 768px) {
    padding: 0 70px 70px;
  }
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
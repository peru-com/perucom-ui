import styled from 'styled-components';
import { COLORS } from './../../ui';

export const Wrapper = styled.a`
  display: flex;
  flex-wrap: wrap;
  cursor: pointer;
  width: 100%;
  border-radius: 4px;
  padding: 10px;
  text-decoration: none;
`;

export const ImgWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  position: relative;
  border-radius: 4px;
  width: 100%;
  padding-top: 51.58%;
  background: ${COLORS.DEFAULT};
`;

export const Img = styled.img`
  display: flex;
  flex-wrap: wrap;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  max-height: 260px;
  border-radius: 4px;
  object-fit: cover;
  object-position: center center;
`;

export const BreadCrumb = styled.div`
  display: flex;
  width: 100%;
  font-size: 10px;
  padding-top: 6px;
  box-sizing: border-box;
  font-family: montserrat-medium, sans-serif;

  @media(min-width: 480px) {
    font-size: 12px;
  }
`;

export const Category = styled.div`
  text-transform: uppercase;
  margin-right: 4px;
  color: ${COLORS.PRIMARY};
`;

export const PublicationDate = styled.div`
  color: ${COLORS.TEXT};
  font-family: montserrat-regular, sans-serif;
`;

export const Description = styled.div`
  font-size: 14px;
  color: ${COLORS.TITLE};
  font-family: montserrat-medium, sans-serif;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  overflow: hidden;
`;

const MAIN = 'CardNote';

Wrapper.displayName = `${MAIN}/Wrapper`;
ImgWrapper.displayName = `${MAIN}/ImgWrapper`;
Img.displayName = `${MAIN}/Img`;
BreadCrumb.displayName = `${MAIN}/BreadCrumb`;
Category.displayName = `${MAIN}/Category`;
PublicationDate.displayName = `${MAIN}/PublicationDate`;
Description.displayName = `${MAIN}/Description`;

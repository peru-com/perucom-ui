import styled from 'styled-components';
import { COLORS } from './../../ui';

export const Wrapper = styled.a`
  display: flex;
  flex-wrap: wrap;
  max-width: 500px;
  max-height: 340px;
  padding: 10px;
  box-sizing: border-box;
  text-decoration: none;
`;

export const Img = styled.img`
  display: flex;
  width: 100%;
  max-height: 260px;
  border-radius: 4px;
  object-fit: cover;
  object-position: center center;
`;

export const BreadCrumb = styled.div`
  display: flex;
  font-size: 10px;
  padding-top: 6px;
  box-sizing: border-box;

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
`;

export const Description = styled.div`
  font-size: 14px;
  color: ${COLORS.SECONDARY600};
`;

const MAIN = 'CardNote';

Wrapper.displayName = `${MAIN}/Wrapper`;
Img.displayName = `${MAIN}/Img`;
BreadCrumb.displayName = `${MAIN}/BreadCrumb`;
Category.displayName = `${MAIN}/Category`;
PublicationDate.displayName = `${MAIN}/PublicationDate`;
Description.displayName = `${MAIN}/Description`;

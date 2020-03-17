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
  padding-top: 54.16%;
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

export const ImgOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  max-height: 260px;
  background: linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, #000000 100%);
  border-radius: 4px;
`;

export const ImgDescription = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  position: absolute;
  bottom: 0;
  color: ${COLORS.WHITE};
  font-size: 12px;
  padding: 8px;
  box-sizing: border-box;
  font-family: montserrat-medium, sans-serif;
`;

export const ImgPrice = styled.div`
  font-family: montserrat-bold, sans-serif;
  font-size: 20px;
`;

export const ImgButton = styled.div`
  border: none;
  border-radius: 4px;
  background-color: ${COLORS.PRIMARY};
  color: ${COLORS.WHITE};
  padding: 10px 16px;
  cursor: pointer;
  font-weight: bold;
  font-size: 15px;
  font-family: montserrat-bold, sans-serif;
`;

export const Description = styled.div`
  width: 100%;
  color: ${COLORS.TITLE};
  font-size: 18px;
  margin: 6px 0;
  box-sizing: border-box;
  font-family: montserrat-medium, sans-serif;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  overflow: hidden;
`;

const MAIN = 'CardPackage';
Wrapper.displayName = `${MAIN}/Wrapper`;
ImgWrapper.displayName = `${MAIN}/ImgWrapper`;
Img.displayName = `${MAIN}/Img`;
ImgOverlay.displayName = `${MAIN}/ImgOverlay`;
ImgDescription.displayName = `${MAIN}/ImgDescription`;
ImgPrice.displayName = `${MAIN}/ImgPrice`;
ImgButton.displayName = `${MAIN}/ImgButton`;
Description.displayName = `${MAIN}/Description`;

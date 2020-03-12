import styled from 'styled-components';
import { COLORS } from './../../ui';

export const FooterMainWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  background-color: #F2F7FA;
`;

export const FooterSecondaryWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  background-color: #ECEFF1;
`;

export const FooterMain = styled.div`
  width: 100%;
  max-width: 1600px;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  background-color: #F2F7FA;

  @media(min-width: 768px) {
    flex-wrap: nowrap;
    padding: 0 15px;
    box-sizing: border-box;
  }
`;

export const LogoWrapper = styled.div`
  order: 1;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: 100%;
  padding: 30px 0;

  @media(min-width: 768px) {
    width: auto;
    padding: 20px 20px 20px 0;
    border-right: 1px solid ${COLORS.DEFAULT};
  }
`;

export const Logo = styled.div`
  cursor: pointer;
`;

export const Info = styled.div`
  order: 3;
  font-size: 14px;
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  padding: 30px;

  @media(min-width: 768px) {
    order: 2;
    width: auto;
    padding: 15px;
  }

  @media(min-width: 960px) {
    padding: 30px;
  }
`;

export const Item = styled.a`
  display: flex;
  align-items: center;
  text-decoration: none;
  color: ${COLORS.TEXT};
  padding: 5px 10px;
  box-sizing: border-box;
  min-width: 190px;
`;

export const List = styled.div`
  width: 6px;
  height: 6px;
  border-radius: 50%;
  border: 1px solid ${COLORS.PRIMARY};
  box-sizing: border-box;
  margin-right: 3px;
`;

export const ItemText = styled.div``;

export const SocialMediaWrapper = styled.div`
  order: 2;
  font-size: 16px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: 100%;
  padding: 0 30px;

  @media(min-width: 768px) {
    order: 3;
    width: auto;
    padding: 15px 0;
  }
`;

export const SocialMedia = styled.div`
  background-color: ${COLORS.WHITE};
  font-size: 16px;
  padding: 10px 15px;
  box-sizing: border-box;
  width: 220px;
  border-radius: 4px;

  svg {
    margin: 10px;
  }
`;

export const Text = styled.div`
  text-align: center;
`;

export const IconGroup = styled.div`
  display: flex;
  justify-content: center;
`;

export const IconWrapper = styled.div`
  text-align: center;
  cursor: pointer;
`;

export const FooterSecondary = styled.div`
  width: 100%;
  max-width: 1600px;
  margin: 0 auto;
  display: none;
  color: ${COLORS.TEXT};
  padding: 15px 20px 15px;
  box-sizing: border-box;
  font-size: 16px;

  @media(min-width: 768px) {
    display: flex;
  }
`;

export const Title = styled.div`
  padding: 0 15px;
`;


export const Websites = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

export const WebSite = styled.a`
  padding: 5px 10px;
  box-sizing: border-box;
  text-decoration: none;
  color: ${COLORS.TEXT};
`;
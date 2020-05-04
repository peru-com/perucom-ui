import React from 'react';
import PropTypes from 'prop-types';
import {
  FooterMainWrapper,
  FooterMain,
  FooterSecondaryWrapper,
  FooterSecondary,
  LogoWrapper,
  Logo,
  SocialMediaWrapper,
  SocialMedia,
  IconGroup,
  IconWrapper,
  Info,
  Item,
  Link,
  List,
  ItemText,
  Text,
  Title,
  Websites,
  WebSite
} from './styled';
import { COLORS } from './../../ui';
import { IconFacebook, IconTwitter, IconInstagram } from './../../icons';

interface Content {
  text?: string;
  link?: string;
  onClick?: Function;
}

interface Items {
  info?: Content[];
  websites?: Content[];
}

interface Props {
  items?: Items;
  onClickLogo?: Function;
  onClickFacebook?: Function;
  onClickTwitter?: Function;
  onClickInstagram?: Function;
}

export const Footer: React.FC<Props> = ({
  items,
  onClickLogo,
  onClickFacebook,
  onClickTwitter,
  onClickInstagram
}) => {
  const handleClickHome = () => {
    window.location.href = 'https://peru.com';
    onClickLogo && onClickLogo();
  };

  const handleClickFacebook = () => {
    window.location.href = 'https://www.facebook.com/peru.com.und/';
    onClickFacebook && onClickFacebook();
  };

  const handleClickTwitter = () => {
    window.location.href = 'https://twitter.com/perucomweb';
    onClickTwitter && onClickTwitter();
  };

  const handleClickInstagram = () => {
    window.location.href = 'https://www.instagram.com/portalperucom/';
    onClickInstagram && onClickInstagram();
  };

  return(
    <>
    <FooterMainWrapper>
      <FooterMain>
        <LogoWrapper>
          <Logo onClick={handleClickHome}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="118"
              height="46"
              fill="none"
              viewBox="0 0 122 50"
            >
              <path
                fill={COLORS.PRIMARY}
                d="M106.874 3.015c.313 0 .629-.024.942.006.675.062 1.021.332.621 1.05-2.113 3.789-4.658 7.252-8.081 9.959-1.56 1.233-3.495 1.554-5.481 1.398-.367-.03-.764-.097-.904-.464-.162-.416.229-.637.485-.87 2.818-2.553 5.08-5.538 6.929-8.852.753-1.352 2.96-2.208 5.489-2.227zM91.633 45.726c0-.987-.037-1.978.011-2.963.054-1.099.7-1.468 1.582-.872.364.246.507.262.882.049 1.096-.624 2.251-.656 3.28.135.458.353.715.24 1.15-.006 2.628-1.498 4.903-.159 4.93 2.877.011 1.258.003 2.516-.002 3.773-.003.68-.303 1.164-1.029 1.123-.658-.035-.874-.518-.869-1.136.011-1.212.019-2.426-.008-3.638-.021-.983-.321-1.822-1.498-1.844-1.18-.018-1.517.802-1.546 1.793-.035 1.211-.014 2.426-.025 3.638-.005.645-.2 1.206-.96 1.195-.756-.01-.94-.588-.948-1.22-.016-1.211 0-2.426-.019-3.638-.013-.939-.297-1.724-1.409-1.765-1.163-.04-1.573.732-1.614 1.733-.048 1.212-.03 2.426-.013 3.638.008.659-.149 1.225-.893 1.244-.82.025-1.018-.57-1.007-1.282.016-.947.005-1.889.005-2.834zM74.403 45.923c.016-3.255 1.716-4.831 4.426-4.337.683.124 1.263.429 1.733.947.343.378.437.818.14 1.223-.32.434-.807.413-1.193.1-.96-.783-1.916-1.072-2.785.051-.64.826-.459 3.363.227 3.951.715.61 1.49.559 2.213.014.534-.4 1.11-.837 1.579-.073.413.672-.097 1.201-.65 1.552-1.277.81-2.624.86-3.955.16-1.543-.816-1.657-2.32-1.735-3.588zM72.757 48.739c-.103.785-.508 1.225-1.239 1.2-.734-.023-1.171-.517-1.144-1.224.027-.7.486-1.177 1.225-1.145.723.032 1.104.497 1.158 1.169zM116.898 31.97c-2.469 2.5-5.5 2.901-8.712 2.556-2.731-.294-3.905-1.798-3.922-4.542-.008-1.269.243-2.5.454-3.739.353-2.075.88-4.129.472-6.277-.156-.82-.55-1.026-1.284-.985-2.586.143-3.296.896-3.444 3.435-.2 3.38-.58 6.74-2.562 9.638-1.379 2.02-3.29 2.815-5.732 2.29-2.392-.516-3.938-1.863-4.419-4.311-.566-2.885.214-5.609 1.007-8.335.181-.62.84-1.365.37-1.848-.486-.5-1.371-.135-2.057.043-3.26.837-5.514 3.093-7.622 5.52-1.649 1.897-2.958 4.05-4.496 6.266-.132-.313-.221-.432-.23-.556-.342-5.106.802-9.721 4.483-13.495.235-.243.71-.402.554-.828-.154-.416-.616-.286-.958-.292-2.65-.043-5.299-.137-7.944.26-5.144.771-8.328 3.5-9.39 8.164a20.435 20.435 0 00-.374 2.394c-.238 2.297-.656 4.531-1.995 6.494-1.169 1.71-2.77 2.528-4.834 2.334-2.07-.194-3.438-1.333-4.305-3.212-.429-.934-.34-1.392.618-1.992 3.52-2.202 6.489-5.003 8.257-8.839 1.098-2.386.108-3.738-2.521-3.695-.313.006-.63.03-.94.073-5.692.815-10.026 5.09-10.909 10.75-.596 3.836 1.69 7.29 5.471 8.292 1.83.483 3.654.334 5.479-.003 5.64-1.042 9.33-4.583 10.226-9.843.203-1.196.3-2.408.516-3.6.818-4.476 2.067-5.607 6.564-5.963.515-.04 1.222-.423 1.522.057.364.586-.383 1.001-.68 1.463-3.004 4.65-4.359 9.603-2.934 15.122.335 1.304 1.06 1.625 2.267 1.38 2.248-.457 4.13-1.447 5.406-3.442a323.14 323.14 0 014-6.078c.222-.332.327-.86.999-.845-.079.559-.178 1.085-.224 1.617-.456 5.45 1.384 7.846 5.206 8.664 3.838.823 7.503.307 10.863-1.852.287-.183.61-.788.994-.262 1.23 1.69 3.125 1.836 4.917 2.146 4.111.713 8.159.526 11.997-1.29 1.703-.807 3.174-1.927 4.248-3.73-1.684-.062-3.29-.23-4.402.896zM52.663 21.166c.45-.391.966-1.044 1.592-.704.667.361.354 1.128.192 1.716-.834 2.996-2.89 5.155-5.18 7.622-.094-3.644.888-6.456 3.396-8.634zM45.265 13.25C43.548 6.694 39.1 2.548 32.758.915 23.735-1.405 15.444.8 7.965 6.27c-1.017.745-1.12 1.474-.72 2.626 2.777 8.054 5.486 16.13 8.199 24.204.135.4.448.791.221 1.38-3.303-.456-6.18-1.755-8.353-4.34-.705-.84-1.46-1.112-2.464-.958-1.53.232-2.929.812-4.27 1.562-.67.375-.777.705-.219 1.317 1.258 1.38 2.667 2.532 4.348 3.347 3.417 1.657 7.055 2.051 10.77 1.738 1.087-.091 1.446.219 1.754 1.204.93 2.996 1.964 5.96 3.004 8.923.278.793.4 2.048 1.605 1.749 1.226-.305.705-1.506.594-2.313-.4-2.937-1.071-5.83-1.873-8.677-.367-1.301.065-1.58 1.19-1.792a39.854 39.854 0 0010.904-3.752c4.68-2.405 8.729-5.511 11.28-10.259 1.522-2.834 2.15-5.846 1.33-8.98zM33.797 28.205c-3.676 3.54-8.121 5.538-13.147 6.302-.629.094-.947.002-1.133-.718-2.281-8.775-4.497-17.563-6.284-26.456-.156-.777.222-1.063.672-1.422 4.287-3.43 9.037-3.924 14.09-2.113 6.345 2.275 10.568 7.88 10.56 15.543.003 2.586-1.797 6.01-4.758 8.864zM89.547 44.509c-.378-2.032-1.59-3.031-3.64-2.982-2.287.054-3.469 1.473-3.453 4.17 0 .313-.024.628.006.939.191 2.024 1.433 3.247 3.365 3.328 2.084.086 3.355-.959 3.73-3.05a6.67 6.67 0 00-.008-2.405zm-1.962 2.45c-.146.818-.68 1.272-1.48 1.31-.73.035-1.31-.308-1.551-1.045a4.673 4.673 0 01.019-3.033c.254-.735.831-1.015 1.582-.983.717.032 1.184.43 1.373 1.082.135.467.14.972.2 1.423-.049.448-.073.853-.143 1.247z"
              ></path>
            </svg>
          </Logo>
        </LogoWrapper>
        <Info>
          { items
            && items.info.map((item, index) =>
            <Item
              key={index}
              onClick={item.onClick}>
              <Link
                href={item.link}
                target="_blank"
                rel="noopener">
                <List />
                <ItemText>{item.text}</ItemText>
              </Link>
            </Item>) }
        </Info>
        <SocialMediaWrapper>
          <SocialMedia>
            <Text>Síguenos en:</Text>
            <IconGroup>
              <IconWrapper onClick={handleClickFacebook}>
                <IconFacebook color={COLORS.PRIMARY} />
              </IconWrapper>
              <IconWrapper onClick={handleClickTwitter}>
                <IconTwitter color={COLORS.PRIMARY} />
              </IconWrapper>
              <IconWrapper onClick={handleClickInstagram}>
                <IconInstagram color={COLORS.PRIMARY} />
              </IconWrapper>
            </IconGroup>
          </SocialMedia>
        </SocialMediaWrapper>
      </FooterMain>
    </FooterMainWrapper>
    { (items && items.websites) &&
      <FooterSecondaryWrapper>
        <FooterSecondary>
          <Title>Visite también:</Title>
          <Websites>
            { items.websites.map((website, index) =>
                <WebSite
                  key={index}
                  href={website.link}
                  target="_blank"
                  rel="noopener"
                  onClick={website.onClick}>
                  <ItemText>{website.text}</ItemText>
                </WebSite>) }
          </Websites>
        </FooterSecondary>
      </FooterSecondaryWrapper> }
    </>
  );
};

Footer.propTypes = {
  items: PropTypes.any,
  onClickLogo: PropTypes.func,
  onClickFacebook: PropTypes.func,
  onClickTwitter: PropTypes.func,
  onClickInstagram: PropTypes.func
}

Footer.displayName = 'Footer';

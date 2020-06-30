import React from 'react';
import PropTypes from 'prop-types';
import {
  Link,
  Region,
  Wrapper,
  Img
} from "./styled";

interface Props {
  image: string;
  region: string;
  path: string;
}

export const CardRegion: React.FC<Props> = ({
  image,
  region,
  path
}) => (
  <Link href={path}>
    <Wrapper>
      <Img
        src={image}
      />
      <Region>{region}</Region>
    </Wrapper>
  </Link>
);

CardRegion.propTypes = {
  image: PropTypes.string,
  region: PropTypes.string,
  path: PropTypes.string,
};

CardRegion.displayName = 'CardRegion';

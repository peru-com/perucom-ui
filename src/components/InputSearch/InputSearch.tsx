import React from 'react';
import PropTypes from 'prop-types';
import { Input } from './../Input';
import { IconSearch } from './../../icons';

interface Props {
  name: string;
  onSearch?: Function;
}

export const InputSearch: React.FC<Props> = ({
  name,
  onSearch,
  fullWidth
}) => {
  return(
    <Input
      name={name}
      placeholder="Buscar..."
      icon={<IconSearch color="#F52118" />}
      iconClick={(value) => onSearch(value)}
      onKeyDown={(value) => onSearch(value)}
      fullWidth={fullWidth}
    />
  );
};

InputSearch.propTypes = {
  name: PropTypes.string,
  onSearch: PropTypes.func
};

InputSearch.displayName = 'InputSearch';
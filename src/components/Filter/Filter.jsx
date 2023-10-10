import React from 'react';
import PropTypes from 'prop-types';
import { FilterInput, ContainerInput } from './Filter.styled';

const Filter = ({ filter, handleFilterChange }) => (
  <ContainerInput>
    <FilterInput
      type="text"
      placeholder="Search Contacts"
      value={filter}
      onChange={(e) => handleFilterChange(e.target.value)}
    />
  </ContainerInput>
);

Filter.propTypes = {
  filter: PropTypes.string.isRequired,
  handleFilterChange: PropTypes.func.isRequired,
};

export default Filter;

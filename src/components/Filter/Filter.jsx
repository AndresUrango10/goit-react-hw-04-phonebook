import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { FilterInput,ContainerInput } from './Filter.styled';

export class Filter extends Component {
  render() {
    const { filter, handleFilterChange } = this.props;
    return (
      <ContainerInput>
        <FilterInput
          type="text"
          placeholder="Search Contacts"
          value={filter}
          onChange={e => handleFilterChange(e.target.value)}
        />
      </ContainerInput>
    );
  }
}

Filter.propTypes = {
  filter: PropTypes.string.isRequired,
  handleFilterChange: PropTypes.func.isRequired,
};

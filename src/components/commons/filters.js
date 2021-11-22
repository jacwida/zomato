import React from 'react';
import styled from 'styled-components';
import FilterItem from './filterItem';

const Filters = ({ filters: filtersList }) => {
  return (
    <FilterContainer>
      {filtersList &&
        filtersList.map((filter) => (
          <FilterItem key={filter.id} filter={filter} />
        ))}
    </FilterContainer>
  );
};

export default Filters;
const FilterContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 1rem 0;
`;

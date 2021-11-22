import React from 'react';
import styled from 'styled-components';

const FilterItem = ({ filter }) => {
  return (
    <FilterItemContainer>
      <div>{filter.icon}</div>
      <FilterTitle>{filter.title}</FilterTitle>
    </FilterItemContainer>
  );
};

export default FilterItem;
const FilterItemContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 1.5rem;
  color: #9c9c9c;
  border: 1px solid rgb(207, 207, 207);
  border-radius: 0.5rem;
  padding: 0.5rem;
  cursor: pointer;
`;

const FilterTitle = styled.div`
  font-size: 0.9rem;
`;

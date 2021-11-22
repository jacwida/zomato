import React from 'react';
import styled from 'styled-components';

const DeliveryItem = ({ item }) => {
  return (
    <DeliveryItemContainer>
      <DeliveryItemImageContainer>
        <DeliveryItemImage src={item.cover} alt={item.title} />
      </DeliveryItemImageContainer>
      <DeliveryItemTitle>{item.title}</DeliveryItemTitle>
    </DeliveryItemContainer>
  );
};

export default DeliveryItem;
const DeliveryItemContainer = styled.div``;
const DeliveryItemImageContainer = styled.div`
  width: 16.3rem;
  height: 12rem;
`;
const DeliveryItemImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  background-position: center;
  border-radius: 0.8rem;
`;
const DeliveryItemTitle = styled.div`
  font-size: 1.3rem;
  color: #363636;
  text-overflow: ellipsis;
  overflow: hidden;
  margin-top: 6px;
`;

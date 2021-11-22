import React from 'react';
import Filters from './commons/filters';
import { VscSettings } from 'react-icons/vsc';
import { RiArrowUpDownFill } from 'react-icons/ri';
import styled from 'styled-components';
import DeliveryCollections from './commons/deliveryCollections';

const Delivery = () => {
  const deliveryFilters = [
    {
      id: 1,
      title: 'Filters',
      icon: <IconSettings />,
    },
    {
      id: 2,
      title: 'Delivery Time',
      icon: <IconDelivery />,
    },
    {
      id: 3,
      title: 'Pure Veg',
    },
    {
      id: 4,
      title: 'Rating: 4.0+',
    },
    {
      id: 5,
      title: 'Great Offers',
    },
  ];
  return (
    <div>
      <Filters filters={deliveryFilters} />
      <DeliveryCollections />
    </div>
  );
};

export default Delivery;
const IconSettings = styled(VscSettings)`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 0.3rem;
  font-size: 1rem;
`;

const IconDelivery = styled(RiArrowUpDownFill)`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 0.3rem;
  font-size: 1rem;
`;

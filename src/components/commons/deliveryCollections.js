import React from 'react';
import styled from 'styled-components';
import ArrowNext from './arrowNext';
import ArrowPrevious from './arrowPrevious';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import DeliveryItem from './deliveryItem';

const deliveryItems = [
  {
    id: 1,
    title: 'Pizza',
    cover: '/images/foods-category/pizza.jpg',
  },
  {
    id: 2,
    title: 'Burger',
    cover: '/images/foods-category/burger.jpg',
  },
  {
    id: 3,
    title: 'Rolls',
    cover: '/images/foods-category/rolls.jpg',
  },
  {
    id: 4,
    title: 'Cake',
    cover: '/images/foods-category/cake.jpg',
  },
  {
    id: 5,
    title: 'Biryani',
    cover: '/images/foods-category/biryani.jpg',
  },
  {
    id: 6,
    title: 'Chaat',
    cover: '/images/foods-category/chaat.jpg',
  },
  {
    id: 7,
    title: 'Momos',
    cover: '/images/foods-category/momos.jpg',
  },
  {
    id: 8,
    title: 'Paneer',
    cover: '/images/foods-category/panner.jpg',
  },
  {
    id: 9,
    title: 'Chicken',
    cover: '/images/foods-category/chicken.jpg',
  },
  {
    id: 10,
    title: 'Paratha',
    cover: '/images/foods-category/paratha.jpg',
  },
  {
    id: 11,
    title: 'Thali',
    cover: '/images/foods-category/thali.jpg',
  },
  {
    id: 12,
    title: 'Chole',
    cover: '/images/foods-category/chole.jpg',
  },
];

const DeliveryCollections = () => {
  const settings = {
    infinite: false,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <ArrowNext />,
    prevArrow: <ArrowPrevious />,
  };
  return (
    <DeliveryContainer>
      <DeliveryCollectionsTitle>
        Eat What Makes You Happy
      </DeliveryCollectionsTitle>

      <Slider {...settings}>
        {deliveryItems.map((item) => (
          <DeliveryItem key={item.id} item={item} />
        ))}
      </Slider>
    </DeliveryContainer>
  );
};

export default DeliveryCollections;
const DeliveryContainer = styled.div`
  .slick-prev:before {
    color: black;
    padding: 1rem;
    font-size: 1.1rem;
  }
  .slick-next:before {
    color: black;
    padding: 1rem;
    font-size: 1.1rem;
  }
`;
const DeliveryCollectionsTitle = styled.div`
  font-size: 1.8rem;
  font-weight: 600;
  margin-bottom: 1rem;
  color: #1c1c1c;
`;

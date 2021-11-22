import React from 'react';
import './optionsTab.css';
import styled from 'styled-components';

const OptionsTab = ({ activeTab, setActiveTab }) => {
  const tabs = [
    {
      id: 1,
      name: 'Delivery',
      backdrop: '#fceec0',
      active_img: '/images/delivery_active.png',
      inactive_img: '/images/delivery_inactive.png',
    },
    {
      id: 2,
      name: 'Dinning Out',
      backdrop: 'rgb(229, 243, 243)',
      active_img: '/images/dinningout_active.png',
      inactive_img: '/images/dinningout_inactive.png',
    },
    {
      id: 3,
      name: 'NightLife',
      backdrop: 'rgb(229, 243, 243)',
      active_img: '/images/nightlife_active.png',
      inactive_img: '/images/nightlife_inactive.png',
    },
  ];
  return (
    <TabsContainer>
      {tabs.map((tab) => (
        <TabContainer
          key={tab.id}
          onClick={() => setActiveTab(tab.name)}
          style={{
            color: `${activeTab === tab.name ? '#ef4f5f' : ' #828282'}`,
            borderBottom: `${
              activeTab === tab.name ? '2px solid #ef4f5f' : ''
            }`,
          }}
        >
          <ImageContainer
            style={{
              background: `${
                activeTab === tab.name ? tab.backdrop : '#f8f8f8'
              }`,
            }}
          >
            <TabImage
              src={`${
                activeTab === tab.name ? tab.active_img : tab.inactive_img
              }`}
            />
          </ImageContainer>
          <TabName> {tab.name}</TabName>
        </TabContainer>
      ))}
    </TabsContainer>
  );
};

export default OptionsTab;
const TabsContainer = styled.div`
  display: flex;
`;

const TabContainer = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  margin-right: 1.2rem;
  padding: 1rem;
`;
const ImageContainer = styled.div`
  width: 2.5rem;
  height: 2.5rem;
  padding: 1rem;
  margin-right: 0.4rem;
  border-radius: 4rem;
`;
const TabImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
const TabName = styled.div`
  font-size: 1.2rem;
  font-weight: 500;
`;

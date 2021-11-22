import React, { useState } from 'react';
import Header from '../components/commons/header';
import OptionsTab from '../components/commons/optionsTab';
import Delivery from '../components/delivery';
import DinningOut from '../components/diningOut';
import NightLife from '../components/nightLife';

const Home = () => {
  const [activeTab, setActiveTab] = useState('Delivery');

  const getActiveTab = (tab) => {
    switch (tab) {
      case 'Delivery':
        return <Delivery />;
      case 'Dinning Out':
        return <DinningOut />;
      case 'NightLife':
        return <NightLife />;
      default:
        return <Delivery />;
    }
  };
  return (
    <div>
      <Header />
      <OptionsTab activeTab={activeTab} setActiveTab={setActiveTab} />
      {getActiveTab(activeTab)}
    </div>
  );
};

export default Home;

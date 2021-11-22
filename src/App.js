import React from 'react';
import Home from './pages/home';
import styled from 'styled-components';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const App = () => {
  return (
    <AppContainer>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </AppContainer>
  );
};

export default App;
const AppContainer = styled.div`
  margin: 0 auto;

  @media (min-width: 1024px) {
    max-width: 1100px;
  }
  /* @media (min-width: 640px) { ... } sm */
  /* @media (min-width: 768px) { ... }  md*/
  /* @media (min-width: 1024px) { ... } lg*/
  /* @media (min-width: 1280px) { ... }  xl*/
`;

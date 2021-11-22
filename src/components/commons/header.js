import React from 'react';
import styled from 'styled-components';
import { FaMapMarkerAlt } from 'react-icons/fa';
import { BsCaretDownFill } from 'react-icons/bs';
import { FiSearch } from 'react-icons/fi';
import { Link } from 'react-router-dom';
const Header = () => {
  return (
    <HeaderContainer>
      <ImageLogo src="/images/logo.png" />
      <HeaderRight>
        <HeaderRightLocationSearchContainer>
          <LocationWrapper>
            <LocationIcon />
            <LocationPlace
              type="text"
              placeholder="Laroo, Gulu university"
              disabled
            />
            <CaretIcon />
          </LocationWrapper>
          <LocationSearchSeparator></LocationSearchSeparator>
          <HeaderSearchContainer>
            <HeaderSearchIcon />
            <HeaderSearchInput
              type="search"
              placeholder="Search restaurant,cuisine or dish"
            />
          </HeaderSearchContainer>
        </HeaderRightLocationSearchContainer>
        <HeaderLoginSignUp>
          <HeaderLogin>
            <ButtonLink to="/login">Login</ButtonLink>
          </HeaderLogin>
          <HeaderSignup>
            <ButtonLink to="/signup">Sign Up</ButtonLink>
          </HeaderSignup>
        </HeaderLoginSignUp>
      </HeaderRight>
    </HeaderContainer>
  );
};

export default Header;
const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  margin-bottom: 0.7rem;
`;
const ImageLogo = styled.img`
  height: 1.6rem;
  max-width: 8rem;
  margin-right: 2.4rem;
`;
const HeaderRight = styled.div`
  display: flex;
  flex: 1;
  justify-content: space-between;
  align-items: center;
  height: 4.5rem;
`;
const HeaderRightLocationSearchContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 3rem;
  width: 75%;
  box-shadow: rgb(28 28 28/8%) 0px 2px 8px;
  border: 1px solid rgb(232, 232, 232);
  border-radius: 0.4rem;
  color: #828282;
`;
const LocationWrapper = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
  padding: 0 0.5rem;
`;
const LocationIcon = styled(FaMapMarkerAlt)`
  display: flex;
  justify-content: center;
  align-items: center;
  color: #ff00009e;
  margin-right: 0.4rem;
  font-size: 1.2rem;
`;

const LocationPlace = styled.input`
  border: none;
  color: #828282;
  font-size: 0.9rem;
  &:focus-visible {
    outline: none;
  }
`;
const CaretIcon = styled(BsCaretDownFill)`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const LocationSearchSeparator = styled.div`
  height: 1.2rem;
  border: 1px solid grey;
`;

const HeaderSearchContainer = styled.div`
  flex: 2;
  display: flex;
  align-items: center;
`;
const HeaderSearchIcon = styled(FiSearch)`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.3rem;
  margin: 0 0.6rem;
`;
const HeaderSearchInput = styled.input`
  border: none;
  font-size: 0.9rem;
  width: 80%;

  &:focus-visible {
    outline: none;
  }
`;

const HeaderLoginSignUp = styled.div`
  display: flex;
  justify-content: space-between;
`;

const HeaderLogin = styled.div`
  font-size: 1.1rem;
`;
const ButtonLink = styled(Link)`
  text-decoration: none;
  color: #828282;
`;
const HeaderSignup = styled.div`
  margin: 0 1rem;
  font-size: 1.1rem;
`;

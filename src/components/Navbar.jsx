import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

import { MainText } from './../styles/AppStyles';

const NavLayout = MainText(styled.nav`
  display: flex;
  position: fixed;
  width: 90%;
  padding: 1em 5%;
  height: 10vh;
  align-items: center;
  justify-content: space-evenly;
`);

const LogoSection = styled.div`
  display: flex;
  height: 100%;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 1.5em;
  flex: 2;
`;

const LinksSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  flex: 10;
`;

const Link = styled(NavLink)`
  text-decoration: none;
  font-size: 1.2em;
  padding: 0 1em;
  color: white;

  &:visited {
    text-decoration: none;
  }
`;

const Navbar = () => (
  <NavLayout>
    <LogoSection><Link to="/">Logo</Link></LogoSection>
    <LinksSection>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
    </LinksSection>
  </NavLayout>
);

export default Navbar;

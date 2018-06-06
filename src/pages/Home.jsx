import React from 'react';
import styled from 'styled-components';
import { MainText } from './../styles/AppStyles';

const Layout = MainText(styled.div`
  height: 100vh;
  background: teal;
  display: flex;
  align-items: center;
  justify-content: center;
`);

const Header = styled.h1`
  color: #111;
  font-size: 4em;  
  color: white;
`;

const Home = () => (
  <Layout>
    <Header>Home</Header>
  </Layout>
);

export default Home;
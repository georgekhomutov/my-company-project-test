import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import styled from 'styled-components';

const Main = styled.main`
  padding: 40px;
`;

const Home: React.FC = () => {
  return (
    <div>
      <Header />
      <Main>
        <h1>Добро пожаловать на сайт нашей компании</h1>
        <p>Здесь вы можете найти информацию о наших проектах и связаться с нами.</p>
      </Main>
      <Footer />
    </div>
  );
};

export default Home;

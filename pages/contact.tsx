import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Breadcrumb from '../components/Breadcrumb';
import ContactForm from '../components/ContactForm';
import styled from 'styled-components';

const Main = styled.main`
  padding: 40px;
`;

const Contact: React.FC = () => {
  return (
    <div>
      <Header />
      <Breadcrumb items={[{ text: 'Главная', href: '/' }, { text: 'Контакты', href: '/contact' }]} />
      <Main>
        <h1>Свяжитесь с нами</h1>
        <ContactForm />
      </Main>
      <Footer />
    </div>
  );
};

export default Contact;

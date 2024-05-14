import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  background-color: #fff;
  padding: 20px 40px;
  text-align: center;
  border-top: 1px solid #eaeaea;
`;

const Footer: React.FC = () => {
  return (
    <FooterContainer>
      <p>&copy; {new Date().getFullYear()} My Company</p>
    </FooterContainer>
  );
};

export default Footer;

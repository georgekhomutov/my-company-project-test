import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';

const HeaderContainer = styled.header`
  background-color: #fff;
  padding: 20px 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #eaeaea;
`;

const Nav = styled.nav`
  ul {
    list-style: none;
    display: flex;
    gap: 20px;
  }

  li {
    display: inline;
  }
`;

const Logo = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
  color: #333;
`;

const Header: React.FC = () => {
  return (
    <HeaderContainer>
      <Logo>My Company</Logo>
      <Nav>
        <ul>
          <li><Link href="/">Главная</Link></li>
          <li><Link href="/projects">Проекты</Link></li>
          <li><Link href="/contact">Контакты</Link></li>
        </ul>
      </Nav>
    </HeaderContainer>
  );
};

export default Header;

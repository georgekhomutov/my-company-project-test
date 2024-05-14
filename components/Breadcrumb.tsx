import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';

interface BreadcrumbProps {
  items: { text: string; href: string }[];
}

const BreadcrumbNav = styled.nav`
  margin: 20px 0;
  ol {
    list-style: none;
    display: flex;
    gap: 10px;
  }

  li::after {
    content: '/';
    margin-left: 10px;
  }

  li:last-child::after {
    content: '';
  }
`;

const Breadcrumb: React.FC<BreadcrumbProps> = ({ items }) => {
  return (
    <BreadcrumbNav aria-label="breadcrumb">
      <ol>
        {items.map((item, index) => (
          <li key={index}>
            <Link href={item.href}>{item.text}</Link>
          </li>
        ))}
      </ol>
    </BreadcrumbNav>
  );
};

export default Breadcrumb;

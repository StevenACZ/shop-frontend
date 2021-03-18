// React
import React from 'react';

// Styles
import { Container } from './Styles';

// Components
import Header from '../header/Header';

interface Props {}

const Layout: React.FC<Props> = ({ children }) => {
  return (
    <>
      <Header />

      <Container>{children}</Container>
    </>
  );
};

export default Layout;

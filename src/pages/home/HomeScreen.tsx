// React
import React from 'react';

// Styles
import { HomeScreenStyled, Header } from './Styles';

// Components
import ProductList from '../../components/home/product-list/ProductList';

interface Props {}

const HomeScreen: React.FC<Props> = () => {
  return (
    <HomeScreenStyled>
      <Header>
        <h2>Products</h2>
      </Header>
      <ProductList />
    </HomeScreenStyled>
  );
};

export default HomeScreen;

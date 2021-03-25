// React
import React from 'react';

// Styles
import { HomeScreenStyled } from './Styles';

// Components
import ProductList from '../../components/product/product-list/ProductList';

interface Props {}

const HomeScreen: React.FC<Props> = () => {
  return (
    <HomeScreenStyled>
      <h2>Product</h2>
      <ProductList />
    </HomeScreenStyled>
  );
};

export default HomeScreen;

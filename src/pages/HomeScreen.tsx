// React
import React from 'react';

// Components
import ProductList from '../components/product/product-list/ProductList';

interface Props {}

const HomeScreen: React.FC<Props> = () => {
  return (
    <>
      <h1>Product</h1>
      <ProductList />
    </>
  );
};

export default HomeScreen;

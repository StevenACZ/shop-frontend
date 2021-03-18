// React
import React from 'react';

// Components
import ProductList from '../components/product-list/ProductList';

interface Props {}

const ProductScreen: React.FC<Props> = () => {
  return (
    <>
      <h1>Product</h1>
      <ProductList />
    </>
  );
};

export default ProductScreen;

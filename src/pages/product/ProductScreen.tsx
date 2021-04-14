// React
import React from 'react';

// Styles
import { ProductScreenStyled, Header } from './Styles';

// Components
import ProductDetails from '../../components/product/product-details/ProductDetails';
import ProductReviews from '../../components/product/product-reviews/ProductReviews';

interface Props {}

const ProductScreen: React.FC<Props> = () => {
  return (
    <ProductScreenStyled>
      <Header>
        <h2>Product Details</h2>
      </Header>
      <ProductDetails />
      <ProductReviews />
    </ProductScreenStyled>
  );
};

export default ProductScreen;

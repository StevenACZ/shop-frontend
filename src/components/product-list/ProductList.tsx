// React
import React from 'react';

// Styles
import { ProductListStyled } from './Styles';

// Types
import products from '../../data/products';

// Components
import ProductListItem from './product-list-item/ProductListItem';

interface Props {}

const ProductList: React.FC<Props> = () => {
  return (
    <ProductListStyled>
      {products.map((product) => (
        <ProductListItem key={product._id} {...product} />
      ))}
    </ProductListStyled>
  );
};

export default ProductList;

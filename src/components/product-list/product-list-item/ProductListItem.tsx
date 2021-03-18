// React
import React from 'react';

// Styles
import { ProductListItemStyled, ProductDetails, ProductImage } from './Styles';

// Types
import { Product } from '../../../data/products';

// Antd Components
import { Rate } from 'antd';

const ProductListItem: React.FC<Product> = ({
  name,
  image,
  price,
  rating,
  numReviews,
}) => {
  return (
    <ProductListItemStyled>
      <ProductImage>
        <img src={image} alt={name} />
      </ProductImage>

      <ProductDetails>
        <p>{name}</p>
        <div>
          <Rate allowHalf disabled defaultValue={rating} />
          <span>{numReviews} reviews</span>
        </div>
        <h3>${price.toFixed(2)}</h3>
      </ProductDetails>
    </ProductListItemStyled>
  );
};

export default ProductListItem;

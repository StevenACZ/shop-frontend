// React
import React from 'react';

// React Router
import { useHistory } from 'react-router';

// Styles
import { ProductListItemStyled, ProductDetails, ProductImage } from './Styles';

// Types
import { Product } from '../../../../data/products';

// Antd Components
import { Rate } from 'antd';

const ProductListItem: React.FC<Product> = ({
  _id,
  name,
  image,
  price,
  rating,
  numReviews,
}) => {
  const history = useHistory();

  const productDetails = () => {
    history.push(`/product/${_id}`);
  };
  return (
    <ProductListItemStyled>
      <ProductImage onClick={productDetails}>
        <img src={image} alt={name} />
      </ProductImage>

      <ProductDetails>
        <p onClick={productDetails}>{name}</p>
        <div>
          <Rate allowHalf disabled defaultValue={rating} />
          <span>{numReviews} reviews</span>
        </div>
        <h3>${price?.toFixed(2)}</h3>
      </ProductDetails>
    </ProductListItemStyled>
  );
};

export default ProductListItem;

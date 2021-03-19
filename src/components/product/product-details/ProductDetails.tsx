// React
import React from 'react';

// React Router
import { useHistory } from 'react-router';

// Styles
import {
  ProductDetailsStyled,
  Header,
  Main,
  Image,
  Description,
  AddToCart,
} from './Styles';

// Types
import { Product } from '../../../data/products';

// Antd Components
import { InputNumber, Rate } from 'antd';

// Components
import Button from '../../button/Button';

const ProductDetails: React.FC<Product> = ({
  name,
  image,
  description,
  price,
  countInStock,
  rating,
  numReviews,
}) => {
  const history = useHistory();

  return (
    <ProductDetailsStyled>
      <Header>
        <Button onClick={() => history.goBack()}>Go Back</Button>
      </Header>

      <Main>
        <Image>
          <img src={image} alt={name} />
        </Image>

        <Description>
          <div>
            <h2>{name}</h2>
          </div>
          <div>
            <Rate disabled defaultValue={rating} />
            <p>{numReviews} reviews</p>
          </div>
          <div>
            <p>Price: ${price?.toFixed(2)}</p>
          </div>
          <div>
            <p>{description}</p>
          </div>
        </Description>

        <AddToCart>
          <div>
            <span>Price:</span>
            <span>${price.toFixed(2)}</span>
          </div>
          <div>
            <span>Status:</span>
            <span>{countInStock > 0 ? 'In Stock' : 'Out of Stock'}</span>
          </div>
          <div>
            <span>Quantity:</span>
            <InputNumber
              min={1}
              max={countInStock}
              defaultValue={countInStock}
            />
          </div>
          <div>
            <Button width="100%" disabled={countInStock === 0}>
              Add to cart
            </Button>
          </div>
        </AddToCart>
      </Main>
    </ProductDetailsStyled>
  );
};

export default ProductDetails;

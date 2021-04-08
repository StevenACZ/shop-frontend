// React
import React, { useEffect, useState } from 'react';

// Redux
import { useDispatch, useSelector } from 'react-redux';

// Redux - Actions
import { listProductDetails } from '../../../actions/product/productDetails';

// Redux - Slices
import {
  selectError,
  selectLoading,
  selectProduct,
} from '../../../slices/productDetails';

// React Router
import { useHistory, useParams } from 'react-router';

// Styles
import {
  ProductDetailsStyled,
  Header,
  Main,
  Image,
  Description,
  AddToCart,
} from './Styles';

// Antd Components
import { InputNumber, Rate } from 'antd';

// Antd Components
import { Alert, Button as ButtonAnt, Spin } from 'antd';

// Components
import Button from '../../button/Button';

interface Props {}

const ProductDetails: React.FC<Props> = () => {
  // History
  const history = useHistory();

  // Dispatch
  const dispatch = useDispatch();

  // Selector
  const product = useSelector(selectProduct) as {
    _id: string;
    name: string;
    image: string;
    description: string;
    price: number;
    countInStock: number;
    rating: number;
    numReviews: number;
  };
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);

  const [quantity, setQuantity] = useState<number>();
  const { productID } = useParams() as { productID: string };

  useEffect(() => {
    dispatch(listProductDetails(productID));
  }, [dispatch, productID]);

  useEffect(() => {
    if (product) {
      setQuantity(product.countInStock);
    }
  }, [product]);

  const onChange = (value: number) => setQuantity(value);

  const addToCartHandler = () => {
    history.push(`/cart/${product._id}?qty=${quantity}`);
  };

  return (
    <Spin spinning={loading}>
      {product && (
        <ProductDetailsStyled>
          <Header>
            <Button onClick={() => history.goBack()}>Go Back</Button>
          </Header>

          <Main>
            <Image>
              <img src={product.image} alt={product.name} />
            </Image>

            <Description>
              <div>
                <h2>{product.name}</h2>
              </div>
              <div>
                <Rate disabled defaultValue={product.rating} />
                <p>{product.numReviews} reviews</p>
              </div>
              <div>
                <p>Price: ${product.price.toFixed(2)}</p>
              </div>
              <div>
                <p>{product.description}</p>
              </div>
            </Description>

            <AddToCart>
              <div>
                <span>Price:</span>
                <span>${product.price.toFixed(2)}</span>
              </div>
              <div>
                <span>Status:</span>
                <span>
                  {product.countInStock > 0 ? 'In Stock' : 'Out of Stock'}
                </span>
              </div>
              <div>
                <span>Quantity:</span>
                <InputNumber
                  min={1}
                  max={product.countInStock}
                  defaultValue={product.countInStock}
                  onChange={onChange}
                />
              </div>
              <div>
                <Button
                  width="100%"
                  disabled={product.countInStock === 0}
                  onClick={addToCartHandler}
                >
                  Add to cart
                </Button>
              </div>
            </AddToCart>
          </Main>
        </ProductDetailsStyled>
      )}
      {error && (
        <Alert
          message={error}
          type="error"
          showIcon
          banner
          action={
            <ButtonAnt
              size="small"
              type="primary"
              onClick={() => history.push('/')}
            >
              Go Home
            </ButtonAnt>
          }
        />
      )}
    </Spin>
  );
};

export default ProductDetails;

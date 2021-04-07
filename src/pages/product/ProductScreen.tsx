// React
import React, { useEffect } from 'react';

// Redux
import { useDispatch, useSelector } from 'react-redux';

// Redux - Actions
import { listProductDetails } from '../../actions/productDetails';

// Redux - Slices
import {
  selectError,
  selectLoading,
  selectProduct,
} from '../../slices/productDetails';

// React Router
import { useHistory, useParams } from 'react-router';

// Styles
import { ProductScreenStyled, Header } from './Styles';

// Antd Components
import { Alert, Button, Spin } from 'antd';

// Components
import ProductDetails from '../../components/product/product-details/ProductDetails';

interface Props {}

const ProductScreen: React.FC<Props> = () => {
  // History
  const history = useHistory();

  // Dispatch
  const dispatch = useDispatch();

  // Selector
  const product = useSelector(selectProduct);
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);

  const { productID } = useParams() as { productID: string };

  useEffect(() => {
    dispatch(listProductDetails(productID));
  }, [dispatch, productID]);

  return (
    <ProductScreenStyled>
      <Header>
        <h2>Product Details</h2>
      </Header>
      <Spin spinning={loading}>
        {product && <ProductDetails {...product} />}
        {error && (
          <Alert
            message={error}
            type="error"
            showIcon
            banner
            action={
              <Button
                size="small"
                type="primary"
                onClick={() => history.push('/')}
              >
                Go Home
              </Button>
            }
          />
        )}
      </Spin>
    </ProductScreenStyled>
  );
};

export default ProductScreen;

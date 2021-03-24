// React
import React, { useEffect } from 'react';

// Redux
import { useDispatch, useSelector } from 'react-redux';

// Redux - Actions
import { listProductDetails } from '../../actions/productDetails';

// Redux - Slices
import { selectLoading, selectProduct } from '../../slices/productDetails';

// React Router
import { useParams } from 'react-router';

// Styles
import { ProductScreenStyled } from './Styles';

// Antd Components
import { Spin } from 'antd';

// Components
import ProductDetails from '../../components/product/product-details/ProductDetails';

interface Props {}

const ProductScreen: React.FC<Props> = () => {
  // Dispatch
  const dispatch = useDispatch();

  // Selector
  const loading = useSelector(selectLoading);
  const product = useSelector(selectProduct);

  const { productID } = useParams() as { productID: string };

  useEffect(() => {
    dispatch(listProductDetails(productID));
  }, [dispatch, productID]);

  return (
    <Spin spinning={loading} delay={0}>
      <ProductScreenStyled>
        <h1>Product Details</h1>

        {!loading && <ProductDetails {...product} />}
        {/* <ProductReviews /> */}
        {/* <ProductComments /> */}
      </ProductScreenStyled>
    </Spin>
  );
};

export default ProductScreen;

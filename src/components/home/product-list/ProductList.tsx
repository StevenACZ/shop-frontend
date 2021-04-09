// React
import React, { useEffect } from 'react';

// Redux
import { useDispatch, useSelector } from 'react-redux';

// Redux - Actions
import { listProducts } from '../../../actions/product/productList';

// Redux - Slices
import {
  selectProductListProducts,
  selectProductListLoading,
  selectProductListError,
  productListReset,
} from '../../../slices/product/productList';

// Styles
import { ProductListStyled } from './Styles';

// Types
import { Product } from '../../../data/products';

// Antd Components
import { Alert, Spin } from 'antd';

// Components
import ProductListItem from './product-list-item/ProductListItem';

interface Props {}

const ProductList: React.FC<Props> = () => {
  // Dispatch
  const dispatch = useDispatch();

  // Selector
  const productList = useSelector(selectProductListProducts);
  const loading = useSelector(selectProductListLoading);
  const error = useSelector(selectProductListError);

  useEffect(() => {
    dispatch(listProducts());

    return () => {
      dispatch(productListReset());
    };
  }, [dispatch]);

  return (
    <Spin spinning={loading} delay={0}>
      <ProductListStyled>
        {productList &&
          productList.map((product: Product) => (
            <ProductListItem key={product._id} {...product} />
          ))}
      </ProductListStyled>
      {productList && error && (
        <Alert message={error} type="error" showIcon banner />
      )}
    </Spin>
  );
};

export default ProductList;

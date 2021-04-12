// React
import React, { useEffect } from 'react';

// Redux
import { useDispatch, useSelector } from 'react-redux';

// Redux - Actions
import { listProducts } from '../../../../actions/product/productList';

// Redux - Slices
import {
  selectProductListProducts,
  selectProductListLoading,
  selectProductListError,
  productListReset,
} from '../../../../slices/product/productList';
import { selectProductDeleteSuccess } from '../../../../slices/product/productDelete';

// Styles
import { ProductListStyled } from './Styles';

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

  const success = useSelector(selectProductDeleteSuccess);

  useEffect(() => {
    dispatch(listProducts());
  }, [dispatch, success]);

  useEffect(() => {
    return () => {
      dispatch(productListReset());
    };
  }, [dispatch]);

  return (
    <Spin spinning={loading}>
      <ProductListStyled>
        {productList &&
          productList.map((product: any) => (
            <ProductListItem key={product._id} {...product} />
          ))}
      </ProductListStyled>
      {error && <Alert message={error} type="error" showIcon banner />}
    </Spin>
  );
};

export default ProductList;

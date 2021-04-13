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

// React Router
import { useParams } from 'react-router';

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

  const { keyword } = useParams() as { keyword: string };

  useEffect(() => {
    dispatch(listProducts(keyword));

    return () => {
      dispatch(productListReset());
    };
  }, [dispatch, keyword]);

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

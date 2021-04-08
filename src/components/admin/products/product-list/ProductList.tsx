// React
import React, { useEffect } from 'react';

// Redux
import { useDispatch, useSelector } from 'react-redux';

// Redux - Actions
import { listProducts } from '../../../../actions/productList';

// Redux - Slices
import {
  selectProducts,
  selectLoading,
  selectError,
} from '../../../../slices/productList';
import { selectSuccess } from '../../../../slices/productDelete';

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
  const productList = useSelector(selectProducts);
  const success = useSelector(selectSuccess);
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(listProducts());
  }, [dispatch, success]);

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

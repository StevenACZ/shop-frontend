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

// Styles
import { ProductListStyled } from './Styles';

// Antd Components
import { Alert, Spin } from 'antd';

// Components
// import UserListItem from './user-list-item/UserListItem';

interface Props {}

const ProductList: React.FC<Props> = () => {
  // Dispatch
  const dispatch = useDispatch();

  // Selector
  const productList = useSelector(selectProducts);
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(listProducts());
  }, [dispatch]);

  return (
    <Spin spinning={loading}>
      {loading ? (
        <Spin />
      ) : error ? (
        <Alert message={error} type="error" showIcon banner />
      ) : (
        <ProductListStyled>
          {/* {productList.map((product: Product) => (
            <ProductListItem key={product._id} {...product} />
          ))} */}
        </ProductListStyled>
      )}
    </Spin>
  );
};

export default ProductList;

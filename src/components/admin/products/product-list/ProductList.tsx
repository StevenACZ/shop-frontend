// React
import React, { useEffect } from 'react';

// Redux
import { useDispatch, useSelector } from 'react-redux';

// Redux - Actions
import { listProducts } from '../../../../actions/product/productList';

// Redux - Slices
import {
  selectProductListProducts,
  selectProductListPages,
  selectProductListPage,
  selectProductListLoading,
  selectProductListError,
  productListReset,
} from '../../../../slices/product/productList';
import { selectProductDeleteSuccess } from '../../../../slices/product/productDelete';

// React Router
import { useHistory, useParams } from 'react-router';

// Styles
import { ProductListStyled, ProductListContent } from './Styles';

// Antd Components
import { Alert, Spin, Pagination } from 'antd';

// Components
import ProductListItem from './product-list-item/ProductListItem';

interface Props {}

const ProductList: React.FC<Props> = () => {
  // History
  const history = useHistory();

  // Dispatch
  const dispatch = useDispatch();

  // Selector
  const productList = useSelector(selectProductListProducts);
  const pages = useSelector(selectProductListPages);
  const page = useSelector(selectProductListPage);
  const loading = useSelector(selectProductListLoading);
  const error = useSelector(selectProductListError);

  const success = useSelector(selectProductDeleteSuccess);

  const { pageNumber } = (useParams() as { pageNumber: string }) || 1;

  const changePage = (pageNumber: number) => {
    history.push(`/admin/productlist/${pageNumber}`);
  };

  useEffect(() => {
    dispatch(listProducts('', pageNumber));
  }, [dispatch, success, pageNumber]);

  useEffect(() => {
    return () => {
      dispatch(productListReset());
    };
  }, [dispatch]);

  return (
    <Spin spinning={loading}>
      <ProductListStyled>
        <ProductListContent>
          {productList &&
            productList.map((product: any) => (
              <ProductListItem key={product._id} {...product} />
            ))}
        </ProductListContent>

        {productList && pages && page && (
          <Pagination
            onChange={changePage}
            current={page}
            total={pages * productList.length}
          />
        )}
      </ProductListStyled>
      {error && <Alert message={error} type="error" showIcon banner />}
    </Spin>
  );
};

export default ProductList;

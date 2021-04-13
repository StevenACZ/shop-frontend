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
  selectProductListPages,
  selectProductListPage,
  productListReset,
} from '../../../slices/product/productList';

// React Router
import { useHistory, useParams } from 'react-router';

// Styles
import { ProductListStyled, ProductListContent } from './Styles';

// Types
import { Product } from '../../../data/products';

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

  const { keyword } = useParams() as { keyword: string };
  const { pageNumber } = (useParams() as { pageNumber: string }) || 1;

  const changePage = (pageNumber: number, keyword = '') => {
    if (keyword) {
      history.push(`/search/${keyword}/page/${pageNumber}`);
    } else {
      history.push(`/page/${pageNumber}`);
    }
  };

  useEffect(() => {
    dispatch(listProducts(keyword, pageNumber));

    return () => {
      dispatch(productListReset());
    };
  }, [dispatch, keyword, pageNumber]);

  return (
    <Spin spinning={loading} delay={0}>
      <ProductListStyled>
        <ProductListContent>
          {productList && (
            <>
              {productList.map((product: Product) => (
                <ProductListItem key={product._id} {...product} />
              ))}
            </>
          )}
        </ProductListContent>
        {productList && pages && page && (
          <Pagination
            onChange={(e) => changePage(e, keyword)}
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

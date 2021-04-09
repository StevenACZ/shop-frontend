// React
import React, { useEffect } from 'react';

// Redux
import { useDispatch, useSelector } from 'react-redux';

// Redux - Slices
import { selectUserInfo } from '../../../../slices/user';

// React Router
import { useHistory } from 'react-router';

// Styles
import { ProductListScreenStyled, Header } from './Styles';

// Antd Icons
import { FileAddOutlined } from '@ant-design/icons';

// Components
import ProductList from '../../../../components/admin/products/product-list/ProductList';
import Button from '../../../../components/button/Button';
import { productListReset } from '../../../../slices/product/productList';

interface Props {}

const ProductListScreen: React.FC<Props> = () => {
  // History
  const history = useHistory();

  // Dispatch
  const dispatch = useDispatch();

  // Selector
  const userInfo = useSelector(selectUserInfo) as {
    name: string;
    isAdmin: boolean;
    token: string;
  };

  useEffect(() => {
    if (!userInfo) {
      history.push('/');
    } else {
      if (!userInfo.isAdmin) {
        history.push('/');
      }
    }
  }, [history, userInfo]);

  useEffect(() => {
    return () => {
      dispatch(productListReset());
    };
  }, [dispatch]);

  const handleCreateProduct = () => {
    history.push('/admin/products');
  };

  return (
    <ProductListScreenStyled>
      <Header>
        <h2>Product list</h2>
        <Button onClick={() => handleCreateProduct()}>
          <p>Create Product</p>
          <FileAddOutlined />
        </Button>
      </Header>
      <ProductList />
    </ProductListScreenStyled>
  );
};

export default ProductListScreen;

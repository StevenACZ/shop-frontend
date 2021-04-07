// React
import React, { useEffect } from 'react';

// Redux
import { useSelector } from 'react-redux';

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

interface Props {}

const ProductListScreen: React.FC<Props> = () => {
  // History
  const history = useHistory();

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

  return (
    <ProductListScreenStyled>
      <Header>
        <h2>Product list</h2>
        <Button>
          <p>Create Product</p>
          <FileAddOutlined />
        </Button>
      </Header>
      <ProductList />
    </ProductListScreenStyled>
  );
};

export default ProductListScreen;

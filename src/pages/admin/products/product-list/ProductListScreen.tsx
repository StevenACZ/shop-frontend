// React
import React, { useEffect } from 'react';

// Redux
import { useSelector } from 'react-redux';

// Redux - Slices
import { selectUserInfo } from '../../../../slices/user';

// React Router
import { useHistory } from 'react-router';

// Styles
import { ProductListScreenStyled } from './Styles';

// Components
import ProductList from '../../../../components/admin/products/product-list/ProductList';

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
      <h2>Product list</h2>
      <ProductList />
    </ProductListScreenStyled>
  );
};

export default ProductListScreen;

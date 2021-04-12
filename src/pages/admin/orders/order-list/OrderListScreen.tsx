// React
import React, { useEffect } from 'react';

// Redux
import { useSelector } from 'react-redux';

// Redux - Slices
import { selectUserInfo } from '../../../../slices/user';

// React Router
import { useHistory } from 'react-router';

// Styles
import { OrderListScreenStyled, Header } from './Styles';

// Components
import OrderList from '../../../../components/admin/orders/order-list/OrderList';

interface Props {}

const OrderListScreen: React.FC<Props> = () => {
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
    <OrderListScreenStyled>
      <Header>
        <h2>Order list</h2>
      </Header>
      <OrderList />
    </OrderListScreenStyled>
  );
};

export default OrderListScreen;

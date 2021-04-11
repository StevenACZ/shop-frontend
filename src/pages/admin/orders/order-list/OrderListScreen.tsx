// React
import React, { useEffect } from 'react';

// Redux
import { useDispatch, useSelector } from 'react-redux';

// Redux - Slices
import { selectUserInfo } from '../../../../slices/user';
import { orderListReset } from '../../../../slices/order/orderList';

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
      dispatch(orderListReset());
    };
  }, [dispatch]);

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

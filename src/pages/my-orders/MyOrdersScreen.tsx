// React
import React from 'react';

// Styles
import { MyOrdersScreenStyled } from './Styles';

// Components
import OrderList from '../../components/my-orders/order-list/OrderList';

interface Props {}

const MyOrdersScreen: React.FC<Props> = () => {
  return (
    <MyOrdersScreenStyled>
      <h2>My Orders</h2>
      <OrderList />
    </MyOrdersScreenStyled>
  );
};

export default MyOrdersScreen;

// React
import React from 'react';

// Styles
import { OrderListStyled } from './Styles';

// Components
import OrderListItem from './order-list-item/OrderListItem';

interface Props {}

const OrderList: React.FC<Props> = () => {
  return (
    <OrderListStyled>
      <OrderListItem />
    </OrderListStyled>
  );
};

export default OrderList;

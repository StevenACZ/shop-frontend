// React
import React, { useEffect } from 'react';

// Redux
import { useDispatch, useSelector } from 'react-redux';

// Redux - Actions
import { listOrders } from '../../../../actions/order/orderList';

// Redux - Slices
import {
  selectOrderListOrders,
  selectOrderListLoading,
  selectOrderListError,
} from '../../../../slices/order/orderList';

// Styles
import { OrderListStyled } from './Styles';

// Antd Components
import { Alert, Spin } from 'antd';

// Components
import OrderListItem from './order-list-item/OrderListItem';

interface Props {}

const OrderList: React.FC<Props> = () => {
  // Dispatch
  const dispatch = useDispatch();

  // Selector
  const orderList = useSelector(selectOrderListOrders);
  const loading = useSelector(selectOrderListLoading);
  const error = useSelector(selectOrderListError);

  useEffect(() => {
    dispatch(listOrders());
  }, [dispatch]);

  return (
    <Spin spinning={loading}>
      <OrderListStyled>
        {orderList &&
          orderList.map((order: any) => (
            <OrderListItem key={order._id} {...order} />
          ))}
      </OrderListStyled>
      {error && <Alert message={error} type="error" showIcon banner />}
    </Spin>
  );
};

export default OrderList;

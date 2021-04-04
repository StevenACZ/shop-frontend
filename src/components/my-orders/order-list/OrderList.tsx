// React
import React, { useEffect } from 'react';

// Redux
import { useDispatch, useSelector } from 'react-redux';

// Redux - Actions
import { listMyOrders } from '../../../actions/order';

// Redux - Slices
import {
  selectError,
  selectLoading,
  selectOrders,
} from '../../../slices/order';

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
  const loading = useSelector(selectLoading);
  const orders = useSelector(selectOrders);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(listMyOrders());
  }, [dispatch]);

  return (
    <Spin spinning={loading}>
      <OrderListStyled>
        {orders &&
          orders.map((order: any) => (
            <OrderListItem key={order._id} {...order} />
          ))}
      </OrderListStyled>
      {orders && error && (
        <Alert message={error} type="error" showIcon banner />
      )}
    </Spin>
  );
};

export default OrderList;

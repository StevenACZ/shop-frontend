// React
import React, { useEffect } from 'react';

// Redux
import { useDispatch, useSelector } from 'react-redux';

// Redux - Actions
import { listMyOrders } from '../../../actions/order/orderMyList';

// Redux - Slices
import {
  selectOrderMyListOrders,
  selectOrderMyListLoading,
  selectOrderMyListError,
  orderMyListReset,
} from '../../../slices/order/orderMyList';

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
  const myOrders = useSelector(selectOrderMyListOrders);
  const loading = useSelector(selectOrderMyListLoading);
  const error = useSelector(selectOrderMyListError);

  useEffect(() => {
    dispatch(listMyOrders());
  }, [dispatch]);

  useEffect(() => {
    return () => {
      dispatch(orderMyListReset());
    };
  }, [dispatch]);

  return (
    <Spin spinning={loading}>
      <OrderListStyled>
        {myOrders &&
          myOrders.map((order: any) => (
            <OrderListItem key={order._id + 1} {...order} />
          ))}
      </OrderListStyled>
      {error && <Alert message={error} type="error" showIcon banner />}
    </Spin>
  );
};

export default OrderList;

// React
import React, { useEffect } from 'react';

// Redux
import { useDispatch, useSelector } from 'react-redux';

// Redux - Actions
import { listMyOrders } from '../../actions/order';

// Redux - Slices
import { selectError, selectLoading, selectOrders } from '../../slices/order';

// React Router
import { useHistory } from 'react-router';

// Styles
import { MyOrdersScreenStyled } from './Styles';

// Antd Components
import { Spin } from 'antd';

interface Props {}

const MyOrdersScreen: React.FC<Props> = () => {
  // History
  const history = useHistory();

  // Dispatch
  const dispatch = useDispatch();

  // Selector
  const loading = useSelector(selectLoading);
  const orders = useSelector(selectOrders);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(listMyOrders());
  }, [dispatch]);

  const dataSource =
    orders &&
    orders.map((row: any) => ({
      id: row._id,
      paidAt: row.paidAt,
      date: row.createdAt,
      total: row.totalPrice,
      isDelivered: row.isDelivered,
    }));

  return (
    <MyOrdersScreenStyled>
      <Spin spinning={loading}>
        <h2>My Orders</h2>
        {/* <OrderList>
          <OrderListItem />
        </OrderList> */}
      </Spin>
    </MyOrdersScreenStyled>
  );
};

export default MyOrdersScreen;

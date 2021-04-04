// React
import React, { useEffect } from 'react';

// Redux
import { useSelector } from 'react-redux';

// Redux - Slices
import { selectUserInfo } from '../../slices/user';

// React Router
import { useHistory } from 'react-router';

// Styles
import { MyOrdersScreenStyled } from './Styles';

// Components
import OrderList from '../../components/my-orders/order-list/OrderList';

interface Props {}

const MyOrdersScreen: React.FC<Props> = () => {
  // History
  const history = useHistory();

  // Selector
  const userInfo = useSelector(selectUserInfo);

  useEffect(() => {
    if (!userInfo) {
      history.push('/');
    }
  }, [history, userInfo]);

  return (
    <MyOrdersScreenStyled>
      <h2>My Orders</h2>
      <OrderList />
    </MyOrdersScreenStyled>
  );
};

export default MyOrdersScreen;

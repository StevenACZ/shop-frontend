// React
import React from 'react';

// React Router
import { useHistory } from 'react-router';

// Styles
import { OrderListItemStyled } from './Styles';

interface Props {}

const OrderListItem: React.FC<Props> = () => {
  // History
  const history = useHistory();

  return (
    <OrderListItemStyled>
      <p>sadsad</p>
    </OrderListItemStyled>
  );
};

export default OrderListItem;

// React
import React from 'react';

// React Router
import { useHistory } from 'react-router';

// Styles
import { OrderListItemStyled, Header, Body, Footer } from './Styles';

// Antd Components
import { Alert } from 'antd';

// Components
import Button from '../../../button/Button';

interface Props {
  _id: string;
  createdAt: string;
  totalPrice: number;
  isPaid: boolean;
  isDelivered: boolean;
}

const OrderListItem: React.FC<Props> = ({
  _id,
  createdAt,
  totalPrice,
  isPaid,
  isDelivered,
}) => {
  // History
  const history = useHistory();

  return (
    <OrderListItemStyled>
      <Header>
        <h3>{_id && _id}</h3>
      </Header>
      <Body>
        <p>
          <span>Date:</span> {createdAt && createdAt.substring(0, 10)}
        </p>
        <p>
          <span>Total Price:</span> ${totalPrice && totalPrice}
        </p>
      </Body>
      <Footer>
        {isPaid && isPaid ? (
          <Alert message="Paid" type="success" showIcon />
        ) : (
          <Alert message="Not paid" type="error" showIcon />
        )}
        {isDelivered && isDelivered ? (
          <Alert message="Delivered" type="success" showIcon />
        ) : (
          <Alert message="Not delivered" type="error" showIcon />
        )}
      </Footer>
      <Button width="100%" onClick={() => history.push(`order/${_id}`)}>
        Details
      </Button>
    </OrderListItemStyled>
  );
};

export default OrderListItem;

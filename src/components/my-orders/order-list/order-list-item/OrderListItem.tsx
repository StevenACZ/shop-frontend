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

  const handleGoToOrder = (orderId: string) => {
    history.push(`/order/${orderId}`);
  };

  return (
    <OrderListItemStyled>
      <Header>
        <h3>{_id}</h3>
      </Header>
      <Body>
        <p>
          <span>Date:</span> {createdAt.substring(0, 10)}
        </p>
        <p>
          <span>Total Price:</span> ${totalPrice}
        </p>
      </Body>
      <Footer>
        {isPaid ? (
          <Alert message="Paid" type="success" showIcon />
        ) : (
          <Alert message="Not paid" type="error" showIcon />
        )}
        {isDelivered ? (
          <Alert message="Delivered" type="success" showIcon />
        ) : (
          <Alert message="Not delivered" type="error" showIcon />
        )}
      </Footer>
      <Button width="100%" onClick={() => handleGoToOrder(_id)}>
        Details
      </Button>
    </OrderListItemStyled>
  );
};

export default OrderListItem;

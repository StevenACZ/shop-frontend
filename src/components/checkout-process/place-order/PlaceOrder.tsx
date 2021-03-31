// React
import React from 'react';

// Styles
import {
  PlaceOrderStyled,
  Details,
  OrderSummary,
  OrderItem,
  OrderList,
  OrderImage,
  OrderName,
  OrderCant,
} from './Styles';

// Components
import Button from '../../button/Button';

interface Props {}

const PlaceOrder: React.FC<Props> = () => {
  return (
    <PlaceOrderStyled>
      <Details>
        <div>
          <h2>Shipping</h2>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>
        <div>
          <h2>Payment method</h2>
          <p>
            Method: <span>Paypal</span>
          </p>
        </div>
        <div>
          <h2>Order items</h2>
          <OrderList>
            <OrderItem>
              <OrderImage></OrderImage>
              <OrderName>
                <p>asdasdasdadasdasd</p>
              </OrderName>
              <OrderCant>
                <p>1 x $89.99 = $89.99</p>
              </OrderCant>
            </OrderItem>
          </OrderList>
        </div>
      </Details>

      <OrderSummary>
        <div>
          <h2>Order Summary</h2>
        </div>
        <div>
          <span>Items:</span>
          <span>$189.97</span>
        </div>
        <div>
          <span>Shipping:</span>
          <span>$0.00</span>
        </div>
        <div>
          <span>Tax:</span>
          <span>$28.50</span>
        </div>
        <div>
          <span>Total:</span>
          <span>$218.47</span>
        </div>
        <div>
          <Button width="100%">Place order</Button>
        </div>
      </OrderSummary>
    </PlaceOrderStyled>
  );
};

export default PlaceOrder;

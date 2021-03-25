// React
import React from 'react';

// Styles
import { CartSubtotalStyled, Summary, Checkout } from './Styles';

// Component
import Button from '../../button/Button';

interface Props {}

const CartSubtotal: React.FC<Props> = () => {
  return (
    <CartSubtotalStyled>
      <Summary>
        <h3>Subtotal (3) items</h3>
        <p>$579.97</p>
      </Summary>

      <Checkout>
        <Button width="100%">Proceed to checkout</Button>
      </Checkout>
    </CartSubtotalStyled>
  );
};

export default CartSubtotal;

// React
import React from 'react';

// Styles
import { CartSubtotalStyled, Summary, Checkout } from './Styles';

// Component
import Button from '../../button/Button';

interface Props {
  quantityItems: number;
  totalAmount: number;
}

const CartSubtotal: React.FC<Props> = ({ quantityItems, totalAmount }) => {
  return (
    <CartSubtotalStyled>
      <Summary>
        <h3>Subtotal ({quantityItems}) items</h3>
        <p>${totalAmount.toFixed(2)}</p>
      </Summary>

      <Checkout>
        <Button width="100%" disabled={quantityItems === 0}>
          Proceed to checkout
        </Button>
      </Checkout>
    </CartSubtotalStyled>
  );
};

export default CartSubtotal;

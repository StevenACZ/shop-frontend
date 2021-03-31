// React
import React from 'react';

// React Router
import { useHistory } from 'react-router';

// Styles
import { CartSubtotalStyled, Summary, Checkout } from './Styles';

// Component
import Button from '../../button/Button';

interface Props {
  quantityItems: number;
  totalAmount: number;
}

const CartSubtotal: React.FC<Props> = ({ quantityItems, totalAmount }) => {
  // History
  const history = useHistory();

  const checkoutHandler = () => {
    history.push(`/checkout-process`);
  };

  return (
    <CartSubtotalStyled>
      <Summary>
        <h3>Subtotal ({quantityItems}) items</h3>
        <p>${totalAmount.toFixed(2)}</p>
      </Summary>

      <Checkout>
        <Button
          width="100%"
          disabled={quantityItems === 0}
          onClick={checkoutHandler}
        >
          Proceed to checkout
        </Button>
      </Checkout>
    </CartSubtotalStyled>
  );
};

export default CartSubtotal;

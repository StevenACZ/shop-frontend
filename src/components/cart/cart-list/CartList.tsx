// React
import React from 'react';

// Styles
import { CartListStyled } from './Styles';

// Components
import CartListItem from './cart-list-item/CartListItem';

interface Props {
  productList: {}[];
}

const CartList: React.FC<Props> = ({ productList }) => {
  return (
    <CartListStyled>
      {productList.map((product: any) => (
        <CartListItem key={product.product} {...product} />
      ))}
    </CartListStyled>
  );
};

export default CartList;

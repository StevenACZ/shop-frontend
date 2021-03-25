// React
import React from 'react';

// Redux
import { useDispatch } from 'react-redux';

// Redux - Actions
import { addToCart, removeFromCart } from '../../../../actions/cart';

// React Router
import { useHistory } from 'react-router';

// Styles
import {
  CartListItemStyled,
  Image,
  Name,
  Price,
  Quantity,
  Remove,
} from './Styles';

// Antd Icons
import { DeleteFilled } from '@ant-design/icons';

// Antd Components
import { InputNumber } from 'antd';

// Components
import Button from '../../../button/Button';

interface Props {
  product: string;
  name: string;
  image: string;
  price: number;
  countInStock: number;
  qty: number;
}

const CartListItem: React.FC<Props> = ({
  product,
  name,
  image,
  price,
  countInStock,
  qty,
}) => {
  // History
  const history = useHistory();

  // Dispatch
  const dispatch = useDispatch();

  const removeFromCartHandler = (productId: string) => {
    dispatch(removeFromCart(productId));
  };

  const goToProduct = () => {
    history.push(`/product/${product}`);
  };

  return (
    <CartListItemStyled>
      <Image onClick={goToProduct}>
        <img src={image} alt={name} />
      </Image>

      <Name>
        <h3 onClick={goToProduct}>{name}</h3>
      </Name>

      <Price>
        <p>${price.toFixed(2)}</p>
      </Price>

      <Quantity>
        <InputNumber
          min={1}
          max={countInStock}
          defaultValue={qty}
          onChange={(currentQty: number) =>
            dispatch(addToCart(product, currentQty))
          }
        />
      </Quantity>

      <Remove>
        <Button
          width="100%"
          height="100%"
          onClick={() => removeFromCartHandler(product)}
        >
          <DeleteFilled />
        </Button>
      </Remove>
    </CartListItemStyled>
  );
};

export default CartListItem;

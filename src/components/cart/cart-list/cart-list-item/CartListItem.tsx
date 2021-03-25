// React
import React from 'react';

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
  name: string;
  image: string;
  price: number;
  countInStock: number;
  qty: number;
}

const CartListItem: React.FC<Props> = ({
  name,
  image,
  price,
  countInStock,
  qty,
}) => {
  return (
    <CartListItemStyled>
      <Image>
        <img src={image} alt={name} />
      </Image>

      <Name>
        <h3>{name}</h3>
      </Name>

      <Price>
        <p>${price.toFixed(2)}</p>
      </Price>

      <Quantity>
        <InputNumber
          min={1}
          max={countInStock}
          defaultValue={qty}
          // onChange={onChange}
        />
      </Quantity>

      <Remove>
        <Button width="100%" height="100%">
          <DeleteFilled />
        </Button>
      </Remove>
    </CartListItemStyled>
  );
};

export default CartListItem;

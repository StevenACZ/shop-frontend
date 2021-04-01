// React
import React, { useEffect } from 'react';

// Redux
import { useDispatch, useSelector } from 'react-redux';

// Redux - Actions
import { createOrder } from '../../../actions/order';

// Redux - Slices
import {
  selectCartItems,
  selectPaymentMethod,
  selectShippingAddress,
} from '../../../slices/cart';
import {
  selectError,
  selectLoading,
  selectOrder,
  selectSuccess,
} from '../../../slices/order';

// React Router
import { useHistory } from 'react-router';

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

// Antd Components
import { Alert, Spin } from 'antd';

// Components
import Button from '../../button/Button';

interface Props {}

const PlaceOrder: React.FC<Props> = () => {
  // History
  const history = useHistory();

  // Dispatch
  const dispatch = useDispatch();

  // Selector
  const products = useSelector(selectCartItems);
  const shippingAddress = useSelector(selectShippingAddress) as {
    address: string;
    city: string;
    postalCode: string;
    country: string;
  };
  const paymentMethod = useSelector(selectPaymentMethod);
  const order = useSelector(selectOrder) as {
    _id: string;
  };
  const loading = useSelector(selectLoading);
  const success = useSelector(selectSuccess);
  const error = useSelector(selectError);

  useEffect(() => {
    if (success) {
      history.push(`/order/${order._id}`);
    }
  }, [history, success, order]);

  const itemsPrice = products.reduce(
    (acc, item: any) => acc + item.price * item.qty,
    0
  );

  const shippingPrice = itemsPrice > 100 ? 0 : 100;
  const taxPrice = Number((0.15 * itemsPrice).toFixed(2));
  const totalPrice = Number(
    (Number(itemsPrice) + Number(shippingPrice) + Number(taxPrice)).toFixed(2)
  );

  const placeOrderHanlder = () => {
    dispatch(
      createOrder({
        orderItems: products,
        shippingAddress,
        paymentMethod,
        itemsPrice,
        taxPrice,
        shippingPrice,
        totalPrice,
      })
    );
  };

  return (
    <Spin spinning={loading}>
      <PlaceOrderStyled>
        <Details>
          <div>
            <h2>Shipping</h2>
            <p>
              Address:{' '}
              <span>
                {shippingAddress.address}, {shippingAddress.city},{' '}
                {shippingAddress.postalCode}, {shippingAddress.country}
              </span>
            </p>
          </div>
          <div>
            <h2>Payment method</h2>
            <p>
              Method: <span>{paymentMethod}</span>
            </p>
          </div>
          <div>
            <h2>Order items</h2>
            <OrderList>
              {products.map((product: any) => (
                <OrderItem key={product.product}>
                  <OrderImage
                    onClick={() => history.push(`/product/${product.product}`)}
                  >
                    <img src={product.image} alt={product.name} />
                  </OrderImage>
                  <OrderName>
                    <p
                      onClick={() =>
                        history.push(`/product/${product.product}`)
                      }
                    >
                      {product.name}
                    </p>
                  </OrderName>
                  <OrderCant>
                    <p>
                      {product.qty} x ${product.price} = $
                      {product.qty * product.price}
                    </p>
                  </OrderCant>
                </OrderItem>
              ))}
            </OrderList>
          </div>
        </Details>

        <OrderSummary>
          <div>
            <h2>Order Summary</h2>
          </div>
          <div>
            <span>Items:</span>
            <span>${itemsPrice.toFixed(2)}</span>
          </div>
          <div>
            <span>Shipping:</span>
            <span>${shippingPrice.toFixed(2)}</span>
          </div>
          <div>
            <span>Tax:</span>
            <span>${taxPrice.toFixed(2)}</span>
          </div>
          <div>
            <span>Total:</span>
            <span>${totalPrice}</span>
          </div>
          <div>
            <Button
              width="100%"
              onClick={placeOrderHanlder}
              disabled={products.length === 0}
            >
              Place order
            </Button>
          </div>
          {error && <Alert message={error} type="error" showIcon banner />}
        </OrderSummary>
      </PlaceOrderStyled>
    </Spin>
  );
};

export default PlaceOrder;

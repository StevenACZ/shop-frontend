// React
import React, { useEffect, useState } from 'react';

// Axios
import axios from '../../axios/index';

// Redux
import { useDispatch, useSelector } from 'react-redux';

// Redux - Actions
import { getOrderDetails, payOrder } from '../../actions/order';

// Redux - Slices
import { selectUserInfo } from '../../slices/user';

import { selectError, selectLoading, selectOrder } from '../../slices/order';

// React Router
import { useHistory, useParams } from 'react-router';

// Styles
import {
  OrderScreenStyled,
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

// Component
import { PayPalButton } from 'react-paypal-button-v2';

interface Props {}

const OrderScreen: React.FC<Props> = () => {
  // History
  const history = useHistory();

  // Dispatch
  const dispatch = useDispatch();

  // Selector
  const order = useSelector(selectOrder) as {
    _id: string;
    taxPrice: number;
    shippingPrice: number;
    totalPrice: number;
    isPaid: boolean;
    isDelivered: boolean;
    orderItems: [
      {
        _id: string;
        image: string;
        name: string;
        price: number;
        product: string;
        qty: number;
      }
    ];
    paymentMethod: string;
    shippingAddress: {
      address: string;
      city: string;
      postalCode: string;
      country: string;
    };
    user: {
      _id: string;
      name: string;
      email: string;
    };
    paidAt: string;
    deliveredAt: string;
  };
  const userInfo = useSelector(selectUserInfo);
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);

  const { orderId } = useParams() as { orderId: string };

  const [, setSdkReady] = useState<boolean>(false);

  useEffect(() => {
    if (!userInfo) {
      history.push('/login');
    }
  }, [history, userInfo]);

  const addPayPalScript = async () => {
    const { data: clientId } = await axios.get('/api/config/paypal');
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = `https://www.paypal.com/sdk/js?client-id=${clientId}`;
    script.async = true;
    script.onload = () => {
      setSdkReady(true);
    };
    document.body.appendChild(script);
  };

  useEffect(() => {
    dispatch(getOrderDetails(orderId));
  }, [dispatch, orderId]);

  useEffect(() => {
    if (order) {
      if (!order.isPaid) {
        if (!(window as any).paypal) {
          addPayPalScript();
          console.log('paypal script added');
        } else {
          setSdkReady(true);
        }
      }
    }
  }, [order]);

  const itemsPrice =
    order &&
    order.orderItems.reduce((acc, item: any) => acc + item.price * item.qty, 0);

  const handlerSuccessPayment = (paymentResult: any) => {
    dispatch(payOrder(orderId, paymentResult));
  };

  return (
    <Spin spinning={loading}>
      <OrderScreenStyled>
        <Details>
          <h2>ORDER {order && order._id}</h2>
          <div>
            <h2>Shipping</h2>
            <p>Name: {order && order.user.name}</p>
            <p>Email: {order && order.user.email}</p>
            <p>
              Address:{' '}
              {order && (
                <span>
                  {order.shippingAddress.address}, {order.shippingAddress.city},{' '}
                  {order.shippingAddress.postalCode},{' '}
                  {order.shippingAddress.country}
                </span>
              )}
            </p>
            {order && (
              <>
                {!order.isDelivered ? (
                  <Alert message="Not Delivered" type="error" />
                ) : (
                  <Alert
                    message={`Paided ${order.deliveredAt}`}
                    type="success"
                  />
                )}
              </>
            )}
          </div>
          <div>
            <h2>Payment method</h2>
            <p>
              Method: <span>{order && order.paymentMethod}</span>
            </p>
            {order && (
              <>
                {!order.isPaid ? (
                  <Alert message="Not Paid" type="error" />
                ) : (
                  <Alert message={`Paid on ${order.paidAt}`} type="success" />
                )}
              </>
            )}
          </div>
          <div>
            <h2>Order items</h2>
            <OrderList>
              {order &&
                order.orderItems.map((product: any) => (
                  <OrderItem key={product.product}>
                    <OrderImage
                      onClick={() =>
                        history.push(`/product/${product.product}`)
                      }
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
            <span>${itemsPrice}</span>
          </div>
          <div>
            <span>Shipping:</span>
            <span>${order && order.shippingPrice}</span>
          </div>
          <div>
            <span>Tax:</span>
            <span>${order && order.taxPrice}</span>
          </div>
          <div>
            <span>Total:</span>
            <span>${order && order.totalPrice}</span>
          </div>
          {order && !order.isPaid && (
            <div>
              <PayPalButton
                amount={order && order.totalPrice}
                onSuccess={handlerSuccessPayment}
              />
            </div>
          )}
          {error && <Alert message={error} type="error" showIcon banner />}
        </OrderSummary>
      </OrderScreenStyled>
    </Spin>
  );
};

export default OrderScreen;

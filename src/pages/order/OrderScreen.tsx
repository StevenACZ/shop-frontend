// React
import React, { useEffect, useState } from 'react';

// Axios
import axios from '../../axios/index';

// Redux
import { useDispatch, useSelector } from 'react-redux';

// Redux - Actions
import { getOrderDetails, payOrder } from '../../actions/order';
import { deliverOrder } from '../../actions/order/orderDeliver';

// Redux - Slices
import { selectUserInfo } from '../../slices/user';
import {
  selectOrderDeliverSuccess,
  orderDeliverReset,
} from '../../slices/order/orderDeliver';

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
import Button from '../../components/button/Button';

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
  const userInfo = useSelector(selectUserInfo) as {
    isAdmin: boolean;
  };
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);

  const successDeliver = useSelector(selectOrderDeliverSuccess);

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
  }, [dispatch, orderId, successDeliver]);

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

  const handleDeliver = (orderId: string) => {
    dispatch(deliverOrder(orderId));
  };

  useEffect(() => {
    return () => {
      dispatch(orderDeliverReset());
    };
  }, [dispatch]);

  return (
    <Spin spinning={loading}>
      {order && (
        <OrderScreenStyled>
          <Details>
            <h2>ORDER {order._id}</h2>
            <div>
              <h2>Shipping</h2>
              <p>Name: {order.user.name}</p>
              <p>Email: {order.user.email}</p>
              <p>
                Address:{' '}
                <span>
                  {order.shippingAddress.address}, {order.shippingAddress.city},{' '}
                  {order.shippingAddress.postalCode},{' '}
                  {order.shippingAddress.country}
                </span>
              </p>
              {!order.isDelivered ? (
                <Alert message="Not Delivered" type="error" />
              ) : (
                <Alert message={`Paided ${order.deliveredAt}`} type="success" />
              )}
            </div>
            <div>
              <h2>Payment method</h2>
              <p>
                Method: <span>{order.paymentMethod}</span>
              </p>
              {!order.isPaid ? (
                <Alert message="Not Paid" type="error" />
              ) : (
                <Alert message={`Paid on ${order.paidAt}`} type="success" />
              )}
            </div>
            <div>
              <h2>Order items</h2>
              <OrderList>
                {order.orderItems.map((product: any) => (
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
              <span>${order.shippingPrice}</span>
            </div>
            <div>
              <span>Tax:</span>
              <span>${order.taxPrice}</span>
            </div>
            <div>
              <span>Total:</span>
              <span>${order.totalPrice}</span>
            </div>
            {!order.isPaid && (
              <div>
                <PayPalButton
                  amount={order.totalPrice}
                  onSuccess={handlerSuccessPayment}
                />
              </div>
            )}
            {userInfo.isAdmin && (
              <Button onClick={() => handleDeliver(orderId)} width="100%">
                Deliver
              </Button>
            )}
            <Button onClick={() => history.goBack()} width="100%">
              Go Back
            </Button>
          </OrderSummary>
        </OrderScreenStyled>
      )}
      {error && <Alert message={error} type="error" showIcon banner />}
    </Spin>
  );
};

export default OrderScreen;

// Axios
import axios from '../axios/index';

// Redux - Slices
import {
  orderCreateRequest,
  orderCreateSuccess,
  orderCreateFail,
  clearOrder,
  orderDetailsRequest,
  orderDetailsSuccess,
  orderDetailsFail,
  orderPayRequest,
  orderPaySuccess,
  orderPayFail,
  orderListMyRequest,
  orderListMySuccess,
  orderListMyFail,
} from '../slices/order';

export const createOrder = (order: any) => async (
  dispatch: any,
  getState: any
) => {
  try {
    dispatch(orderCreateRequest());

    const {
      user: {
        userInfo: { token },
      },
    } = getState();

    const config = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    };

    const { data } = await axios.post('/api/orders', order, config);

    dispatch(orderCreateSuccess(data));

    localStorage.setItem('order', JSON.stringify(data));
  } catch (error) {
    dispatch(
      orderCreateFail(
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message
      )
    );
  }
};

export const getOrderDetails = (orderId: string) => async (
  dispatch: any,
  getState: any
) => {
  try {
    dispatch(orderDetailsRequest());

    const {
      user: {
        userInfo: { token },
      },
    } = getState();

    const config = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    };

    const { data } = await axios.get(`/api/orders/${orderId}`, config);

    dispatch(orderDetailsSuccess(data));

    localStorage.setItem('order', JSON.stringify(data));
  } catch (error) {
    dispatch(
      orderDetailsFail(
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message
      )
    );
  }
};

export const payOrder = (orderId: string, paymentResult: any) => async (
  dispatch: any,
  getState: any
) => {
  try {
    dispatch(orderPayRequest());

    const {
      user: {
        userInfo: { token },
      },
    } = getState();

    const config = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    };

    const { data } = await axios.put(
      `/api/orders/${orderId}/pay`,
      paymentResult,
      config
    );

    dispatch(orderPaySuccess(data));

    localStorage.setItem('order', JSON.stringify(data));
  } catch (error) {
    dispatch(
      orderPayFail(
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message
      )
    );
  }
};

export const listMyOrders = () => async (dispatch: any, getState: any) => {
  try {
    dispatch(orderListMyRequest());

    const {
      user: {
        userInfo: { token },
      },
    } = getState();

    const config = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    };

    const { data } = await axios.get(`/api/orders/myorders`, config);

    dispatch(orderListMySuccess(data));

    localStorage.setItem('orders', JSON.stringify(data));
  } catch (error) {
    dispatch(
      orderListMyFail(
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message
      )
    );
  }
};

export const clearAllOrder = () => async (dispatch: any) => {
  dispatch(clearOrder());

  localStorage.removeItem('order');
};

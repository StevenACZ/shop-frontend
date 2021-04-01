// Axios
import axios from '../axios/index';

// Redux - Slices
import {
  orderCreateRequest,
  orderCreateSuccess,
  orderCreateFail,
  clearOrder,
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

export const clearAllOrder = () => async (dispatch: any) => {
  dispatch(clearOrder());

  localStorage.removeItem('order');
};

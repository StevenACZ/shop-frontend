// Axios
import axios from '../../axios/index';

// Redux - Slices
import {
  orderDeliverRequest,
  orderDeliverSuccess,
  orderDeliverFail,
} from '../../slices/order/orderDeliver';

export const deliverOrder = (orderId: string) => async (
  dispatch: any,
  getState: any
) => {
  try {
    dispatch(orderDeliverRequest());

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

    await axios.put(`/api/orders/${orderId}/deliver`, {}, config);

    dispatch(orderDeliverSuccess());
  } catch (error) {
    dispatch(
      orderDeliverFail(
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message
      )
    );
  }
};

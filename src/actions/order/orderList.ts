// Axios
import axios from '../../axios/index';

// Redux - Slices
import {
  orderListRequest,
  orderListSuccess,
  orderListFail,
} from '../../slices/order/orderList';

export const listOrders = () => async (dispatch: any, getState: any) => {
  try {
    dispatch(orderListRequest());

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

    const { data } = await axios.get(`/api/orders`, config);

    dispatch(orderListSuccess(data));
  } catch (error) {
    dispatch(
      orderListFail(
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message
      )
    );
  }
};

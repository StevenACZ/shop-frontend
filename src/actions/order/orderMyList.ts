// Axios
import axios from '../../axios/index';

// Redux - Slices
import {
  orderMyListRequest,
  orderMyListSuccess,
  orderMyListFail,
} from '../../slices/order/orderMyList';

export const listMyOrders = () => async (dispatch: any, getState: any) => {
  try {
    dispatch(orderMyListRequest());

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

    dispatch(orderMyListSuccess(data));
  } catch (error) {
    dispatch(
      orderMyListFail(
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message
      )
    );
  }
};

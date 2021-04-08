// Axios
import axios from '../axios/index';

// Redux - Slices
import {
  productDeleteRequest,
  productDeleteSuccess,
  productDeleteFail,
} from '../slices/productDelete';

export const deleteProduct = (productId: string) => async (
  dispatch: any,
  getState: any
) => {
  try {
    dispatch(productDeleteRequest());

    const {
      user: {
        userInfo: { token },
      },
    } = getState();

    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    await axios.delete(`/api/products/${productId}`, config);

    dispatch(productDeleteSuccess());
  } catch (error) {
    dispatch(
      productDeleteFail(
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message
      )
    );
  }
};

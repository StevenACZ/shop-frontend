// Axios
import axios from '../../axios/index';

// Redux - Slices
import {
  productUpdateRequest,
  productUpdateSuccess,
  productUpdateFail,
} from '../../slices/product/productUpdate';

export const updateProduct = (productId: string, product: any) => async (
  dispatch: any,
  getState: any
) => {
  try {
    dispatch(productUpdateRequest());

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

    await axios.put(`/api/products/${productId}`, product, config);

    dispatch(productUpdateSuccess());
  } catch (error) {
    dispatch(
      productUpdateFail(
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message
      )
    );
  }
};

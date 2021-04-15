// Axios
import axios from '../../axios/index';

// Redux - Slices
import {
  productCreateRequest,
  productCreateSuccess,
  productCreateFail,
} from '../../slices/product/productCreate';

export const createProduct = (product: any) => async (
  dispatch: any,
  getState: any
) => {
  try {
    dispatch(productCreateRequest());

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

    await axios.post('/api/products', product, config);

    dispatch(productCreateSuccess());
  } catch (error) {
    dispatch(
      productCreateFail(
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message
      )
    );
  }
};

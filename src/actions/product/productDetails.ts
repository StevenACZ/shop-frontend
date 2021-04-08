// Axios
import axios from '../../axios/index';

// Redux - Slices
import {
  productRequest,
  productSuccess,
  productFail,
} from '../../slices/productDetails';

export const listProductDetails = (productId: string) => async (
  dispatch: any
) => {
  try {
    dispatch(productRequest());

    const { data } = await axios.get(`/api/products/${productId}`);

    dispatch(productSuccess(data));
  } catch (error) {
    dispatch(
      productFail(
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message
      )
    );
  }
};

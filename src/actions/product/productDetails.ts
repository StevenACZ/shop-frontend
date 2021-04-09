// Axios
import axios from '../../axios/index';

// Redux - Slices
import {
  productDetailsRequest,
  productDetailsSuccess,
  productDetailsFail,
} from '../../slices/product/productDetails';

export const listProductDetails = (productId: string) => async (
  dispatch: any
) => {
  try {
    dispatch(productDetailsRequest());

    const { data } = await axios.get(`/api/products/${productId}`);

    dispatch(productDetailsSuccess(data));
  } catch (error) {
    dispatch(
      productDetailsFail(
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message
      )
    );
  }
};

// Axios
import axios from '../../axios/index';

// Redux - Slices
import {
  productListRequest,
  productListSuccess,
  productListFail,
} from '../../slices/product/productList';

export const listProducts = (keyword = '') => async (dispatch: any) => {
  try {
    dispatch(productListRequest());

    const { data } = await axios.get(`/api/products?keyword=${keyword}`);

    dispatch(productListSuccess(data));
  } catch (error) {
    dispatch(
      productListFail(
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message
      )
    );
  }
};

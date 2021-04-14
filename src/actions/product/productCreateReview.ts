// Axios
import axios from '../../axios/index';

// Redux - Slices
import {
  productCreateReviewRequest,
  productCreateReviewSuccess,
  productCreateReviewFail,
} from '../../slices/product/productCreateReview';

export const createProductReview = (productId: string, review: any) => async (
  dispatch: any,
  getState: any
) => {
  try {
    dispatch(productCreateReviewRequest());

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

    await axios.post(`/api/products/${productId}/reviews`, review, config);

    dispatch(productCreateReviewSuccess());
  } catch (error) {
    dispatch(
      productCreateReviewFail(
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message
      )
    );
  }
};

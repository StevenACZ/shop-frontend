// Axios
import axios from '../axios/index';

// Redux - Slices
import { cartAddItem } from '../slices/cart';

export const addToCart = (productId: string, qty: number) => async (
  dispatch: any,
  getState: any
) => {
  try {
    const { data } = await axios.get(`/api/products/${productId}`);

    dispatch(
      cartAddItem({
        product: data._id,
        name: data.name,
        image: data.image,
        price: data.price,
        countInStock: data.countInStock,
        qty,
      })
    );

    localStorage.setItem(
      'cartItems',
      JSON.stringify(getState().cart.cartItems)
    );
  } catch (error) {
    // dispatch(
    //   productFail(
    //     error.response && error.response.data.message
    //       ? error.response.data.message
    //       : error.message
    //   )
    // );
  }
};

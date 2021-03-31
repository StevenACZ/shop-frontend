// Axios
import axios from '../axios/index';

// Redux - Slices
import {
  cartAddItem,
  cartRemoveItem,
  cartSaveShippingAddress,
} from '../slices/cart';

export const addToCart = (productId: string, qty: number) => async (
  dispatch: any,
  getState: any
) => {
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

  localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems));
};

export const removeFromCart = (productId: string) => async (
  dispatch: any,
  getState: any
) => {
  dispatch(cartRemoveItem(productId));

  localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems));
};

export const saveShippingAddress = (data: any) => async (
  dispatch: any,
  getState: any
) => {
  dispatch(cartSaveShippingAddress(data));

  localStorage.setItem('shippingAddress', JSON.stringify(data));
};

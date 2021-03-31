import { createSlice } from '@reduxjs/toolkit';
import type { RootState } from '../store/configureStore';

const cartItemsFromStorage = localStorage.getItem('cartItems')
  ? JSON.parse(localStorage.getItem('cartItems') || '{}')
  : [];

const shippingAddressFromStorage = localStorage.getItem('shippingAddress')
  ? JSON.parse(localStorage.getItem('shippingAddress') || '{}')
  : null;

interface CartState {
  cartItems: object[];
  shippingAddress: null | {};
}

const initialState: CartState = {
  cartItems: cartItemsFromStorage,
  shippingAddress: shippingAddressFromStorage,
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    cartAddItem: (state, action) => {
      const item = action.payload;

      const existItem: any = state.cartItems.find(
        (x: any) => x.product === item.product
      );

      if (existItem) {
        state.cartItems = state.cartItems.map((x: any) =>
          x.product === existItem.product ? item : x
        ) as [];
      } else {
        state.cartItems.push(item);
      }
    },
    cartRemoveItem: (state, action) => {
      state.cartItems = state.cartItems.filter(
        (x: any) => x.product !== action.payload
      );
    },
    cartSaveShippingAddress: (state, action) => {
      state.shippingAddress = action.payload;
    },
  },
});

export const {
  cartAddItem,
  cartRemoveItem,
  cartSaveShippingAddress,
} = cartSlice.actions;

export const selectCartItems = (state: RootState) => state.cart.cartItems;
export const selectShippingAddress = (state: RootState) =>
  state.cart.shippingAddress;

export default cartSlice.reducer;

import { createSlice } from '@reduxjs/toolkit';
import type { RootState } from '../store/configureStore';

const cartItemsFromStorage = localStorage.getItem('cartItems')
  ? JSON.parse(localStorage.getItem('cartItems') || '{}')
  : [];

interface CartState {
  cartItems: object[];
}

const initialState: CartState = {
  cartItems: cartItemsFromStorage,
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
  },
});

export const { cartAddItem } = cartSlice.actions;

export const selectCartItems = (state: RootState) => state.cart.cartItems;

export default cartSlice.reducer;

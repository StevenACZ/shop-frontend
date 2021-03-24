import { createSlice } from '@reduxjs/toolkit';
import type { RootState } from '../store/configureStore';

const cartItemsFromStorage = localStorage.getItem('cartItems')
  ? JSON.parse(localStorage.getItem('cartItems') || '{}')
  : [];

interface CartState {
  cartItems: object[];
  loading: boolean;
  error: string | null;
}

const initialState: CartState = {
  cartItems: cartItemsFromStorage,
  loading: true,
  error: null,
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
      state.loading = true;
      state.error = null;
    },
    productListSuccess: (state, action) => {
      // state.products = action.payload;
      // state.loading = false;
      // state.error = null;
    },
    productListFail: (state, action) => {
      // state.products = [];
      // state.loading = false;
      // state.error = action.payload;
    },
  },
});

export const {
  cartAddItem,
  productListSuccess,
  productListFail,
} = cartSlice.actions;

export const selectCartItems = (state: RootState) => state.productList.products;
export const selectLoading = (state: RootState) => state.productList.loading;
export const selectError = (state: RootState) => state.productList.error;

export default cartSlice.reducer;

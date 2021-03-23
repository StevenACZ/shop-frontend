import { createSlice } from '@reduxjs/toolkit';
import type { RootState } from '../store/configureStore';

interface ProductState {
  products: [];
  loading: boolean;
  error: string;
}

const initialState: ProductState = {
  products: [],
  loading: true,
  error: '',
};

export const productListSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    productListRequest: (state) => {
      state.products = [];
    },
    productListSuccess: (state, action) => {
      state.products = action.payload;
      state.loading = false;
    },
    productListFail: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const {
  productListRequest,
  productListSuccess,
  productListFail,
} = productListSlice.actions;

export const selectProducts = (state: RootState) => state.product.products;
export const selectLoading = (state: RootState) => state.product.loading;
export const selectError = (state: RootState) => state.product.error;

export default productListSlice.reducer;

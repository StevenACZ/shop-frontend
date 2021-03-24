import { createSlice } from '@reduxjs/toolkit';
import type { RootState } from '../store/configureStore';

interface ProductListState {
  products: [];
  loading: boolean;
  error: string | null;
}

const initialState: ProductListState = {
  products: [],
  loading: true,
  error: null,
};

export const productListSlice = createSlice({
  name: 'productList',
  initialState,
  reducers: {
    productListRequest: (state) => {
      state.products = [];
      state.loading = true;
      state.error = null;
    },
    productListSuccess: (state, action) => {
      state.products = action.payload;
      state.loading = false;
      state.error = null;
    },
    productListFail: (state, action) => {
      state.products = [];
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

export const selectProducts = (state: RootState) => state.productList.products;
export const selectLoading = (state: RootState) => state.productList.loading;
export const selectError = (state: RootState) => state.productList.error;

export default productListSlice.reducer;

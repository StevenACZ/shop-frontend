import { createSlice } from '@reduxjs/toolkit';
import type { RootState } from '../../store/configureStore';

interface ProductListState {
  products: null | [];
  loading: boolean;
  error: null | string;
}

const initialState: ProductListState = {
  products: null,
  loading: false,
  error: null,
};

export const productListSlice = createSlice({
  name: 'productList',
  initialState,
  reducers: {
    productListRequest: (state) => {
      state.products = null;
      state.loading = true;
      state.error = null;
    },
    productListSuccess: (state, action) => {
      state.products = action.payload;
      state.loading = false;
      state.error = null;
    },
    productListFail: (state, action) => {
      state.products = null;
      state.loading = false;
      state.error = action.payload;
    },
    productListReset: (state) => {
      state.products = null;
      state.loading = false;
      state.error = null;
    },
  },
});

export const {
  productListRequest,
  productListSuccess,
  productListFail,
  productListReset,
} = productListSlice.actions;

export const selectProducts = (state: RootState) => state.productList.products;
export const selectLoading = (state: RootState) => state.productList.loading;
export const selectError = (state: RootState) => state.productList.error;

export default productListSlice.reducer;

import { createSlice } from '@reduxjs/toolkit';
import type { RootState } from '../../store/configureStore';

interface ProductListState {
  products: null | [];
  pages: null | number;
  page: null | number;
  loading: boolean;
  error: null | string;
}

const initialState: ProductListState = {
  products: null,
  pages: null,
  page: null,
  loading: false,
  error: null,
};

export const productListSlice = createSlice({
  name: 'productList',
  initialState,
  reducers: {
    productListRequest: (state) => {
      state.products = null;
      state.pages = null;
      state.page = null;
      state.loading = true;
      state.error = null;
    },
    productListSuccess: (state, action) => {
      state.products = action.payload.products;
      state.pages = action.payload.pages;
      state.page = action.payload.page;
      state.loading = false;
      state.error = null;
    },
    productListFail: (state, action) => {
      state.products = null;
      state.pages = null;
      state.page = null;
      state.loading = false;
      state.error = action.payload;
    },
    productListReset: (state) => {
      state.products = null;
      state.pages = null;
      state.page = null;
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

export const selectProductListProducts = (state: RootState) =>
  state.productList.products;
export const selectProductListPages = (state: RootState) =>
  state.productList.pages;
export const selectProductListPage = (state: RootState) =>
  state.productList.page;
export const selectProductListLoading = (state: RootState) =>
  state.productList.loading;

export const selectProductListError = (state: RootState) =>
  state.productList.error;

export default productListSlice.reducer;

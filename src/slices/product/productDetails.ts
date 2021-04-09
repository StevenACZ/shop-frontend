import { createSlice } from '@reduxjs/toolkit';
import type { RootState } from '../../store/configureStore';

interface Product {
  _id: string;
  name: string;
  image: string;
  description: string;
  brand: string;
  category: string;
  price: number;
  countInStock: number;
  rating: number;
  numReviews: number;
  reviews: [];
}

interface ProductDetailsState {
  product: null | Product;
  loading: boolean;
  error: null | string;
}

const initialState: ProductDetailsState = {
  product: null,
  loading: false,
  error: null,
};

export const productDetailsSlice = createSlice({
  name: 'productDetails',
  initialState,
  reducers: {
    productDetailsRequest: (state) => {
      state.product = null;
      state.loading = true;
      state.error = null;
    },
    productDetailsSuccess: (state, action) => {
      state.product = action.payload;
      state.loading = false;
      state.error = null;
    },
    productDetailsFail: (state, action) => {
      state.product = null;
      state.loading = false;
      state.error = action.payload;
    },
    productDetailsReset: (state) => {
      state.product = null;
      state.loading = false;
      state.error = null;
    },
  },
});

export const {
  productDetailsRequest,
  productDetailsSuccess,
  productDetailsFail,
  productDetailsReset,
} = productDetailsSlice.actions;

export const selectProductDetailsProduct = (state: RootState) =>
  state.productDetails.product;
export const selectProductDetailsLoading = (state: RootState) =>
  state.productDetails.loading;

export const selectProductDetailsError = (state: RootState) =>
  state.productDetails.error;

export default productDetailsSlice.reducer;

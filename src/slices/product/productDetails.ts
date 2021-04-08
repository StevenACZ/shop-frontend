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
    productRequest: (state) => {
      state.product = null;
      state.loading = true;
      state.error = null;
    },
    productSuccess: (state, action) => {
      state.product = action.payload;
      state.loading = false;
      state.error = null;
    },
    productFail: (state, action) => {
      state.product = null;
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const {
  productRequest,
  productSuccess,
  productFail,
} = productDetailsSlice.actions;

export const selectProduct = (state: RootState) => state.productDetails.product;
export const selectLoading = (state: RootState) => state.productDetails.loading;
export const selectError = (state: RootState) => state.productDetails.error;

export default productDetailsSlice.reducer;

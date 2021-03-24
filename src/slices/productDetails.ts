import { createSlice } from '@reduxjs/toolkit';
import type { RootState } from '../store/configureStore';

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
  product: Product;
  loading: boolean;
  error: string | null;
}

const initialState: ProductDetailsState = {
  product: {
    _id: '',
    name: '',
    image: '',
    description: '',
    brand: '',
    category: '',
    price: 0,
    countInStock: 0,
    rating: 0,
    numReviews: 0,
    reviews: [],
  },
  loading: true,
  error: null,
};

export const productDetailsSlice = createSlice({
  name: 'productDetails',
  initialState,
  reducers: {
    productRequest: (state) => {
      state.loading = true;
    },
    productSuccess: (state, action) => {
      state.product = action.payload;
      state.loading = false;
      state.error = null;
    },
    productFail: (state, action) => {
      state.error = action.payload;
      state.loading = false;
      state.product = {
        _id: '',
        name: '',
        image: '',
        description: '',
        brand: '',
        category: '',
        price: 0,
        countInStock: 0,
        rating: 0,
        numReviews: 0,
        reviews: [],
      };
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

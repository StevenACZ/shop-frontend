import { createSlice } from '@reduxjs/toolkit';
import type { RootState } from '../../store/configureStore';

interface ProductCreateReviewState {
  success: boolean;
  loading: boolean;
  error: null | string;
}

const initialState: ProductCreateReviewState = {
  success: false,
  loading: false,
  error: null,
};

export const productCreateReviewSlice = createSlice({
  name: 'productCreateReview',
  initialState,
  reducers: {
    productCreateReviewRequest: (state) => {
      state.success = false;
      state.loading = true;
      state.error = null;
    },
    productCreateReviewSuccess: (state) => {
      state.success = true;
      state.loading = false;
      state.error = null;
    },
    productCreateReviewFail: (state, action) => {
      state.success = false;
      state.loading = false;
      state.error = action.payload;
    },
    productCreateReviewReset: (state) => {
      state.success = false;
      state.loading = false;
      state.error = null;
    },
  },
});

export const {
  productCreateReviewRequest,
  productCreateReviewSuccess,
  productCreateReviewFail,
  productCreateReviewReset,
} = productCreateReviewSlice.actions;

export const selectProductCreateReviewSuccess = (state: RootState) =>
  state.productCreateReview.success;
export const selectProductCreateReviewLoading = (state: RootState) =>
  state.productCreateReview.loading;

export const selectProductCreateReviewError = (state: RootState) =>
  state.productCreateReview.error;

export default productCreateReviewSlice.reducer;

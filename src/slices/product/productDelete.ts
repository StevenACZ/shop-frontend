import { createSlice } from '@reduxjs/toolkit';
import type { RootState } from '../../store/configureStore';

interface ProductDeleteState {
  success: boolean;
  loading: boolean;
  error: null | string;
}

const initialState: ProductDeleteState = {
  success: false,
  loading: false,
  error: null,
};

export const productDeleteSlice = createSlice({
  name: 'productDelete',
  initialState,
  reducers: {
    productDeleteRequest: (state) => {
      state.success = false;
      state.loading = true;
      state.error = null;
    },
    productDeleteSuccess: (state) => {
      state.success = true;
      state.loading = false;
      state.error = null;
    },
    productDeleteFail: (state, action) => {
      state.success = false;
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const {
  productDeleteRequest,
  productDeleteSuccess,
  productDeleteFail,
} = productDeleteSlice.actions;

export const selectSuccess = (state: RootState) => state.productDelete.success;
export const selectLoading = (state: RootState) => state.productDelete.loading;
export const selectError = (state: RootState) => state.productDelete.error;

export default productDeleteSlice.reducer;

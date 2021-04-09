import { createSlice } from '@reduxjs/toolkit';
import type { RootState } from '../../store/configureStore';

interface ProductUpdateState {
  success: boolean;
  loading: boolean;
  error: null | string;
}

const initialState: ProductUpdateState = {
  success: false,
  loading: false,
  error: null,
};

export const productUpdateSlice = createSlice({
  name: 'productUpdate',
  initialState,
  reducers: {
    productUpdateRequest: (state) => {
      state.success = false;
      state.loading = true;
      state.error = null;
    },
    productUpdateSuccess: (state) => {
      state.success = true;
      state.loading = false;
      state.error = null;
    },
    productUpdateFail: (state, action) => {
      state.success = false;
      state.loading = false;
      state.error = action.payload;
    },
    productUpdateReset: (state) => {
      state.success = false;
      state.loading = false;
      state.error = null;
    },
  },
});

export const {
  productUpdateRequest,
  productUpdateSuccess,
  productUpdateFail,
  productUpdateReset,
} = productUpdateSlice.actions;

export const selectProductUpdateSuccess = (state: RootState) =>
  state.productUpdate.success;
export const selectProductUpdateLoading = (state: RootState) =>
  state.productUpdate.loading;

export const selectProductUpdateError = (state: RootState) =>
  state.productUpdate.error;

export default productUpdateSlice.reducer;

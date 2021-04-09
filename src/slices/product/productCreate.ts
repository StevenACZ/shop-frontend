import { createSlice } from '@reduxjs/toolkit';
import type { RootState } from '../../store/configureStore';

interface ProductCreateState {
  success: boolean;
  loading: boolean;
  error: null | string;
}

const initialState: ProductCreateState = {
  success: false,
  loading: false,
  error: null,
};

export const productCreateSlice = createSlice({
  name: 'productCreate',
  initialState,
  reducers: {
    productCreateRequest: (state) => {
      state.success = false;
      state.loading = true;
      state.error = null;
    },
    productCreateSuccess: (state) => {
      state.success = true;
      state.loading = false;
      state.error = null;
    },
    productCreateFail: (state, action) => {
      state.success = false;
      state.loading = false;
      state.error = action.payload;
    },
    productCreateReset: (state) => {
      state.success = false;
      state.loading = false;
      state.error = null;
    },
  },
});

export const {
  productCreateRequest,
  productCreateSuccess,
  productCreateFail,
  productCreateReset,
} = productCreateSlice.actions;

export const selectSuccess = (state: RootState) => state.productCreate.success;
export const selectLoading = (state: RootState) => state.productCreate.loading;
export const selectError = (state: RootState) => state.productCreate.error;

export default productCreateSlice.reducer;

import { createSlice } from '@reduxjs/toolkit';
import type { RootState } from '../../store/configureStore';

interface OrderDeliverState {
  success: boolean;
  loading: boolean;
  error: null | string;
}

const initialState: OrderDeliverState = {
  success: false,
  loading: false,
  error: null,
};

export const orderDeliverSlice = createSlice({
  name: 'orderDeliver',
  initialState,
  reducers: {
    orderDeliverRequest: (state) => {
      state.success = false;
      state.error = null;
      state.loading = true;
    },
    orderDeliverSuccess: (state) => {
      state.success = true;
      state.error = null;
      state.loading = false;
    },
    orderDeliverFail: (state, action) => {
      state.success = false;
      state.error = action.payload;
      state.loading = false;
    },
    orderDeliverReset: (state) => {
      state.success = false;
      state.error = null;
      state.loading = false;
    },
  },
});

export const {
  orderDeliverRequest,
  orderDeliverSuccess,
  orderDeliverFail,
  orderDeliverReset,
} = orderDeliverSlice.actions;

export const selectOrderDeliverSuccess = (state: RootState) =>
  state.orderDeliver.success;
export const selectOrderDeliverLoading = (state: RootState) =>
  state.orderDeliver.loading;

export const selectOrderDeliverError = (state: RootState) =>
  state.orderDeliver.error;

export default orderDeliverSlice.reducer;

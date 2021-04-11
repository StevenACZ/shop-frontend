import { createSlice } from '@reduxjs/toolkit';
import type { RootState } from '../store/configureStore';

interface OrderState {
  orders: null | [{}];
  order: null | {};
  success: boolean;
  error: null | {};
  loading: boolean;
}

const initialState: OrderState = {
  orders: [{}],
  order: null,
  success: false,
  error: null,
  loading: false,
};

export const orderSlice = createSlice({
  name: 'order',
  initialState,
  reducers: {
    // CREATE
    orderCreateRequest: (state) => {
      state.order = null;
      state.error = null;
      state.success = false;
      state.loading = true;
    },
    orderCreateSuccess: (state, action) => {
      state.order = action.payload;
      state.error = null;
      state.success = true;
      state.loading = false;
    },
    orderCreateFail: (state, action) => {
      state.order = null;
      state.error = action.payload;
      state.success = false;
      state.loading = false;
    },
    // DETAILS
    orderDetailsRequest: (state) => {
      state.order = null;
      state.error = null;
      state.success = false;
      state.loading = true;
    },
    orderDetailsSuccess: (state, action) => {
      state.order = action.payload;
      state.error = null;
      state.success = true;
      state.loading = false;
    },
    orderDetailsFail: (state, action) => {
      state.order = null;
      state.error = action.payload;
      state.success = false;
      state.loading = false;
    },
    // PAY
    orderPayRequest: (state) => {
      state.order = null;
      state.error = null;
      state.success = false;
      state.loading = true;
    },
    orderPaySuccess: (state, action) => {
      state.order = action.payload;
      state.error = null;
      state.success = true;
      state.loading = false;
    },
    orderPayFail: (state, action) => {
      state.order = null;
      state.error = action.payload;
      state.success = false;
      state.loading = false;
    },
    orderPayReset: (state) => {
      state.order = null;
      state.error = null;
      state.success = false;
      state.loading = false;
    },
    // LIST MY
    orderListMyRequest: (state) => {
      state.orders = null;
      state.error = null;
      state.loading = true;
    },
    orderListMySuccess: (state, action) => {
      state.orders = action.payload;
      state.error = null;
      state.loading = false;
    },
    orderListMyFail: (state, action) => {
      state.orders = null;
      state.error = action.payload;
      state.loading = false;
    },
    // CLEAR
    clearOrder: (state) => {
      state.order = null;
      state.error = null;
      state.success = false;
      state.loading = false;
    },
  },
});

export const {
  orderCreateRequest,
  orderCreateSuccess,
  orderCreateFail,
  orderDetailsRequest,
  orderDetailsSuccess,
  orderDetailsFail,
  orderPayRequest,
  orderPaySuccess,
  orderPayFail,
  orderPayReset,
  orderListMyRequest,
  orderListMySuccess,
  orderListMyFail,
  clearOrder,
} = orderSlice.actions;

export const selectOrders = (state: RootState) => state.order.orders;
export const selectOrder = (state: RootState) => state.order.order;
export const selectLoading = (state: RootState) => state.order.loading;
export const selectSuccess = (state: RootState) => state.order.success;
export const selectError = (state: RootState) => state.order.error;

export default orderSlice.reducer;

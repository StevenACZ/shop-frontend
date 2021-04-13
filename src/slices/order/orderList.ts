import { createSlice } from '@reduxjs/toolkit';
import type { RootState } from '../../store/configureStore';

interface OrderListState {
  orders: null | [{}];
  loading: boolean;
  error: null | string;
}

const initialState: OrderListState = {
  orders: null,
  loading: false,
  error: null,
};

export const orderListSlice = createSlice({
  name: 'orderList',
  initialState,
  reducers: {
    orderListRequest: (state) => {
      state.orders = null;
      state.error = null;
      state.loading = true;
    },
    orderListSuccess: (state, action) => {
      state.orders = action.payload;
      state.error = null;
      state.loading = false;
    },
    orderListFail: (state, action) => {
      state.orders = null;
      state.error = action.payload;
      state.loading = false;
    },
    orderListReset: (state) => {
      state.orders = null;
      state.error = null;
      state.loading = false;
    },
  },
});

export const {
  orderListRequest,
  orderListSuccess,
  orderListFail,
  orderListReset,
} = orderListSlice.actions;

export const selectOrderListOrders = (state: RootState) =>
  state.orderList.orders;
export const selectOrderListLoading = (state: RootState) =>
  state.orderList.loading;
export const selectOrderListError = (state: RootState) => state.orderList.error;

export default orderListSlice.reducer;

import { createSlice } from '@reduxjs/toolkit';
import type { RootState } from '../../store/configureStore';

interface OrderMyListState {
  orders: null | [{}];
  loading: boolean;
  error: null | string;
}

const initialState: OrderMyListState = {
  orders: null,
  loading: false,
  error: null,
};

export const orderMyListSlice = createSlice({
  name: 'orderMyList',
  initialState,
  reducers: {
    orderMyListRequest: (state) => {
      state.orders = null;
      state.error = null;
      state.loading = true;
    },
    orderMyListSuccess: (state, action) => {
      state.orders = action.payload;
      state.error = null;
      state.loading = false;
    },
    orderMyListFail: (state, action) => {
      state.orders = null;
      state.error = action.payload;
      state.loading = false;
    },
    orderMyListReset: (state) => {
      state.orders = null;
      state.error = null;
      state.loading = false;
    },
  },
});

export const {
  orderMyListRequest,
  orderMyListSuccess,
  orderMyListFail,
  orderMyListReset,
} = orderMyListSlice.actions;

export const selectOrderMyListOrders = (state: RootState) =>
  state.orderMyList.orders;
export const selectOrderMyListLoading = (state: RootState) =>
  state.orderMyList.loading;
export const selectOrderMyListError = (state: RootState) =>
  state.orderMyList.error;

export default orderMyListSlice.reducer;

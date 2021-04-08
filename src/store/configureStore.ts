// Redux
import { configureStore } from '@reduxjs/toolkit';

// Redux - Slices
import { productListSlice } from '../slices/productList';
import { productDetailsSlice } from '../slices/productDetails';
import { cartSlice } from '../slices/cart';
import { userSlice } from '../slices/user';
import { orderSlice } from '../slices/order';
import { productDeleteSlice } from '../slices/productDelete';

const store = configureStore({
  reducer: {
    productList: productListSlice.reducer,
    productDetails: productDetailsSlice.reducer,
    productDelete: productDeleteSlice.reducer,
    cart: cartSlice.reducer,
    user: userSlice.reducer,
    order: orderSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export default store;

// Redux
import { configureStore } from '@reduxjs/toolkit';

// Redux - Slices
import { productListSlice } from '../slices/product/productList';
import { productDetailsSlice } from '../slices/product/productDetails';
import { productDeleteSlice } from '../slices/product/productDelete';
import { cartSlice } from '../slices/cart';
import { userSlice } from '../slices/user';
import { orderSlice } from '../slices/order';

const store = configureStore({
  reducer: {
    user: userSlice.reducer,
    cart: cartSlice.reducer,
    order: orderSlice.reducer,
    productList: productListSlice.reducer,
    productDetails: productDetailsSlice.reducer,
    productDelete: productDeleteSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export default store;

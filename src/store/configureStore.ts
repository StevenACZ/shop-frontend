// Redux
import { configureStore } from '@reduxjs/toolkit';

// Redux - Slices
import { productListSlice } from '../slices/productList';
import { productDetailsSlice } from '../slices/productDetails';
import { cartSlice } from '../slices/cart';
import { userSlice } from '../slices/user';

const store = configureStore({
  reducer: {
    productList: productListSlice.reducer,
    productDetails: productDetailsSlice.reducer,
    cart: cartSlice.reducer,
    user: userSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export default store;

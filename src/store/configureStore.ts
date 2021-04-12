// Redux
import { configureStore } from '@reduxjs/toolkit';

// Redux - Slices
import { userSlice } from '../slices/user';
import { orderSlice } from '../slices/order';
import { orderListSlice } from '../slices/order/orderList';
import { orderMyListSlice } from '../slices/order/orderMyList';
import { cartSlice } from '../slices/cart';
import { productListSlice } from '../slices/product/productList';
import { productDetailsSlice } from '../slices/product/productDetails';
import { productDeleteSlice } from '../slices/product/productDelete';
import { productCreateSlice } from '../slices/product/productCreate';
import { productUpdateSlice } from '../slices/product/productUpdate';

const store = configureStore({
  reducer: {
    user: userSlice.reducer,
    cart: cartSlice.reducer,
    order: orderSlice.reducer,
    orderList: orderListSlice.reducer,
    orderMyList: orderMyListSlice.reducer,
    productList: productListSlice.reducer,
    productDetails: productDetailsSlice.reducer,
    productDelete: productDeleteSlice.reducer,
    productCreate: productCreateSlice.reducer,
    productUpdate: productUpdateSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export default store;

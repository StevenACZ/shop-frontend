// Redux
import { configureStore } from '@reduxjs/toolkit';

// Redux - Slices
import { productListSlice } from '../slices/productList';
import { productDetailsSlice } from '../slices/productDetails';

const store = configureStore({
  reducer: {
    productList: productListSlice.reducer,
    productDetails: productDetailsSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export default store;

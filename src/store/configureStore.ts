// Redux
import { configureStore } from '@reduxjs/toolkit';

// Redux - Slices
import { productListSlice } from '../slices/product';

const store = configureStore({
  reducer: {
    product: productListSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export default store;

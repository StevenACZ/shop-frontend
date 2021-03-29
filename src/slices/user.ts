import { createSlice } from '@reduxjs/toolkit';
import type { RootState } from '../store/configureStore';

const userInfoFromStorage = localStorage.getItem('userInfo')
  ? JSON.parse(localStorage.getItem('userInfo') || '{}')
  : {};

interface UserState {
  userInfo: {};
  loading: boolean;
  error: null | string;
}

const initialState: UserState = {
  userInfo: userInfoFromStorage,
  loading: true,
  error: null,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    userLoginRequest: (state) => {
      state.loading = true;
      state.userInfo = {};
    },
    userLoginSuccess: (state, action) => {
      state.userInfo = action.payload;
      state.loading = false;
    },
    userLoginFail: (state, action) => {},
    userLogout: (state, action) => {},
  },
});

export const {
  userLoginRequest,
  userLoginSuccess,
  userLoginFail,
  userLogout,
} = userSlice.actions;

export const selectUserInfo = (state: RootState) => state.user.userInfo;
export const selectLoading = (state: RootState) => state.user.loading;
export const selectError = (state: RootState) => state.user.error;

export default userSlice.reducer;

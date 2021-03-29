import { createSlice } from '@reduxjs/toolkit';
import type { RootState } from '../store/configureStore';

const userInfoFromStorage = localStorage.getItem('userInfo')
  ? JSON.parse(localStorage.getItem('userInfo') || '{}')
  : null;

interface UserState {
  userInfo: {} | null;
  loading: boolean;
  error: null | string;
}

const initialState: UserState = {
  userInfo: userInfoFromStorage,
  loading: false,
  error: null,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    userLoginRequest: (state) => {
      state.userInfo = null;
      state.loading = true;
    },
    userLoginSuccess: (state, action) => {
      state.userInfo = action.payload;
      state.loading = false;
    },
    userLoginFail: (state, action) => {
      state.userInfo = null;
      state.error = action.payload;
      state.loading = false;
    },
    userLogout: (state) => {
      state.userInfo = null;
      state.loading = false;
    },
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

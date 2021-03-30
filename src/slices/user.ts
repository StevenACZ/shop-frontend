import { createSlice } from '@reduxjs/toolkit';
import type { RootState } from '../store/configureStore';

const userInfoFromStorage = localStorage.getItem('userInfo')
  ? JSON.parse(localStorage.getItem('userInfo') || '{}')
  : null;

interface UserState {
  user: {} | null;
  userInfo: {} | null;
  loading: boolean;
  error: null | string;
}

const initialState: UserState = {
  user: null,
  userInfo: userInfoFromStorage,
  loading: false,
  error: null,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    // LOGIN
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
    // REGISTER
    userRegisterRequest: (state) => {
      state.userInfo = null;
      state.loading = true;
    },
    userRegisterSuccess: (state, action) => {
      state.userInfo = action.payload;
      state.loading = false;
    },
    userRegisterFail: (state, action) => {
      state.userInfo = null;
      state.error = action.payload;
      state.loading = false;
    },
    // DETAILS
    userDetailsRequest: (state) => {
      state.user = null;
      state.loading = true;
    },
    userDetailsSuccess: (state, action) => {
      state.user = action.payload;
      state.loading = false;
    },
    userDetailsFail: (state, action) => {
      state.user = null;
      state.error = action.payload;
      state.loading = false;
    },
  },
});

export const {
  userLoginRequest,
  userLoginSuccess,
  userLoginFail,
  userLogout,
  userRegisterRequest,
  userRegisterSuccess,
  userRegisterFail,
  userDetailsRequest,
  userDetailsSuccess,
  userDetailsFail,
} = userSlice.actions;

export const selectUser = (state: RootState) => state.user.user;
export const selectUserInfo = (state: RootState) => state.user.userInfo;
export const selectLoading = (state: RootState) => state.user.loading;
export const selectError = (state: RootState) => state.user.error;

export default userSlice.reducer;

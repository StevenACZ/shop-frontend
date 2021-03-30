import { createSlice } from '@reduxjs/toolkit';
import type { RootState } from '../store/configureStore';

const userInfoFromStorage = localStorage.getItem('userInfo')
  ? JSON.parse(localStorage.getItem('userInfo') || '{}')
  : null;

interface UserState {
  user: {} | null;
  userInfo: {} | null;
  loading: boolean;
  errors: {
    errorLogin: null | string;
    errorRegister: null | string;
    errorDetails: null | string;
  };
}

const initialState: UserState = {
  user: null,
  userInfo: userInfoFromStorage,
  loading: false,
  errors: {
    errorLogin: null,
    errorRegister: null,
    errorDetails: null,
  },
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
      state.errors.errorLogin = null;
      state.loading = false;
    },
    userLoginFail: (state, action) => {
      state.userInfo = null;
      state.errors.errorLogin = action.payload;
      state.loading = false;
    },
    userLogout: (state) => {
      state.user = null;
      state.userInfo = null;
      state.loading = false;
      state.errors.errorLogin = null;
      state.errors.errorRegister = null;
      state.errors.errorDetails = null;
    },
    // REGISTER
    userRegisterRequest: (state) => {
      state.userInfo = null;
      state.loading = true;
    },
    userRegisterSuccess: (state, action) => {
      state.userInfo = action.payload;
      state.errors.errorRegister = null;
      state.loading = false;
    },
    userRegisterFail: (state, action) => {
      state.userInfo = null;
      state.errors.errorRegister = action.payload;
      state.loading = false;
    },
    // DETAILS
    userDetailsRequest: (state) => {
      state.user = null;
      state.loading = true;
    },
    userDetailsSuccess: (state, action) => {
      state.user = action.payload;
      state.errors.errorDetails = null;
      state.loading = false;
    },
    userDetailsFail: (state, action) => {
      state.user = null;
      state.errors.errorDetails = action.payload;
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

export const selectErrorLogin = (state: RootState) =>
  state.user.errors.errorLogin;
export const selectErrorRegister = (state: RootState) =>
  state.user.errors.errorRegister;
export const selectErrorDetails = (state: RootState) =>
  state.user.errors.errorDetails;

export default userSlice.reducer;

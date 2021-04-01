import { createSlice } from '@reduxjs/toolkit';
import type { RootState } from '../store/configureStore';

const userInfoFromStorage = localStorage.getItem('userInfo')
  ? JSON.parse(localStorage.getItem('userInfo') || '{}')
  : null;

interface UserState {
  user: null | {};
  userInfo: null | {};
  loading: boolean;
  success: boolean;
  errors: {
    errorLogin: null | string;
    errorRegister: null | string;
    errorDetails: null | string;
    errorUpdateDetails: null | string;
  };
}

const initialState: UserState = {
  user: null,
  userInfo: userInfoFromStorage,
  loading: false,
  success: false,
  errors: {
    errorLogin: null,
    errorRegister: null,
    errorDetails: null,
    errorUpdateDetails: null,
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
    // LOGOUT
    userLogout: (state) => {
      state.user = null;
      state.userInfo = null;
      state.loading = false;
      state.success = false;
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
    // UPDATE
    userUpdateProfileRequest: (state) => {
      state.success = false;
      state.loading = true;
    },
    userUpdateProfileSuccess: (state, action) => {
      state.userInfo = action.payload;
      state.success = true;
      state.errors.errorUpdateDetails = null;
      state.loading = false;
    },
    userUpdateProfileFail: (state, action) => {
      state.success = false;
      state.errors.errorUpdateDetails = action.payload;
      state.loading = false;
    },
    userUpdateProfileReset: (state, action) => {
      state.errors.errorUpdateDetails = action.payload;
      state.loading = false;
    },
    // DELETE ALERTS
    deleteAlert: (state) => {
      state.success = false;
      state.errors.errorLogin = null;
      state.errors.errorRegister = null;
      state.errors.errorDetails = null;
      state.errors.errorUpdateDetails = null;
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
  userUpdateProfileRequest,
  userUpdateProfileSuccess,
  userUpdateProfileFail,
  userUpdateProfileReset,
  deleteAlert,
} = userSlice.actions;

export const selectUser = (state: RootState) => state.user.user;
export const selectUserInfo = (state: RootState) => state.user.userInfo;
export const selectLoading = (state: RootState) => state.user.loading;
export const selectSuccess = (state: RootState) => state.user.success;

export const selectErrorLogin = (state: RootState) =>
  state.user.errors.errorLogin;
export const selectErrorRegister = (state: RootState) =>
  state.user.errors.errorRegister;
export const selectErrorDetails = (state: RootState) =>
  state.user.errors.errorDetails;
export const selectErrorUpdateDetails = (state: RootState) =>
  state.user.errors.errorUpdateDetails;

export default userSlice.reducer;

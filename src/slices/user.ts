import { createSlice } from '@reduxjs/toolkit';
import type { RootState } from '../store/configureStore';

const userInfoFromStorage = localStorage.getItem('userInfo')
  ? JSON.parse(localStorage.getItem('userInfo') || '{}')
  : null;

interface UserState {
  profile: null | {};
  userInfo: null | {};
  users: null | [{}];
  loading: boolean;
  success: boolean;
  errors: {
    errorLogin: null | string;
    errorRegister: null | string;
    errorDetails: null | string;
    errorUpdateDetails: null | string;
    errorList: null | string;
  };
}

const initialState: UserState = {
  profile: null,
  userInfo: userInfoFromStorage,
  users: null,
  loading: false,
  success: false,
  errors: {
    errorLogin: null,
    errorRegister: null,
    errorDetails: null,
    errorUpdateDetails: null,
    errorList: null,
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
      state.profile = null;
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
      state.profile = null;
      state.loading = true;
    },
    userDetailsSuccess: (state, action) => {
      state.profile = action.payload;
      state.errors.errorDetails = null;
      state.loading = false;
    },
    userDetailsFail: (state, action) => {
      state.profile = null;
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
    // USER LIST
    userListRequest: (state) => {
      state.users = null;
      state.loading = true;
    },
    userListSuccess: (state, action) => {
      state.users = action.payload;
      state.errors.errorList = null;
      state.loading = false;
    },
    userListFail: (state, action) => {
      state.users = null;
      state.errors.errorList = action.payload;
      state.loading = false;
    },
    // DELETE ALERTS
    deleteAlert: (state) => {
      state.success = false;
      state.errors.errorLogin = null;
      state.errors.errorRegister = null;
      state.errors.errorDetails = null;
      state.errors.errorUpdateDetails = null;
      state.errors.errorList = null;
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
  userListRequest,
  userListSuccess,
  userListFail,
  deleteAlert,
} = userSlice.actions;

export const selectProfile = (state: RootState) => state.user.profile;
export const selectUserInfo = (state: RootState) => state.user.userInfo;
export const selectUsers = (state: RootState) => state.user.users;
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
export const selectErrorList = (state: RootState) =>
  state.user.errors.errorList;

export default userSlice.reducer;

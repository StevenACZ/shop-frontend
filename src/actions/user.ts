// Axios
import axios from '../axios/index';

// Redux - Slices
import {
  userLoginFail,
  userLoginRequest,
  userLoginSuccess,
  userLogout,
  userRegisterFail,
  userRegisterRequest,
  userRegisterSuccess,
  userDetailsRequest,
  userDetailsSuccess,
  userDetailsFail,
  userUpdateProfileRequest,
  userUpdateProfileSuccess,
  userUpdateProfileFail,
  userListRequest,
  userListSuccess,
  userListFail,
  deleteAlert,
  userDeleteRequest,
  userDeleteSuccess,
  userDeleteFail,
  userUpdateRequest,
  userUpdateSuccess,
  userUpdateFail,
} from '../slices/user';
import { clearAllOrder } from './order';
import { clearAllCart } from './cart';

export const deleteAlerts = () => (dispatch: any) => {
  setTimeout(() => {
    dispatch(deleteAlert());
  }, 3000);
};

export const login = ({
  email,
  password,
}: {
  email: string;
  password: string;
}) => async (dispatch: any) => {
  try {
    dispatch(userLoginRequest());

    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };

    const { data } = await axios.post(
      '/api/users/login',
      { email, password },
      config
    );

    dispatch(userLoginSuccess(data));

    localStorage.setItem('userInfo', JSON.stringify(data));
  } catch (error) {
    dispatch(
      userLoginFail(
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message
      )
    );

    dispatch(deleteAlerts());
  }
};

export const logout = () => (dispatch: any) => {
  localStorage.removeItem('userInfo');
  localStorage.removeItem('__paypal_storage__');
  dispatch(userLogout());
  dispatch(clearAllOrder());
  dispatch(clearAllCart());
};

export const register = ({
  name,
  email,
  password,
}: {
  name: string;
  email: string;
  password: string;
}) => async (dispatch: any) => {
  try {
    dispatch(userRegisterRequest());

    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };

    const { data } = await axios.post(
      '/api/users',
      { name, email, password },
      config
    );

    dispatch(userRegisterSuccess(data));
    dispatch(userLoginSuccess(data));

    localStorage.setItem('userInfo', JSON.stringify(data));
  } catch (error) {
    dispatch(
      userRegisterFail(
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message
      )
    );

    dispatch(deleteAlerts());
  }
};

export const getUserDetails = () => async (dispatch: any, getState: any) => {
  try {
    dispatch(userDetailsRequest());

    const {
      user: {
        userInfo: { token },
      },
    } = getState();

    const config = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    };

    const { data } = await axios.get('/api/users/profile', config);

    dispatch(userDetailsSuccess(data));
  } catch (error) {
    dispatch(
      userDetailsFail(
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message
      )
    );

    dispatch(deleteAlerts());
  }
};

export const getUserById = (userId: string) => async (
  dispatch: any,
  getState: any
) => {
  try {
    dispatch(userDetailsRequest());

    const {
      user: {
        userInfo: { token },
      },
    } = getState();

    const config = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    };

    const { data } = await axios.get(`/api/users/${userId}`, config);

    dispatch(userDetailsSuccess(data));
  } catch (error) {
    dispatch(
      userDetailsFail(
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message
      )
    );

    dispatch(deleteAlerts());
  }
};

export const updateUser = ({
  userId,
  name,
  email,
  isAdmin,
}: {
  userId: string;
  name: string;
  email: string;
  isAdmin: boolean;
}) => async (dispatch: any, getState: any) => {
  try {
    dispatch(userUpdateRequest());

    const {
      user: {
        userInfo: { token },
      },
    } = getState();

    const config = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    };

    const { data } = await axios.put(
      `/api/users/${userId}`,
      { userId, name, email, isAdmin },
      config
    );

    dispatch(userUpdateSuccess(data));

    dispatch(deleteAlerts());
  } catch (error) {
    dispatch(
      userUpdateFail(
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message
      )
    );

    dispatch(deleteAlerts());
  }
};

export const listUsers = () => async (dispatch: any, getState: any) => {
  try {
    dispatch(userListRequest());

    const {
      user: {
        userInfo: { token },
      },
    } = getState();

    const config = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    };

    const { data } = await axios.get('/api/users', config);

    dispatch(userListSuccess(data));
  } catch (error) {
    dispatch(
      userListFail(
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message
      )
    );

    dispatch(deleteAlerts());
  }
};

export const deleteUser = (userId: string) => async (
  dispatch: any,
  getState: any
) => {
  try {
    dispatch(userDeleteRequest());

    const {
      user: {
        userInfo: { token },
      },
    } = getState();

    const config = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    };

    await axios.delete(`/api/users/${userId}`, config);

    dispatch(userDeleteSuccess());
  } catch (error) {
    dispatch(
      userDeleteFail(
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message
      )
    );

    dispatch(deleteAlerts());
  }
};

export const updateUserProfile = ({
  name,
  email,
  password,
}: {
  name: string;
  email: string;
  password: string;
}) => async (dispatch: any, getState: any) => {
  try {
    dispatch(userUpdateProfileRequest());

    const {
      user: {
        userInfo: { token },
      },
    } = getState();

    const config = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    };

    const { data } = await axios.put(
      '/api/users/profile',
      { name, email, password },
      config
    );

    dispatch(userUpdateProfileSuccess(data));
    dispatch(getUserDetails());

    localStorage.setItem('userInfo', JSON.stringify(data));
    dispatch(deleteAlerts());
  } catch (error) {
    dispatch(
      userUpdateProfileFail(
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message
      )
    );

    dispatch(deleteAlerts());
  }
};

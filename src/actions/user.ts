// Axios
import axios from '../axios/index';

// Redux - Slices
import {
  userLoginFail,
  userLoginRequest,
  userLoginSuccess,
} from '../slices/user';

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

    localStorage.setItem('userInfo', JSON.stringify(data));
    dispatch(userLoginSuccess(data));
  } catch (error) {
    dispatch(
      userLoginFail(
        error.response && error.response.data.msg
          ? error.response.data.msg
          : error.message
      )
    );
  }
};

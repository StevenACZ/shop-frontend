// React
import React, { useEffect } from 'react';

// Redux
import { useDispatch, useSelector } from 'react-redux';

// Redux - Actions
import { login } from '../../../actions/user';

// Redux - Slices
import {
  selectErrorLogin,
  selectLoading,
  selectUserInfo,
} from '../../../slices/user';

// React Router
import { useHistory } from 'react-router';

// React Hook Form
import { useForm } from 'react-hook-form';

// Styles
import { LoginScreenStyled, Form, GoRegister } from './Styles';

// Antd Components
import { Alert, Spin } from 'antd';

// Components
import Input from '../../../components/input/Input';
import Button from '../../../components/button/Button';

interface Props {}

const LoginScreen: React.FC<Props> = () => {
  // History
  const history = useHistory();

  // Dispatch
  const dispatch = useDispatch();

  // Selector
  const loading = useSelector(selectLoading);
  const error = useSelector(selectErrorLogin);
  const userInfo = useSelector(selectUserInfo);

  useEffect(() => {
    if (userInfo) {
      history.goBack();
    }
  }, [history, userInfo]);

  const { register, errors, handleSubmit } = useForm();

  const handleSignIn = handleSubmit(
    (data: { email: string; password: string }) => {
      dispatch(login(data));
    }
  );

  return (
    <LoginScreenStyled>
      <Spin spinning={loading}>
        <Form onSubmit={handleSignIn}>
          <h2>Sign in</h2>
          <Input
            name="email"
            label="Email"
            placeholder="Your email"
            error={errors.email?.message}
            ref={register({
              required: 'Email is required',
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: 'Email is in wrong format',
              },
            })}
          />
          <Input
            type="password"
            name="password"
            label="Password"
            placeholder="Your password"
            error={errors.password?.message}
            ref={register({
              required: 'Password is required',
              minLength: {
                value: 6,
                message: 'Password must be at least 6 characters',
              },
              maxLength: {
                value: 50,
                message: 'Password must not be greater than 50 characters',
              },
            })}
          />
          {error && <Alert message={error} type="error" showIcon banner />}
          <Button width="100%">SIGN IN</Button>

          <GoRegister>
            New Customer?
            <span onClick={() => history.push('/register')}>Register</span>
          </GoRegister>
        </Form>
      </Spin>
    </LoginScreenStyled>
  );
};

export default LoginScreen;

// React
import React, { useEffect, useRef } from 'react';

// Redux
import { useDispatch, useSelector } from 'react-redux';

// Redux - Actions
import { register as registerUser } from '../../../actions/user';

// Redux - Slices
import {
  selectErrorRegister,
  selectLoading,
  selectUserInfo,
} from '../../../slices/user';

// React Router
import { useHistory } from 'react-router';

// React Hook Form
import { useForm } from 'react-hook-form';

// Styles
import { RegisterScreenStyled, Form, GoLogin } from './Styles';

// Antd Components
import { Alert, Spin } from 'antd';

// Components
import Input from '../../../components/input/Input';
import Button from '../../../components/button/Button';

interface Props {}

const RegisterScreen: React.FC<Props> = () => {
  // History
  const history = useHistory();

  // Dispatch
  const dispatch = useDispatch();

  // Selector
  const loading = useSelector(selectLoading);
  const error = useSelector(selectErrorRegister);
  const userInfo = useSelector(selectUserInfo);

  useEffect(() => {
    if (userInfo) {
      history.push('/');
    }
  }, [history, userInfo]);

  const { register, errors, handleSubmit, watch } = useForm();

  const password = useRef({});
  password.current = watch('password', '');

  const handleSignUp = handleSubmit(
    (data: {
      name: string;
      email: string;
      password: string;
      password_repeat: string;
    }) => {
      dispatch(registerUser(data));
    }
  );

  return (
    <RegisterScreenStyled>
      <Spin spinning={loading}>
        <Form onSubmit={handleSignUp}>
          <h2>Sign up</h2>
          <Input
            name="name"
            label="Name"
            placeholder="Your name"
            error={errors.name?.message}
            ref={register({
              required: 'Name is required',
              minLength: {
                value: 3,
                message: 'Name must be at least 3 characters',
              },
              maxLength: {
                value: 20,
                message: 'Name must not be greater than 20 characters',
              },
            })}
          />
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
          <Input
            type="password"
            name="password_repeat"
            label="Confirm Password"
            placeholder="Confirm password"
            error={errors.password_repeat?.message}
            ref={register({
              validate: (value) =>
                value === password.current || 'The passwords do not match',
            })}
          />
          {error && <Alert message={error} type="error" showIcon banner />}
          <Button width="100%">SIGN UP</Button>

          <GoLogin>
            Already have an acount?
            <span onClick={() => history.push('/login')}>Login</span>
          </GoLogin>
        </Form>
      </Spin>
    </RegisterScreenStyled>
  );
};

export default RegisterScreen;

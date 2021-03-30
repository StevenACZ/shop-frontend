// React
import React, { useEffect, useRef } from 'react';

// Redux
import { useDispatch, useSelector } from 'react-redux';

// Redux - Actions
import { getUserDetails } from '../../actions/user';

// Redux - Slices
import {
  selectErrorDetails,
  selectLoading,
  selectUser,
  selectUserInfo,
} from '../../slices/user';

// React Router
import { useHistory } from 'react-router';

// React Hook Form
import { useForm } from 'react-hook-form';

// Styles
import { ProfileScreenStyled, Form } from './Styles';

// Antd Components
import { Alert, Spin } from 'antd';

// Components
import Input from '../../components/input/Input';
import Button from '../../components/button/Button';

interface Props {}

const ProfileScreen: React.FC<Props> = () => {
  // History
  const history = useHistory();

  // Dispatch
  const dispatch = useDispatch();

  // Selector
  const loading = useSelector(selectLoading);
  const error = useSelector(selectErrorDetails);
  const userInfo = useSelector(selectUserInfo);
  const user = useSelector(selectUser) as {
    name: string;
    email: string;
  };

  useEffect(() => {
    if (!userInfo) {
      history.push('/');
    }
  }, [history, userInfo]);

  useEffect(() => {
    dispatch(getUserDetails());
  }, [dispatch]);

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
      console.log(data);
      // dispatch(registerUser(data));
    }
  );

  return (
    <ProfileScreenStyled>
      <Spin spinning={loading}>
        <Form onSubmit={handleSignUp}>
          <h2>User profile</h2>
          <Input
            name="name"
            label="Name"
            value={user && user.name}
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
            value={user && user.email}
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
            placeholder="Enter password"
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
          <Button width="100%">UPDATE</Button>
        </Form>
      </Spin>
    </ProfileScreenStyled>
  );
};

export default ProfileScreen;

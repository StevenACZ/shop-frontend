// React
import React, { useEffect, useState } from 'react';

// Redux
import { useDispatch, useSelector } from 'react-redux';

// Redux - Actions
import { getUserById, updateUser } from '../../actions/user';

// Redux - Slices
import {
  selectErrorDetails,
  selectErrorUpdate,
  selectLoading,
  selectProfile,
  selectSuccess,
  selectUserInfo,
} from '../../slices/user';

// React Router
import { useHistory, useParams } from 'react-router';

// React Hook Form
import { useForm } from 'react-hook-form';

// Styles
import { UserEditScreenStyled, Form } from './Styles';

// Antd Components
import { Alert, Spin, Switch } from 'antd';

// Components
import Button from '../../components/button/Button';
import Input from '../../components/input/Input';

interface Props {}

const UserEditScreen: React.FC<Props> = () => {
  // History
  const history = useHistory();

  // Dispatch
  const dispatch = useDispatch();

  // Selector
  const userInfo = useSelector(selectUserInfo) as {
    isAdmin: boolean;
  };
  const profile = useSelector(selectProfile) as {
    email: string;
    name: string;
    isAdmin: boolean;
  };
  const success = useSelector(selectSuccess);
  const loading = useSelector(selectLoading);
  const errorDetails = useSelector(selectErrorDetails);
  const errorUpdate = useSelector(selectErrorUpdate);

  const { userId } = useParams() as { userId: string };

  const [admin, setAdmin] = useState(false);
  const { register, errors, handleSubmit } = useForm();

  const handleUpdate = handleSubmit((data: { name: string; email: string }) => {
    dispatch(
      updateUser({
        userId,
        ...data,
        isAdmin: admin,
      })
    );
  });

  useEffect(() => {
    dispatch(getUserById(userId));
  }, [dispatch, userId]);

  useEffect(() => {
    if (profile) {
      setAdmin(profile.isAdmin);
    }
  }, [profile]);

  useEffect(() => {
    if (!userInfo) {
      history.push('/');
    } else {
      if (!userInfo.isAdmin) {
        history.push('/');
      }
    }
  }, [history, userInfo]);

  return (
    <UserEditScreenStyled>
      <Spin spinning={loading}>
        {profile && (
          <Form onSubmit={handleUpdate}>
            <h2>Edit user</h2>

            <Input
              name="name"
              label="Name"
              defaultValue={profile && profile.name}
              placeholder="Enter name"
              error={errors.name?.message}
              ref={register({
                required: 'Name is required',
                minLength: {
                  value: 3,
                  message: 'Name must be at least 3 characters',
                },
                maxLength: {
                  value: 100,
                  message: 'Name must not be greater than 200 characters',
                },
              })}
            />
            <Input
              name="email"
              label="Email Address"
              defaultValue={profile && profile.email}
              placeholder="Enter email"
              error={errors.email?.message}
              ref={register({
                required: 'Email is required',
                minLength: {
                  value: 3,
                  message: 'Email must be at least 3 characters',
                },
                maxLength: {
                  value: 200,
                  message: 'Email must not be greater than 100 characters',
                },
              })}
            />
            {profile && (
              <Switch
                checkedChildren="Admin"
                unCheckedChildren="User"
                defaultChecked={profile.isAdmin}
                onChange={() => setAdmin(!admin)}
              />
            )}
            {errorDetails && (
              <Alert message={errorDetails} type="error" showIcon banner />
            )}
            {errorUpdate && (
              <Alert message={errorUpdate} type="error" showIcon banner />
            )}
            {success && (
              <Alert message="Updated" type="success" showIcon banner />
            )}
            <Button width="100%" type="submit">
              UPDATE
            </Button>
            <Button width="100%" type="button" onClick={() => history.goBack()}>
              GO BACK
            </Button>
          </Form>
        )}
      </Spin>
    </UserEditScreenStyled>
  );
};

export default UserEditScreen;

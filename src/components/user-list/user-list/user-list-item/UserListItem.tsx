// React
import React, { useState } from 'react';

// Redux
import { useDispatch } from 'react-redux';

// Redux - Actions
import { deleteUser } from '../../../../actions/user';

// React Hook Form
import { useForm } from 'react-hook-form';

// Styles
import {
  UserListItemStyled,
  Header,
  Body,
  Footer,
  ActionsContainer,
  Form,
} from './Styles';

// Antd Components
import { Alert, Popconfirm, message, Drawer, Switch } from 'antd';

// Components
import Button from '../../../button/Button';
import Input from '../../../input/Input';

interface Props {
  _id: string;
  isAdmin: string;
  name: number;
  email: boolean;
}

const UserListItem: React.FC<Props> = ({ _id, isAdmin, name, email }) => {
  // Dispatch
  const dispatch = useDispatch();

  const [visible, setVisible] = useState(false);
  const [admin, setAdmin] = useState(false);
  const { register, errors, handleSubmit } = useForm();

  const handleUpdate = handleSubmit((data: { name: string; email: string }) => {
    // dispatch(saveShippingAddress(data));

    console.log({
      userId: _id,
      ...data,
      isAdmin: admin,
    });
  });

  const handleDelete = (userId: string) => {
    dispatch(deleteUser(userId));
    message.success('User Deleted');
  };

  const showDrawer = (userId: string) => {
    setVisible(true);
  };
  const onClose = () => {
    setVisible(false);
  };

  return (
    <UserListItemStyled>
      <Header>
        <h3>{_id && _id}</h3>
      </Header>
      <Body>
        <p>
          <span>Name:</span> {name && name}
        </p>
        <p>
          <span>Email:</span> {email && email}
        </p>
      </Body>
      <Footer>
        {isAdmin && isAdmin ? (
          <Alert message="Admin" type="success" showIcon />
        ) : (
          <Alert message="User" type="warning" showIcon />
        )}
      </Footer>
      <ActionsContainer>
        <Button
          width="48%"
          onClick={() => showDrawer(_id)}
          // onClick={() => history.push(`/admin/user/${_id}/edit`)}
        >
          Edit
        </Button>
        <Popconfirm
          title="Are you sure to delete this user?"
          onConfirm={() => handleDelete(_id)}
          okText="Yes"
          cancelText="No"
        >
          <Button width="48%">Delete</Button>
        </Popconfirm>
      </ActionsContainer>

      <Drawer
        placement="right"
        closable={false}
        onClose={onClose}
        visible={visible}
      >
        <Form onSubmit={handleUpdate}>
          <h2>Edit user</h2>
          <Input
            name="name"
            label="Name"
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
          <Switch
            checkedChildren="Admin"
            unCheckedChildren="User"
            onChange={() => setAdmin(!admin)}
          />
          <Button width="100%" type="submit">
            UPDATE
          </Button>
        </Form>
      </Drawer>
    </UserListItemStyled>
  );
};

export default UserListItem;

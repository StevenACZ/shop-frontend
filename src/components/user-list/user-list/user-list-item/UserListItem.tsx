// React
import React from 'react';

// Redux
import { useDispatch } from 'react-redux';

// Redux - Actions
import { deleteUser } from '../../../../actions/user';

// React Router
import { useHistory } from 'react-router';

// Styles
import {
  UserListItemStyled,
  Header,
  Body,
  Footer,
  ActionsContainer,
} from './Styles';

// Antd Components
import { Alert, Popconfirm, message } from 'antd';

// Components
import Button from '../../../button/Button';

interface Props {
  _id: string;
  isAdmin: string;
  name: number;
  email: boolean;
}

const UserListItem: React.FC<Props> = ({ _id, isAdmin, name, email }) => {
  // History
  const history = useHistory();

  // Dispatch
  const dispatch = useDispatch();

  const handleDelete = (userId: string) => {
    dispatch(deleteUser(userId));
    message.success('User Deleted');
  };

  const handleGoToUpdate = (userId: string) => {
    history.push(`/admin/${userId}/edit`);
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
        <Button width="48%" onClick={() => handleGoToUpdate(_id)}>
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
    </UserListItemStyled>
  );
};

export default UserListItem;

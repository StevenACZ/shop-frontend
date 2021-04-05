// React
import React from 'react';

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
import { Alert } from 'antd';

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

  const handleDelete = (userId: string) => {};

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
        <Button width="48%" onClick={() => history.push(`user/${_id}/edit`)}>
          Edit
        </Button>
        <Button width="48%" onClick={() => handleDelete(_id)}>
          Delete
        </Button>
      </ActionsContainer>
    </UserListItemStyled>
  );
};

export default UserListItem;

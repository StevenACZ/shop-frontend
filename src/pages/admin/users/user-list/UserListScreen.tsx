// React
import React, { useEffect } from 'react';

// Redux
import { useSelector } from 'react-redux';

// Redux - Slices
import { selectUserInfo } from '../../../../slices/user';

// React Router
import { useHistory } from 'react-router';

// Styles
import { UserListScreenStyled } from './Styles';

// Components
import UserList from '../../../../components/user-list/user-list/UserList';

interface Props {}

const UserListScreen: React.FC<Props> = () => {
  // History
  const history = useHistory();

  // Selector
  const userInfo = useSelector(selectUserInfo) as {
    name: string;
    isAdmin: boolean;
    token: string;
  };

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
    <UserListScreenStyled>
      <h2>User list</h2>
      <UserList />
    </UserListScreenStyled>
  );
};

export default UserListScreen;

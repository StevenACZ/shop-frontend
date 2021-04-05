// React
import React, { useEffect } from 'react';

// Redux
import { useDispatch, useSelector } from 'react-redux';

// Redux - Actions
import { listUsers } from '../../../actions/user';

// Redux - Slices
import {
  selectErrorList,
  selectLoading,
  selectUsers,
} from '../../../slices/user';

// Styles
import { UserListStyled } from './Styles';

// Antd Components
import { Alert, Spin } from 'antd';

// Components
import UserListItem from './user-list-item/UserListItem';

interface Props {}

const UserList: React.FC<Props> = () => {
  // Dispatch
  const dispatch = useDispatch();

  // Selector
  const loading = useSelector(selectLoading);
  const users = useSelector(selectUsers);
  const error = useSelector(selectErrorList);

  useEffect(() => {
    dispatch(listUsers());
  }, [dispatch]);

  return (
    <Spin spinning={loading}>
      <UserListStyled>
        {users &&
          users.map((order: any) => (
            <UserListItem key={order._id} {...order} />
          ))}
      </UserListStyled>
      {users && error && <Alert message={error} type="error" showIcon banner />}
    </Spin>
  );
};

export default UserList;

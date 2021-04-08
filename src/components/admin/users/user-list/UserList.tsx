// React
import React, { useEffect } from 'react';

// Redux
import { useDispatch, useSelector } from 'react-redux';

// Redux - Actions
import { listUsers } from '../../../../actions/user';

// Redux - Slices
import {
  selectErrorList,
  selectLoading,
  selectSuccess,
  selectUsers,
  selectErrorDelete,
} from '../../../../slices/user';

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
  const success = useSelector(selectSuccess);
  const users = useSelector(selectUsers);
  const loading = useSelector(selectLoading);
  const errorList = useSelector(selectErrorList);
  const errorDelete = useSelector(selectErrorDelete);

  useEffect(() => {
    dispatch(listUsers());
  }, [dispatch, success]);

  return (
    <Spin spinning={loading}>
      <UserListStyled>
        {users &&
          users.map((order: any) => (
            <UserListItem key={order._id} {...order} />
          ))}
      </UserListStyled>
      {users && (errorList || errorDelete) && (
        <Alert
          message={errorList || errorDelete}
          type="error"
          showIcon
          banner
        />
      )}
    </Spin>
  );
};

export default UserList;

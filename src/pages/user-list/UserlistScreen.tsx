// React
import React from 'react';

// Styles
import { UserlistScreenStyled } from './Styles';

interface Props {}

const UserlistScreen: React.FC<Props> = () => {
  return (
    <UserlistScreenStyled>
      <h2>Userlist</h2>
    </UserlistScreenStyled>
  );
};

export default UserlistScreen;

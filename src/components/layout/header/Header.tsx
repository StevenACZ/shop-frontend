// React
import React from 'react';

// React Router
import { NavLink, useHistory } from 'react-router-dom';

// Styles
import {
  HeaderStyled,
  Logo,
  Search,
  Navbar,
  Links,
  Profile,
  HeaderContainer,
} from './Styles';

// Components
import Button from '../../button/Button';

interface Props {}

const Header: React.FC<Props> = () => {
  const history = useHistory();

  return (
    <HeaderStyled>
      <HeaderContainer>
        <Logo>
          <NavLink to="/">
            <h2>Awesome Shop</h2>
          </NavLink>
        </Logo>

        <Search>
          <label>
            <input type="text" placeholder="Search" />
          </label>
          <Button>Search</Button>
        </Search>

        <Navbar>
          <Links></Links>
          <Profile>
            <Button onClick={() => history.push('/login')}>Sign in</Button>
            <Button onClick={() => history.push('/register')}>Sign up</Button>
          </Profile>
        </Navbar>
      </HeaderContainer>
    </HeaderStyled>
  );
};

export default Header;

// React
import React, { useState } from 'react';

// Redux
import { useDispatch, useSelector } from 'react-redux';

// Redux - Actions
import { logout } from '../../../actions/user';

// Redux - Slices
import { selectLoading, selectUserInfo } from '../../../slices/user';

// React Router
import { NavLink, useHistory } from 'react-router-dom';

// Styles
import {
  HeaderStyled,
  Logo,
  Search,
  Navbar,
  Profile,
  HeaderContainer,
  DrawerStyled,
} from './Styles';

// Antd Icons
import {
  DownOutlined,
  ProfileOutlined,
  LogoutOutlined,
  ShoppingCartOutlined,
  SearchOutlined,
  MenuOutlined,
  DatabaseOutlined,
} from '@ant-design/icons';

// Antd Components
import { Drawer, Dropdown, Menu } from 'antd';

// Components
import Button from '../../button/Button';

interface Props {}

const Header: React.FC<Props> = () => {
  // History
  const history = useHistory();

  // Dispatch
  const dispatch = useDispatch();

  // Selector
  const loading = useSelector(selectLoading);
  const userInfo = useSelector(selectUserInfo) as {
    name: string;
  };

  const handleLogout = () => {
    dispatch(logout());
  };

  const menu = (
    <Menu>
      <Menu.Item
        key="1"
        icon={<ProfileOutlined />}
        onClick={() => history.push('/profile')}
      >
        Profile
      </Menu.Item>
      <Menu.Divider />
      <Menu.Item
        key="2"
        icon={<DatabaseOutlined />}
        onClick={() => history.push('/myorders')}
      >
        My orders
      </Menu.Item>
      <Menu.Divider />
      <Menu.Item key="3" icon={<LogoutOutlined />} onClick={handleLogout}>
        Logout
      </Menu.Item>
    </Menu>
  );

  const [visible, setVisible] = useState(false);

  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };

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
          <Button>
            <SearchOutlined />
          </Button>
        </Search>

        {/* MOBILE */}
        <DrawerStyled>
          <Button onClick={showDrawer}>
            <MenuOutlined />
          </Button>

          <Drawer
            title={userInfo?.name}
            placement="left"
            closable={false}
            onClose={onClose}
            visible={visible}
          >
            <Menu onClick={onClose}>
              {userInfo ? (
                <>{menu}</>
              ) : (
                <>
                  <Menu.Item key="1">
                    <Button width="100%" onClick={() => history.push('/login')}>
                      Sign in
                    </Button>
                  </Menu.Item>
                  <Menu.Divider />
                  <Menu.Item key="2">
                    <Button
                      width="100%"
                      onClick={() => history.push('/register')}
                    >
                      Sign up
                    </Button>
                  </Menu.Item>
                </>
              )}
              <Menu.Item key="3">
                <Button width="100%" onClick={() => history.push('/cart')}>
                  <p>Cart</p>
                  <ShoppingCartOutlined />
                </Button>
              </Menu.Item>
            </Menu>
          </Drawer>
        </DrawerStyled>

        {/* DESKTOP */}
        <Navbar>
          <Button onClick={() => history.push('/cart')}>
            <p>Cart</p>
            <ShoppingCartOutlined />
          </Button>
          <Profile>
            {userInfo ? (
              <Dropdown overlay={menu} trigger={['click']}>
                <Button loading={loading} disabled={loading}>
                  <p>{userInfo.name}</p> <DownOutlined />
                </Button>
              </Dropdown>
            ) : (
              <>
                <Button onClick={() => history.push('/login')}>Sign in</Button>
                <Button onClick={() => history.push('/register')}>
                  Sign up
                </Button>
              </>
            )}
          </Profile>
        </Navbar>
      </HeaderContainer>
    </HeaderStyled>
  );
};

export default Header;

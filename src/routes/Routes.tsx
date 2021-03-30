// React
import React from 'react';

// React Router
import { Redirect, Route, Switch } from 'react-router-dom';

// Components
import HomeScreen from '../pages/home/HomeScreen';
import ProductScreen from '../pages/product/ProductScreen';
import CartScreen from '../pages/cart/CartScreen';
import LoginScreen from '../pages/auth/login/LoginScreen';
import RegisterScreen from '../pages/auth/register/RegisterScreen';
import ProfileScreen from '../pages/profile/ProfileScreen';

interface Props {}

const Routes: React.FC<Props> = () => {
  return (
    <Switch>
      <Route exact path="/" component={HomeScreen} />
      <Route exact path="/product/:productID" component={ProductScreen} />
      <Route exact path="/cart/:productID?" component={CartScreen} />
      <Route exact path="/login" component={LoginScreen} />
      <Route exact path="/register" component={RegisterScreen} />
      <Route exact path="/profile" component={ProfileScreen} />

      <Redirect to="/" />
    </Switch>
  );
};

export default Routes;

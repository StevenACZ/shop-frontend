// React
import React from 'react';

// React Router
import { Redirect, Route, Switch } from 'react-router-dom';

// Components
import HomeScreen from '../pages/home/HomeScreen';
import ProductScreen from '../pages/product/ProductScreen';
import CartScreen from '../pages/cart/CartScreen';

interface Props {}

const Routes: React.FC<Props> = () => {
  return (
    <Switch>
      <Route exact path="/" component={HomeScreen} />
      <Route exact path="/product/:productID" component={ProductScreen} />
      <Route exact path="/cart/:productID?" component={CartScreen} />

      <Redirect to="/" />
    </Switch>
  );
};

export default Routes;

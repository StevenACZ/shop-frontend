// React
import React from 'react';

// React Router
import { Redirect, Route, Switch } from 'react-router-dom';

// Components
import HomeScreen from '../pages/HomeScreen';
import ProductScreen from '../pages/ProductScreen';

interface Props {}

const Routes: React.FC<Props> = () => {
  return (
    <Switch>
      <Route exact path="/" component={HomeScreen} />
      <Route exact path="/product/:productID" component={ProductScreen} />

      <Redirect to="/" />
    </Switch>
  );
};

export default Routes;

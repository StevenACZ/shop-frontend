// React
import React from 'react';

// React Router
import { Redirect, Route, Switch } from 'react-router-dom';

// Components
import Home from '../pages/Home';
import Product from '../pages/Product';

interface Props {}

const Routes: React.FC<Props> = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/product" component={Product} />

      <Redirect to="/" />
    </Switch>
  );
};

export default Routes;

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
import CheckoutProcessScreen from '../pages/checkout-process/CheckoutProcessScreen';
import OrderScreen from '../pages/order/OrderScreen';
import MyOrdersScreen from '../pages/my-orders/MyOrdersScreen';
import UserListScreen from '../pages/admin/users/user-list/UserListScreen';
import UserEditScreen from '../pages/admin/users/user-edit/UserEditScreen';
import ProductListScreen from '../pages/admin/products/product-list/ProductListScreen';
import ProductCreateScreen from '../pages/admin/products/product-create/ProductCreateScreen';
import ProductEditScreen from '../pages/admin/products/product-edit/ProductEditScreen';
import OrderListScreen from '../pages/admin/orders/order-list/OrderListScreen';

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
      <Route exact path="/checkout-process" component={CheckoutProcessScreen} />
      <Route exact path="/myorders" component={MyOrdersScreen} />
      <Route exact path="/order/:orderId" component={OrderScreen} />

      <Route exact path="/admin/userlist" component={UserListScreen} />
      <Route exact path="/admin/:userId/edit" component={UserEditScreen} />

      <Route exact path="/admin/productlist" component={ProductListScreen} />
      <Route exact path="/admin/orderlist" component={OrderListScreen} />

      <Route exact path="/admin/products" component={ProductCreateScreen} />
      <Route
        exact
        path="/admin/products/:productId/edit"
        component={ProductEditScreen}
      />

      <Redirect to="/" />
    </Switch>
  );
};

export default Routes;

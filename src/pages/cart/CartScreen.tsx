// React
import React, { useEffect } from 'react';

// Redux
import { useDispatch, useSelector } from 'react-redux';

// Redux - Actions
import { addToCart } from '../../actions/cart';

// Redux - Slices
import { selectCartItems, selectError, selectLoading } from '../../slices/cart';

// React Router
import { useLocation, useParams } from 'react-router';

// Styles
import { CartScreenStyled } from './Styles';

// Components
import CartList from '../../components/cart/cart-list/CartList';

interface Props {}

const CartScreen: React.FC<Props> = () => {
  // Dispatch
  const dispatch = useDispatch();

  // Selector
  const productList = useSelector(selectCartItems);
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);

  const { productID } = useParams() as { productID: string };
  const location = useLocation();

  const qty = location.search ? Number(location.search.split('=')[1]) : 1;

  useEffect(() => {
    if (productID) {
      dispatch(addToCart(productID, qty));
    }
  }, [dispatch, productID, qty]);

  return (
    <CartScreenStyled>
      <h2>Shopping cart</h2>

      <CartList />
      {/* <CartSubTotal /> */}
    </CartScreenStyled>
  );
};

export default CartScreen;

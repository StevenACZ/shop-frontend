// React
import React, { useEffect } from 'react';

// Redux
import { useDispatch } from 'react-redux';

// Redux - Actions
import { addToCart } from '../../actions/cart';

// React Router
import { useLocation, useParams } from 'react-router';

interface Props {}

const CartScreen: React.FC<Props> = () => {
  const dispatch = useDispatch();

  const { productID } = useParams() as { productID: string };
  const location = useLocation();

  const qty = location.search ? Number(location.search.split('=')[1]) : 1;

  useEffect(() => {
    if (productID) {
      dispatch(addToCart(productID, qty));
    }
  }, [dispatch, productID, qty]);

  return <div>CartScreen</div>;
};

export default CartScreen;

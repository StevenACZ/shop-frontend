// React
import React, { useEffect } from 'react';

// Redux
import { useDispatch, useSelector } from 'react-redux';

// Redux - Actions
import { addToCart } from '../../actions/cart';

// Redux - Slices
import { selectCartItems } from '../../slices/cart';

// React Router
import { useHistory, useLocation, useParams } from 'react-router';

// Styles
import { CartScreenStyled, Left, Right } from './Styles';

// Antd Components
import { Alert, Button } from 'antd';

// Components
import CartList from '../../components/cart/cart-list/CartList';
import CartSubtotal from '../../components/cart/cart-subtotal/CartSubtotal';

interface Props {}

const CartScreen: React.FC<Props> = () => {
  // History
  const history = useHistory();

  // Dispatch
  const dispatch = useDispatch();

  // Location
  const location = useLocation();

  // Selector
  const productList = useSelector(selectCartItems);

  const { productID } = useParams() as { productID: string };

  const qty = location.search ? Number(location.search.split('=')[1]) : 1;

  useEffect(() => {
    if (productID) {
      dispatch(addToCart(productID, qty));
    }
  }, [dispatch, productID, qty]);

  const getQuantityItems = () =>
    productList.reduce((acc, item: any) => acc + item.qty, 0);

  const getTotalAmount = () =>
    productList.reduce((acc, item: any) => acc + item.price * item.qty, 0);

  return (
    <CartScreenStyled>
      <Left>
        <h2>Shopping cart</h2>

        {getQuantityItems() === 0 ? (
          <Alert
            message="Your cart is empty"
            type="error"
            showIcon
            banner
            action={
              <Button
                size="small"
                type="primary"
                onClick={() => history.push('/')}
              >
                Go Home
              </Button>
            }
          />
        ) : (
          <CartList productList={productList} />
        )}
      </Left>

      <Right>
        <CartSubtotal
          quantityItems={getQuantityItems()}
          totalAmount={getTotalAmount()}
        />
      </Right>
    </CartScreenStyled>
  );
};

export default CartScreen;

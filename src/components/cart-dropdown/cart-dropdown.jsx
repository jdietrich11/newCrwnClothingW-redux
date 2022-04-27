import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { selectCartItems } from '../../store/cart/cart.selector';
import Button from '../button/button';
import CartItem from '../cart-item/cart-item';

import './cart-dropdown.scss';

const CartDropdown = () => {
  const cartItems = useSelector(selectCartItems);
  const navigate = useNavigate();

  const goToCheckoutHandler = () => {
    navigate('/checkout');
  };

  return (
    <div className='cart-dropdown-container'>
      <div className='cart-items'>
        {cartItems.length ? (
          cartItems.map((item) => <CartItem key={item.id} cartItem={item} />)
        ) : (
          <div classname='EmptyMessage'>Your cart is empty</div>
        )}
      </div>
      <Button onClick={goToCheckoutHandler}>GO TO CHECKOUT</Button>
    </div>
  );
};

export default CartDropdown;

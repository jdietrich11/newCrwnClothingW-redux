import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

import CartIcon from '../../components/cart-icon/cart-icon';
import CartDropdown from '../../components/cart-dropdown/cart-dropdown';

import { CartContext } from '../../context/cart.context';
import { selectCurrentUser } from '../../store/user/user.selector';

import { ReactComponent as CrwnLogo } from '../../assets/crown.svg';

import './header.scss';
import { signOutUser } from '../../utils/firebase/firebase.utils';

const Header = () => {
  const currentUser = useSelector(selectCurrentUser);
  const { isCartOpen } = useContext(CartContext);

  return (
    <div className='navigation'>
      <Link className='logo-container' to='/'>
        <CrwnLogo className='logo' />
      </Link>
      <div className='nav-links-container'>
        <Link className='nav-link' to='/shop'>
          SHOP
        </Link>
        {currentUser ? (
          <span onClick={signOutUser} className='nav-link'>
            SIGN-OUT
          </span>
        ) : (
          <Link className='nav-link' to='/auth'>
            SIGN-IN
          </Link>
        )}
        <CartIcon />
      </div>
      {isCartOpen && <CartDropdown />}
    </div>
  );
};

export default Header;

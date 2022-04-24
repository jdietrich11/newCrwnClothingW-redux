import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

import { UserContext } from '../../components/user.context/user.context';

import { ReactComponent as CrwnLogo } from '../../assets/crown.svg';

import './header.scss';
import { signOutUser } from '../../utils/firebase/firebase.utils';

const Header = () => {
  const { currentUser } = useContext(UserContext);

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
      </div>
    </div>
  );
};

export default Header;

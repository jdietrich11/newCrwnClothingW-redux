import React, { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import {
  onAuthStateChangedListener,
  createUserDocumentFromAuth,
} from '../../utils/firebase/firebase.utils';
import Header from '../../routes/header/header';
import Home from '../../routes/home/home';
import Authentication from '../../routes/authentication/authentication';
import Shop from '../../routes/shop/shop';
import Checkout from '../../routes/checkout/checkout';
import { setCurrentUser } from '../../store/user/user.action';

import './app.styles.scss';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = onAuthStateChangedListener((user) => {
      if (user) {
        createUserDocumentFromAuth(user);
      }
      dispatch(setCurrentUser(user));
    });

    return unsubscribe;
  }, [dispatch]);

  return (
    <div>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/shop/*' element={<Shop />} />
        <Route path='/auth' element={<Authentication />} />
        <Route path='/checkout' element={<Checkout />} />
      </Routes>
    </div>
  );
};

export default App;

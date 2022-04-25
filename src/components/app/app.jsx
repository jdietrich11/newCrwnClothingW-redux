import React from 'react';
import { Route, Routes } from 'react-router-dom';

import Header from '../../routes/header/header';
import Home from '../../routes/home/home';
import Authentication from '../../routes/authentication/authentication';
import Shop from '../../routes/shop/shop';
import Checkout from '../../routes/checkout/checkout';

import './app.styles.scss';

const App = () => {
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

import React from "react";
import { Route, Routes } from "react-router-dom";

import Header from "../../routes/header/header";
import Home from "../../routes/home/home";
import SignIn from "../../routes/sign-in/sign-in";

import "./app.styles.scss";

const App = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sign-in" element={<SignIn />} />
      </Routes>
    </div>
  );
};

export default App;

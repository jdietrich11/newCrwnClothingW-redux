import React from "react";
import { Route, Routes } from "react-router-dom";

import Header from "../../routes/header/header";
import Home from "../../routes/home/home";
import Authentication from "../../routes/authentication/authentication";

import "./app.styles.scss";

const App = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/auth" element={<Authentication />} />
      </Routes>
    </div>
  );
};

export default App;

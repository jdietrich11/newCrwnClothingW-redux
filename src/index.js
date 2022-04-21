import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import App from "./components/app/app";
import { UserProvider } from "./components/user.context/user.context";

import "./index.scss";

const root = ReactDOM.createRoot(document.querySelector("#root"));

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <UserProvider>
        <App />
      </UserProvider>
    </BrowserRouter>
  </React.StrictMode>
);

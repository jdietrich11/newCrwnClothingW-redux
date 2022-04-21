import React from "react";

import SignInForm from "../../components/sign-in/sing-in";
import SignUpForm from "../../components/sign-up/sign-up";

import "./auth.scss";

const Authentication = () => {
  return (
    <div className="authentication-container">
      <SignInForm />
      <SignUpForm />
    </div>
  );
};

export default Authentication;

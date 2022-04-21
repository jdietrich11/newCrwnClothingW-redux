import React from "react";

import SignInForm from "../../components/sign-in/sing-in";
import SignUpForm from "../../components/sign-up/sign-up";

const Authentication = () => {
  return (
    <div>
      <h1>Sign in page</h1>
      <SignInForm />
      <SignUpForm />
    </div>
  );
};

export default Authentication;

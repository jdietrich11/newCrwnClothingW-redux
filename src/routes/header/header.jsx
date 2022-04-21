import React, { useContext } from "react";
import { Link } from "react-router-dom";

import { UserContext } from "../../components/user.context/user.context";
import { signOutUser } from "../../utils/firebase/firebase.utils";

import { ReactComponent as CrwnLogo } from "../../assets/crown.svg";

import "./header.scss";

const Header = () => {
  const { currentUser, setCurrentUser } = useContext(UserContext);

  const signOutHandler = async () => {
    await signOutUser();
    setCurrentUser(null);
  };

  return (
    <div className="navigation">
      <Link className="logo-container" to="/">
        <CrwnLogo className="logo" />
      </Link>
      <div className="nav-links-container">
        <Link className="nav-link" to="/shop">
          SHOP
        </Link>
        {currentUser ? (
          <span onClick={signOutHandler} className="nav-link">
            SIGN-OUT
          </span>
        ) : (
          <Link className="nav-link" to="/auth">
            SIGN-IN
          </Link>
        )}
      </div>
    </div>
  );
};

export default Header;

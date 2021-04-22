import React, { useContext, useState } from "react";

import { StoreContext } from "../../store/StoreProvider";
import LoginForm from "../LoginFrom/LoginForm";

const Header = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { user, setUser } = useContext(StoreContext);

  const handleOnClose = () => setIsModalOpen(false);

  const handleOnClick = () => {
    if (Boolean(user)) {
      setUser(null);
    } else {
      setIsModalOpen(true);
    }
  };

  const setProperlyLabel = Boolean(user) ? "Log out" : "Sign In";

  return (
    <header className="header">
      <div className="header__logo-wrapper" />
      <h1 className="header__title">Great courses for developers</h1>
      <button className="header__button" onClick={handleOnClick}>
        {" "}
        {setProperlyLabel}
      </button>
      <LoginForm handleOnClose={handleOnClose} isModalOpen={isModalOpen} />
    </header>
  );
};

export default Header;

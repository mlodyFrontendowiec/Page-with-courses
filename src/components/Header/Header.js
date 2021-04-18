import React, { useContext } from "react";
import block from "bem-css-modules";

import { StoreContext } from "../../store/StoreProvider";

import "../css/style.css";

const Header = () => {
  const { user, setUser } = useContext(StoreContext);

  const setProperlyLabel = Boolean(user) ? "Wyloguj się" : "Zaloguj się";

  return (
    <header className="header">
      <div className="header__logo-wrapper" />
      <h1 className="header__title">Super kursy dla programistów</h1>
      <button> {setProperlyLabel}</button>
    </header>
  );
};

export default Header;

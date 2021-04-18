import React, { useContext } from "react";
import StoreProvider, { StoreContext } from "./store/StoreProvider";
import Header from "./components/Header/Header";
import "./css/style.css";
import { HashRouter as Router } from "react-router-dom";
import AsideMenu from "./components/AsideMenu/AsideMenu";

function App() {
  const context = useContext(StoreContext);

  return (
    <StoreProvider>
      <Header />
      <Router>
        <div className="content-wrapper">
          <AsideMenu />
        </div>
      </Router>
    </StoreProvider>
  );
}

export default App;

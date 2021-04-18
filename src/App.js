import React, { useContext } from "react";
import StoreProvider, { StoreContext } from "./store/StoreProvider";
import "./css/style.css";
import Header from "./components/Header";

function App() {
  const context = useContext(StoreContext);

  return (
    <StoreProvider>
      <Header />
    </StoreProvider>
  );
}

export default App;

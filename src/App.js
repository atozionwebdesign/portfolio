/* Styles */
import "./App.css";
import { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";

import ScrollToTop from "./components/sub-components/ScrollToTop";

function App() {

  useEffect(() => {}, []);

  return (
    <div className="App">
      <ScrollToTop />
      <Outlet />
    </div>
  );
}

export default App;

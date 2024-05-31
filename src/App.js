import React, { useState } from "react";
import "./App.css";
import "./Style/Title.css";
import "./Style/Sidebar.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Sidebar from "./Components/Sidebar";
import Card from "./Components/Card";
import ScrollTopButton from "./Components/ScrollTopButton";
import Home from "./Home";
import Login from "./Login"

function App() {
  const handleLogin = (password) => {
    console.log("Password submitted:", password);
    // Perform login actions here, such as API call or redirect
  };

  return (
    <div className="app">
      <Login onLogin={handleLogin} />
    </div>
  );
}

window.addEventListener("load", function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

const reload = () => {
  document.location.reload();
};

export default App;

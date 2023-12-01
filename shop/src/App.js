// App.js

import React, { useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import LoginPage from "./sites/Login";
import RegisterPage from "./sites/Register";
import GameAuswahlPage from "./sites/GameAuswahl";

import "./App.css";

function App() {
  const [currentPage, setCurrentPage] = useState("login"); // State für die aktuelle Seite

  const nextPage = (page) => {
    setCurrentPage(page); // Funktion zum Wechseln zur nächsten Seite
  };

  let pageComponent;

  if (currentPage === "login") {
    pageComponent = <LoginPage nextPage={nextPage} />;
  } else if (currentPage === "server-auswahl") {
    pageComponent = <GameAuswahlPage nextPage={nextPage} />;
  } else if (currentPage === "registrieren") {
    pageComponent = <RegisterPage />;
  }

  return (
    <Router>
      <div style={{ width: "100%" }}>
        <Header />
        <div>{pageComponent}</div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

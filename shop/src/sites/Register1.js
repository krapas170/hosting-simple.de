import React, { useState } from "react";
import "bootstrap";

function Register1() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const MainDivStyle = {
    background: "#4c4c4c",
    color: "white",
    borderRadius: "5%", // Erzeugt eine runde Form
    boxShadow: "0 0 10px rgba(0, 0, 0, 0.5)", // Schatten hinzufügen
    padding: "10px 20px",
    width: "300px", // Breite des Headers
    height: "auto",
    margin: "auto",
    textAlign: "center",
  };

  return (
    <div className="container mt-5" style={MainDivStyle}>
      <h2>Registrieren</h2>
      <form>
        <div className="form-group">
          <label htmlFor="email">Benutzername oder E-Mail:</label>
          <input
            type="text"
            className="form-control"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Passwort:</label>
          <input
            type="password"
            className="form-control"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Anmelden
        </button>
      </form>
      <p className="mt-3">
        Noch kein Konto?{" "}
        <button
          className="btn btn-link"
        >
          Registrieren
        </button>
      </p>
    </div>
  );
}

export default Register1;

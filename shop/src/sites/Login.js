import React, { useState } from "react";

function Login({ nextPage }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const MainDivStyle = {
    background: "#4c4c4c",
    color: "white",
    borderRadius: "5%", // Erzeugt eine runde Form
    boxShadow: "0 0 10px rgba(0, 0, 0, 0.5)", // Schatten hinzufügen
    padding: "0px 20px 5px 20px",
    width: "300px", // Breite des Headers
    height: "auto",
    marginTop: "auto",
    margin: "auto",
    textAlign: "center",
  };
  const inputStyle = {
    backgroundColor: "#f3f3f3",
    width: "80%",
    height: "30px",
    padding: "4px 6px",
    margin: "10px",
    fontSize: "14px",
    lineHeight: "1.42857143",
    color: "#333333",
    verticalAlign: "middle",
    border: "1px solid #cccccc",
    borderRadius: "10px",
  };

  return (
    <div className="container mt-5" style={MainDivStyle}>
      <h1>Login</h1>
      <form onSubmit={() => nextPage("server-auswahl")}>
        <div className="form-group">
          <label htmlFor="email" style={{ fontWeight: "bold" }}>Benutzername oder E-Mail:</label>
          <input
            type="text"
            className="form-control"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={inputStyle}
          />
        </div>
        <div className="form-group" style={{ marginTop: "10px" }}>
        <label htmlFor="password" style={{ fontWeight: "bold" }}>Passwort:</label>
          <input
            type="password"
            className="form-control"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={inputStyle}
          />
        </div>
        <button type="submit" className="btn btn-primary" style={{ marginTop: "10px" }}>
          Anmelden
        </button>
      </form>
      <p className="mt-3">
        Noch kein Konto?{" "}
        <button
          onClick={() => nextPage("registrieren")}
          className="btn btn-link"
          style={{ marginTop: "20px" }}
        >
          Registrieren
        </button>
      </p>
    </div>
  );
}

export default Login;

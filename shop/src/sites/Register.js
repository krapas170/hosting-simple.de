import React, { useState } from "react";

function Registrieren({ nextPage }) {
  const [username, setUsername] = useState("");
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
      <h1>Registrieren</h1>
      <form onSubmit={() => nextPage("Login2")}>
        <div className="form-group">
          <label htmlFor="username" style={{ fontWeight: "bold" }}>
            Benutzername
          </label>
          <input
            type="text"
            className="form-control"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            style={inputStyle}
          />
        </div>
        <div className="form-group" style={{ marginTop: "10px" }}>
          <label htmlFor="email" style={{ fontWeight: "bold" }}>
            E-Mail Adresse
          </label>
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
          <label htmlFor="password" style={{ fontWeight: "bold" }}>
            Passwort:
          </label>
          <input
            type="password"
            className="form-control"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={inputStyle}
          />
        </div>
        <button
          type="submit"
          className="btn btn-primary"
          style={{ marginTop: "10px", marginBottom: "20px"}}
        >
          Registrieren
        </button>
      </form>
    </div>
  );
}

export default Registrieren;

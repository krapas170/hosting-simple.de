import React, { useState } from "react";
import { Link } from "react-router-dom";

function Login({ nextPage }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div>
      <div className="bodyTab">
        <h2>Login</h2>
        <form onSubmit={() => nextPage("server-auswahl")}>
          <label>
            Benutzername oder E-Mail:
            <input
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </label>
          <br />
          <label>
            Passwort:
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </label>
          <br />
          <button type="submit">Anmelden</button> {/* Button-Anmelden */}
        </form>
        <p>
          Noch kein Konto?{" "}
          <button onClick={() => nextPage("registrieren")}>Registrieren</button>{" "}
          {/* Button-Registrieren */}
        </p>
      </div>
    </div>
  );
}

export default Login;

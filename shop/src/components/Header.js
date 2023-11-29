import React from "react";
import { Link } from "react-router-dom";
import logo from "../logo.png";

function Header() {
  const shopStyle = {
    fontSize: "24px", // Große Schriftgröße für "Shop"
  };
  const headerStyle = {
    background: "#01112B",
    color: "white",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "10px 20px",
    height: "auto",
  };

  const siteLogoStyle = {
    height: "100px", // Höhe des Headers
    width: "100px", // Breite des Headers
    borderRadius: "50%", // Erzeugt eine runde Form
    boxShadow: "0 0 10px rgba(0, 0, 0, 0.5)", // Schatten hinzufügen
  };
  const userInfoStyle = {
    background: "#01112B",
    color: "white",
    padding: "10px 20px",
    width: "100px", // Breite des Headers
  };

  return (
    <div className="centeredContent" id="barTop" style={headerStyle}>
      <div style={shopStyle}>Shop</div>
      <div id="siteLogo">
        <Link to="/">
          <img src={logo} alt="Logo" style={siteLogoStyle} />
        </Link>
      </div>
      <div id="userInfo" style={userInfoStyle}>
        Angemeldet als: Profilname
        {/* Hier können Sie Informationen zur angemeldeten Benutzer anzeigen */}
      </div>
    </div>
  );
}

export default Header;

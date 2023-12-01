import React from "react";
import { Link } from "react-router-dom";
import logo from "../logo.png";

function Header() {
  const shopStyle = {
    flex: "0 0 33%",
    fontSize: "24px",
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
  const siteLogoStyle1 = {
    flex: "0 0 33%",
    textAlign: "center",
  };
  const siteLogoStyle2 = {
    height: "100px",
    width: "100px",
    borderRadius: "50%",
    boxShadow: "0 0 10px rgba(0, 0, 0, 0.5)",
    display: "inline-block",
  };
  const userInfoStyle = {
    flex: "0 0 32%",
    alignItems: "right",
    background: "#01112B",
    color: "white",
    padding: "10px 20px",
    textAlign: "right",
  };

  return (
    <div className="centeredContent" id="barTop" style={headerStyle}>
      <div style={shopStyle}>
        <div>Shop</div>
      </div>
      <div id="siteLogo" style={siteLogoStyle1}>
        <Link to="/">
          <img src={logo} alt="Logo" style={siteLogoStyle2} />
        </Link>
      </div>
      <div id="userInfo" style={userInfoStyle}>
        Profilname
        {/* Hier können Sie Informationen zur angemeldeten Benutzer anzeigen */}
      </div>
    </div>
  );
}

export default Header;

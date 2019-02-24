import React from "react";

import "components/Toolbar/Toolbar.css";
import Menu from "components/Toolbar/Menu/Menu";

const Toolbar = () => (
  <header className="navbar">
    <div className="toolbar-logo">
      <a className="logo" href="https://www.telia.fi/">
        <img
          src="https://upload.wikimedia.org/wikipedia/fi/thumb/2/23/Telia_logo.svg/1200px-Telia_logo.svg.png"
          width="108"
          height="43"
          alt="telia-logo"
        />
      </a>
    </div>
    <a style={{ float: "right", padding: "25px 0" }} href="Cart">
      <i className="fas fa-cart-plus" />
    </a>
    <a
      style={{
        float: "right",
        padding: "25px 0",
        marginLeft: "38px",
        display: "flex"
      }}
      href="User"
    >
      <i className="fas fa-user" />
      <div className="login" style={{ marginLeft: "5px", fontWeight: "700" }}>
        Login
      </div>
    </a>

    <Menu />
  </header>
);

export default Toolbar;

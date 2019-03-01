import React from "react";

import "components/Dropdowns/Dropdowns.css";
import Search from "components/Dropdowns/Search/Search";
import Logo from "assets/liiga-logo.png";

const Dropdowns = () => (
  <div className="rows">
    <div className="row1">
      <div className="column column-2">
        <a href="/">
          <i className="fas fa-map-marker-alt black-fa" />
          Etsi kauppa
        </a>
        <a href="/">
          <i className="fas fa-question-circle black-fa" />
          Etsi ohjeita
        </a>
        <a href="/">
          <i className="fas fa-users black-fa" />
          Kysy Yhteisöltä
        </a>
        <a href="/">
          <i className="fas fa-phone black-fa" />
          Ota yhteyttä
        </a>
      </div>
      <div className="column column-1 ">
        <Search />
      </div>
    </div>
    <div className="row2">
      <a href="/">
        <i className="fas fa-mobile-alt" />
        <div className="row2-nav">Laitteet</div>
      </a>
      <a href="/">
        <i className="fas fa-sim-card" />
        <div className="row2-nav">Liittymät</div>
      </a>
      <a href="/">
        <i className="fas fa-wifi" />
        <div className="row2-nav">Laajakaistat</div>
      </a>
      <a href="/">
        <i
          className="fas fa-circle"
          style={{
            height: "64px",
            width: "64px",
            fontSize: "64px",
            color: "#990ae3"
          }}
        />
        <div className="row2-nav">
          Dot
          <span className="nav-description">
            Laita piste perinteisille liittymille.
          </span>
        </div>
      </a>
      <a href="/">
        <i className="fab fa-youtube" />
        <div className="row2-nav">TV ja viihde</div>
      </a>
      <a href="/">
        <i className="fas fa-poll-h" />
        <div className="row2-nav">Palvelut</div>
      </a>
      <a href="/">
        <i className="fas fa-shopping-bag" />
        <div className="row2-nav">Tarjoukset</div>
      </a>
      <a href="/">
        <img src={Logo} alt="liiga-logo" height="64px" />
        <div className="row2-nav">
          Liiga
          <span className="nav-description">Telia on Liigan ussi koti.</span>
        </div>
      </a>
    </div>
  </div>
);

export default Dropdowns;

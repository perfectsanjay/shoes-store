import React from "react";
import "./NavBar.style.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faMagnifyingGlass,
  faUser,
  faBagShopping,
} from "@fortawesome/free-solid-svg-icons";

const NavBar = () => {
  return (
    <nav className="nav-bar-container">
      <div className="menu1">
        <div className="menu-bar">
          <button className="menu-button">
            <FontAwesomeIcon icon={faBars} />
          </button>
          </div>
        </div>
        <div className="brand">
          <h1 className="brand-name">Joota Dukaan</h1>
        </div>
      
      <div className="menu2">
        <div className="search">
          <button className="search-button">
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          </button>
        </div>
        <div className="profile">
          <button className="profile-button">
            <FontAwesomeIcon icon={faUser} />
          </button>
        </div>
        <div className="cart">
          <button className="cart-button">
            <FontAwesomeIcon icon={faBagShopping} />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;

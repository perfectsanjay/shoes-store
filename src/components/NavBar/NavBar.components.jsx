import React, { useState } from "react";
import "./NavBar.style.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import Cart_icon from "../cart-icon/cart-icon.component";

import {
  faBars,
  faMagnifyingGlass,
  faUser,
  faBagShopping,
} from "@fortawesome/free-solid-svg-icons";
import SlidingMenu from "../slidingMenu/SlidingMenu.component";
import Search from "../Search/Search.component";
import CartDropDown from "../cart-dropdown/cart-dropdown.component";
import { useDispatch } from "react-redux";
import { toggle_cart_hidden } from "../../redux/cart/action";


const NavBar = () => {
  const [isOpenMenu, setIsOpenMenu] = useState(false)
  const [isOpenSearch, setisOpenSearch] = useState(false)
  const dispatch = useDispatch()

  const toggleSearch = () => {
    setisOpenSearch((prevState) => !prevState)
  }

  const toggleMenu = () =>{
    setIsOpenMenu((prevState) => !prevState)
  }
  
  return (
    <>
    <nav className="nav-bar-container">
      <div className="menu1">
        <div className="menu-bar">
          <button className="menu-button" onClick={toggleMenu}>
            <FontAwesomeIcon icon={faBars} />
          </button>
          </div>
        </div>
        <div className="brand">
          <Link className="brand-joota"  to="/"><h1 className="brand-name">Joota Dukaan</h1></Link>
          
        </div>
      
      <div className="menu2">
        <div className="search">
          <button className="search-button" onClick={toggleSearch}>
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          </button>
        </div>
        <div className="profile">
          <button className="profile-button">
            <FontAwesomeIcon icon={faUser} />
          </button>
        </div>
        <div className="cart">
          
          <button className="cart-button" onClick={()=>dispatch(toggle_cart_hidden())}>
            <FontAwesomeIcon icon={faBagShopping} />
            <Cart_icon/>
          </button>
          
          
        </div>
        <CartDropDown/>
      </div>
      
    </nav>
   {isOpenMenu&&<SlidingMenu isOpen={isOpenMenu} toggleMenu = {toggleMenu}/>}
   {isOpenSearch&&<Search isOpen={isOpenSearch} toggleSearch={toggleSearch}/>}
    </>
  );
};

export default NavBar;

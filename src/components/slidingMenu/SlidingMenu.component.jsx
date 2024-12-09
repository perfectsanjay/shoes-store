import React from "react";
import { Link } from "react-router-dom";
import "./SlidingMenu.style.scss";


const SlidingMenu = ({isOpen,toggleMenu}) => {
    return(
        
            <div className = {`sliding-menu ${isOpen? "open": ""}`}>
                <ul>
                    <li><Link to="/shop/mens" onClick={toggleMenu}>Men's</Link></li>
                    <li><Link to="/shop/women" onClick={toggleMenu}>Women's</Link></li>
                    <li><Link to="/shop/kids" onClick={toggleMenu}>Kid's</Link></li>
                </ul>
                  <button className="close-menu" onClick={toggleMenu}>X</button>
                  <Link to="/"><img className="brand-logo-menu" src="/White and Black Simple Shoes Store Logo.png" alt="brandlogo" /></Link>
            </div>
            
            
        
    )
}
export default SlidingMenu;